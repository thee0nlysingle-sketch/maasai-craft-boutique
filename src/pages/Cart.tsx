import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-6 bg-primary/10 rounded-full">
            <ShoppingBag size={48} className="text-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-bold">Your cart is empty</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Looks like you haven't added any Maasai sandals to your cart yet. Discover our handcrafted collection today!
        </p>
        <Button size="lg" onClick={() => navigate('/shop')}>Start Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-12">Your Shopping Cart ({totalItems})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-primary/5">
              <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Size: <span className="font-medium text-gray-900">{item.selectedSize}</span> | 
                      Color: <span className="font-medium text-gray-900">{item.selectedColor}</span>
                    </p>
                  </div>
                  <p className="font-bold text-lg text-secondary">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center space-x-3 border rounded-md p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                      className="p-1 hover:text-primary disabled:opacity-30"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                      className="p-1 hover:text-primary"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                    className="flex items-center text-sm text-red-500 hover:text-red-600 font-medium"
                  >
                    <Trash2 size={16} className="mr-1" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <Link to="/shop" className="inline-flex items-center text-primary font-bold hover:underline">
            <ArrowLeft size={16} className="mr-2" /> Continue Shopping
          </Link>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/5 space-y-6">
            <h3 className="text-xl font-bold border-b pb-4">Order Summary</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-600">Calculated at next step</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-medium text-gray-900">$0.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-4 border-t">
                <span>Total</span>
                <span className="text-secondary">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <Button size="lg" className="w-full h-14 text-lg" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </Button>
            
            <div className="flex flex-col items-center space-y-2 pt-4">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Secure Payments</p>
              <div className="flex gap-4 opacity-50 grayscale text-[10px] font-bold italic">
                <span>VISA</span>
                <span>M-PESA</span>
                <span>STRIPE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
