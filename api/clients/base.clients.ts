import { APIRequestContext, APIResponse } from '@playwright/test';
import { logger } from '../../utils';
import { ENV } from '../../config';

export class BaseAPIClient {
  protected request: APIRequestContext;
  protected baseURL: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseURL = ENV.API.BASE_URL;
    logger.info('BaseAPIClient initialized');
  }

  // ========== GET METHOD ==========

  /**
   * Perform GET request
   * @param endpoint - API endpoint (e.g., '/products')
   * @param options - Optional headers, query params
   * @returns API response
   */
  async get(endpoint: string, options?: {
    headers?: Record<string, string>;
    params?: Record<string, string | number>;
  }): Promise<APIResponse> {
    const url = `${this.baseURL}${endpoint}`;
    logger.info(`GET request to: ${url}`);
    
    try {
      const response = await this.request.get(url, {
        headers: options?.headers,
        params: options?.params,
      });

      logger.info(`✓ GET ${url} - Status: ${response.status()}`);
      return response;
    } catch (error) {
      logger.error(`✗ GET ${url} failed: ${error}`);
      throw error;
    }
  }

  // ========== POST METHOD ==========

  /**
   * Perform POST request
   * @param endpoint - API endpoint
   * @param data - Request body
   * @param options - Optional headers
   * @returns API response
   */
  async post(endpoint: string, data?: any, options?: {
    headers?: Record<string, string>;
  }): Promise<APIResponse> {
    const url = `${this.baseURL}${endpoint}`;
    logger.info(`POST request to: ${url}`);
    logger.debug(`Request body: ${JSON.stringify(data)}`);

    try {
      const response = await this.request.post(url, {
        data: data,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      logger.info(`✓ POST ${url} - Status: ${response.status()}`);
      return response;
    } catch (error) {
      logger.error(`✗ POST ${url} failed: ${error}`);
      throw error;
    }
  }

  // ========== PUT METHOD ==========

  /**
   * Perform PUT request
   * @param endpoint - API endpoint
   * @param data - Request body
   * @param options - Optional headers
   * @returns API response
   */
  async put(endpoint: string, data?: any, options?: {
    headers?: Record<string, string>;
  }): Promise<APIResponse> {
    const url = `${this.baseURL}${endpoint}`;
    logger.info(`PUT request to: ${url}`);
    logger.debug(`Request body: ${JSON.stringify(data)}`);

    try {
      const response = await this.request.put(url, {
        data: data,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      logger.info(`✓ PUT ${url} - Status: ${response.status()}`);
      return response;
    } catch (error) {
      logger.error(`✗ PUT ${url} failed: ${error}`);
      throw error;
    }
  }

  // ========== PATCH METHOD ==========

  /**
   * Perform PATCH request
   * @param endpoint - API endpoint
   * @param data - Request body
   * @param options - Optional headers
   * @returns API response
   */
  async patch(endpoint: string, data?: any, options?: {
    headers?: Record<string, string>;
  }): Promise<APIResponse> {
    const url = `${this.baseURL}${endpoint}`;
    logger.info(`PATCH request to: ${url}`);
    logger.debug(`Request body: ${JSON.stringify(data)}`);

    try {
      const response = await this.request.patch(url, {
        data: data,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      logger.info(`✓ PATCH ${url} - Status: ${response.status()}`);
      return response;
    } catch (error) {
      logger.error(`✗ PATCH ${url} failed: ${error}`);
      throw error;
    }
  }

  // ========== DELETE METHOD ==========

  /**
   * Perform DELETE request
   * @param endpoint - API endpoint
   * @param options - Optional headers
   * @returns API response
   */
  async delete(endpoint: string, options?: {
    headers?: Record<string, string>;
  }): Promise<APIResponse> {
    const url = `${this.baseURL}${endpoint}`;
    logger.info(`DELETE request to: ${url}`);

    try {
      const response = await this.request.delete(url, {
        headers: options?.headers,
      });

      logger.info(`✓ DELETE ${url} - Status: ${response.status()}`);
      return response;
    } catch (error) {
      logger.error(`✗ DELETE ${url} failed: ${error}`);
      throw error;
    }
  }

  // ========== HELPER METHODS ==========

  /**
   * Get response body as JSON
   * @param response - API response
   * @returns Parsed JSON
   */
  async getResponseBody(response: APIResponse): Promise<any> {
    try {
      const body = await response.json();
      logger.debug(`Response body: ${JSON.stringify(body)}`);
      return body;
    } catch (error) {
      logger.error(`Failed to parse response body: ${error}`);
      throw error;
    }
  }

  /**
   * Get response status code
   * @param response - API response
   * @returns Status code
   */
  getStatusCode(response: APIResponse): number {
    const status = response.status();
    logger.debug(`Response status: ${status}`);
    return status;
  }

  /**
   * Get response headers
   * @param response - API response
   * @returns Headers object
   */
  getHeaders(response: APIResponse): Record<string, string> {
    const headers = response.headers();
    logger.debug(`Response headers: ${JSON.stringify(headers)}`);
    return headers;
  }

  /**
   * Check if response is successful (2xx)
   * @param response - API response
   * @returns True if successful
   */
  isSuccessful(response: APIResponse): boolean {
    const status = response.status();
    const success = response.ok();
    logger.debug(`Response successful: ${success} (Status: ${status})`);
    return success;
  }

  /**
   * Get response time
   * @param startTime - Request start time
   * @returns Response time in ms
   */
  getResponseTime(startTime: number): number {
    const responseTime = Date.now() - startTime;
    logger.debug(`Response time: ${responseTime}ms`);
    return responseTime;
  }
}