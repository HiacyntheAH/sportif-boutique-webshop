
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface RegisterFormProps {
  onSubmit: (formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => void;
  isLoading?: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear password error when user types in password fields
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Les mots de passe ne correspondent pas');
      return;
    }
    
    onSubmit({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

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
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="••••••••"
          minLength={8}
        />
        <p className="text-xs text-gray-500 mt-1">
          Le mot de passe doit contenir au moins 8 caractères
        </p>
      </div>

      <div className="form-control">
        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="••••••••"
        />
        {passwordError && (
          <p className="text-sm text-red-500 mt-1">{passwordError}</p>
        )}
      </div>

      <div className="flex items-center">
        <input 
          type="checkbox" 
          id="terms" 
          className="h-4 w-4 border border-gray-300 rounded"
          required
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          J'accepte les <Link to="/terms" className="text-primary hover:underline">Conditions d'utilisation</Link> et la <Link to="/privacy" className="text-primary hover:underline">Politique de confidentialité</Link>
        </label>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary w-full" 
        disabled={isLoading}
      >
        {isLoading ? 'Inscription en cours...' : 'S\'inscrire'}
      </button>

      <div className="text-center text-sm text-gray-600">
        Vous avez déjà un compte?{' '}
        <Link to="/login" className="text-primary hover:underline font-medium">
          Se connecter
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
