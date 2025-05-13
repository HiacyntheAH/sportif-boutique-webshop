
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getProductById } from '../data/products';
import { 
  ChevronRight, 
  ShoppingCart, 
  Heart, 
  Share2, 
  TruckIcon,
  RefreshCw, 
  Shield,
  Minus, 
  Plus 
} from 'lucide-react';
import AlertMessage from '../components/ui/alert-message';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  
  if (!product) {
    return (
      <Layout>
        <div className="flex-grow flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Produit non trouvé</h1>
            <p className="text-gray-600 mb-6">
              Le produit que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Link to="/products" className="btn btn-primary">
              Retour au catalogue
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const addToCart = () => {
    setShowAlert(true);
  };

  return (
    <Layout>
      <div className="py-10">
        <div className="sport-container">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/products" className="hover:text-primary">Produits</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={`/products?category=${product.category}`} className="hover:text-primary capitalize">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-700 truncate">{product.name}</span>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="bg-white rounded-lg overflow-hidden border">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="mb-4">
                <span className="text-2xl font-bold text-accent">{product.price.toFixed(2)} €</span>
                {product.stock > 0 ? (
                  <span className="ml-4 inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    En stock
                  </span>
                ) : (
                  <span className="ml-4 inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                    Rupture de stock
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Quantité</h3>
                <div className="flex items-center">
                  <button 
                    className="p-2 border rounded-l-md"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-t border-b min-w-[50px] text-center">
                    {quantity}
                  </span>
                  <button 
                    className="p-2 border rounded-r-md"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  className="btn btn-primary flex-1 py-3"
                  onClick={addToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Ajouter au panier
                </button>
                
                <button className="btn btn-secondary p-3">
                  <Heart className="h-5 w-5" />
                </button>
                
                <button className="btn btn-secondary p-3">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              
              {/* Additional Info */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-start">
                  <TruckIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Livraison gratuite</h4>
                    <p className="text-sm text-gray-500">Pour toute commande supérieure à 50€</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RefreshCw className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Retours faciles</h4>
                    <p className="text-sm text-gray-500">30 jours pour changer d'avis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Garantie 1 an</h4>
                    <p className="text-sm text-gray-500">Sur tous nos produits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showAlert && (
        <AlertMessage 
          message={`${quantity} × ${product.name} ajouté au panier`}
          type="success"
          onClose={() => setShowAlert(false)}
        />
      )}
    </Layout>
  );
};

export default ProductDetail;
