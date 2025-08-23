import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppButton from '@/components/atoms/AppButton';
import Logo from '@/components/atoms/Logo';
import { supabase } from '@/lib/supabase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      
      toast({
        title: 'Registro realizado com sucesso!',
        description: 'Verifique seu e-mail para confirmar a conta.',
      });
      navigate('/login');
    } catch (error) {
      toast({
        title: 'Erro no Registro',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen hero-pattern">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md mx-auto shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Logo />
            </div>
            <CardTitle>Crie sua Conta</CardTitle>
            <CardDescription>Acesse o painel de administração</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Crie uma senha forte"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <AppButton type="submit" className="w-full" disabled={loading}>
                {loading ? 'Registrando...' : 'Registrar'}
              </AppButton>
            </form>
            <div className="mt-4 text-center text-sm">
              Já tem uma conta?{' '}
              <Link to="/login" className="underline text-[#2D8C5C] hover:text-[#1B4D73]">
                Faça login
              </Link>
            </div>
            <div className="mt-2 text-center text-sm">
              <Link to="/" className="underline text-gray-500 hover:text-gray-700">
                Voltar para o site
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;