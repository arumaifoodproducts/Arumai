'use client';

import { Product } from '@/data/products';
import { useCart } from '@/components/CartProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetails({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [selectedWeight, setSelectedWeight] = useState('500g'); // Mock weight for now

    const currentPrice = selectedWeight === '1kg' ? product.price * 2 : product.price;
    const currentMRP = Math.round(currentPrice * 1.2);

    const handleAddToCart = () => {
        addToCart({
            ...product,
            price: currentPrice,
            name: `${product.name} (${selectedWeight})`
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-[#F8F8F8] border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <p className="text-xs text-gray-500 font-medium">
                        <Link href="/" className="hover:text-primary-dark">Home</Link> &gt; {' '}
                        <Link href="/shop" className="hover:text-primary-dark">Shop</Link> &gt; {' '}
                        <span className="text-gray-900">{product.name}</span>
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column: Image */}
                    <div className="space-y-4">
                        <div className="relative aspect-square bg-[#F5ECD5] rounded-none overflow-hidden group">
                            {/* Bestseller Badge */}
                            {product.isOrganic && (
                                <div className="absolute top-0 left-0 bg-[#F4C430] text-black text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 z-10">
                                    Bestseller
                                </div>
                            )}
                            {/* Wishlist Icon */}
                            <button className="absolute top-4 right-4 z-10 text-gray-400 hover:text-red-500 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>

                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-8 mix-blend-multiply"
                                priority
                            />
                        </div>
                        {/* Mock Thumbnails */}
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {[product.image].map((img, i) => (
                                <div key={i} className="w-20 h-20 bg-[#F5ECD5] relative cursor-pointer border-2 border-primary-dark flex-shrink-0">
                                    <Image src={img} alt="" fill className="object-contain p-2 mix-blend-multiply" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight mb-2">
                            {product.name}
                        </h1>

                        {/* Top Meta */}
                        <div className="flex flex-wrap gap-2 mb-4 text-xs font-bold uppercase tracking-wide text-gray-500">
                            <span>Good for Gut</span>
                            <span className="text-gray-300">|</span>
                            <span>Immunity Booster</span>
                            <span className="text-gray-300">|</span>
                            <span>Traditional</span>
                        </div>

                        {/* Ratings */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex text-[#F4C430] text-sm">
                                {'★'.repeat(5)}
                            </div>
                            <span className="text-gray-500 text-sm">4.9 | 1455 Reviews</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-3 mb-1">
                            <span className="text-3xl font-bold text-gray-900">₹{currentPrice}</span>
                            <span className="text-gray-400 text-sm line-through">MRP ₹{currentMRP}</span>
                            <span className="text-green-700 text-xs font-bold">(Incl. of all taxes)</span>
                        </div>
                        <div className="bg-[#E6F3F5] text-primary-dark text-xs p-2 rounded mb-6 inline-block self-start">
                            <span className="bg-primary text-white font-bold px-1 rounded mr-1">OFFER</span>
                            Free Shipping on orders above ₹999
                        </div>


                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            {product.description}
                        </p>

                        {/* Icons Grid */}
                        <div className="grid grid-cols-4 gap-4 mb-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center mb-2">
                                    <span className="text-xl">💪</span>
                                </div>
                                <span className="text-[10px] font-bold text-primary-dark uppercase leading-tight">High Protein</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center mb-2">
                                    <span className="text-xl">🌾</span>
                                </div>
                                <span className="text-[10px] font-bold text-primary-dark uppercase leading-tight">High Fiber</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center mb-2">
                                    <span className="text-xl">🚫</span>
                                </div>
                                <span className="text-[10px] font-bold text-primary-dark uppercase leading-tight">No Maida</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center mb-2">
                                    <span className="text-xl">❤️</span>
                                </div>
                                <span className="text-[10px] font-bold text-primary-dark uppercase leading-tight">Natural</span>
                            </div>
                        </div>

                        {/* Weight Selection (Mock) */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-bold text-gray-900">Pack Size</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    onClick={() => setSelectedWeight('500g')}
                                    className={`py-3 border-2 rounded text-sm font-bold transition-all ${selectedWeight === '500g' ? 'border-primary bg-primary/5 text-primary-dark' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                                >
                                    500g
                                    <div className="text-xs font-normal mt-1">₹{product.price}</div>
                                </button>
                                <button
                                    onClick={() => setSelectedWeight('1kg')}
                                    className={`py-3 border-2 rounded text-sm font-bold transition-all ${selectedWeight === '1kg' ? 'border-primary bg-primary/5 text-primary-dark' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                                >
                                    1kg
                                    <div className="text-xs font-normal mt-1">₹{product.price * 2}</div>
                                </button>
                            </div>
                        </div>


                        {/* Add to Cart Actions */}
                        <div className="flex gap-4 mt-auto sticky bottom-0 bg-white md:static py-4 border-t md:border-t-0 z-20">
                            <div className="w-full">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full bg-[#F4C430] hover:bg-[#E5B622] text-black font-bold py-4 rounded-lg uppercase tracking-widest transition-colors text-sm shadow-sm flex items-center justify-center gap-2"
                                >
                                    <span>Add to Cart</span>
                                    <span>•</span>
                                    <span>₹{currentPrice}</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
