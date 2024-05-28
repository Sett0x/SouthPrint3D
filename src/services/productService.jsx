// /src/services/productService.js

import api from './api';

const productService = {
  async getProducts(queryParams = {}, page = 1, perPage = 10) {
    try {
      const params = new URLSearchParams({ ...queryParams, page, perPage });
      const response = await api.get(`products?${params.toString()}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  },

  async getHiddenProducts(queryParams = {}, page = 1, perPage = 10) {
    try {
      const params = new URLSearchParams({ ...queryParams, page, perPage });
      const response = await api.get(`hidden-products?${params.toString()}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching hidden products: ${error.message}`);
    }
  },

  async getProductById(id) {
    try {
      const response = await api.get(`products/${id}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching product by ID: ${error.message}`);
    }
  },

  async createProduct(productData) {
    try {
      const response = await api.post('products', productData);
      return response;
    } catch (error) {
      throw new Error(`Error creating product: ${error.message}`);
    }
  },

  async updateProduct(id, productData) {
    try {
      const response = await api.put(`products/${id}`, productData);
      return response;
    } catch (error) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  },

  async deleteProduct(id) {
    try {
      const response = await api.delete(`products/${id}`);
      return response;
    } catch (error) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  },

  async getProductsByCategory(category) {
    try {
      const response = await api.get(`products/category/${category}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching products by category: ${error.message}`);
    }
  },
};

export default productService;
