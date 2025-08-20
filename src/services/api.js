// API Base URL - Change this when you deploy your backend
const API_BASE_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:4000/api";

// API Service Class
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem("authToken");
  }

  // Set authentication token
  setToken(token) {
    this.token = token;
    localStorage.setItem("authToken", token);
  }

  // Remove authentication token
  removeToken() {
    this.token = null;
    localStorage.removeItem("authToken");
  }

  // Get headers for API requests
  getHeaders() {
    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    return headers;
  }

  // Generic API request method
  async request(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const config = {
        headers: this.getHeaders(),
        ...options,
      };

      const response = await fetch(url, config);

      // Handle unauthorized responses
      if (response.status === 401) {
        this.removeToken();
        window.location.href = "/login";
        throw new Error("Unauthorized - Please login again");
      }

      // Handle other error responses
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("API Request Error:", error);
      throw error;
    }
  }

  // Authentication APIs
  auth = {
    // User signup
    signup: (userData) =>
      this.request("/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
      }),

    // User signin
    signin: (credentials) =>
      this.request("/auth/signin", {
        method: "POST",
        body: JSON.stringify(credentials),
      }),

    // Get user profile
    getProfile: () => this.request("/auth/profile"),

    // Update user profile
    updateProfile: (profileData) =>
      this.request("/auth/profile", {
        method: "PUT",
        body: JSON.stringify(profileData),
      }),

    // Change password
    changePassword: (passwordData) =>
      this.request("/auth/change-password", {
        method: "PUT",
        body: JSON.stringify(passwordData),
      }),

    // Refresh token
    refreshToken: () =>
      this.request("/auth/refresh-token", {
        method: "POST",
      }),
  };

  // Product APIs
  products = {
    // Get all products
    getAll: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(`/products?${queryString}`);
    },

    // Get product by ID
    getById: (id) => this.request(`/products/${id}`),

    // Get products by category
    getByCategory: (category, params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(`/products/category/${category}?${queryString}`);
    },

    // Search products
    search: (query, params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(`/products/search/${query}?${queryString}`);
    },

    // Get all categories
    getCategories: () => this.request("/products/categories/all"),

    // Create product (admin only)
    create: (productData) =>
      this.request("/products", {
        method: "POST",
        body: JSON.stringify(productData),
      }),

    // Update product (admin only)
    update: (id, productData) =>
      this.request(`/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(productData),
      }),

    // Delete product (admin only)
    delete: (id) =>
      this.request(`/products/${id}`, {
        method: "DELETE",
      }),

    // Update stock (admin only)
    updateStock: (id, stockData) =>
      this.request(`/products/${id}/stock`, {
        method: "PATCH",
        body: JSON.stringify(stockData),
      }),
  };

  // Order APIs
  orders = {
    // Get all orders
    getAll: () => this.request("/orders"),

    // Get orders by type
    getByType: (type) => this.request(`/orders/${type}`),

    // Create order
    create: (orderData) =>
      this.request("/orders", {
        method: "POST",
        body: JSON.stringify(orderData),
      }),
  };

  // Payment APIs
  payments = {
    // Create Cashfree order
    createCashfreeOrder: (orderData) =>
      this.request("/payments/cashfree/create-order", {
        method: "POST",
        body: JSON.stringify(orderData),
      }),

    // Create Razorpay order
    createRazorpayOrder: (orderData) =>
      this.request("/payments/razorpay/create-order", {
        method: "POST",
        body: JSON.stringify(orderData),
      }),

    // Create Razorpay payment link
    createRazorpayPaymentLink: (paymentData) =>
      this.request("/payments/razorpay/payment-link", {
        method: "POST",
        body: JSON.stringify(paymentData),
      }),

    // Get Cashfree order
    getCashfreeOrder: (orderId) =>
      this.request(`/payments/cashfree/order/${orderId}`),

    // Get Razorpay order
    getRazorpayOrder: (orderId) =>
      this.request(`/payments/razorpay/order/${orderId}`),
  };

  // Shipping APIs
  shipping = {
    // Create shipment
    create: (shipmentData) =>
      this.request("/shipping/create", {
        method: "POST",
        body: JSON.stringify(shipmentData),
      }),

    // Get available couriers
    getCouriers: (params) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(`/shipping/couriers?${queryString}`);
    },

    // Track shipment
    track: (shipmentId) => this.request(`/shipping/track/${shipmentId}`),

    // Calculate shipping cost
    calculateCost: (costData) =>
      this.request("/shipping/calculate-cost", {
        method: "POST",
        body: JSON.stringify(costData),
      }),

    // Get pickup locations
    getPickupLocations: () => this.request("/shipping/pickup-locations"),

    // Create pickup location
    createPickupLocation: (locationData) =>
      this.request("/shipping/pickup-locations", {
        method: "POST",
        body: JSON.stringify(locationData),
      }),
  };

  // Health check
  health = () => this.request("/health");
}

// Create and export a single instance
const apiService = new ApiService();
export default apiService;

// Export individual methods for convenience
export const { auth, products, orders, payments, shipping, health } =
  apiService;
