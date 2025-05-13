
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { products, getProductsByCategory } from '../data/products';
import { Search } from 'lucide-react';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState(getProductsByCategory(initialCategory));
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Update filtered products when category changes
    const categoryProducts = getProductsByCategory(activeCategory);
    
    // Apply search filter if there's a search term
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      setFilteredProducts(
        categoryProducts.filter(product => 
          product.name.toLowerCase().includes(searchTermLower) || 
          product.description.toLowerCase().includes(searchTermLower)
        )
      );
    } else {
      setFilteredProducts(categoryProducts);
    }
  }, [activeCategory, searchTerm]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    // Update URL search params
    setSearchParams(category === 'all' ? {} : { category });
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="sport-container">
          <h1 className="text-3xl font-bold mb-8">Catalogue des produits</h1>
          
          {/* Search and filters */}
          <div className="mb-8">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 w-full p-3 bg-white border border-gray-300 rounded-md"
                placeholder="Rechercher des produits..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          
          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-gray-700 mb-4">Aucun produit trouvé</h3>
              <p className="text-gray-500">
                Essayez de modifier vos filtres ou votre recherche.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
