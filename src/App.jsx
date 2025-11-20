import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from '@/components/Layout';
import React, { Suspense, lazy } from 'react';
import ScrollToTop from '@/components/utils/ScrollToTop';
import AnalyticsProvider from '@/components/utils/AnalyticsProvider';
import { Toaster } from '@/components/ui/toaster';
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Contact = lazy(() => import('@/pages/Contact'));
const Helena = lazy(() => import('@/pages/Helena'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const AdminLayout = lazy(() => import('@/pages/admin/AdminLayout'));
const Dashboard = lazy(() => import('@/pages/admin/Dashboard'));
const AdminPosts = lazy(() => import('@/pages/admin/AdminPosts'));
const AdminServices = lazy(() => import('@/pages/admin/AdminServices'));
const PostForm = lazy(() => import('@/pages/admin/PostForm'));
const ServiceForm = lazy(() => import('@/pages/admin/ServiceForm'));
const AdminTestimonials = lazy(() => import('@/pages/admin/AdminTestimonials'));
const GerarDiagnostico = lazy(() => import('@/pages/admin/gerar-diagnostico'));
const CMSGuide = lazy(() => import('@/pages/admin/CMSGuide'));
const CreatePost = lazy(() => import('@/pages/admin/CreatePost'));
const ManagePosts = lazy(() => import('@/pages/admin/ManagePosts'));
const AdminLogin = lazy(() => import('@/pages/admin/AdminLogin'));
const ProtectedRoute = lazy(() => import('@/components/utils/ProtectedRoute'));
const Agendar = lazy(() => import('@/pages/Agendar'));
const Obrigado = lazy(() => import('@/pages/Obrigado'));
const Diagnostico = lazy(() => import('@/pages/Diagnostico'));
const LimpezaEnergetica = lazy(() => import('@/pages/LimpezaEnergetica'));
const RadiestesiaGenetica = lazy(() => import('@/pages/RadiestesiaGenetica'));
const HarmoniaGeracional = lazy(() => import('@/pages/HarmoniaGeracional'));
const Quiz = lazy(() => import('@/pages/Quiz'));

import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/AuthContext';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <AnalyticsProvider>
            <ScrollToTop />
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div></div>}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/test-pdf" element={<GerarDiagnostico />} />
                <Route path="/diagnostico" element={<Diagnostico />} />
                <Route path="/limpeza-energetica" element={<LimpezaEnergetica />} />
                <Route path="/radiestesia-genetica" element={<RadiestesiaGenetica />} />
                <Route path="/harmonia-geracional" element={<HarmoniaGeracional />} />
                <Route path="/quiz" element={<Quiz />} />
                
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

                <Route path="/admin/login" element={<AdminLogin />} />

                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="blog/novo" element={<CreatePost />} />
                  <Route path="blog/gerenciar" element={<ManagePosts />} />
                  <Route path="blog/editar/:id" element={<CreatePost />} />
                </Route>

              </Routes>
            </Suspense>
            <Toaster />
            <SpeedInsights />
          </AnalyticsProvider>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;