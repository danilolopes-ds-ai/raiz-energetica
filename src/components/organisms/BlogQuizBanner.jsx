import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BlogQuizBanner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left font-semibold">
          Problemas se repetindo? <span className="font-normal hidden md:inline">Pode ser sua raiz energética!</span>
        </p>
        <Button asChild variant="secondary" className="bg-white text-amber-700 hover:bg-gray-100 flex-shrink-0">
          <Link to="/quiz">
            Faça o Quiz Gratuito <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogQuizBanner;