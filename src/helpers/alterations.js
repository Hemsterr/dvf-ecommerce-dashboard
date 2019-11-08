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
