import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmation() {
  const location = useLocation();
  const { orderNumber, deliveryTime } = location.state || {
    orderNumber: '000000',
    deliveryTime: '30-45 minutes'
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-xl mb-2">Order Number: #{orderNumber}</p>
      <p className="text-gray-600 mb-8">
        Estimated delivery time: {deliveryTime}
      </p>
      <div className="space-y-4">
        <p className="text-gray-600">
          We've sent a confirmation email with your order details.
        </p>
        <p className="text-gray-600">
          You can track your order status using your order number.
        </p>
        <Link
          to="/menu"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
        >
          Order More
        </Link>
      </div>
    </div>
  );
}