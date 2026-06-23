import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Package, User, MapPin, Heart, ChevronRight } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();

  const mockOrders = [
    { id: 'KMS-12345', date: 'Oct 12, 2023', total: 95.00, status: 'Delivered' },
    { id: 'KMS-54321', date: 'Sep 25, 2023', total: 48.00, status: 'Processing' }
  ];

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-2">
          <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center space-y-4 mb-6">
            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="font-bold text-lg">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-between p-4 bg-primary text-white rounded-xl font-medium">
            <div className="flex items-center"><Package size={20} className="mr-3" /> Orders</div>
            <ChevronRight size={18} />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl font-medium text-gray-600 transition-colors">
            <div className="flex items-center"><User size={20} className="mr-3" /> Account Info</div>
            <ChevronRight size={18} />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl font-medium text-gray-600 transition-colors">
            <div className="flex items-center"><MapPin size={20} className="mr-3" /> Addresses</div>
            <ChevronRight size={18} />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl font-medium text-gray-600 transition-colors">
            <div className="flex items-center"><Heart size={20} className="mr-3" /> Wishlist</div>
            <ChevronRight size={18} />
          </button>
          
          <div className="pt-6">
            <Button variant="outline" className="w-full border-red-100 text-red-500 hover:bg-red-50" onClick={logout}>
              Log Out
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow space-y-8">
          <h1 className="text-3xl font-bold">Order History</h1>
          
          <div className="space-y-4">
            {mockOrders.map(order => (
              <div key={order.id} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <p className="font-bold text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-500">Placed on {order.date}</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="font-bold">${order.total.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Status</p>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
