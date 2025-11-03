/**
 * API Constants for fakestoreapi.com
 */

// API Endpoints
export const API_ENDPOINTS = {
  // Products
  PRODUCTS: '/products',
  PRODUCT_BY_ID: (id: number) => `/products/${id}`,
  PRODUCT_CATEGORIES: '/products/categories',
  PRODUCTS_BY_CATEGORY: (category: string) => `/products/category/${category}`,
  PRODUCTS_LIMIT: (limit: number) => `/products?limit=${limit}`,
  PRODUCTS_SORT: (sort: 'asc' | 'desc') => `/products?sort=${sort}`,

  // Carts
  CARTS: '/carts',
  CART_BY_ID: (id: number) => `/carts/${id}`,
  USER_CARTS: (userId: number) => `/carts/user/${userId}`,
  CARTS_LIMIT: (limit: number) => `/carts?limit=${limit}`,
  CARTS_SORT: (sort: 'asc' | 'desc') => `/carts?sort=${sort}`,
  CARTS_DATE_RANGE: (startDate: string, endDate: string) => 
    `/carts?startdate=${startDate}&enddate=${endDate}`,

  // Users
  USERS: '/users',
  USER_BY_ID: (id: number) => `/users/${id}`,
  USERS_LIMIT: (limit: number) => `/users?limit=${limit}`,
  USERS_SORT: (sort: 'asc' | 'desc') => `/users?sort=${sort}`,

  // Auth
  LOGIN: '/auth/login',
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// HTTP Methods
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

// Content Types
export const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM_URLENCODED: 'application/x-www-form-urlencoded',
  MULTIPART: 'multipart/form-data',
} as const;

// API Response Times (max acceptable in ms)
export const API_RESPONSE_TIMES = {
  FAST: 500,
  NORMAL: 1000,
  SLOW: 2000,
  VERY_SLOW: 5000,
} as const;

// Test Data
export const API_TEST_DATA = {
  VALID_USER_ID: 1,
  VALID_PRODUCT_ID: 1,
  VALID_CART_ID: 1,
  INVALID_ID: 999999,
  PRODUCTS_LIMIT: 5,
  CATEGORIES: ['electronics', 'jewelery', "men's clothing", "women's clothing"],
} as const;

// Error Messages
export const API_ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'username or password is incorrect',
  RESOURCE_NOT_FOUND: 'Resource not found',
  VALIDATION_ERROR: 'Validation error',
} as const;