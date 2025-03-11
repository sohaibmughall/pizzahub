import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Pizza } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Pizza className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-gray-800">PizzaHub</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/menu" className="text-gray-700 hover:text-red-500">
              Menu
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-red-500" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
