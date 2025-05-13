
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  LineChart, 
  Settings,
  LogOut
} from 'lucide-react';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const menuItems = [
    { 
      path: '/dashboard', 
      name: 'Tableau de bord', 
      icon: <LayoutDashboard className="h-5 w-5" /> 
    },
    { 
      path: '/dashboard/products', 
      name: 'Produits', 
      icon: <ShoppingBag className="h-5 w-5" /> 
    },
    { 
      path: '/dashboard/users', 
      name: 'Utilisateurs', 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      path: '/dashboard/analytics', 
      name: 'Statistiques', 
      icon: <LineChart className="h-5 w-5" /> 
    },
    { 
      path: '/dashboard/settings', 
      name: 'Paramètres', 
      icon: <Settings className="h-5 w-5" /> 
    }
  ];

  return (
    <div className="bg-white h-full border-r">
      <div className="p-4">
        <Link to="/" className="flex items-center mb-8">
          <span className="font-bold text-xl text-primary">SportShop</span>
          <span className="ml-2 text-xs font-medium bg-accent text-white px-2 py-1 rounded">Admin</span>
        </Link>
        
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive(item.path)
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-full p-4 border-t">
        <Link 
          to="/logout" 
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span className="ml-3">Déconnexion</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
