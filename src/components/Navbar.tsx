
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from './CartProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { setIsCartOpen, cartCount } = useCart();

    return (
        <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-cream-dark">
            {/* Top Utility Bar (Dark Green) */}
            <div className="bg-primary text-white text-xs py-2 px-4 text-center tracking-wide hidden sm:block">
                FREE SHIPPING ON ORDERS ABOVE ₹999 | 100% CERTIFIED ORGANIC
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">

                    {/* Desktop Menu Left */}
                    <div className="hidden md:flex space-x-8 items-center flex-1">
                        <Link href="/shop" className="text-primary-dark hover:text-secondary font-medium uppercase tracking-wide text-sm transition-colors">
                            Shop
                        </Link>
                        <Link href="/about" className="text-primary-dark hover:text-secondary font-medium uppercase tracking-wide text-sm transition-colors">
                            Our Story
                        </Link>
                    </div>

                    {/* Logo Center with Bilingual Text */}
                    <div className="flex-shrink-0 flex items-center justify-center flex-1">
                        <div className="flex items-center space-x-3 lg:space-x-4">
                            {/* Left Text: English */}
                            <div className="flex flex-col items-start md:items-end text-left md:text-right order-2 md:order-1 ml-2 md:ml-0">
                                <span className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-primary leading-[0.8]">Arumai</span>
                                <span className="text-[10px] lg:text-[12px] tracking-[0.25em] font-medium text-secondary uppercase whitespace-nowrap mt-1">Food Products</span>
                            </div>

                            <Link href="/" className="transition-transform hover:scale-105 duration-300 order-1 md:order-2">
                                <div className="relative h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
                                    <Image
                                        src="/logo.png"
                                        alt="Arumai Foods"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>

                            {/* Right Text: Tamil */}
                            <div className="hidden md:flex flex-col items-start text-left md:order-3">
                                <span className="font-serif text-2xl lg:text-3xl font-bold text-primary leading-[0.8]">அருமை</span>
                                <span className="text-[10px] lg:text-[12px] tracking-widest font-medium text-secondary whitespace-nowrap mt-1">புட் புராடக்ட்ஸ்</span>
                            </div>
                        </div>
                    </div>

                    {/* Icons Right */}
                    <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
                        <button className="text-primary-dark hover:text-secondary transition-colors">
                            <span className="sr-only">Search</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <Link href="/login" className="text-primary-dark hover:text-secondary transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </Link>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="text-primary-dark hover:text-secondary relative transition-colors"
                        >
                            <span className="sr-only">Cart</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu & Cart */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="text-primary-dark hover:text-secondary relative transition-colors"
                        >
                            <span className="sr-only">Cart</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary-dark hover:text-secondary focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-cream-light border-t border-cream-dark">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link href="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-cream hover:text-secondary">
                            Shop
                        </Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-cream hover:text-secondary">
                            Our Story
                        </Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-cream hover:text-secondary">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
