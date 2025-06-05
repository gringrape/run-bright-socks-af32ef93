
import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ProductDetail from '@/components/ProductDetail';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  styles: number;
  price: number;
  image: string;
  category: string;
  description?: string;
  features?: string[];
  images?: string[];
}

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Mock product data
  const products: Product[] = [
    {
      id: 1,
      name: "Compro Light Cushion No Show",
      styles: 3,
      price: 18000,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      category: "러닝",
      description: "가볍고 통기성이 뛰어난 노쇼 러닝 양말입니다.",
      features: [
        "가볍고 통기성 뛰어난 소재",
        "발목 위로 올라오지 않는 노쇼 디자인",
        "발가락 부분 강화 처리",
        "항균 처리로 냄새 방지"
      ]
    },
    {
      id: 2,
      name: "Compro Max Cushion Crew",
      styles: 4,
      price: 22000,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      category: "러닝",
      description: "최대 쿠셔닝으로 장거리 러닝에 최적화된 양말입니다."
    },
    {
      id: 3,
      name: "Compro Compression Quarter",
      styles: 2,
      price: 25000,
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=400&fit=crop",
      category: "스포츠",
      description: "압축 기능으로 혈액 순환을 도와주는 전문 스포츠 양말입니다."
    },
    {
      id: 4,
      name: "Compro Elite Performance",
      styles: 5,
      price: 28000,
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=400&fit=crop",
      category: "프로",
      description: "프로 운동선수들이 선택하는 최고 성능의 양말입니다."
    },
    {
      id: 5,
      name: "Compro Kids Fun Run",
      styles: 6,
      price: 15000,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      category: "키즈",
      description: "아이들을 위한 편안하고 재미있는 디자인의 러닝 양말입니다."
    },
    {
      id: 6,
      name: "Compro Trail Master",
      styles: 3,
      price: 32000,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      category: "트레일",
      description: "험난한 트레일 러닝을 위한 내구성 강화 양말입니다."
    }
  ];

  const categories = ['전체', '러닝', '스포츠', '프로', '키즈', '트레일'];
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredProducts = selectedCategory === '전체' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Run Beyond Limits with <span className="text-neon-green">Compro</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            혁신적인 기술과 뛰어난 품질로 제작된 고성능 러닝 양말로 
            새로운 차원의 러닝을 경험하세요
          </p>
          <Button className="bg-neon-green text-black hover:bg-neon-yellow font-semibold px-8 py-3 text-lg">
            지금 쇼핑하기
          </Button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
                ${selectedCategory === category 
                  ? 'bg-neon-green text-black hover:bg-neon-yellow' 
                  : 'hover:border-neon-green hover:text-neon-green'
                }
                transition-all duration-200
              `}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard 
                product={product} 
                onClick={setSelectedProduct}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Promise */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🏃‍♂️</div>
              <h3 className="text-xl font-semibold mb-2">최고의 성능</h3>
              <p className="text-gray-600">첨단 기술로 제작된 고성능 러닝 양말</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">검증된 품질</h3>
              <p className="text-gray-600">수많은 러너들이 인정한 품질과 내구성</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">빠른 배송</h3>
              <p className="text-gray-600">주문 후 1-3일 내 무료배송</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-neon-green mb-4">Compro</h3>
              <p className="text-gray-400">
                최고의 러닝 양말로 당신의 러닝을 한 단계 업그레이드하세요.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">쇼핑</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-neon-green transition-colors">남성</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">여성</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">키즈</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">고객지원</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-neon-green transition-colors">배송 안내</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">교환/환불</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">고객센터</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-neon-green transition-colors">브랜드 소개</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">채용정보</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">이용약관</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Compro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Index;
