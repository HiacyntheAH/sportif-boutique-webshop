
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { ShoppingCart, ImageOff } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const placeholderUrl = "https://placehold.co/400x400/e2e8f0/64748b?text=Image+non+disponible";

  return (
    <div className="product-card bg-white group hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <AspectRatio ratio={1 / 1} className="bg-muted overflow-hidden">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center p-4">
                <ImageOff className="mx-auto h-10 w-10 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">Image non disponible</p>
              </div>
            </div>
          ) : (
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                console.error(`Error loading image for ${product.name}: ${product.image}`);
                setImageError(true);
              }}
            />
          )}
        </AspectRatio>
      </Link>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500 capitalize">{product.category}</span>
          <span className="text-accent font-semibold">{product.price.toFixed(2)} €</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{product.stock} en stock</span>
          <button className="btn btn-primary">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
