
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="sport-container py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Équipements sportifs de qualité pour les passionnés
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Découvrez notre collection d'équipements sportifs premium pour tous vos besoins sportifs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/products" 
              className="btn bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3"
            >
              Voir le catalogue
            </Link>
            <Link 
              to="/products?category=football" 
              className="btn bg-transparent border-2 border-white hover:bg-white/10 font-semibold px-6 py-3 flex items-center"
            >
              Produits en vedette
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
