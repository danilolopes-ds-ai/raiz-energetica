import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const MetricCard = ({ title, value, description, icon, trend, color }) => (
  <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
    <div className="p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className={`inline-flex items-center justify-center p-3 rounded-lg ${color}`}>
            <span className="text-2xl">{icon}</span>
          </div>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="flex items-baseline">
              <div className="text-2xl font-semibold text-gray-900">{value}</div>
              {trend && (
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                  trend.type === 'increase' ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  <svg
                    className={`self-center flex-shrink-0 h-5 w-5 ${
                      trend.type === 'increase' ? 'text-emerald-500' : 'text-red-500'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    {trend.type === 'increase' ? (
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                  <span className="sr-only">{trend.type === 'increase' ? 'Increased' : 'Decreased'} by</span>
                  {trend.value}
                </div>
              )}
            </dd>
            <dd className="text-sm text-gray-500">{description}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const RecentActivity = ({ activities }) => (
  <div className="bg-white shadow-sm rounded-lg border border-gray-200">
    <div className="px-6 py-4 border-b border-gray-200">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Atividade Recente</h3>
    </div>
    <div className="p-6">
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 && (
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <div className={`h-10 w-10 rounded-full ${activity.color} flex items-center justify-center ring-8 ring-white`}>
                      <span className="text-white text-sm">{activity.icon}</span>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">{activity.type}</span>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">{activity.description}</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{activity.content}</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <time dateTime={activity.datetime}>{activity.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const QuickActions = () => {
  const actions = [
    {
      title: 'Novo Post',
      description: 'Criar um novo post no blog',
      href: '/admin/posts/new',
      icon: '✍️',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Novo Serviço',
      description: 'Adicionar um novo serviço',
      href: '/admin/services/new',
      icon: '⚡',
      color: 'bg-emerald-500 hover:bg-emerald-600'
    },
    {
      title: 'Ver Contatos',
      description: 'Verificar mensagens recebidas',
      href: '/admin/contacts',
      icon: '📧',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Ações Rápidas</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {actions.map((action) => (
            <Link
              key={action.title}
              to={action.href}
              className="relative group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
            >
              <div>
                <span className={`rounded-lg inline-flex p-3 ${action.color} text-white`}>
                  <span className="text-2xl">{action.icon}</span>
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{action.description}</p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalServices: 0,
    totalTestimonials: 0,
    totalContacts: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [postsResponse, servicesResponse, testimonialsResponse, contactsResponse] = await Promise.all([
        supabase.from('blog_posts').select('id', { count: 'exact' }),
        supabase.from('services').select('id', { count: 'exact' }),
        supabase.from('testimonials').select('id', { count: 'exact' }),
        supabase.from('contacts').select('id', { count: 'exact' })
      ]);

      setStats({
        totalPosts: postsResponse.count || 0,
        totalServices: servicesResponse.count || 0,
        totalTestimonials: testimonialsResponse.count || 0,
        totalContacts: contactsResponse.count || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const metrics = [
    {
      title: 'Total de Posts',
      value: loading ? '...' : stats.totalPosts,
      description: 'Posts publicados no blog',
      icon: '📝',
      color: 'bg-blue-100 text-blue-600',
      trend: null
    },
    {
      title: 'Serviços Ativos',
      value: loading ? '...' : stats.totalServices,
      description: 'Serviços oferecidos',
      icon: '⚡',
      color: 'bg-emerald-100 text-emerald-600',
      trend: null
    },
    {
      title: 'Depoimentos',
      value: loading ? '...' : stats.totalTestimonials,
      description: 'Avaliações de clientes',
      icon: '💬',
      color: 'bg-purple-100 text-purple-600',
      trend: null
    },
    {
      title: 'Contatos Recebidos',
      value: loading ? '...' : stats.totalContacts,
      description: 'Mensagens de contato',
      icon: '📧',
      color: 'bg-yellow-100 text-yellow-600',
      trend: null
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'Novo contato',
      description: 'Mensagem recebida através do formulário',
      content: 'Cliente interessado em consulta de radiestesia',
      date: 'Há 2 horas',
      datetime: '2024-01-20T12:00:00',
      icon: '📧',
      color: 'bg-yellow-500'
    },
    {
      id: 2,
      type: 'Post publicado',
      description: 'Novo artigo foi publicado no blog',
      content: 'Como a radiestesia pode transformar sua vida',
      date: 'Ontem',
      datetime: '2024-01-19T10:30:00',
      icon: '📝',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      type: 'Depoimento aprovado',
      description: 'Novo depoimento foi adicionado',
      content: 'Avaliação 5 estrelas de Maria Silva',
      date: '2 dias atrás',
      datetime: '2024-01-18T15:45:00',
      icon: '💬',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Visão geral do sistema de administração do site Raiz Energética
        </p>
      </div>

      {/* Metrics */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Métricas Gerais</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>
      </div>

      {/* Quick Actions and Recent Activity */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <QuickActions />
        <RecentActivity activities={recentActivities} />
      </div>

      {/* Additional Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Bem-vindo ao painel administrativo!</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                Este é o painel de controle do site Raiz Energética. Aqui você pode gerenciar posts do blog, 
                serviços oferecidos, depoimentos de clientes e visualizar mensagens de contato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;