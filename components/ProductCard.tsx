'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: number;
}

// Helper function to create URL-friendly slug from product title
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/[()]/g, '')            // Remove parentheses
    .replace(/--+/g, '-')            // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '');        // Remove leading/trailing hyphens
}

export default function ProductCard({ imageSrc, title, price }: ProductCardProps) {
  const productSlug = slugify(title);
  
  return (
    <Link href={`/product/${productSlug}`} className="w-full md:w-auto md:flex-1">
      <div className='div flex-col cursor-pointer'>
          <div className='w-full aspect-square md:w-[450px] md:h-[450px] flex items-center justify-center bg-slate-200'>
            <Image 
              src={imageSrc} 
              alt={title} 
              width={450} 
              height={450} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className='flex flex-col items-center gap-2 py-2'>
              <p className='text-sm font-bold text-center px-1'>{title}</p>
              <p className='text-sm'>${price}</p> 
              <button className='bg-gray-700 text-white px-6 py-2 text-sm font-bold rounded hover:bg-gray-600 transition-colors cursor-pointer'>Details</button>
          </div>
      </div>
    </Link>
  );
}

