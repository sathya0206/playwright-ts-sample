import { test, expect } from '@playwright/test';
import { ProductsAPI, ProductsResponse, Product } from '../../../api';
import { HTTP_STATUS } from '../../../config';

test.describe('Products API - GET Tests', () => {
    let productsAPI: ProductsAPI;

    // Setup before each test
    test.beforeEach(async ({ request }) => {
        productsAPI = new ProductsAPI(request);
    });

    test('should get all products successfully', async () => {
        // Make API call using helper method (returns typed data)
        const products: ProductsResponse = await productsAPI.getAllProductsData();

        // Assertions
        expect(Array.isArray(products)).toBeTruthy();
        expect(products.length).toBeGreaterThan(0);

        // Verify first product structure with type safety
        const firstProduct: Product = products[0];
        expect(firstProduct.id).toBeDefined();
        expect(firstProduct.title).toBeDefined();
        expect(firstProduct.price).toBeGreaterThan(0);
        expect(firstProduct.category).toBeDefined();
        expect(firstProduct.description).toBeDefined();
        expect(firstProduct.image).toBeDefined();
        expect(firstProduct.rating).toBeDefined();
        expect(firstProduct.rating.rate).toBeGreaterThanOrEqual(0);
        expect(firstProduct.rating.rate).toBeLessThanOrEqual(5);
        expect(firstProduct.rating.count).toBeGreaterThanOrEqual(0);
    });

    test('should get single product by id', async () => {
        // Get product with type safety
        const product: Product = await productsAPI.getProductData(1);

        // Assertions
        expect(product.id).toBe(1);
        expect(product.title).toBeDefined();
        expect(product.price).toBeGreaterThan(0);
        expect(product.category).toBeDefined();
        expect(product.description).toBeDefined();
        expect(product.image).toBeDefined();
        expect(product.rating).toBeDefined();
        expect(product.rating.rate).toBeGreaterThanOrEqual(0);
        expect(product.rating.count).toBeGreaterThanOrEqual(0);
    });
});