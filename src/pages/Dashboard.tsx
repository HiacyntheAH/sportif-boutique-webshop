
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import { BarChart3, Users, ShoppingBag, TrendingUp, CircleDollarSign } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // In a real application, this would be fetched from an API
  const stats = {
    totalSales: "12,543.00 €",
    monthlyRevenue: "4,325.50 €",
    totalProducts: 45,
    totalCustomers: 238,
    pendingOrders: 12
  };

  const recentOrders = [
    { id: "ORD-5423", customer: "Jean Dupont", date: "2023-05-10", total: "156.99 €", status: "Livré" },
    { id: "ORD-5422", customer: "Marie Lambert", date: "2023-05-09", total: "89.99 €", status: "En cours" },
    { id: "ORD-5421", customer: "Thomas Martin", date: "2023-05-08", total: "245.50 €", status: "Livré" },
    { id: "ORD-5420", customer: "Sophie Bernard", date: "2023-05-07", total: "124.75 €", status: "En attente" },
    { id: "ORD-5419", customer: "Luc Girard", date: "2023-05-06", total: "67.25 €", status: "Livré" },
  ];

  return (
    <div className="min-h-screen dashboard-grid bg-gray-50">
      <DashboardSidebar />
      
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
          <p className="text-gray-600">Bienvenue sur votre espace d'administration</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <CircleDollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total des ventes</h3>
              <p className="text-2xl font-bold">{stats.totalSales}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Revenus mensuels</h3>
              <p className="text-2xl font-bold">{stats.monthlyRevenue}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <ShoppingBag className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Produits</h3>
              <p className="text-2xl font-bold">{stats.totalProducts}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Clients</h3>
              <p className="text-2xl font-bold">{stats.totalCustomers}</p>
            </div>
          </div>
        </div>
        
        {/* Chart (placeholder) */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-xl font-bold mb-4">Aperçu des ventes</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
            <span className="ml-4 text-gray-500">Graphique des ventes par mois</span>
          </div>
        </div>
        
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Commandes récentes</h2>
            <button 
              className="text-primary hover:underline text-sm font-medium"
              onClick={() => navigate('/dashboard/orders')}
            >
              Voir toutes les commandes
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 font-semibold">ID</th>
                  <th className="py-3 px-4 font-semibold">Client</th>
                  <th className="py-3 px-4 font-semibold">Date</th>
                  <th className="py-3 px-4 font-semibold">Total</th>
                  <th className="py-3 px-4 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b">
                    <td className="py-3 px-4 font-medium">{order.id}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">{order.total}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Livré' 
                          ? 'bg-green-100 text-green-800' 
                          : order.status === 'En cours'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
