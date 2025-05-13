
import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import ProductForm from '../components/ProductForm';
import { products, Product } from '../data/products';
import { Edit, Trash2, Plus, Search } from 'lucide-react';
import AlertMessage from '../components/ui/alert-message';

const ProductManager: React.FC = () => {
  const [productsList, setProductsList] = useState<Product[]>(products);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [alertConfig, setAlertConfig] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  }>({
    show: false,
    message: '',
    type: 'success'
  });
  
  const filteredProducts = productsList.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct = {
      ...productData,
      id: Math.max(...productsList.map(p => p.id)) + 1
    };
    
    setProductsList([...productsList, newProduct]);
    setIsAddingProduct(false);
    
    setAlertConfig({
      show: true,
      message: 'Produit ajouté avec succès',
      type: 'success'
    });
  };
  
  const handleUpdateProduct = (productData: Omit<Product, 'id'>) => {
    if (!editingProduct) return;
    
    setProductsList(productsList.map(product => 
      product.id === editingProduct.id 
        ? { ...productData, id: product.id } 
        : product
    ));
    
    setEditingProduct(null);
    
    setAlertConfig({
      show: true,
      message: 'Produit mis à jour avec succès',
      type: 'success'
    });
  };
  
  const handleDeleteProduct = (productId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      setProductsList(productsList.filter(product => product.id !== productId));
      
      setAlertConfig({
        show: true,
        message: 'Produit supprimé avec succès',
        type: 'info'
      });
    }
  };

  return (
    <div className="min-h-screen dashboard-grid bg-gray-50">
      <DashboardSidebar />
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Gestion des produits</h1>
            <p className="text-gray-600">Ajouter, modifier ou supprimer des produits</p>
          </div>
          
          <button 
            className="btn btn-primary"
            onClick={() => {
              setIsAddingProduct(true);
              setEditingProduct(null);
            }}
          >
            <Plus className="h-5 w-5 mr-2" />
            Ajouter un produit
          </button>
        </div>
        
        {(isAddingProduct || editingProduct) && (
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
            <h2 className="text-xl font-bold mb-4">
              {editingProduct ? 'Modifier le produit' : 'Ajouter un produit'}
            </h2>
            <ProductForm 
              product={editingProduct || undefined}
              onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
              isEditing={!!editingProduct}
            />
            
            <div className="mt-4 flex justify-end">
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setIsAddingProduct(false);
                  setEditingProduct(null);
                }}
              >
                Annuler
              </button>
            </div>
          </div>
        )}
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 w-full p-3 bg-white border border-gray-300 rounded-md"
                placeholder="Rechercher des produits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 font-semibold">ID</th>
                  <th className="py-3 px-4 font-semibold">Produit</th>
                  <th className="py-3 px-4 font-semibold">Catégorie</th>
                  <th className="py-3 px-4 font-semibold">Prix</th>
                  <th className="py-3 px-4 font-semibold">Stock</th>
                  <th className="py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => (
                  <tr key={product.id} className="border-b">
                    <td className="py-3 px-4">{product.id}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-10 h-10 rounded object-cover mr-3"
                        />
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 capitalize">{product.category}</td>
                    <td className="py-3 px-4">{product.price.toFixed(2)} €</td>
                    <td className="py-3 px-4">{product.stock}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button 
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => {
                            setEditingProduct(product);
                            setIsAddingProduct(false);
                          }}
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucun produit trouvé</p>
            </div>
          )}
        </div>
      </div>
      
      {alertConfig.show && (
        <AlertMessage 
          message={alertConfig.message}
          type={alertConfig.type}
          onClose={() => setAlertConfig({ ...alertConfig, show: false })}
        />
      )}
    </div>
  );
};

export default ProductManager;
