
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogin = (email: string, password: string) => {
    // This is just a mock login - in a real app, you'd call an API
    console.log("Login attempt:", { email, password });
    
    // Mock successful login
    setTimeout(() => {
      // Redirect to dashboard if admin, or home if regular user
      if (email === "admin@example.com" && password === "password") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10 bg-gray-50">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Connectez-vous à votre compte</h1>
            <p className="text-gray-600 mt-2">
              Bienvenue sur SportShop
            </p>
          </div>
          
          <LoginForm onSubmit={handleLogin} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
