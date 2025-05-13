
import React from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import { Product } from '../data/products';

interface CartItemProps {
  product: Product;
  quantity: number;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  product, 
  quantity, 
  onUpdateQuantity, 
  onRemove 
}) => {
  return (
    <div className="flex items-center py-4 border-b">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-24 h-24 object-cover rounded"
      />
      
      <div className="ml-4 flex-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <p className="text-accent font-semibold mt-1">{product.price.toFixed(2)} €</p>
      </div>
      
      <div className="flex items-center border rounded-md">
        <button 
          className="px-2 py-1 text-gray-500 hover:text-gray-700"
          onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="px-4 py-1 text-center min-w-[40px]">{quantity}</span>
        
        <button 
          className="px-2 py-1 text-gray-500 hover:text-gray-700"
          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
          disabled={quantity >= product.stock}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="ml-6 text-right">
        <p className="font-semibold">{(product.price * quantity).toFixed(2)} €</p>
        
        <button 
          className="text-gray-400 hover:text-red-500 mt-2"
          onClick={() => onRemove(product.id)}
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
