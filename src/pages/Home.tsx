import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Heart } from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/331ebd59-dcdd-47fa-8140-6f633b8827ba/hero-sandals-af07883b-1782191902637.webp" 
            alt="Maasai Sandals Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Kurlepz <span className="text-accent">Maasai</span> Sandals
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Handcrafted Elegance Inspired by Maasai Culture. Authentic beadwork meets modern style.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/shop">Shop Collection <ArrowRight size={20} className="ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
                Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Star className="text-primary" />, title: "Handcrafted", desc: "Made by skilled artisans" },
            { icon: <Heart className="text-primary" />, title: "Authentic", desc: "Traditional Maasai designs" },
            { icon: <Shield className="text-primary" />, title: "Durable", desc: "Premium leather materials" },
            { icon: <Truck className="text-primary" />, title: "Shipping", desc: "Worldwide delivery" }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2 p-6 rounded-xl hover:bg-primary/5 transition-colors">
              <div className="p-3 bg-primary/10 rounded-full mb-2">{feature.icon}</div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Featured Collection</h2>
              <p className="text-gray-600">Discover our most loved artisanal sandals.</p>
            </div>
            <Link to="/shop" className="text-primary font-bold hover:underline flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">The Art of <span className="text-accent">Craftsmanship</span></h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every bead on a Kurlepz sandal is hand-stitched by skilled artisans from the Maasai community in Kenya. These designs carry generations of tradition, with colors and patterns that represent different aspects of Maasai life, culture, and nature.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We bridge the gap between ancient heritage and contemporary fashion, ensuring that these beautiful traditions thrive in the modern world while providing sustainable livelihoods for our artisan partners.
            </p>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
              Read Our Full Story
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/331ebd59-dcdd-47fa-8140-6f633b8827ba/featured-sandals-1-128ad085-1782191905131.webp" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-2xl shadow-xl -rotate-6 hidden md:block">
              <p className="text-secondary font-bold text-xl italic">"Preserving tradition through every step."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "Sarah J.", city: "New York", text: "The most comfortable and beautiful sandals I've ever owned. The beadwork is absolutely stunning!" },
              { name: "Michael K.", city: "London", text: "Truly artisanal quality. You can feel the craftsmanship in every stitch. Highly recommended." },
              { name: "Elena R.", city: "Milan", text: "Unique designs that get compliments everywhere I go. The colors are so vibrant!" }
            ].map((t, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border border-primary/5">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
