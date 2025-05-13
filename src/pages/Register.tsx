
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

const Register: React.FC = () => {
  const navigate = useNavigate();
  
  const handleRegister = (formData: any) => {
    // This is just a mock registration - in a real app, you'd call an API
    console.log("Registration data:", formData);
    
    // Mock successful registration
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10 bg-gray-50">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Créer un compte</h1>
            <p className="text-gray-600 mt-2">
              Rejoignez SportShop et accédez à nos meilleurs offres
            </p>
          </div>
          
          <RegisterForm onSubmit={handleRegister} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
