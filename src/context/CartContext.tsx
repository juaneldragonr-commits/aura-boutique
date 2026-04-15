"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void; // Nueva: Control de cantidades
  clearCart: () => void; // Nueva: Vaciar carrito tras compra
  totalItems: number;
  totalPrice: number; // Nueva: Suma total de la compra
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // 1. Cargar datos del localStorage al montar
  useEffect(() => {
    const savedCart = localStorage.getItem("aura-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error cargando el carrito:", error);
      }
    }
    setIsMounted(true);
  }, []);

  // 2. Guardar en localStorage cada vez que el carrito cambie
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("aura-cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Normalización de datos (Soporta MOCK y API de Platzi)
      const price = product.priceRange 
        ? parseFloat(product.priceRange.minVariantPrice.amount) 
        : product.price;

      const image = product.images?.nodes 
        ? product.images.nodes[0]?.url 
        : product.image;

      return [
        ...prevCart,
        {
          id: product.id,
          title: product.title,
          price: price,
          image: image,
          handle: product.handle,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Función para actualizar cantidad directamente (ej: botones + y - en el carrito)
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return; // Evita cantidades negativas
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Cálculos automáticos
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
        totalPrice 
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