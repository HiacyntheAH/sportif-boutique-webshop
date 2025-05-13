
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="sport-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SportShop</h3>
            <p className="text-gray-400 mb-4">Votre boutique en ligne pour tous les équipements sportifs de qualité.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Catalogue</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">À propos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=football" className="text-gray-400 hover:text-white">Football</Link></li>
              <li><Link to="/products?category=basketball" className="text-gray-400 hover:text-white">Basketball</Link></li>
              <li><Link to="/products?category=tennis" className="text-gray-400 hover:text-white">Tennis</Link></li>
              <li><Link to="/products?category=clothing" className="text-gray-400 hover:text-white">Vêtements</Link></li>
              <li><Link to="/products?category=accessories" className="text-gray-400 hover:text-white">Accessoires</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin size={18} className="mr-2" /> 
                123 Rue du Sport, 75000 Paris
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-2" /> 
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-2" /> 
                contact@sportshop.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SportShop. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
