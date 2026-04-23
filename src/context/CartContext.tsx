"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: string | number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isMounted: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // 1. Cargar datos del localStorage al montar con manejo de errores robusto
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("aura-cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Error loading storage cart:", error);
    } finally {
      setIsMounted(true);
    }
  }, []);

  // 2. Guardar en localStorage de forma sincronizada cada vez que el carrito cambie
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("aura-cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (product: any) => {
    // Verificación de seguridad: si no hay producto o ID, ignorar
    if (!product || !product.id) {
      console.error("Invalid product attempted to be added to cart", product);
      return;
    }

    setCart((prevCart) => {
      const productId = product.id;
      const existingItem = prevCart.find((item) => item.id === productId);
      
      let updatedCart;

      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Normalización para asegurar tipos de datos correctos
        const price = product.priceRange 
          ? parseFloat(product.priceRange.minVariantPrice.amount) 
          : (typeof product.price === 'string' ? parseFloat(product.price) : product.price);

        const image = product.images?.nodes 
          ? product.images.nodes[0]?.url 
          : (product.image?.url || product.image);

        const newItem: CartItem = {
          id: productId,
          title: product.title || "Producto sin título",
          price: price || 0,
          image: image || "",
          handle: product.handle || "",
          quantity: 1,
        };
        updatedCart = [...prevCart, newItem];
      }

      console.log("Cart status update:", updatedCart); // Para confirmación en DevTools
      return updatedCart;
    });
  };

  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("aura-cart");
  };

  // Cálculos derivados del estado
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        totalItems, 
        totalPrice,
        isMounted 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
  return context;
};