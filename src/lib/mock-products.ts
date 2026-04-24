export const MOCK_PRODUCTS = [
  {
    id: "1",
    title: "Premium Aura T-Shirt",
    category: "Tops",
    handle: "premium-aura-t-shirt",
    price: 29.99, // Simplificado para facilitar lectura
    image: "https://picsum.photos/seed/1/600/800", // Propiedad plana para tu componente
    priceRange: {
      minVariantPrice: { amount: "29.99", currencyCode: "USD" }
    }
  },
  {
    id: "2",
    title: "Minimalist Hoodie",
    category: "Tops",
    handle: "minimalist-hoodie",
    price: 45.00,
    image: "https://picsum.photos/seed/2/600/800",
    priceRange: {
      minVariantPrice: { amount: "45.00", currencyCode: "USD" }
    }
  },
  {
    id: "3",
    title: "Classic Leather Jacket",
    category: "Jackets",
    handle: "classic-leather-jacket",
    price: 129.99,
    image: "https://picsum.photos/seed/3/600/800",
    priceRange: {
      minVariantPrice: { amount: "129.99", currencyCode: "USD" }
    }
  },
  {
    id: "4",
    title: "Slim Fit Denim Pants",
    category: "Pants",
    handle: "slim-fit-denim-pants",
    price: 59.99,
    image: "https://picsum.photos/seed/4/600/800",
    priceRange: {
      minVariantPrice: { amount: "59.99", currencyCode: "USD" }
    }
  },
];