
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  isLoading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData.email, formData.password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="nom@exemple.com"
        />
      </div>

      <div className="form-control">
        <div className="flex items-center justify-between">
          <label htmlFor="password">Mot de passe</label>
          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
            Mot de passe oublié?
          </Link>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="••••••••"
        />
      </div>

      <div className="flex items-center">
        <input 
          type="checkbox" 
          id="remember" 
          className="h-4 w-4 border border-gray-300 rounded"
        />
        <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
          Se souvenir de moi
        </label>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary w-full" 
        disabled={isLoading}
      >
        {isLoading ? 'Connexion en cours...' : 'Se connecter'}
      </button>

      <div className="text-center text-sm text-gray-600">
        Vous n'avez pas de compte?{' '}
        <Link to="/register" className="text-primary hover:underline font-medium">
          S'inscrire
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
