
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <CategorySection />
        
        {/* Promotion Banner */}
        <section className="py-16 bg-gradient-to-r from-accent to-orange-400 text-white">
          <div className="sport-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Offre Spéciale</h2>
              <p className="text-xl mb-8">Inscrivez-vous aujourd'hui et obtenez 10% de réduction sur votre première commande!</p>
              <a 
                href="/register" 
                className="btn bg-white text-accent hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                S'inscrire maintenant
              </a>
            </div>
          </div>
        </section>
        
        {/* Testimonials or Trust Signals */}
        <section className="py-16">
          <div className="sport-container">
            <h2 className="text-3xl font-bold mb-10 text-center">Ils nous font confiance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                  {/* Star rating */}
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  "Des équipements sportifs de qualité professionnelle. Je recommande vivement!"
                </p>
                <p className="text-center font-medium">Michel D.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  "Livraison rapide et service client impeccable. Je suis très satisfaite de mes achats."
                </p>
                <p className="text-center font-medium">Sophie M.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  "Le meilleur site pour l'équipement sportif. Prix compétitifs et large choix."
                </p>
                <p className="text-center font-medium">Thomas L.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
