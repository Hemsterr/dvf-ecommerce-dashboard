// Scroll to top the screen
export const scrollToTop = () => {
  window.scrollTo(0, 0)
}

/**
 * Get Window Dimensions
 */
export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

/**
 * Encode email
 * @param {String} email
 */
export const encodeEmail = (email = '') => {
  const encodeEmail = email.toLowerCase()
  return encodeURIComponent(encodeEmail)
}
