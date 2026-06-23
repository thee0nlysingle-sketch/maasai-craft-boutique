import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
          KURLEPZ
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/shop" className="text-foreground hover:text-primary transition-colors">Shop</Link>
          <Link to="/shop?category=Women" className="text-foreground hover:text-primary transition-colors">Women</Link>
          <Link to="/shop?category=Men" className="text-foreground hover:text-primary transition-colors">Men</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-foreground hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          
          <Link to="/cart" className="p-2 text-foreground hover:text-primary transition-colors relative">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="p-2 text-foreground hover:text-primary transition-colors">
                <User size={20} />
              </Link>
              {isAdmin && (
                <Link to="/admin" className="text-sm font-medium text-primary hover:underline">Admin</Link>
              )}
              <button 
                onClick={() => { logout(); navigate('/'); }}
                className="p-2 text-foreground hover:text-primary transition-colors"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="p-2 text-foreground hover:text-primary transition-colors">
              <User size={20} />
            </Link>
          )}

          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-primary/10 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <Link to="/shop" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Shop All</Link>
          <Link to="/shop?category=Women" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Women</Link>
          <Link to="/shop?category=Men" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Men</Link>
          <Link to="/about" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          {!isAuthenticated && (
            <Link to="/login" className="block text-lg font-medium text-primary" onClick={() => setIsMenuOpen(false)}>Login / Register</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
