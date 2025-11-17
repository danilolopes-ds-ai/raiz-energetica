import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ADMIN_PASSWORD = 'Feemdeus27!';
const AUTH_KEY = 'admin_authenticated';

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se já está autenticado
    const authenticated = sessionStorage.getItem(AUTH_KEY) === 'true';
    setIsAuthenticated(authenticated);
    setLoading(false);

    // Redireciona se não autenticado
    if (!authenticated && !location.pathname.includes('/admin/login')) {
      navigate('/admin/login', { state: { from: location.pathname } });
    }
  }, [navigate, location]);

  return { isAuthenticated, loading };
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = location.state?.from || '/admin/blog/gerenciar';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simula verificação (em produção, fazer no backend)
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem(AUTH_KEY, 'true');
        navigate(from);
      } else {
        setError('Senha incorreta! Tente novamente.');
        setPassword('');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
            Painel Administrativo
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Raiz Energética - Blog
          </p>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha de Acesso
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha"
                required
                autoFocus
                disabled={loading}
                className={error ? 'border-red-500' : ''}
              />
              {error && (
                <p className="text-red-600 text-sm mt-2">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? 'Verificando...' : 'Entrar'}
            </Button>
          </form>

          {/* Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Acesso restrito aos administradores do site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const logout = () => {
  sessionStorage.removeItem(AUTH_KEY);
  window.location.href = '/admin/login';
};

export default AdminLogin;
