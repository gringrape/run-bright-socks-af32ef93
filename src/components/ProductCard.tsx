
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  styles: number;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200 hover:border-neon-green/50"
      onClick={() => onClick(product)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-neon-green text-black px-2 py-1 rounded-full text-xs font-bold">
              NEW
            </span>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {product.category}
            </span>
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-neon-green transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {product.styles} Styles
            </span>
            <span className="text-lg font-bold text-gray-900">
              ₩{product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
