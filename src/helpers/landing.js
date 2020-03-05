// helpers
import { validator } from './validators'

/**
 * Validate user info when sign in
 * @param {Object} data
 */
const orderNumberValidation = (data = {}) => {
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

export default orderNumberValidation
