import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { HelmetProvider } from 'react-helmet-async';

// Components (Eager Load - Core)
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/utils/ScrollToTop';
import AnalyticsProvider from '@/components/utils/AnalyticsProvider';
import ProtectedRoute from '@/components/utils/ProtectedRoute'; // Autenticação é crítica, manter eager ou lazy depende da estratégia, mas lazy é ok aqui.
import ErrorBoundary from '@/components/ErrorBoundary'; // VOCÊ TINHA O ARQUIVO, USE-O!
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/AuthContext';

// Pages (Lazy Load - Code Splitting)
// Padronizando tudo com '@' para consistência
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Contact = lazy(() => import('@/pages/Contact'));
const Helena = lazy(() => import('@/pages/Helena'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const Agendar = lazy(() => import('@/pages/Agendar'));
const Obrigado = lazy(() => import('@/pages/Obrigado'));
const LimpezaEnergetica = lazy(() => import('@/pages/LimpezaEnergetica'));
const RadiestesiaGenetica = lazy(() => import('@/pages/RadiestesiaGenetica'));
const HarmoniaGeracional = lazy(() => import('@/pages/HarmoniaGeracional'));
const Quiz = lazy(() => import('@/pages/Quiz'));

// Admin Pages (Lazy Load - Crítico para performance mobile)
const AdminLayout = lazy(() => import('@/pages/admin/AdminLayout'));
const Dashboard = lazy(() => import('@/pages/admin/Dashboard'));
const AdminPosts = lazy(() => import('@/pages/admin/AdminPosts'));
// const AdminServices = lazy(() => import('@/pages/admin/AdminServices')); // Não estava sendo usado nas rotas abaixo, verifique se precisa
const CreatePost = lazy(() => import('@/pages/admin/CreatePost'));
const ManagePosts = lazy(() => import('@/pages/admin/ManagePosts'));
const AdminLogin = lazy(() => import('@/pages/admin/AdminLogin'));

// Componente de Loading para o Suspense
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <AnalyticsProvider>
            <ScrollToTop />
            {/* O ErrorBoundary deve envolver as rotas para capturar falhas de renderização/lazy loading */}
            <ErrorBoundary>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/limpeza-energetica" element={<LimpezaEnergetica />} />
                  <Route path="/radiestesia-genetica" element={<RadiestesiaGenetica />} />
                  <Route path="/harmonia-geracional" element={<HarmoniaGeracional />} />
                  <Route path="/quiz" element={<Quiz />} />
                  
                  {/* Layout Routes */}
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="sobre" element={<About />} />
                    <Route path="servicos" element={<Services />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:slug" element={<BlogPost />} />
                    <Route path="contato" element={<Contact />} />
                    <Route path="helena" element={<Helena />} />
                    <Route path="agendar" element={<Agendar />} />
                    <Route path="obrigado" element={<Obrigado />} />
                  </Route>

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />

                  <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="blog/novo" element={<CreatePost />} />
                    <Route path="blog/gerenciar" element={<ManagePosts />} />
                    <Route path="blog/editar/:id" element={<CreatePost />} />
                  </Route>

                </Routes>
              </Suspense>
            </ErrorBoundary>
            <Toaster />
            <SpeedInsights />
          </AnalyticsProvider>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;