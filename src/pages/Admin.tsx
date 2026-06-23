import React from 'react';
import { products } from '../data/products';
import { Button } from '@/components/ui/button';
import { Package, Users, DollarSign, TrendingUp, Plus, Edit, Trash2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Admin = () => {
  const stats = [
    { label: 'Total Sales', value: '$12,450', icon: <DollarSign size={24} />, color: 'bg-green-500' },
    { label: 'Orders', value: '156', icon: <Package size={24} />, color: 'bg-blue-500' },
    { label: 'Customers', value: '1,240', icon: <Users size={24} />, color: 'bg-purple-500' },
    { label: 'Growth', value: '+12%', icon: <TrendingUp size={24} />, color: 'bg-orange-500' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Manage your Maasai sandals business</p>
        </div>
        <Button className="h-10 px-6">
          <Plus size={20} className="mr-2" /> Add New Product
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className={`p-3 rounded-xl text-white ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold">Product Management</h2>
          <div className="relative w-full sm:w-64">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`font-medium ${product.stock < 10 ? 'text-red-500' : 'text-green-600'}`}>
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
