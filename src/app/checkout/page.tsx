'use client';

import { useCart } from '@/components/CartProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
    const { cartItems, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-cream-light flex flex-col items-center justify-center space-y-6 pt-24 pb-12 px-4">
                <div className="text-8xl text-cream-dark">🛒</div>
                <h1 className="text-3xl font-serif font-bold text-primary-dark text-center">Your basket is empty</h1>
                <p className="text-gray-500 max-w-md text-center">Looks like you haven't added any of our delicious millet products to your cart yet.</p>
                <Link href="/shop" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream-light pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-primary-dark mb-8 text-center md:text-left">Checkout</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column: Shipping Form */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-cream-dark">
                            <h2 className="text-xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-cream-light flex items-center justify-center text-secondary text-sm">1</span>
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="you@example.com" />
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="newsletter" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-600">Email me with news and offers</label>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-cream-dark">
                            <h2 className="text-xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-cream-light flex items-center justify-center text-secondary text-sm">2</span>
                                Shipping Address
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-1">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <input type="text" id="address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="123 Millet Street" />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">Apartment, suite, etc. (optional)</label>
                                    <input type="text" id="apartment" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <input type="text" id="city" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                    <input type="text" id="postalCode" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" />
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg uppercase tracking-widest transition-all shadow-lg hover:shadow-xl text-lg mt-8">
                            Complete Order
                        </button>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-cream-dark h-fit sticky top-28">
                        <h2 className="text-xl font-bold text-primary-dark mb-6">Order Summary</h2>
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
                                    <div className="relative h-16 w-16 bg-cream-light rounded-md overflow-hidden flex-shrink-0 border border-cream-dark">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-contain p-1"
                                        />
                                        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center z-10 border-2 border-white">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-primary-dark text-sm leading-tight line-clamp-2">{item.name}</h3>
                                        <p className="text-gray-500 text-xs mt-1">{item.category}</p>
                                    </div>
                                    <div className="font-bold text-gray-900 text-sm">
                                        ₹{item.price * item.quantity}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 space-y-3 pt-6 border-t border-gray-200">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{cartTotal}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-primary font-medium">Free</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-primary-dark pt-4 border-t border-gray-200 mt-4">
                                <span>Total</span>
                                <span>₹{cartTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
