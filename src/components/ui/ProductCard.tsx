import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-primary/5"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white rounded-full shadow-sm hover:text-primary">
            <Heart size={18} />
          </button>
        </div>
        {product.stock < 5 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
            ONLY {product.stock} LEFT
          </div>
        )}
      </Link>
      
      <div className="p-4 space-y-2">
        <p className="text-xs text-primary font-bold tracking-wider uppercase">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-lg font-bold text-secondary">${product.price.toFixed(2)}</p>
        
        <div className="pt-2">
          <Button 
            variant="outline" 
            className="w-full justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, product.sizes[0], product.colors[0]);
            }}
          >
            <ShoppingCart size={16} className="mr-2" />
            Quick Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
