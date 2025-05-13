
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import AlertMessage from '../components/ui/alert-message';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  
  const handleLogin = (email: string, password: string) => {
    // This is just a mock login - in a real app, you'd call an API
    console.log("Login attempt:", { email, password });
    
    // Mock successful login
    if (email === "admin@example.com" && password === "password") {
      setAlertMessage("Connexion réussie! Redirection vers le tableau de bord...");
      setAlertType('success');
      setShowAlert(true);
      
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else if (email && password) {
      setAlertMessage("Connexion réussie! Redirection vers l'accueil...");
      setAlertType('success');
      setShowAlert(true);
      
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setAlertMessage("Veuillez remplir tous les champs");
      setAlertType('error');
      setShowAlert(true);
    }
  };

  return (
    <Layout>
      <div className="py-10 bg-gray-50">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Connectez-vous à votre compte</h1>
            <p className="text-gray-600 mt-2">
              Bienvenue sur SportShop
            </p>
          </div>
          
          <LoginForm onSubmit={handleLogin} />
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Vous n'avez pas de compte? {" "}
              <Link to="/register" className="text-primary hover:underline">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      {showAlert && (
        <AlertMessage 
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlert(false)}
        />
      )}
    </Layout>
  );
};

export default Login;
