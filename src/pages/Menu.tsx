import React from 'react';
import { Card, CardBody, CardFooter, Button } from '@nextui-org/react';
import { pizzas } from '../data/pizzas';
import { useCartStore } from '../store/cartStore';

export default function Menu() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} className="hover:shadow-lg transition-shadow">
            <CardBody className="p-0">
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                <p className="text-gray-600 mb-2">{pizza.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {pizza.toppings.map((topping) => (
                    <span
                      key={topping}
                      className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded"
                    >
                      {topping}
                    </span>
                  ))}
                </div>
                <p className="text-lg font-bold text-red-500">${pizza.price.toFixed(2)}</p>
              </div>
            </CardBody>
            <CardFooter className="px-4 pb-4">
              <Button
                className="w-full bg-red-500 text-white"
                onClick={() => addToCart(pizza)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}