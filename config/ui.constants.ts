/**
 * UI Constants for automationexercise.com
 */

// Page URLs (relative paths)
export const UI_ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PRODUCTS: '/products',
  CART: '/view_cart',
  CHECKOUT: '/checkout',
  PAYMENT: '/payment',
  CONTACT_US: '/contact_us',
  TEST_CASES: '/test_cases',
} as const;

// Page Titles
export const PAGE_TITLES = {
  HOME: 'Automation Exercise',
  LOGIN: 'Automation Exercise - Signup / Login',
  PRODUCTS: 'Automation Exercise - All Products',
  CART: 'Automation Exercise - Checkout',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  ACCOUNT_CREATED: 'Account Created!',
  ACCOUNT_DELETED: 'Account Deleted!',
  LOGIN_SUCCESS: 'Logged in as',
  SUBSCRIPTION_SUCCESS: 'You have been successfully subscribed!',
  MESSAGE_SENT: 'Success! Your details have been submitted successfully.',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Your email or password is incorrect!',
  EMAIL_EXISTS: 'Email Address already exist!',
  REQUIRED_FIELD: 'This field is required',
} as const;

// Test Data
export const TEST_DATA = {
  PRODUCT_SEARCH_TERM: 'Blue Top',
  SUBSCRIPTION_EMAIL: 'test@subscription.com',
  CONTACT_SUBJECT: 'Test Inquiry',
  CONTACT_MESSAGE: 'This is a test message from automation',
} as const;

// Timeouts (in milliseconds)
export const TIMEOUTS = {
  SHORT: 5000,
  MEDIUM: 10000,
  LONG: 30000,
  NAVIGATION: 30000,
} as const;

// Data Test IDs (if you add custom attributes)
export const DATA_TEST_IDS = {
  LOGIN_EMAIL: 'login-email',
  LOGIN_PASSWORD: 'login-password',
  LOGIN_BUTTON: 'login-button',
  SIGNUP_NAME: 'signup-name',
  SIGNUP_EMAIL: 'signup-email',
  SIGNUP_BUTTON: 'signup-button',
} as const;