
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block relative h-10 w-32 mb-4">
                            <Image
                                src="/logo.png"
                                alt="Arumai Foods"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </Link>
                        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                            Bringing the purest organic farm produce directly to your table. Certified, fresh, and sustainably sourced.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-cream">Shop</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/shop/fruits" className="hover:text-white transition-colors">Fresh Fruits</Link></li>
                            <li><Link href="/shop/vegetables" className="hover:text-white transition-colors">Vegetables</Link></li>
                            <li><Link href="/shop/grains" className="hover:text-white transition-colors">Organic Grains</Link></li>
                            <li><Link href="/shop/spices" className="hover:text-white transition-colors">Spices & Herbs</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-cream">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/farmers" className="hover:text-white transition-colors">Farmers Network</Link></li>
                            <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-cream">Stay Natural</h4>
                        <p className="text-sm text-gray-300 mb-4">Subscribe for seasonal updates and organic tips.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-primary/30 border border-primary/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-cream w-full"
                            />
                            <button className="bg-cream text-primary-dark font-bold px-4 py-2 rounded-lg hover:bg-white transition-colors">
                                Go
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-primary/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Arumai Food Products. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
