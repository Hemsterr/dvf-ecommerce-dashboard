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
