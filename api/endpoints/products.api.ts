import { APIRequestContext } from '@playwright/test';
import { BaseAPIClient } from '../clients/base.clients';
import { API_ENDPOINTS } from '../../config';
import {
    Product,
    ProductsResponse,
    CreateProductRequest,
    UpdateProductRequest,
    PartialUpdateProductRequest
} from '../models';

export class ProductsAPI extends BaseAPIClient {

    // ========== POST METHODS ==========

    /**
     * Create new product
     * @param productData - Product data
     * @returns API response with created product
     */
    async createProduct(productData: CreateProductRequest) {
        return await this.post(API_ENDPOINTS.PRODUCTS, productData);
    }

    // ========== PUT METHODS ==========

    /**
     * Update product (full update)
     * @param productId - Product ID
     * @param productData - Complete product data
     * @returns API response with updated product
     */
    async updateProduct(productId: number, productData: UpdateProductRequest) {
        return await this.put(`${API_ENDPOINTS.PRODUCTS}/${productId}`, productData);
    }

    // ========== PATCH METHODS ==========

    /**
     * Partially update product
     * @param productId - Product ID
     * @param productData - Partial product data
     * @returns API response with updated product
     */
    async partialUpdateProduct(productId: number, productData: PartialUpdateProductRequest) {
        return await this.patch(`${API_ENDPOINTS.PRODUCTS}/${productId}`, productData);
    }

    // ========== GET METHODS ==========

    /**
     * Get all products
     * @returns API response with all products
     */
    async getAllProducts() {
        return await this.get(API_ENDPOINTS.PRODUCTS);
    }

    /**
     * Get product by ID
     * @param productId - Product ID
     * @returns API response with product details
     */
    async getProductById(productId: number) {
        return await this.get(`${API_ENDPOINTS.PRODUCTS}/${productId}`);
    }

    // ========== DELETE METHODS ==========

    /**
     * Delete product by ID
     * @param productId - Product ID
     * @returns API response
     */
    async deleteProduct(productId: number) {
        return await this.delete(`${API_ENDPOINTS.PRODUCTS}/${productId}`);
    }

    // ========== HELPER METHODS ==========

    /**
     * Get product and parse response
     * @param productId - Product ID
     * @returns Parsed product object
     */
    async getProductData(productId: number): Promise<Product> {
        const response = await this.getProductById(productId);
        return await this.getResponseBody(response);
    }

    /**
     * Get all products and parse response
     * @returns Array of products
     */
    async getAllProductsData(): Promise<ProductsResponse> {
        const response = await this.getAllProducts();
        return await this.getResponseBody(response);
    }
}