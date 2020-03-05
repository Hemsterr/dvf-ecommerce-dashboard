// Constants
import REGEXS from '../constants/regexs'
import ERROR_MESSAGES from '../constants/errorMessages'

/**
 * Function: isValidEmail
 * Used to check the email has typed is have correct format or not.
 * @param {string} str: email need to validate
 * @return {boolean} true if email is valid
 */
export const isValidEmail = str => {
  const regex = REGEXS.EMAIL

  return regex.test(str)
}

/**
 * Function: isValidZipCode
 * Used to check the zip-code has typed is have correct format or not.
 * @param {string} str: zip-code need to validate
 * @return {boolean} true if zip-code is valid
 */
export const isValidZipCode = str => {
  const regex = REGEXS.ZIP_CODE

  return regex.test(str)
}

/**
 * Validate input string is valid number or not
 */
export const validateNumber = value => REGEXS.NUMBER.test(value)

/**
 * Validate input required fields due to validation key
 * @param {object} fields
 * @returns errorMessage object which contains key and error message
 */
export const validator = fields => {
  const errorMessage = {}

  Object.keys(fields).forEach(key => {
    let errMsg = ''
    const field = fields[key]
    const { value, conditions } = field
    const validationType = field.validation

    for (let i = 0, typeLength = validationType.length; i < typeLength; i++) {
      const item = validationType[i]

      switch (item) {
        case 'required':
          // Check if input allows 0
          if (!(conditions && value === 0 && conditions.min === 0)) {
            errMsg = !value && ERROR_MESSAGES.REQUIRED_FIELD
          }
          break

        case 'email_format':
          if (!isValidEmail(value)) {
            errMsg = ERROR_MESSAGES.EMAIL_FORMAT
          }
          break

        case 'zipCode_format':
          if (!isValidZipCode(value)) {
            errMsg = ERROR_MESSAGES.INVALID_ZIPCODE_FORMAT
          }
          break

        case 'number_format':
          if (!validateNumber(value)) {
            errMsg = ERROR_MESSAGES.INVALID_ORDER_NUMBER
          }
          break

        default:
          break
      }

      if (errMsg) {
        errorMessage[key] = errMsg
        break
      }
    }
  })
  return errorMessage
}
