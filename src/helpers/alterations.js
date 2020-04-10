import moment from 'moment'

// helpers
import { validator } from './validators'
import {
  getGarments,
  existCustomer,
  createCustomer,
  createShippingOrder,
  createOrderAlterations,
} from './apis'
import TYPES from '../actionTypes'

/**
 * Validate user info when generate shipping label
 * @param {Object} data
 */
export const shippingAddressValidation = (data = {}) => {
  const validation = {
    email: {
      value: data.email,
      validation: ['required', 'email_format'],
    },
    name: {
      value: data.name,
      validation: ['required'],
    },
    address1: {
      value: data.address1,
      validation: ['required'],
    },
    city: {
      value: data.city,
      validation: ['required'],
    },
    state: {
      value: data.state,
      validation: ['required'],
    },
    zipCode: {
      value: data.zipCode,
      validation: ['required', 'zipCode_format'],
    },
  }

  return validator(validation)
}

/**
 * Handle update alterations data
 * @param {Array} alterations
 * @param {Object} data
 */
export const handleUpdateAlterations = (alterations = [], data = {}) => {
  const { garmentId, id } = data
  const garment = alterations.find(item => item.id === garmentId) || {}
  let alterationsGarment = garment.alterations || []
  alterationsGarment = alterationsGarment.map(item => (item.id === id ? { ...item, isChecked: !item.isChecked } : item)
  )
  const result = alterations.map(item => (item.id === garmentId ? { ...item, alterations: alterationsGarment } : item)
  )

  return result
}

/**
 * Get order price
 * @param {Array} garments
 */
export const getOrderPrice = (garments = []) => {
  let price = 0
  let count = 0
  const alterations = garments.reduce(
    (accumulator, item) => [...accumulator, ...item.alterations],
    []
  )
  for (let i = 0; i < alterations.length; i++) {
    if (alterations[i].isChecked) {
      price += alterations[i].price
      count += 1
    }
  }
  return { price, count }
}

export const formatAlterationsData = (alterations = []) => alterations.map(item => ({
  id: item.id,
  label: item.fields['Product Name'],
  isChecked: false,
  price: item.fields['Min Price'],
}))

/**
 * Handle get garments
 * @param {Object} data
 * @param {Function} setIsProcessing
 * @param {Function} setError
 * @param {Function} dispatch
 */
export const handleGetGarments = async (
  orders = {},
  setIsProcessing,
  setError,
  dispatch
) => {
  setIsProcessing(true)

  // Check exist customer
  dispatch({
    type: TYPES.HANDLE_GET_ORDER_REQUEST,
  })
  const garments = []
  let garment
  try {
    for (let i = 0; i < orders.length; i++) {
      garment = (await getGarments(orders[i].garmentType)) || []
      if (garment.ok && garment.data.records.length) {
        garments.push({
          ...orders[i],
          alterations: formatAlterationsData(garment.data.records),
        })
      }
    }
    setIsProcessing(false)
    dispatch({
      type: TYPES.HANDLE_GET_ORDER_SUCCESS,
      data: garments,
    })
  } catch (e) {
    setError(e)
    setIsProcessing(false)
    dispatch({
      type: TYPES.HANDLE_GET_ORDER_FAILED,
    })
  }
}

export const shippingData = customer => {
  const {
    isNYLocation, name, address1, city, state, zipCode, phone
  } = customer

  const data = {
    carrierCode: 'fedex',
    serviceCode: 'fedex_standard_overnight',
    packageCode: 'package',
    confirmation: 'none',
    shipDate: moment().format('MMMM DD YYYY'),
    weight: {
      value: 2,
      units: 'ounces',
    },
    dimensions: {
      units: 'inches',
      length: 1,
      width: 1,
      height: 1,
    },
    shipFrom: {
      name: 'Hemster Shipping',
      company: 'Hemster',
      street1: isNYLocation
        ? '361 Stagg St Suite 203'
        : '729 E 9th Pl, Unit 1A',
      street2: null,
      street3: null,
      city: isNYLocation ? 'Brooklyn' : 'Los Angeles',
      state: isNYLocation ? 'NY' : 'CA',
      postalCode: isNYLocation ? '11206-1734' : '90021',
      country: 'US',
      phone: '(415) 806-8079',
      residential: false,
    },
    shipTo: {
      name,
      company: name,
      street1: address1,
      street2: '',
      street3: null,
      city,
      state,
      postalCode: zipCode,
      country: 'US',
      phone,
      residential: false,
    },
    insuranceOptions: null,
    internationalOptions: null,
    advancedOptions: null,
    testLabel: false,
  }

  return data
}

/**
 * Create Orders
 * @param {Object} user
 * @param {Function} setIsProcessing
 * @param {Function} setError
 * @param {Function} dispatch
 */
export const createOrders = async (user = {}, setIsProcessing, setError) => {
  const { orders } = user
  const customerInfo = orders[0] || {}
  setIsProcessing(true)
  try {
    const customer = await existCustomer(customerInfo.email)

    // Create customer if not exist in Hemster data
    if (!customer) {
      const name = customerInfo.email.slip(' ') || []
      const fields = {
        'Email': customerInfo.email,
        'First Name': name[0],
        'Last Name': name[name.length - 1],
        'Customer Email': customerInfo.email,
        'Address Line 1': customerInfo.address1,
        'City': customerInfo.city,
        'State': customerInfo.state,
        'Zip Code': customerInfo.zipCode,
      }

      // Create customer
      await createCustomer(fields)
    }

    // Generate shipping label
    const shippingInfo = await createShippingOrder(shippingData(customerInfo))

    // Create order alteration
    await createOrderAlterations(shippingInfo)
  } catch (e) {
    setError(e)
  } finally {
    setIsProcessing(false)
  }
}
