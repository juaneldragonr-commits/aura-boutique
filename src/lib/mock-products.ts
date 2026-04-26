// src/lib/mock-products.ts

export const MOCK_PRODUCTS = [
  // TOPS - Imágenes profesionales de ropa
  {
    id: "1",
    title: "Premium Aura T-Shirt",
    category: "tops",
    handle: "premium-aura-t-shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&h=800&fit=crop",
    priceRange: {
      minVariantPrice: { amount: "29.99", currencyCode: "USD" }
    }
  },
  {
    id: "2",
    title: "Minimalist Hoodie",
    category: "tops",
    handle: "minimalist-hoodie",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&h=800&fit=crop",
    priceRange: {
      minVariantPrice: { amount: "45.00", currencyCode: "USD" }
    }
  },
  // JACKETS
  {
    id: "3",
    title: "Classic Leather Jacket",
    category: "jackets",
    handle: "classic-leather-jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&h=800&fit=crop",
    priceRange: {
      minVariantPrice: { amount: "129.99", currencyCode: "USD" }
    }
  },
  // PANTS
  {
    id: "4",
    title: "Slim Fit Denim Pants",
    category: "pants",
    handle: "slim-fit-denim-pants",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&h=800&fit=crop",
    priceRange: {
      minVariantPrice: { amount: "59.99", currencyCode: "USD" }
    }
  }
];