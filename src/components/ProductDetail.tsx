
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

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

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
  const images = product.images || [product.image, product.image, product.image];

  const features = product.features || [
    '뛰어난 통기성과 수분 흡수',
    '압축 기술로 혈액 순환 개선',
    '내구성이 뛰어난 소재',
    '발가락 부분 강화 처리',
    '미끄럼 방지 기능'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">상품 상세</h2>
            <Button variant="ghost" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              
              <div className="flex space-x-2 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-neon-green' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-2xl font-bold text-neon-green">₩{product.price.toLocaleString()}</p>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">상품 설명</h3>
                <p className="text-gray-600">
                  {product.description || 
                  'Compro의 프리미엄 러닝 양말로 최고의 성능과 편안함을 경험하세요. 혁신적인 기술과 뛰어난 소재로 제작된 이 양말은 모든 러닝 활동에 완벽한 선택입니다.'}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold mb-2">주요 특징</h3>
                <ul className="space-y-1">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="text-neon-green mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Size Selection */}
              <div>
                <h3 className="font-semibold mb-3">사이즈 선택</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? 'bg-neon-green text-black hover:bg-neon-yellow' : ''}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-semibold mb-3">수량</h3>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="font-semibold w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  className="w-full bg-neon-green text-black hover:bg-neon-yellow font-semibold"
                  disabled={!selectedSize}
                >
                  장바구니 담기
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-neon-green text-neon-green hover:bg-neon-green hover:text-black"
                  disabled={!selectedSize}
                >
                  바로 구매
                </Button>
              </div>

              {/* Shipping Info */}
              <Card>
                <CardContent className="p-4 space-y-2 text-sm text-gray-600">
                  <div>📦 <strong>무료배송</strong> 30,000원 이상 주문시</div>
                  <div>🔄 <strong>교환/환불</strong> 구매일로부터 30일 이내</div>
                  <div>🚚 <strong>배송기간</strong> 주문 후 1-3일 (영업일 기준)</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
