import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, ChevronRight, CreditCard, Truck } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    toast.loading('Processing payment...');
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
      toast.dismiss();
      toast.success('Order placed successfully!');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center">
          <div className="p-6 bg-green-100 rounded-full">
            <CheckCircle2 size={64} className="text-green-600" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Thank You for Your Order!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your handcrafted Maasai sandals are being prepared for shipping. We've sent a confirmation email to {formData.email}.
          </p>
          <p className="font-bold text-gray-900">Order Number: #KMS-{Math.floor(Math.random() * 90000) + 10000}</p>
        </div>
        <div className="flex justify-center gap-4 pt-8">
          <Button size="lg" variant="outline" onClick={() => navigate('/')}>Return Home</Button>
          <Button size="lg" onClick={() => navigate('/shop')}>Shop More</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center text-sm text-gray-500 mb-12">
        <span className="text-primary font-bold">Cart</span>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-primary font-bold">Shipping & Payment</span>
        <ChevronRight size={14} className="mx-2" />
        <span>Confirmation</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Truck size={24} className="mr-3 text-primary" /> Shipping Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" required value={formData.firstName} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" required value={formData.lastName} onChange={handleInputChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Full Address</Label>
              <Input id="address" name="address" required value={formData.address} onChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" required value={formData.city} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" required value={formData.country} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <CreditCard size={24} className="mr-3 text-primary" /> Payment Method
            </h2>
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" required value={formData.cardNumber} onChange={handleInputChange} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry (MM/YY)</Label>
                  <Input id="expiry" name="expiry" placeholder="MM/YY" required value={formData.expiry} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" name="cvv" placeholder="123" required value={formData.cvv} onChange={handleInputChange} />
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full h-14 text-lg">
            Pay ${totalPrice.toFixed(2)} Now
          </Button>
        </form>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 text-sm mb-6 border-b pb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-bold text-green-600">FREE</span>
              </div>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-secondary">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="p-6 bg-accent/10 rounded-xl border border-accent/20">
            <p className="text-sm text-accent-foreground leading-relaxed">
              <strong>Artisan Note:</strong> Your purchase supports sustainable livelihoods for Maasai artisans in Kenya. Every pair is made with love and tradition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
