
import React, { useState } from 'react';
import { Product } from '../data/products';

interface ProductFormProps {
  product?: Product;
  onSubmit: (productData: Omit<Product, 'id'>) => void;
  isEditing?: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({ 
  product, 
  onSubmit, 
  isEditing = false 
}) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    category: product?.category || 'football',
    price: product?.price || 0,
    description: product?.description || '',
    image: product?.image || '',
    stock: product?.stock || 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="name">Nom du produit</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="category">Catégorie</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="tennis">Tennis</option>
          <option value="clothing">Vêtements</option>
          <option value="accessories">Accessoires</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="price">Prix (€)</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="image">URL de l'image</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="stock">Stock disponible</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        {isEditing ? 'Mettre à jour le produit' : 'Ajouter le produit'}
      </button>
    </form>
  );
};

export default ProductForm;
