import Image from 'next/image';

interface ProductProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isOrganic?: boolean;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
    return (
        <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            {/* Image Container */}
            <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                {product.isOrganic && (
                    <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        Organic Certified
                    </div>
                )}
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Quick Add Button (Desktop) */}
                <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="w-full bg-white/90 backdrop-blur text-primary-dark font-semibold py-3 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-1">
                    {product.category}
                </p>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    <a href={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0 z-0" />
                        {product.name}
                    </a>
                </h3>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-secondary">
                        ₹{product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-medium text-gray-400">(4.8)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
