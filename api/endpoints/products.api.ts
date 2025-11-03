import { APIRequestContext } from '@playwright/test';
import { BaseAPIClient } from '../clients/base.clients';
import { API_ENDPOINTS } from '../../config';

export class ProductsAPI extends BaseAPIClient {
  constructor(request: APIRequestContext) {
    super(request);
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
   * Get single product by ID
   * @param productId - Product ID
   * @returns API response with product details
   */
  async getProductById(productId: number) {
    return await this.get(`${API_ENDPOINTS.PRODUCTS}/${productId}`);
  }

  /**
   * Get products by category
   * @param category - Category name
   * @returns API response with filtered products
   */
  async getProductsByCategory(category: string) {
    return await this.get(`${API_ENDPOINTS.PRODUCTS}/category/${category}`);
  }

  /**
   * Get all product categories
   * @returns API response with all categories
   */
  async getAllCategories() {
    return await this.get(`${API_ENDPOINTS.PRODUCTS}/categories`);
  }

  /**
   * Get limited products
   * @param limit - Number of products to return
   * @returns API response with limited products
   */
  async getLimitedProducts(limit: number) {
    return await this.get(API_ENDPOINTS.PRODUCTS, {
      params: { limit }
    });
  }

  /**
   * Get sorted products
   * @param sort - Sort order ('asc' or 'desc')
   * @returns API response with sorted products
   */
  async getSortedProducts(sort: 'asc' | 'desc') {
    return await this.get(API_ENDPOINTS.PRODUCTS, {
      params: { sort }
    });
  }

  // ========== POST METHODS ==========

  /**
   * Create new product
   * @param productData - Product data
   * @returns API response with created product
   */
  async createProduct(productData: {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }) {
    return await this.post(API_ENDPOINTS.PRODUCTS, productData);
  }

  // ========== PUT METHODS ==========

  /**
   * Update product (full update)
   * @param productId - Product ID
   * @param productData - Complete product data
   * @returns API response with updated product
   */
  async updateProduct(productId: number, productData: {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }) {
    return await this.put(`${API_ENDPOINTS.PRODUCTS}/${productId}`, productData);
  }

  // ========== PATCH METHODS ==========

  /**
   * Partially update product
   * @param productId - Product ID
   * @param productData - Partial product data
   * @returns API response with updated product
   */
  async partialUpdateProduct(productId: number, productData: Partial<{
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }>) {
    return await this.patch(`${API_ENDPOINTS.PRODUCTS}/${productId}`, productData);
  }

  // ========== DELETE METHODS ==========

  /**
   * Delete product
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
  async getProductData(productId: number) {
    const response = await this.getProductById(productId);
    return await this.getResponseBody(response);
  }

  /**
   * Get all products and parse response
   * @returns Array of products
   */
  async getAllProductsData() {
    const response = await this.getAllProducts();
    return await this.getResponseBody(response);
  }

  /**
   * Verify product exists
   * @param productId - Product ID
   * @returns True if product exists
   */
  async productExists(productId: number): Promise<boolean> {
    try {
      const response = await this.getProductById(productId);
      return this.isSuccessful(response);
    } catch {
      return false;
    }
  }

  /**
   * Get product count
   * @returns Total number of products
   */
  async getProductCount(): Promise<number> {
    const products = await this.getAllProductsData();
    return products.length;
  }
}