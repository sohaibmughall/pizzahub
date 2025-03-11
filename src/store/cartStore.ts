import { create } from 'zustand';
import { CartItem, Pizza } from '../types';

interface CartStore {
  items: CartItem[];
  addToCart: (pizza: Pizza) => void;
  removeFromCart: (pizzaId: number) => void;
  updateQuantity: (pizzaId: number, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addToCart: (pizza) => {
    const items = get().items;
    const existingItem = items.find((item) => item.pizza.id === pizza.id);

    if (existingItem) {
      set({
        items: items.map((item) =>
          item.pizza.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ items: [...items, { pizza, quantity: 1 }] });
    }
  },
  removeFromCart: (pizzaId) => {
    set({ items: get().items.filter((item) => item.pizza.id !== pizzaId) });
  },
  updateQuantity: (pizzaId, quantity) => {
    set({
      items: get().items.map((item) =>
        item.pizza.id === pizzaId ? { ...item, quantity } : item
      ),
    });
  },
  clearCart: () => set({ items: [] }),
  total: () =>
    get().items.reduce((sum, item) => sum + item.pizza.price * item.quantity, 0),
}));