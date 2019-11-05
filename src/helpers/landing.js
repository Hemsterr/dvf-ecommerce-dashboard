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
      validation: ['required'],
    },
  }

  return validator(validation)
}

export default orderNumberValidation
