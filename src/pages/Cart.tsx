
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CartItem from '../components/CartItem';
import { Product, getProductById } from '../data/products';
import { ShoppingBag, ChevronRight } from 'lucide-react';

// Temporarily store cart in state in this demo
// In a real app, this would use a state management solution or localStorage
interface CartItem {
  productId: number;
  quantity: number;
}

const Cart: React.FC = () => {
  // Demo data - some initial cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 1 },
    { productId: 5, quantity: 1 }
  ]);
  
  const [cartProducts, setCartProducts] = useState<{product: Product, quantity: number}[]>([]);
  
  useEffect(() => {
    // Transform cart items into product objects with quantities
    const products = cartItems
      .map(item => {
        const product = getProductById(item.productId);
        return product ? { product, quantity: item.quantity } : null;
      })
      .filter((item): item is {product: Product, quantity: number} => item !== null);
    
    setCartProducts(products);
  }, [cartItems]);
  
  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };
  
  const removeItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };
  
  const calculateSubtotal = () => {
    return cartProducts.reduce(
      (total, { product, quantity }) => total + product.price * quantity, 
      0
    );
  };
  
  const subtotal = calculateSubtotal();
  const shippingCost = subtotal > 50 ? 0 : 4.99;
  const total = subtotal + shippingCost;

  return (
    <Layout>
      <div className="py-10">
        <div className="sport-container">
          <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>
          
          {cartProducts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                {cartProducts.map(({ product, quantity }) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    quantity={quantity}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
              
              <div className="bg-white border rounded-lg p-6 h-fit">
                <h2 className="text-xl font-bold mb-4">Récapitulatif</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sous-total</span>
                    <span>{subtotal.toFixed(2)} €</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frais de livraison</span>
                    <span>
                      {shippingCost === 0 ? (
                        <span className="text-green-600">Gratuit</span>
                      ) : (
                        `${shippingCost.toFixed(2)} €`
                      )}
                    </span>
                  </div>
                  
                  <div className="border-t pt-3 font-bold flex justify-between">
                    <span>Total</span>
                    <span>{total.toFixed(2)} €</span>
                  </div>
                </div>
                
                <button className="btn btn-primary w-full mb-4">
                  Passer à la caisse
                </button>
                
                <Link to="/products" className="flex items-center justify-center text-primary hover:underline">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Continuer mes achats
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <ShoppingBag className="h-8 w-8 text-gray-500" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Votre panier est vide</h2>
              <p className="text-gray-500 mb-6">Vous n'avez aucun article dans votre panier.</p>
              <Link to="/products" className="btn btn-primary">
                Voir le catalogue
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
