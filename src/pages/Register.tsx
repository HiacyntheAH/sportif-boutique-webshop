
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import RegisterForm from '../components/RegisterForm';
import AlertMessage from '../components/ui/alert-message';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  
  const handleRegister = (formData: any) => {
    // This is just a mock registration - in a real app, you'd call an API
    console.log("Registration data:", formData);
    
    // Show success message
    setShowAlert(true);
    
    // Mock successful registration
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <Layout>
      <div className="py-10 bg-gray-50">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Créer un compte</h1>
            <p className="text-gray-600 mt-2">
              Rejoignez SportShop et accédez à nos meilleurs offres
            </p>
          </div>
          
          <RegisterForm onSubmit={handleRegister} />
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Vous avez déjà un compte? {" "}
              <Link to="/login" className="text-primary hover:underline">
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      {showAlert && (
        <AlertMessage 
          message="Inscription réussie! Redirection vers la page de connexion..."
          type="success"
          onClose={() => setShowAlert(false)}
        />
      )}
    </Layout>
  );
};

export default Register;
