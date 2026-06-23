import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email === 'admin@kurlepz.com') {
      login(email, 'Admin User', 'admin');
      toast.success('Welcome back, Admin!');
      navigate('/admin');
    } else {
      login(email, email.split('@')[0]);
      toast.success(`Welcome back, ${email.split('@')[0]}!`);
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 flex justify-center">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-primary/5">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-gray-600">Login to your Kurlepz account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <button type="button" className="text-xs text-primary font-bold hover:underline">Forgot password?</button>
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full h-10 text-lg">Login</Button>
        </form>

        <div className="relative text-center">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
          <span className="relative bg-white px-4 text-sm text-gray-400">OR</span>
        </div>

        <p className="text-center text-gray-600">
          Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Sign Up</Link>
        </p>

        <div className="pt-4 border-t border-gray-50 text-center">
          <p className="text-xs text-gray-400">Demo: admin@kurlepz.com (admin access)</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
