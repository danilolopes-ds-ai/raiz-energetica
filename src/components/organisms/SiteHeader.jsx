import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import Logo from '@/components/atoms/Logo';
import AppButton from '@/components/atoms/AppButton';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  const handleLogout = () => {
    logout();
    toast({
      title: "Logout realizado com sucesso!",
      description: "Esperamos ver você em breve.",
    });
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#2D8C5C] ${
                  isActive(item.href) ? 'text-[#2D8C5C] font-semibold' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <AppButton asChild variant="secondary" size="sm">
                  <Link to="/admin"><LayoutDashboard className="w-4 h-4 mr-2" /> Painel Admin</Link>
                </AppButton>
                <AppButton onClick={handleLogout} variant="ghost" size="sm">
                  <LogOut className="w-4 h-4 mr-2" /> Sair
                </AppButton>
              </div>
            ) : (
              <AppButton asChild variant="primary">
                <Link to="/login">Falar com Helena / Login</Link>
              </AppButton>
            )}
          </div>

          <div className="md:hidden">
            <AppButton
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </AppButton>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200 bg-white/95"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors hover:text-[#2D8C5C] px-3 py-2 rounded-md ${
                    isActive(item.href) ? 'text-[#2D8C5C] bg-green-50' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
               {isAuthenticated ? (
                <div className="border-t pt-4 space-y-3">
                   <AppButton asChild variant="secondary" className="w-full">
                    <Link to="/admin" onClick={() => setIsMenuOpen(false)}><LayoutDashboard className="w-4 h-4 mr-2"/> Painel Admin</Link>
                  </AppButton>
                  <AppButton onClick={() => { handleLogout(); setIsMenuOpen(false); }} variant="ghost" className="w-full">
                    <LogOut className="w-4 h-4 mr-2"/> Sair
                  </AppButton>
                </div>
              ) : (
                <AppButton 
                  asChild
                  variant="primary"
                  className="w-full mt-4"
                >
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    Falar com Helena / Login
                  </Link>
                </AppButton>
              )}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default SiteHeader;