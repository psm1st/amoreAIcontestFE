'use client';

import { useSearchParams } from 'next/navigation';
import ProductDetailHeader from '../_components/ProductDetailHeader';
import { products } from '@/types/products';
import Header from '../_components/Header';

export default function DetailPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  
  const product = productId 
    ? products.find((p) => p.id === Number(productId))
    : products[0];

  return (
    <div className="w-full min-h-screen bg-neutral-100">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto px-[100px] py-8">
        <ProductDetailHeader 
          title={product?.title || '그린티 아미노 수분 클렌징 폼 150g'}
          categoryName="스킨케어"
          subcategoryName="클렌징"
        />
      </div>
    </div>
  );
}

