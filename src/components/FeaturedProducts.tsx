
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  // Get 4 featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16">
      <div className="sport-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Produits Populaires</h2>
          <Link 
            to="/products" 
            className="flex items-center text-primary hover:underline font-medium"
          >
            Voir tout
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
