import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = [
    {
      id: 'm1',
      name: 'Finger Millet Noodles (Ragi) - Nutritious & Tasty',
      price: 95,
      category: 'Millet Noodles',
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800',
      isOrganic: true
    },
    {
      id: 'm2',
      name: 'Pearl Millet Pasta (Bajra) - Gluten Free',
      price: 120,
      category: 'Millet Pasta',
      image: 'https://images.unsplash.com/photo-1621800043295-dabb67d9652a?auto=format&fit=crop&q=80&w=800', // Rotini pasta
      isOrganic: true
    },
    {
      id: 'm3',
      name: 'Barnyard Millet Mix (Kuthiraivali) - Weight Loss Special',
      price: 150,
      category: 'Millet Rice',
      image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80&w=800', // Rice/Grains
      isOrganic: true
    },
    {
      id: 'm4',
      name: 'Little Millet Flakes (Samai) - Perfect Breakfast',
      price: 110,
      category: 'Millet Flakes',
      image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=800',
      isOrganic: true
    },
  ];

  const categories = [
    { name: 'Millet Noodles', icon: '🍜' },
    { name: 'Millet Pasta', icon: '🍝' },
    { name: 'Millet Rice', icon: '🍚' },
    { name: 'Millet Flours', icon: '🌾' },
    { name: 'Millet Snacks', icon: '🥨' },
    { name: 'Millet Flakes', icon: '🥣' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream-light">

      {/* Hero Section - Vibrant & Full Width */}
      <section className="relative h-[500px] md:h-[600px] flex items-center bg-[#E6F3F5] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D8EBEF] skew-x-12 transform origin-top-right z-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-block bg-white/80 backdrop-blur px-4 py-2 rounded-full text-primary-dark font-bold text-sm uppercase tracking-widest border border-primary/10 shadow-sm">
              Winter Season Special
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-dark leading-[1.1]">
              Natural <br />
              <span className="text-secondary">Millets.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Wholesome, Gluten-free, and Nutritious. Discover the ancient power of millets in every bite of our noodles and pasta.
            </p>
            <div className="pt-4 flex gap-4">
              <Link href="/shop" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded font-bold text-lg uppercase tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 relative h-[400px] md:h-[550px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1000"
              alt="Organic Millets Basket"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Category Icons Strip */}
      <section className="py-12 bg-white shadow-sm sticky top-[70px] z-40 md:static md:z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
          <div className="flex justify-between md:justify-center gap-8 min-w-max px-2">
            {categories.map((cat, idx) => (
              <Link key={idx} href={`/shop?category=${cat.name}`} className="group flex flex-col items-center gap-3 cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-cream-light border-2 border-transparent group-hover:border-primary flex items-center justify-center text-4xl shadow-sm group-hover:shadow-md transition-all">
                  {cat.icon}
                </div>
                <span className="font-bold text-primary-dark group-hover:text-secondary uppercase text-xs tracking-wider transition-colors">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Most Loved / Best Sellers */}
      <section className="py-12 md:py-20 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Customer Favorites</span>
              <h2 className="text-4xl font-serif font-bold text-primary-dark mt-2">Most Loved Products</h2>
            </div>
            <Link href="/shop" className="bg-secondary/10 hover:bg-secondary text-secondary hover:text-white px-6 py-2 rounded-full font-bold transition-colors">
              View All Products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight / Testimonial Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="text-4xl text-accent">★</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark text-center">Spotlight</h2>
            <span className="text-4xl text-accent">★</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spotlight Card 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] group">
              <Image
                src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=1000"
                alt="Cooked Millet Noodles"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-white text-3xl font-serif font-bold mb-2">The Power of Millets</h3>
                <p className="text-gray-200 mb-6 line-clamp-2">Learn why millets are considered the "Superfood of the Century" and how we process them naturally.</p>
                <button className="bg-white text-primary-dark px-6 py-3 rounded font-bold self-start hover:bg-secondary hover:text-white transition-colors">Read More</button>
              </div>
            </div>

            {/* Spotlight Card 2 (Solid Color) */}
            <div className="bg-secondary rounded-2xl p-10 flex flex-col justify-center text-white relative overflow-hidden shadow-2xl h-[400px]">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
              </div>
              <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">"The Ragi noodles are a game changer! My kids love them and I'm happy they're eating healthy."</h3>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">AM</div>
                <div>
                  <p className="font-bold">Anita Maheshwari</p>
                  <p className="text-white/70 text-sm">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-[#FDFBF7] border-t border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 text-primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-primary-dark">Certified Organic</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 text-primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              </div>
              <h4 className="font-bold text-primary-dark">Fair Trade</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 text-primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-primary-dark">Freshly Made</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 text-primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              </div>
              <h4 className="font-bold text-primary-dark">Plastic Free</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
