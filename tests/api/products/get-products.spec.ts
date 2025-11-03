import { test, expect } from '@playwright/test';
import { ProductsAPI } from '../../../api';
import { HTTP_STATUS } from '../../../config';

test.describe('Products API - GET Tests', () => {
  let productsAPI: ProductsAPI;

  // Setup before each test
  test.beforeEach(async ({ request }) => {
    productsAPI = new ProductsAPI(request);
  });

  test('should get all products successfully', async () => {
    // Make API call
    const response = await productsAPI.getAllProducts();
    
    // Get response data
    const products = await response.json();
    
    // Assertions
    expect(response.status()).toBe(HTTP_STATUS.OK);
    expect(response.ok()).toBeTruthy();
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);
    
    // Verify first product structure
    const firstProduct = products[0];
    expect(firstProduct).toHaveProperty('id');
    expect(firstProduct).toHaveProperty('title');
    expect(firstProduct).toHaveProperty('price');
    expect(firstProduct).toHaveProperty('category');
    expect(firstProduct).toHaveProperty('description');
    expect(firstProduct).toHaveProperty('image');
  });
});