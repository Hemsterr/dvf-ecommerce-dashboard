// Libs
import { create } from 'apisauce'
import { encodeEmail } from './utilities'

// Define routers
export const ROUTERS = {
  CUSTOMERS: query => `/DVF%20Order%20Feed?filterByFormula=${query}`,
  ORDERS: (query, sort, offset) => `/Orders?filterByFormula=${query}${sort}&pageSize=10&offset=${offset}`,
  PRODUCTS: query => `/Products?filterByFormula=${query}`,
}

// Create base URL
export const API = create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
})

// Create base URL
export const DVF_API = create({
  baseURL: process.env.REACT_APP_DVF_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DVF_API_KEY}`,
  },
})

/**
 * Call api get customer
 * @param {string} email
 */
export const getCustomer = (data = {}) => {
  const filterByFormula = `{Order_Number}=${data.orderNumber}`

  // Handle get customer
  return DVF_API.get(ROUTERS.CUSTOMERS(filterByFormula))
}

/**
 * Handle get garments
 * @param {string} id
 * @param {Object} data
 */
export const getGarments = (type = '') => {
  const filterByFormula = `{DVF+Garment+Type}='${type}'`

  // Handle get customer
  return API.get(ROUTERS.PRODUCTS(filterByFormula))
}

/**
 * Handle create new customer
 * @param {Object} data
 */
export const createCustomer = async data => {
  await API.post('/Customers', { fields: data })
}

/**
 * Call api check exist customer
 * @param {string} email
 * @param {string} id
 */
export const existCustomer = (email = '', id) => {
  // Update encode for email
  const encodeData = encodeEmail(email)
  const filterByFormula = id
    ? `AND(LOWER({Email}) = '${encodeData}', RECORD_ID() != '${id}')`
    : `(LOWER({Email}) = '${encodeData}')`

  // Handle get customer
  return API.get(ROUTERS.CUSTOMERS(filterByFormula))
}
