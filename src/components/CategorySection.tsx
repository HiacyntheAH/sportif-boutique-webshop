
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';

const CategorySection: React.FC = () => {
  const categories = [
    {
      id: 'football',
      name: 'Football',
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'basketball',
      name: 'Basketball',
      image: 'https://images.unsplash.com/photo-1546519638-68e109acd27d?ixlib=rb-4.0.3',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'tennis',
      name: 'Tennis',
      image: 'https://images.unsplash.com/photo-1622279457486-28dc18b2585a?ixlib=rb-4.0.3',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 'clothing',
      name: 'Vêtements',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3',
      color: 'from-blue-400 to-blue-600'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="sport-container">
        <h2 className="text-3xl font-bold mb-10 text-center">Catégories populaires</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <AspectRatio ratio={1 / 1} className="bg-muted">
                {/* Image overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} mix-blend-multiply opacity-70 group-hover:opacity-80 transition-opacity z-10`}></div>
                
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="text-white text-2xl font-bold">{category.name}</span>
                </div>
              </AspectRatio>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
