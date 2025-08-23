import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '@/components/atoms/Text';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import AppButton from '@/components/atoms/AppButton';
import { PlusCircle, Edit, Trash, Database, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AdminPosts = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('date', { ascending: false });
      if (error) throw error;
      setPosts(data || []);
    } catch (err) {
      setError('Não foi possível carregar os posts.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (postId) => {
    if (!window.confirm('Tem certeza que deseja apagar este post? Esta ação não pode ser desfeita.')) {
      return;
    }

    try {
      const { error } = await supabase.from('posts').delete().match({ id: postId });
      if (error) throw error;
      toast({ title: 'Sucesso!', description: 'Post apagado com sucesso.' });
      fetchPosts(); // Re-fetch posts to update the list
    } catch (err) {
      toast({ 
        title: 'Erro!', 
        description: 'Não foi possível apagar o post. Tente novamente.',
        variant: 'destructive' 
      });
      console.error('Erro ao deletar post:', err);
    }
  };

  

  if (loading) {
    return <div className="flex items-center justify-center space-x-2"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Carregando posts...</div>;
  }

  if (error) {
    return <Alert variant="destructive"><AlertTitle>Erro</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Text as="h1" variant="h2">Gerenciar Posts</Text>
        <AppButton onClick={() => navigate('/admin/posts/new')}>
          <PlusCircle className="mr-2 h-4 w-4" /> Novo Post
        </AppButton>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>
                    <Badge variant={post.status === 'Publicado' ? 'default' : 'secondary'}
                      className={post.status === 'Publicado' ? 'bg-green-500' : ''}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(post.date).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell className="text-right">
                    <AppButton variant="ghost" size="icon" onClick={() => navigate(`/admin/posts/edit/${post.id}`)}>
                      <Edit className="h-4 w-4" />
                    </AppButton>
                    <AppButton variant="ghost" size="icon" onClick={() => handleDelete(post.id)} className="text-red-500 hover:text-red-600">
                      <Trash className="h-4 w-4" />
                    </AppButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPosts;