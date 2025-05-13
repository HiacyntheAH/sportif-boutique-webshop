
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { ShoppingCart } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card bg-white group">
      <Link to={`/product/${product.id}`}>
        <AspectRatio ratio={1 / 1} className="bg-muted">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image object-cover w-full h-full"
          />
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
