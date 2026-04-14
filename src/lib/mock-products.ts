export const MOCK_PRODUCTS = [
  {
    id: "1",
    title: "Camiseta Aura Premium",
    handle: "camiseta-aura-premium",
    priceRange: {
      minVariantPrice: { amount: "29.99", currencyCode: "USD" }
    },
    images: {
      nodes: [{ url: "https://picsum.photos/seed/clothing1/600/800" }]
    }
  },
  {
    id: "2",
    title: "Sudadera Minimalist",
    handle: "sudadera-minimalist",
    priceRange: {
      minVariantPrice: { amount: "45.00", currencyCode: "USD" }
    },
    images: {
      nodes: [{ url: "https://picsum.photos/seed/clothing2/600/800" }]
    }
  },
  // Podemos generar 50 de estos automáticamente
];