
export interface Product {
  id: number;
  name: string;
  category: 'football' | 'basketball' | 'tennis' | 'clothing' | 'accessories';
  price: number;
  description: string;
  image: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ballon de Football Professionnel",
    category: "football",
    price: 29.99,
    description: "Ballon de football professionnel avec une excellente adhérence et une durabilité supérieure. Idéal pour l'entraînement et les matchs.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 45
  },
  {
    id: 2,
    name: "Ballon de Basketball Premium",
    category: "basketball",
    price: 39.99,
    description: "Ballon de basketball avec une excellente prise en main et un rebond constant. Convient pour une utilisation en intérieur et en extérieur.",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 38
  },
  {
    id: 3,
    name: "Balles de Tennis - Pack de 3",
    category: "tennis",
    price: 12.99,
    description: "Pack de 3 balles de tennis de haute qualité avec feutre durable et rebond uniforme. Approuvées pour les compétitions.",
    image: "https://images.unsplash.com/photo-1595435934753-5f8c33516b68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&height=400",
    stock: 120
  },
  {
    id: 4,
    name: "Maillot de Football Équipe Nationale",
    category: "clothing",
    price: 79.99,
    description: "Maillot officiel de l'équipe nationale avec un tissu respirant et léger. Design authentique avec logo brodé.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 25
  },
  {
    id: 5,
    name: "Maillot de Basketball Pro",
    category: "clothing",
    price: 69.99,
    description: "Maillot de basketball professionnel avec technologie d'évacuation de l'humidité. Coupe athlétique pour une liberté de mouvement maximale.",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 32
  },
  {
    id: 6,
    name: "Chaussures de Football à Crampons",
    category: "football",
    price: 129.99,
    description: "Chaussures de football à crampons avec une excellente adhérence sur terrain naturel. Design léger pour une vitesse maximale.",
    image: "https://images.unsplash.com/photo-1511886929837-354984b71c9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 18
  },
  {
    id: 7,
    name: "Chaussures de Basketball Performance",
    category: "basketball",
    price: 149.99,
    description: "Chaussures de basketball avec un amorti supérieur et un excellent soutien de la cheville. Grip optimal pour des mouvements rapides.",
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 15
  },
  {
    id: 8,
    name: "Chaussures de Tennis Confort",
    category: "tennis",
    price: 119.99,
    description: "Chaussures de tennis avec un confort exceptionnel et une stabilité latérale. Semelle adaptée pour tous types de courts.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 22
  },
  {
    id: 9,
    name: "Raquette de Tennis Pro",
    category: "tennis",
    price: 199.99,
    description: "Raquette de tennis professionnelle offrant puissance et contrôle. Cadre en graphite pour une durabilité maximale.",
    image: "https://images.unsplash.com/photo-1617082610223-dea3e0afb7db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 10
  },
  {
    id: 10,
    name: "Sac de Sport Multifonctionnel",
    category: "accessories",
    price: 49.99,
    description: "Sac de sport spacieux avec compartiments multiples. Idéal pour transporter tout votre équipement sportif.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 30
  },
  {
    id: 11,
    name: "Short de Football Professionnel",
    category: "clothing",
    price: 34.99,
    description: "Short de football léger et respirant avec une coupe ergonomique. Tissu qui évacue l'humidité pour rester au sec.",
    image: "https://images.unsplash.com/photo-1581955957646-b8c270071fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 40
  },
  {
    id: 12,
    name: "Gourde Sport Premium",
    category: "accessories",
    price: 19.99,
    description: "Gourde sport isolante qui maintient vos boissons fraîches pendant des heures. Design anti-fuite et facile à transporter.",
    image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stock: 55
  }
];

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}
