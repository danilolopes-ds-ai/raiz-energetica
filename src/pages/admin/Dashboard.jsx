import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import Text from '@/components/atoms/Text';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileText, MessageSquare, Plus, Edit } from 'lucide-react';
import AppButton from '@/components/atoms/AppButton';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalComments: 0
  });
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    
    try {
      // Buscar posts
      const { data: posts, error: postsError } = await supabase
        .from('posts')
        .select('id, title, status, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

      if (postsError) throw postsError;

      // Contar posts por status
      const published = posts?.filter(p => p.status === 'published').length || 0;
      const draft = posts?.filter(p => p.status === 'draft').length || 0;

      setStats({
        totalPosts: posts?.length || 0,
        publishedPosts: published,
        draftPosts: draft,
        totalComments: 0 // TODO: implementar quando tiver tabela de comentários
      });

      setRecentPosts(posts || []);
    } catch (error) {
      console.error('Erro ao carregar dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      {/* Cabeçalho */}
      <motion.div variants={itemVariants}>
        <Text as="h1" variant="h2">
          Bem-vindo, <span className="text-gradient">{user?.email || 'Admin'}</span>!
        </Text>
        <Text variant="lead">Gerencie seus posts e comentários aqui.</Text>
      </motion.div>

      {/* Estatísticas */}
      <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '...' : stats.totalPosts}</div>
              <p className="text-xs text-muted-foreground">
                {stats.publishedPosts} publicados, {stats.draftPosts} rascunhos
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Posts Publicados</CardTitle>
              <FileText className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {loading ? '...' : stats.publishedPosts}
              </div>
              <p className="text-xs text-muted-foreground">Visíveis no blog</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comentários</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalComments}</div>
              <p className="text-xs text-muted-foreground">Em breve</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Ações Rápidas */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <AppButton 
              variant="primary" 
              onClick={() => navigate('/admin/blog/novo')}
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Post
            </AppButton>
            <AppButton 
              variant="secondary" 
              onClick={() => navigate('/admin/blog/gerenciar')}
            >
              <Edit className="w-4 h-4 mr-2" />
              Gerenciar Posts
            </AppButton>
          </CardContent>
        </Card>
      </motion.div>

      {/* Posts Recentes */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Posts Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-gray-500">Carregando...</p>
            ) : recentPosts.length === 0 ? (
              <p className="text-sm text-gray-500">Nenhum post encontrado. Crie seu primeiro post!</p>
            ) : (
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => navigate(`/admin/blog/editar/${post.id}`)}
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{post.title}</h3>
                      <p className="text-xs text-gray-500">
                        {new Date(post.created_at).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                      </span>
                      <Edit className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;