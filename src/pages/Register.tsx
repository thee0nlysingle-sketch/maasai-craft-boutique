import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    login(email, name);
    toast.success('Account created successfully!');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-24 flex justify-center">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-primary/5">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>
          <p className="text-gray-600">Join the Kurlepz family today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="name@example.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" required className="rounded border-gray-300 text-primary focus:ring-primary" />
            <Label htmlFor="terms" className="text-xs text-gray-500 font-normal">
              I agree to the Terms of Service and Privacy Policy
            </Label>
          </div>
          <Button type="submit" className="w-full h-10 text-lg">Create Account</Button>
        </form>

        <p className="text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
