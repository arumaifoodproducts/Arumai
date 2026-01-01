import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=1920"
                        alt="Farm Landscape"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30 pb-32" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
                    <span className="text-secondary-light font-bold tracking-[0.2em] uppercase text-sm mb-4 block text-shadow">Since 1984</span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
                        Rooted in <br /> Tradition
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-cream-light leading-relaxed max-w-2xl mx-auto">
                        Reviving the ancient wisdom of sustainable farming for a healthier tomorrow.
                    </p>
                </div>
            </section>

            {/* Narrative Section - Beigey Background */}
            <section className="py-24 bg-[#F9F7F0]">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                        <div className="relative">
                            {/* Decorative Image Stack */}
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1542601906990-24d4c16419d4?auto=format&fit=crop&q=80&w=800"
                                    alt="Farmer"
                                    width={600}
                                    height={800}
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-secondary rounded-2xl z-0 hidden md:block"></div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-5xl font-serif font-bold text-primary-dark leading-tight">
                                Born from the Soil, <br /> Raised with Love.
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                                <p>
                                    <strong className="text-primary-dark font-medium">Arumai Foods</strong> isn't just a brand; it's a movement. It began with a simple realization: the food on our plates had lost its soul. The nutrients were gone, replaced by chemicals, and the connection to the earth was severed.
                                </p>
                                <p>
                                    We traveled back to our roots in Coimbatore, meeting farmers who still viewed agriculture as a sacred duty. These guardians of the soil practiced farming not as an industry, but as a way of life—honoring the seasons, the soil, and the seed.
                                </p>
                                <p>
                                    Today, we bring more than just "groceries" to your kitchen. We bring you the labor of love, the unparalleled taste of nature, and the promise of purity.
                                </p>
                            </div>

                            <div className="pt-4">
                                <div className="inline-block border-l-4 border-secondary pl-6 py-2">
                                    <p className="text-xl font-serif italic text-gray-600">
                                        "We don't manufacture food. We simply nurture what nature provides."
                                    </p>
                                    <p className="mt-2 font-bold text-primary-dark text-sm tracking-wider uppercase">— The Founders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy / Values Section */}
            <section className="py-24 bg-primary-dark text-cream-light">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Philosophy</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto bg-cream-light/10 rounded-full flex items-center justify-center mb-8 border border-cream-light/20 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                <span className="text-4xl">🌱</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">100% Chemical Free</h3>
                            <p className="text-white/70 leading-relaxed">
                                We believe in zero tolerance for synthetic pesticides or fertilizers. Our soil is nourished with organic compost and love.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto bg-cream-light/10 rounded-full flex items-center justify-center mb-8 border border-cream-light/20 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                <span className="text-4xl">🤝</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Fair Trade First</h3>
                            <p className="text-white/70 leading-relaxed">
                                Our farmers set the prices. We eliminate middlemen to ensure that those who grow the food get the lion's share of the profit.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto bg-cream-light/10 rounded-full flex items-center justify-center mb-8 border border-cream-light/20 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                <span className="text-4xl">🥘</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Traditional Wisdom</h3>
                            <p className="text-white/70 leading-relaxed">
                                From Bilona Ghee to Stone-ground flour, we strictly adhere to traditional processing methods to retain maximum nutrition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Break / Image Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 h-64 md:h-80">
                <div className="relative h-full">
                    <Image src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop" fill className="object-cover" alt="Farm 1" />
                </div>
                <div className="relative h-full">
                    <Image src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop" fill className="object-cover" alt="Farm 2" />
                </div>
                <div className="relative h-full">
                    <Image src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop" fill className="object-cover" alt="Farm 3" />
                </div>
                <div className="relative h-full">
                    <Image src="https://images.unsplash.com/photo-1542601906990-24d4c16419d4?auto=format&fit=crop" fill className="object-cover" alt="Farm 4" />
                </div>
            </div>
        </div>
    );
}
