import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import Text from '@/components/atoms/Text';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import AppButton from '@/components/atoms/AppButton';
import { Edit, Trash2, PlusCircle, Database } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AdminServices = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchServices = useCallback(async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('services')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setServices(data);
        } catch (error) {
            setError(error.message);
            toast({ variant: 'destructive', title: 'Erro ao buscar serviços', description: error.message });
        } finally {
            setLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        fetchServices();
    }, [fetchServices]);

    const handleDelete = async (serviceId) => {
        try {
            const { error } = await supabase.from('services').delete().match({ id: serviceId });
            if (error) throw error;
            toast({ title: 'Sucesso!', description: 'Serviço excluído com sucesso.' });
            fetchServices(); // Re-fetch services to update the list
        } catch (error) {
            toast({ variant: 'destructive', title: 'Erro ao excluir serviço', description: error.message });
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <Text as="h1" variant="h2">Gerenciar Serviços</Text>
                <AppButton onClick={() => navigate('/admin/services/new')}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Novo Serviço
                </AppButton>
            </div>

            {loading && <p>Carregando serviços...</p>}
            {error && <Alert variant="destructive"><AlertTitle>Erro</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <Card key={service.id}>
                        <CardHeader>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Text><strong>Preço:</strong> {service.price}</Text>
                            <Text><strong>Duração:</strong> {service.duration}</Text>
                            <div className="flex justify-end space-x-2 pt-4">
                                <AppButton variant="outline" size="sm" onClick={() => navigate(`/admin/services/edit/${service.id}`)}>
                                    <Edit className="h-4 w-4" />
                                </AppButton>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <AppButton variant="destructive" size="sm">
                                            <Trash2 className="h-4 w-4" />
                                        </AppButton>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Essa ação não pode ser desfeita. Isso excluirá permanentemente o serviço.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => handleDelete(service.id)}>Excluir</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AdminServices;