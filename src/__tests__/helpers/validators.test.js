// Helpers
import { isValidEmail, isValidZipCode } from '../../helpers/validators'

describe('Validators', () => {
  it('should validation email', () => {
    expect(isValidEmail('testing')).toBeFalsy()

    expect(isValidEmail('join@gmail.com')).toBeTruthy()
  })

  it('should validation zipcode', () => {
    expect(isValidZipCode('testing')).toBeFalsy()
    expect(isValidZipCode('12345')).toBeTruthy()
  })
})
