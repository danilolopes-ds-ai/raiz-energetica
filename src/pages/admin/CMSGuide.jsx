import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Database, Edit, Image as ImageIcon, Type, CheckCircle } from 'lucide-react';
import AppButton from '@/components/atoms/AppButton';
import { useToast } from '@/components/ui/use-toast';

const CMSGuide = () => {
  const { toast } = useToast();

  const handleConnect = () => {
    toast({
      title: "Conexão com Supabase",
      description: "Para conectar, clique no botão do Supabase no canto superior direito da tela e siga as instruções.",
    });
  };

  const features = [
    { icon: Type, text: "Edite textos e títulos em qualquer página." },
    { icon: ImageIcon, text: "Troque imagens e banners com facilidade." },
    { icon: Edit, text: "Atualize seus serviços, preços e descrições." },
    { icon: Edit, text: "Crie e gerencie posts para o seu blog." },
    { icon: Edit, text: "Aprove e publique depoimentos de clientes." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <Text as="h1" variant="h2">Seu Site, Suas Regras!</Text>
        <Text variant="lead">
          Bem-vindo ao seu painel de controle de conteúdo (CMS).
        </Text>
      </div>

      <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle>O que é um CMS?</CardTitle>
        </CardHeader>
        <CardContent>
          <Text>
            CMS significa "Sistema de Gerenciamento de Conteúdo". É uma ferramenta poderosa que permite que você
            altere o conteúdo do seu site (textos, imagens, etc.) através de uma interface amigável,
            <strong> sem precisar escrever uma única linha de código.</strong>
          </Text>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>O que você poderá fazer?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <Text>{feature.text}</Text>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Alert variant="default" className="border-blue-500 text-blue-800">
        <Database className="h-4 w-4 !text-blue-500" />
        <AlertTitle className="font-bold">Passo Final: Ative seu CMS</AlertTitle>
        <AlertDescription>
          Para desbloquear todo esse poder, o último passo é conectar seu site a um banco de dados Supabase.
          Isso irá ativar seu painel e permitir que você comece a editar seu conteúdo ao vivo.
        </AlertDescription>
        <div className="mt-4">
          <AppButton onClick={handleConnect} className="bg-blue-500 hover:bg-blue-600 text-white">
            <Database className="mr-2 h-4 w-4" />
            Conectar ao Supabase Agora
          </AppButton>
        </div>
      </Alert>
    </motion.div>
  );
};

export default CMSGuide;