import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@nextui-org/react';
import { useCartStore } from '../store/cartStore';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    clearCart();
    navigate('/order-confirmation', { 
      state: { 
        orderNumber: Math.floor(Math.random() * 1000000),
        deliveryTime: '30-45 minutes'
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              label="Phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              name="address"
              label="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="w-full bg-red-500 text-white"
              size="lg"
            >
              Place Order (${(total() + 5).toFixed(2)})
            </Button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            {items.map((item) => (
              <div
                key={item.pizza.id}
                className="flex justify-between items-center mb-2"
              >
                <span>
                  {item.quantity}x {item.pizza.name}
                </span>
                <span>${(item.pizza.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${(total() + 5).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}