import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BlogFilters = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) => {
  const [showAllCategories, setShowAllCategories] = React.useState(false);
  const visibleCategories = showAllCategories ? categories : categories.slice(0, 7);
  const hiddenCategoriesCount = categories.length - visibleCategories.length;

  const getCategoryById = (id) => categories.find(cat => cat.id === id) || categories[0];

  return (
    <section className="py-8 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Buscar artigos por título ou palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          
          <div className="hidden lg:flex flex-wrap gap-2 justify-center">
            {visibleCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-200 ease-in-out transform hover:scale-105 ${selectedCategory === category.id ? 
                  "gradient-primary text-white shadow-lg" : 
                  "border-[#2D8C5C] text-[#2D8C5C] hover:bg-[#2D8C5C]/10 hover:text-[#1B4D73]"
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
            {categories.length > 7 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="border-gray-400 text-gray-600 hover:bg-gray-200"
              >
                {showAllCategories ? <ChevronUp className="w-4 h-4 mr-2" /> : <ChevronDown className="w-4 h-4 mr-2" />}
                {showAllCategories ? "Menos" : `Mais ${hiddenCategoriesCount}`}
              </Button>
            )}
          </div>

          <div className="lg:hidden w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between h-12 text-base border-[#2D8C5C] text-[#2D8C5C]">
                  <div className="flex items-center">
                    {React.createElement(getCategoryById(selectedCategory).icon, { className: "w-4 h-4 mr-2" })}
                    {getCategoryById(selectedCategory).name}
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] max-h-60 overflow-y-auto">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category.id} 
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "bg-[#2D8C5C]/10 text-[#1B4D73]" : ""}
                  >
                    {React.createElement(category.icon, { className: "w-4 h-4 mr-2" })}
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFilters;