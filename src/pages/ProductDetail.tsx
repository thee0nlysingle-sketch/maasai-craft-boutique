import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Star, Truck, Shield, RefreshCcw, ShoppingBag, ChevronRight, Heart } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="flex items-center text-sm text-gray-500 mb-8">
        <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
        <ChevronRight size={14} className="mx-2" />
        <button onClick={() => navigate('/shop')} className="hover:text-primary">Shop</button>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-gray-900 font-medium truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-primary/5">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-100 border border-primary/5 cursor-pointer hover:border-primary transition-colors">
                <img src={product.image} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-bold tracking-widest uppercase text-sm">{product.category}</p>
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="text-sm text-gray-500">(48 reviews)</span>
            </div>
            <p className="text-3xl font-bold text-secondary">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            {product.description}
          </p>

          <div className="space-y-6 pt-4 border-t border-gray-100">
            {/* Sizes */}
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-12 flex items-center justify-center rounded-md border-2 transition-all ${
                      selectedSize === size 
                        ? 'border-primary bg-primary/5 text-primary font-bold' 
                        : 'border-gray-200 hover:border-primary/50 text-gray-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider">Select Color/Pattern</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 h-12 flex items-center justify-center rounded-md border-2 transition-all ${
                      selectedColor === color 
                        ? 'border-primary bg-primary/5 text-primary font-bold' 
                        : 'border-gray-200 hover:border-primary/50 text-gray-600'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="flex-1 h-14 text-lg" onClick={handleAddToCart}>
                <ShoppingBag size={20} className="mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-gray-200">
                <Heart size={20} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <Truck size={20} className="text-primary" />
              <div className="text-xs">
                <p className="font-bold">Free Worldwide Shipping</p>
                <p className="text-gray-500">On all orders over $150</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <Shield size={20} className="text-primary" />
              <div className="text-xs">
                <p className="font-bold">2 Year Guarantee</p>
                <p className="text-gray-500">Handcrafted durability</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <RefreshCcw size={20} className="text-primary" />
              <div className="text-xs">
                <p className="font-bold">Easy Returns</p>
                <p className="text-gray-500">30-day exchange policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
