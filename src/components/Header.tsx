
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="sport-container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-2xl text-primary">SportShop</Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary">Accueil</Link>
            <Link to="/products" className="font-medium hover:text-primary">Catalogue</Link>
            <Link to="/about" className="font-medium hover:text-primary">À propos</Link>
            <Link to="/contact" className="font-medium hover:text-primary">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary" />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Link>
            
            <Link to="/login" className="hidden md:block">
              <User className="h-6 w-6 text-gray-700 hover:text-primary" />
            </Link>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="sport-container py-4 space-y-4">
            <Link to="/" className="block font-medium hover:text-primary">Accueil</Link>
            <Link to="/products" className="block font-medium hover:text-primary">Catalogue</Link>
            <Link to="/about" className="block font-medium hover:text-primary">À propos</Link>
            <Link to="/contact" className="block font-medium hover:text-primary">Contact</Link>
            <Link to="/login" className="block font-medium hover:text-primary">Connexion</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
