// helpers
import { validator } from './validators'
import { getGarments } from './apis'
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
