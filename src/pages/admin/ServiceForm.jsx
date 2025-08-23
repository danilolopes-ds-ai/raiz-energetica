import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import AppButton from '@/components/atoms/AppButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Text from '@/components/atoms/Text';

const ServiceForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [service, setService] = useState({
        id: '',
        title: '',
        subtitle: '',
        description: '',
        price: '',
        duration: '',
        icon: '',
        category: '',
        features: '[]',
        benefits: '[]',
        image: '',
        cta: '{}',
        detailsPage: ''
    });
    const [loading, setLoading] = useState(false);
    const isEditing = Boolean(id);

    useEffect(() => {
        if (isEditing) {
            const fetchService = async () => {
                setLoading(true);
                const { data, error } = await supabase
                    .from('services')
                    .select('*')
                    .eq('id', id)
                    .single();
                
                if (error) {
                    toast({ variant: 'destructive', title: 'Erro ao buscar serviço', description: error.message });
                    navigate('/admin/services');
                } else if (data) {
                    setService({
                        ...data,
                        features: JSON.stringify(data.features || [], null, 2),
                        benefits: JSON.stringify(data.benefits || [], null, 2),
                        cta: JSON.stringify(data.cta || {}, null, 2),
                    });
                }
                setLoading(false);
            };
            fetchService();
        }
    }, [id, isEditing, navigate, toast]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let { id: serviceId, created_at, ...serviceData } = service;

            // Validar e converter campos JSON
            try {
                serviceData.features = JSON.parse(service.features);
                serviceData.benefits = JSON.parse(service.benefits);
                serviceData.cta = JSON.parse(service.cta);
            } catch (jsonError) {
                throw new Error('JSON inválido nos campos de Características, Benefícios ou CTA.');
            }

            let error;
            if (isEditing) {
                const { error: updateError } = await supabase
                    .from('services')
                    .update(serviceData)
                    .eq('id', id);
                error = updateError;
            } else {
                 // Para novos serviços, o ID é o 'id' do estado
                const { error: insertError } = await supabase
                    .from('services')
                    .insert({ ...serviceData, id: service.id });
                error = insertError;
            }

            if (error) throw error;

            toast({ title: 'Sucesso!', description: `Serviço ${isEditing ? 'atualizado' : 'criado'} com sucesso.` });
            navigate('/admin/services');

        } catch (error) {
            toast({ variant: 'destructive', title: 'Erro ao salvar serviço', description: error.message });
        } finally {
            setLoading(false);
        }
    };

    if (loading && isEditing) return <p>Carregando formulário...</p>;

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Text as="h1" variant="h2">{isEditing ? 'Editar Serviço' : 'Novo Serviço'}</Text>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="id">ID do Serviço (ex: S006)</Label>
                    <Input id="id" name="id" value={service.id} onChange={handleChange} required disabled={isEditing} />
                </div>
                <div>
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" name="title" value={service.title} onChange={handleChange} required />
                </div>
                 <div>
                    <Label htmlFor="subtitle">Subtítulo</Label>
                    <Input id="subtitle" name="subtitle" value={service.subtitle} onChange={handleChange} />
                </div>
                <div>
                    <Label htmlFor="price">Preço (ex: 99.00)</Label>
                    <Input id="price" name="price" value={service.price} onChange={handleChange} />
                </div>
                <div>
                    <Label htmlFor="duration">Duração (ex: 60 min)</Label>
                    <Input id="duration" name="duration" value={service.duration} onChange={handleChange} />
                </div>
                 <div>
                    <Label htmlFor="category">Categoria (ex: basic, premium)</Label>
                    <Input id="category" name="category" value={service.category} onChange={handleChange} />
                </div>
                 <div>
                    <Label htmlFor="icon">Ícone (Nome do Lucide Icon, ex: Activity)</Label>
                    <Input id="icon" name="icon" value={service.icon} onChange={handleChange} />
                </div>
                 <div>
                    <Label htmlFor="detailsPage">Link da Página de Detalhes (ex: /meu-servico)</Label>
                    <Input id="detailsPage" name="detailsPage" value={service.detailsPage} onChange={handleChange} />
                </div>
            </div>

            <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" name="description" value={service.description} onChange={handleChange} rows={4} />
            </div>

            <div>
                <Label htmlFor="image">Descrição da Imagem (para SEO)</Label>
                <Input id="image" name="image" value={service.image} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                    <Label htmlFor="features">Características (JSON Array)</Label>
                    <Textarea id="features" name="features" value={service.features} onChange={handleChange} rows={10} />
                </div>
                <div className="md:col-span-1">
                    <Label htmlFor="benefits">Benefícios (JSON Array)</Label>
                    <Textarea id="benefits" name="benefits" value={service.benefits} onChange={handleChange} rows={10} />
                </div>
                <div className="md:col-span-1">
                    <Label htmlFor="cta">CTA (JSON Object)</Label>
                    <Textarea id="cta" name="cta" value={service.cta} onChange={handleChange} rows={10} />
                </div>
            </div>

            <div className="flex justify-end space-x-4">
                <AppButton type="button" variant="ghost" onClick={() => navigate('/admin/services')}>Cancelar</AppButton>
                <AppButton type="submit" disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar Serviço'}
                </AppButton>
            </div>
        </form>
    );
};

export default ServiceForm;
