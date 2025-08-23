import React from 'react';
import Text from '@/components/atoms/Text';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import AppButton from '@/components/atoms/AppButton';
import { PlusCircle, Edit, Trash, Star, Database } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AdminTestimonials = () => {
  const { toast } = useToast();
  const testimonials = [
    { id: 1, name: 'Maria S.', text: 'Após anos de dores de cabeça, finalmente descobri a causa...', rating: 5, status: 'Aprovado' },
    { id: 2, name: 'João P.', text: 'A combinação da acupuntura com a análise energética fez toda a diferença...', rating: 5, status: 'Aprovado' },
    { id: 3, name: 'Ana C.', text: 'As terapias complementares me ajudaram a manter os resultados...', rating: 4, status: 'Pendente' },
  ];

  const handleAction = () => {
    toast({
      title: "Funcionalidade em breve!",
      description: "Conecte sua conta Supabase para habilitar a gestão de depoimentos.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Text as="h1" variant="h2">Gerenciar Depoimentos</Text>
        <AppButton onClick={handleAction}>
          <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Depoimento
        </AppButton>
      </div>

      <Alert>
        <Database className="h-4 w-4" />
        <AlertTitle>Apenas Demonstração</AlertTitle>
        <AlertDescription>
          Para gerenciar os depoimentos, você precisa conectar sua conta Supabase.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        {testimonials.map(testimonial => (
          <Card key={testimonial.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AppButton variant="ghost" size="icon" onClick={handleAction}>
                    <Edit className="h-4 w-4" />
                  </AppButton>
                  <AppButton variant="ghost" size="icon" onClick={handleAction} className="text-red-500 hover:text-red-600">
                    <Trash className="h-4 w-4" />
                  </AppButton>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic text-gray-600">"{testimonial.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminTestimonials;