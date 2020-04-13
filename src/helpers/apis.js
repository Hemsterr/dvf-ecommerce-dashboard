// Libs
import { create } from 'apisauce'
import { encodeEmail } from './utilities'

// Process env
const {
  REACT_APP_API_URL,
  REACT_APP_API_KEY,
  REACT_APP_DVF_API_URL,
  REACT_APP_DVF_API_KEY,
  REACT_APP_SHIPPING_URL,
  REACT_APP_SHIPPING_API_KEY,
} = process.env

// Define routers
export const ROUTERS = {
  CUSTOMERS: query => `/DVF%20Order%20Feed?filterByFormula=${query}`,
  ORDERS: (query, sort, offset) => `/Orders?filterByFormula=${query}${sort}&pageSize=10&offset=${offset}`,
  PRODUCTS: query => `/Products?filterByFormula=${query}`,
}

// Create base URL
export const API = create({
  baseURL: REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_API_KEY}`,
  },
})

// Create base URL
export const DVF_API = create({
  baseURL: REACT_APP_DVF_API_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_DVF_API_KEY}`,
  },
})

// Create hook url
export const SHIPPING_API = create({
  baseURL: REACT_APP_SHIPPING_URL,
  headers: {
    'Content-type': 'application/json',
    'Authorization': `Basic ${REACT_APP_SHIPPING_API_KEY}`,
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
export const existCustomer = (email = '') => {
  // Update encode for email
  const encodeData = encodeEmail(email)
  const filterByFormula = `(LOWER({Email}) = '${encodeData}')`

  // Handle get customer
  return API.get(ROUTERS.CUSTOMERS(filterByFormula))
}

export const createShippingOrder = data => {
  API.post('/Customers', data)
}

export const createOrderAlterations = () => {}
