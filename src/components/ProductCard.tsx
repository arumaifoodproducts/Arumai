'use client';

import Image from 'next/image';
import { useCart } from './CartProvider';

interface ProductProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isOrganic?: boolean;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
    const { addToCart } = useCart();
    return (
        <div className="group relative bg-white rounded-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-cream-dark flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-square w-full bg-[#FAFAFA] rounded-t-lg overflow-hidden">
                {product.isOrganic && (
                    <div className="absolute top-2 left-2 z-10 bg-primary-dark/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm">
                        Best Seller
                    </div>
                )}
                {/* Wishlist Heart */}
                <button className="absolute top-2 right-2 z-10 p-2 text-gray-400 hover:text-red-clay transition-colors opacity-0 group-hover:opacity-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                    {product.category}
                </p>
                <h3 className="text-base font-serif font-bold text-primary-dark mb-2 line-clamp-2 min-h-[3rem] group-hover:text-secondary transition-colors">
                    <a href={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0 z-0" />
                        {product.name}
                    </a>
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map(i => (
                        <svg key={i} className="w-3 h-3 text-accent fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                    <span className="text-xs text-gray-400 ml-1">(42)</span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">
                            ₹{product.price}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                            Inclusive of taxes
                        </span>
                    </div>
                </div>

                {/* Add to Cart Button (Full Width Bottom) */}
                <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-primary hover:bg-primary-dark text-white text-sm font-bold py-3 rounded uppercase tracking-wider transition-colors z-20 relative"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
