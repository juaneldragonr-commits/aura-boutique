// Generador de productos con imágenes de moda consistentes
const MOCK_PRODUCTS = Array.from({ length: 50 }, (_, i) => ({
  id: `gid://shopify/Product/${i + 1}`,
  title: `Aura Style Item ${i + 1}`,
  handle: `aura-style-item-${i + 1}`,
  description: "Una prenda premium diseñada para el estilo y la comodidad en Aura Boutique.",
  images: {
    nodes: [
      {
        // Usamos source.unsplash para obtener fotos de moda/ropa específicas
        url: `https://images.unsplash.com/photo-${[
          "1523381210434-271e8be1f52b", // Camisa
          "1515886657613-9f3515b0c78f", // Modelo Moda
          "1539109136881-3be0616acf4b", // Ropa
          "1434389677669-e08b4cac3105", // Sweater
          "1490481651871-ab68ec25d43d", // Estilo
          "1558769132-cb1aea458c5e", // Tienda
        ][i % 6]}?auto=format&fit=crop&w=600&h=800&q=80`, 
      },
    ],
  },
  priceRange: {
    minVariantPrice: {
      amount: (Math.random() * (100 - 20) + 20).toFixed(2),
      currencyCode: "USD",
    },
  },
}));

export async function shopifyFetch({ query, variables = {} }: { query: string, variables?: any }) {
  return { data: { products: { nodes: MOCK_PRODUCTS } } };
}

export async function getShopifyProducts() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_PRODUCTS;
}

export async function getShopifyProductByHandle(handle: string) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return MOCK_PRODUCTS.find((p) => p.handle === handle) || null;
}