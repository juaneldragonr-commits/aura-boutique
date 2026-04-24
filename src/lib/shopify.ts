// 1. Galería extendida de Unsplash para evitar repeticiones visuales
const FASHION_IMAGES = [
  "1523381210434-271e8be1f52b", "1515886657613-9f3515b0c78f", 
  "1539109136881-3be0616acf4b", "1434389677669-e08b4cac3105",
  "1490481651871-ab68ec25d43d", "1558769132-cb1aea458c5e",
  "1485230895905-ec40ba36b9bc", "1509631179647-0177331693bd",
  "1520975954732-35dd22299614", "1581044777550-4cfa60707c03",
  "1537832816519-689ad163238b", "1512436991641-6745cdb1723f"
];

// Generador de productos con imágenes de moda consistentes para el Home
const MOCK_PRODUCTS = Array.from({ length: 50 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `Aura Style Item ${i + 1}`,
  handle: `aura-style-item-${i + 1}`,
  description: "A premium garment designed for style and comfort at Aura Boutique.",
  price: parseFloat((Math.random() * (100 - 20) + 20).toFixed(2)),
  // Usamos el array extendido para mayor variedad visual
  image: `https://images.unsplash.com/photo-${FASHION_IMAGES[i % FASHION_IMAGES.length]}?auto=format&fit=crop&w=600&h=800&q=80`,
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

// --- FUNCIONES PARA COLECCIONES (API PLATZI) ---

// Obtener todas las categorías disponibles con manejo de errores seguro
export async function getCategories() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    if (!res.ok) return []; 
    return res.json();
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return [];
  }
}

// Obtener productos de una categoría específica con respaldo dinámico (Fallback)
export async function getProductsByCategory(categoryId: string) {
  try {
    // Si no hay ID, mostramos una selección aleatoria del MOCK
    if (!categoryId) {
      return [...MOCK_PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 12);
    }

    const res = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`);
    
    // Si la API falla, usamos los productos locales
    if (!res.ok) {
      console.warn(`Error de servidor en categoría ${categoryId}. Usando respaldo.`);
      return [...MOCK_PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 12);
    }

    const data = await res.json();
    
    // Si la API está vacía, activamos el respaldo aleatorio
    if (!Array.isArray(data) || data.length === 0) {
      console.log("Categoría vacía en API. Mezclando productos de respaldo.");
      return [...MOCK_PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 12); 
    }

    return data.map((product: any) => ({
      id: product.id.toString(),
      handle: product.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-") + "-" + product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      // Acceso seguro a la imagen
      image: Array.isArray(product.images) ? product.images[0] : product.images
    }));
  } catch (error) {
    console.error("Fallo crítico. Usando respaldo aleatorio.", error);
    return [...MOCK_PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 12);
  }
}