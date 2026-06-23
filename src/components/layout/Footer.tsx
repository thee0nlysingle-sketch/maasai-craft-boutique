import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight text-accent">KURLEPZ</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Authentic handcrafted Maasai sandals, blending traditional beadwork with modern comfort. Every pair tells a story of heritage and craftsmanship.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors"><Globe size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Share2 size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/shop" className="hover:text-accent transition-colors">All Collections</Link></li>
            <li><Link to="/shop?category=Women" className="hover:text-accent transition-colors">Women's Sandals</Link></li>
            <li><Link to="/shop?category=Men" className="hover:text-accent transition-colors">Men's Sandals</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Customer Support</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
            <li><Link to="/size-guide" className="hover:text-accent transition-colors">Size Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Nairobi, Kenya<br />Maasai Market District</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>info@kurlepz.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kurlepz Maasai Sandals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
