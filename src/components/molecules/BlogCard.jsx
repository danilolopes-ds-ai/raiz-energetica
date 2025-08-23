import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppButton from '@/components/atoms/AppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, index, getCategoryName, formatDate, isFeaturedLayout = false }) => {
  return (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * (index % (isFeaturedLayout ? 2 : 3)), duration: 0.6 }}
      className="h-full"
    >
      <Card className="card-hover h-full overflow-hidden flex flex-col">
        <div className="relative">
          <img 
            className={`w-full object-cover ${isFeaturedLayout ? 'h-48' : 'h-40'}`}
            alt={post.title}
           src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
          <Badge className={`absolute top-3 left-3 bg-[#2D8C5C] text-white ${isFeaturedLayout ? '' : 'text-xs'}`}>
            {getCategoryName(post.category)}
          </Badge>
          {post.featured && !isFeaturedLayout && (
            <Badge className="absolute top-3 right-3 bg-[#B8950A] text-white text-xs">
              Destaque
            </Badge>
          )}
        </div>
        <CardHeader className={`${isFeaturedLayout ? '' : 'pb-2'}`}>
          <CardTitle className={`${isFeaturedLayout ? 'text-xl' : 'text-lg'} hover:text-[#2D8C5C] transition-colors ${isFeaturedLayout ? '' : 'line-clamp-2'}`}>
            <Link to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </CardTitle>
          <div className={`flex items-center space-x-${isFeaturedLayout ? '4' : '3'} text-sm text-gray-500 ${isFeaturedLayout ? '' : 'text-xs'}`}>
            {isFeaturedLayout && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
            )}
            <div className="flex items-center">
              <Calendar className={`mr-1 ${isFeaturedLayout ? 'w-4 h-4' : 'w-3 h-3'}`} />
              {formatDate(post.date)}
            </div>
            <span>{post.readTime} de leitura</span>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className={`text-gray-600 mb-4 flex-grow ${isFeaturedLayout ? '' : 'text-sm line-clamp-3'}`}>{post.excerpt}</p>
          <AppButton 
            asChild
            variant="secondary"
            size={isFeaturedLayout ? 'default' : 'sm'}
            className={isFeaturedLayout ? '' : 'w-full'}
          >
            <Link to={`/blog/${post.id}`}>
              Ler Artigo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AppButton>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard;