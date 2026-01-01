
'use client';

import ProductCard from '@/components/ProductCard';
import React, { useState } from 'react';

export default function ShopPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const products = [
        {
            id: '1',
            name: 'Organic Turmeric Powder (High Curcumin)',
            price: 250,
            category: 'Spices',
            image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
            isOrganic: true
        },
        {
            id: '2',
            name: 'Fresh Organic Avocados (Butter Fruit)',
            price: 180,
            category: 'Fruits',
            image: 'https://images.unsplash.com/photo-1601039641847-7857b994d812?auto=format&fit=crop&q=80&w=800',
            isOrganic: true
        },
        {
            id: '3',
            name: 'Cold Pressed Coconut Oil (Wood Pressed)',
            price: 340,
            category: 'Oils',
            image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=800',
            isOrganic: true
        },
        {
            id: '4',
            name: 'Organic Red Quinoa (Superfood)',
            price: 420,
            category: 'Grains',
            image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
            isOrganic: true
        },
        {
            id: '5',
            name: 'Himalayan Pink Salt (Crystal)',
            price: 150,
            category: 'Spices',
            image: 'https://images.unsplash.com/photo-1626139576127-1c9a635e1c0d?auto=format&fit=crop&q=80&w=800',
            isOrganic: true
        },
        {
            id: '6',
            name: 'Wild Forest Honey (Raw)',
            price: 550,
            category: 'Sweeteners',
            image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
            isOrganic: true
        },
        {
            id: '7',
            name: 'Basmati Rice (aged 2 years)',
            price: 380,
            category: 'Grains',
            image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
            isOrganic: true
        },
        {
            id: '8',
            name: 'Whole Black Pepper (Malabar)',
            price: 290,
            category: 'Spices',
            image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800',
            isOrganic: true
        }
    ];

    const categories = ['All', 'Spices', 'Grains', 'Oils', 'Fruits', 'Sweeteners'];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="bg-cream-light min-h-screen">
            {/* Header */}
            <div className="bg-[#E6F3F5] pt-16 pb-12 px-4 shadow-inner">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Direct from Farm</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-dark mb-6">Our Pantry</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Discover the finest organic staples. No preservatives, no chemicals, just pure nature.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-8 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-wide
                    ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg transform scale-105'
                                    : 'bg-white text-primary-dark hover:bg-cream border border-cream-dark shadow-sm'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
