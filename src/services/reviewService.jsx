import api from './api';

const reviewService = {
  async getAllReviews(page = 1, perPage = 10) {
    try {
      const response = await api.get(`reviews?page=${page}&perPage=${perPage}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching reviews: ${error.message}`);
    }
  },

  async getProductReviews(productId) {
    try {
      const response = await api.get(`reviews/product/${productId}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching product reviews: ${error.message}`);
    }
  },

  async createReview(reviewData) {
    try {
      const response = await api.post('reviews', reviewData);
      return response;
    } catch (error) {
      throw new Error(`Error creating review: ${error.message}`);
    }
  },

  async updateReview(id, reviewData) {
    try {
      const response = await api.put(`reviews/${id}`, reviewData);
      return response;
    } catch (error) {
      throw new Error(`Error updating review: ${error.message}`);
    }
  },

  async deleteReview(id) {
    try {
      const response = await api.delete(`reviews/${id}`);
      return response;
    } catch (error) {
      throw new Error(`Error deleting review: ${error.message}`);
    }
  },
};

export default reviewService;
