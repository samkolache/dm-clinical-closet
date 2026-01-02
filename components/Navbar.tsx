'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <div className="px-5 py-6 flex justify-between items-center">
        {/* Hamburger menu button - visible only on mobile */}
        <button 
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop nav links - hidden on mobile */}
        <div className='hidden md:flex gap-4'>
          <Link href="/" className='text-[10px] font-bold'>HOME</Link>
          <Link href="/" className='text-[10px] font-bold'>SHOP</Link>
        </div>

        <Image src="/logo.svg" alt="Logo" width={70} height={70} />
        <Link href="/" className='text-[10px] font-bold'>CART</Link>
      </div>

      {/* Mobile side menu overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />

      {/* Mobile side menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-(--background) z-40 transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="pt-20 px-6 flex flex-col gap-6">
          <Link href="/" className='text-[10px] font-bold' onClick={toggleMenu}>HOME</Link>
          <Link href="/" className='text-[10px] font-bold' onClick={toggleMenu}>SHOP</Link>
        </div>
      </div>
    </nav>
  );
}

