import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import Text from '@/components/atoms/Text';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Database, Zap, ShieldCheck } from 'lucide-react';
import AppButton from '@/components/atoms/AppButton';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Posts no Blog', value: '12', icon: Database },
    { title: 'Serviços Ativos', value: '3', icon: Zap },
    { title: 'Depoimentos', value: '8', icon: ShieldCheck },
  ];

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
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Text as="h1" variant="h2">Bem-vindo, <span className="text-gradient">{user?.email || 'Admin'}</span>!</Text>
        <Text variant="lead">Gerencie o conteúdo do seu site aqui.</Text>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Alert>
          <Database className="h-4 w-4" />
          <AlertTitle>Conecte o Supabase!</AlertTitle>
          <AlertDescription>
            Os dados abaixo são de demonstração. Conecte sua conta Supabase para gerenciar conteúdo real e habilitar todas as funcionalidades do painel.
          </AlertDescription>
        </Alert>
      </motion.div>

      <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={itemVariants}>
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">Conteúdo de demonstração</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <AppButton variant="primary">Novo Post</AppButton>
            <AppButton variant="secondary">Adicionar Depoimento</AppButton>
            <AppButton variant="secondary">Editar Serviço</AppButton>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;