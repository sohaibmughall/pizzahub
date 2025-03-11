import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>contact@pizzahub.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Pizza Street, NY 10001</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <p>Monday - Thursday: 11AM - 10PM</p>
              <p>Friday - Saturday: 11AM - 11PM</p>
              <p>Sunday: 12PM - 9PM</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-red-400">Facebook</a>
              <a href="#" className="block hover:text-red-400">Instagram</a>
              <a href="#" className="block hover:text-red-400">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2024 PizzaHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}