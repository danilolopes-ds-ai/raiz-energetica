import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from './pages/Services';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import Helena from '@/pages/Helena';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import AdminLayout from '@/pages/admin/AdminLayout';
import Dashboard from '@/pages/admin/Dashboard';
import AdminPosts from '@/pages/admin/AdminPosts';
import AdminServices from '@/pages/admin/AdminServices';
import PostForm from '@/pages/admin/PostForm';
import ServiceForm from '@/pages/admin/ServiceForm';
import AdminTestimonials from '@/pages/admin/AdminTestimonials';
import GerarDiagnostico from '@/pages/admin/gerar-diagnostico';
import CMSGuide from '@/pages/admin/CMSGuide';
import CreatePost from '@/pages/admin/CreatePost';
import ManagePosts from '@/pages/admin/ManagePosts';
import AdminLogin from '@/pages/admin/AdminLogin';
import ProtectedRoute from '@/components/utils/ProtectedRoute';
import ScrollToTop from '@/components/utils/ScrollToTop';
import AnalyticsProvider from '@/components/utils/AnalyticsProvider';
import Agendar from '@/pages/Agendar';
import Obrigado from '@/pages/Obrigado';
import Diagnostico from '@/pages/Diagnostico';
import LimpezaEnergetica from '@/pages/LimpezaEnergetica';
import RadiestesiaGenetica from '@/pages/RadiestesiaGenetica';
import HarmoniaGeracional from '@/pages/HarmoniaGeracional';
import Quiz from '@/pages/Quiz';
import { Toaster } from '@/components/ui/toaster';

import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/AuthContext';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <AnalyticsProvider>
            <ScrollToTop />
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

              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }>
                <Route index element={<CMSGuide />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="posts" element={<AdminPosts />} />
                <Route path="posts/new" element={<PostForm />} />
                <Route path="posts/edit/:id" element={<PostForm />} />
                <Route path="blog/novo" element={<CreatePost />} />
                <Route path="blog/gerenciar" element={<ManagePosts />} />
                <Route path="blog/editar/:id" element={<CreatePost />} />
                <Route path="services" element={<AdminServices />} />
                <Route path="services/new" element={<ServiceForm />} />
                <Route path="services/edit/:id" element={<ServiceForm />} />
                <Route path="testimonials" element={<AdminTestimonials />} />
                <Route path="gerar-diagnostico" element={<GerarDiagnostico />} />
              </Route>

            </Routes>
            <Toaster />
            <SpeedInsights />
          </AnalyticsProvider>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;