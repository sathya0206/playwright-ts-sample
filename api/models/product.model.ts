/**
 * Product response from API
 */
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

/**
 * Request body for creating product
 */
export interface CreateProductRequest {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

/**
 * Request body for updating product (full update)
 */
export interface UpdateProductRequest {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

/**
 * Request body for partial update
 */
export interface PartialUpdateProductRequest {
  title?: string;      // Optional
  price?: number;
  description?: string;
  image?: string;
  category?: string;
}

// Type aliases for clarity
export type ProductResponse = Product;
export type ProductsResponse = Product[];