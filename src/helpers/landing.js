// helpers
import { validator } from './validators'
import { getCustomer } from './apis'
import LocalStorage from './localStorage'

import ROUTES from '../constants/routes'

const localStorage = new LocalStorage()

/**
 * Validate user info when sign in
 * @param {Object} data
 */
export const orderNumberValidation = (data = {}) => {
  const validation = {
    orderNumber: {
      value: data.orderNumber,
      validation: ['required', 'number_format'],
    },
    email: {
      value: data.email,
      validation: ['required', 'email_format'],
    },
  }

  return validator(validation)
}

export const formatCustomerOrder = orders => orders.map(item => ({
  id: item.id,
  garmentName: item.fields['Garment_Name'],
  garmentType: item.fields['Garment_Type'],
  imageUrl: item.fields['Garment_image_link'],
  phone: item.fields['Customer_Phone_Number'],
  email: item.fields['Email_Address'],
  name: item.fields['Name'],
  address1: item.fields['Street'],
  city: item.fields['City'],
  state: item.fields['State'],
  zipCode: item.fields['Zip'],
}))
/**
 * Handle get customer order
 * @param {Object} data
 * @param {Function} setIsProcessing
 * @param {Function} setError
 * @param {Function} dispatch
 * @param {Object} Types
 * @param {Object} history
 */
export const handleGetCustomerOrder = async (
  data = {},
  setIsProcessing,
  setError,
  history
) => {
  setIsProcessing(true)

  // Check exist customer
  const customer = await getCustomer(data)

  setIsProcessing(false)
  if (customer.ok && customer.data.records.length) {
    const customerOrders = customer.data.records

    let orders = customerOrders.filter(
      item => item.fields['Email_Address'] === data.email
    )
    if (orders.length) {
      orders = formatCustomerOrder(orders)
      localStorage.updateUser({ orders })
      history.push(ROUTES.FITTING_OPTIONS)
    } else {
      setError({ emailNotFound: 'Email does not match order #' })
    }
  } else {
    setError({ orderNotFound: 'order # not found' })
  }
}
