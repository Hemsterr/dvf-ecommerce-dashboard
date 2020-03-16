// helpers
import { validator } from './validators'

/**
 * Validate user info when generate shipping label
 * @param {Object} data
 */
export const shippingAddressValidation = (data = {}) => {
  const validation = {
    email: {
      value: data.orderNumber,
      validation: ['required', 'email_format'],
    },
    name: {
      value: data.email,
      validation: ['required'],
    },
    address1: {
      value: data.email,
      validation: ['required'],
    },
    city: {
      value: data.email,
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
