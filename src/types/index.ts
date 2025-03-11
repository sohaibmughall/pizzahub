export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  toppings: string[];
  category: string;
}

export interface CartItem {
  pizza: Pizza;
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  address: string;
  phone: string;
}