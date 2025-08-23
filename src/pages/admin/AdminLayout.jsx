import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Newspaper, LifeBuoy, Heart, LogOut, Home, BookOpenCheck } from 'lucide-react';
import Logo from '@/components/atoms/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import AppButton from '@/components/atoms/AppButton';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logout realizado com sucesso!",
    });
    navigate('/');
  };

  const navItems = [
    { name: 'Guia CMS', href: '/admin', icon: BookOpenCheck },
    { name: 'Visão Geral', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Posts', href: '/admin/posts', icon: Newspaper },
    { name: 'Serviços', href: '/admin/services', icon: LifeBuoy },
    { name: 'Depoimentos', href: '/admin/testimonials', icon: Heart },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <div className="mb-8">
          <Logo />
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#2D8C5C] text-white'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto space-y-3">
          <AppButton asChild variant="secondary" className="w-full">
            <Link to="/"><Home className="w-4 h-4 mr-2"/> Ver Site</Link>
          </AppButton>
          <AppButton onClick={handleLogout} variant="ghost" className="w-full text-gray-300 hover:text-white hover:bg-gray-700">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </AppButton>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;