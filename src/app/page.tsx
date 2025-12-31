import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = [
    {
      id: '1',
      name: 'Organic Turmeric Powder',
      price: 250,
      category: 'Spices',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
      isOrganic: true
    },
    {
      id: '2',
      name: 'Fresh Organic Avocados',
      price: 180,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1601039641847-7857b994d812?auto=format&fit=crop&q=80&w=800',
      isOrganic: true
    },
    {
      id: '3',
      name: 'Cold Pressed Coconut Oil',
      price: 340,
      category: 'Oils',
      image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=800',
      isOrganic: true
    },
    {
      id: '4',
      name: 'Organic Red Quinoa',
      price: 420,
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
      isOrganic: true
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-cream">
        <div className="absolute inset-0 bg-cover bg-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1920"
            alt="Organic Farm"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Pure. Organic. <br />
              <span className="text-primary-light text-cream">Authentic.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed font-light">
              Experience the true taste of nature with our certified organic food products.
              Sourced directly from sustainable farms to your doorstep.
            </p>
            <div className="flex gap-4">
              <Link href="/shop" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
                Shop Now
              </Link>
              <Link href="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Fresh from the Farm</span>
            <h2 className="text-4xl font-serif font-bold text-secondary mt-2">Featured Collection</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="inline-flex items-center gap-2 text-primary-dark font-bold hover:text-primary transition-colors text-lg group">
              View All Products
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">100% Certified Organic</h3>
              <p className="text-gray-600">Strictly tested and certified to ensure you get only the purest, chemical-free produce.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Sustainable Sourcing</h3>
              <p className="text-gray-600">We work directly with farmers to ensure fair trade and environmentally friendly practices.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Farm to Doorstep</h3>
              <p className="text-gray-600">Quick and efficient delivery network ensures your food arrives fresh and full of nutrients.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
