
import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

interface AlertMessageProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
}

const AlertMessage = ({ message, type, duration = 5000, onClose }: AlertMessageProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const bgColor = {
    success: 'bg-green-100 border-green-500 text-green-800',
    error: 'bg-red-100 border-red-500 text-red-800',
    info: 'bg-blue-100 border-blue-500 text-blue-800',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-800',
  }[type];

  const iconColor = {
    success: 'text-green-500',
    error: 'text-red-500',
    info: 'text-blue-500',
    warning: 'text-yellow-500',
  }[type];

  return (
    <div className={`fixed top-20 right-4 z-50 p-4 rounded-md border-l-4 shadow-md max-w-xs animate-slide-in ${bgColor}`}>
      <div className="flex items-start">
        <div className={`mr-2 ${iconColor}`}>
          {type === 'success' ? <Check size={18} /> : <X size={18} />}
        </div>
        <div className="flex-grow">{message}</div>
        <button 
          onClick={() => {
            setVisible(false);
            if (onClose) onClose();
          }}
          className="ml-2 text-gray-500 hover:text-gray-700"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default AlertMessage;
