
export default function ContactPage() {
    return (
        <div className="bg-[#F9F7F0] min-h-screen pt-20 pb-20">

            {/* Header */}
            <div className="max-w-4xl mx-auto text-center px-4 mb-16">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">We'd love to hear from you</span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-dark mb-6">Get in Touch</h1>
                <p className="text-xl text-gray-600 font-light max-w-xl mx-auto">
                    Whether you have a question about our farming practices, shipping, or just want to say hello.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden">

                    {/* Contact Information (Left Panel) - Dark Green */}
                    <div className="bg-primary-dark text-white p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">

                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif font-bold mb-10">Contact Information</h2>

                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-secondary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 font-serif text-cream">Visit Us</h3>
                                        <p className="text-white/70 leading-relaxed font-light">
                                            No. 12, Green Farms Road,<br />
                                            Coimbatore, Tamil Nadu 641001<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-secondary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 font-serif text-cream">Email Us</h3>
                                        <p className="text-white/70 font-light">hello@arumaifoods.com</p>
                                        <p className="text-white/70 font-light">support@arumaifoods.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-secondary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 font-serif text-cream">Call Us</h3>
                                        <p className="text-white/70 font-light">+91 98765 43210</p>
                                        <p className="text-white/50 text-sm mt-1">Mon - Sat, 9am - 6pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex gap-4 relative z-10">
                            {/* Social Icons Placeholder */}
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary-dark transition-colors cursor-pointer">
                                <span>IG</span>
                            </div>
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary-dark transition-colors cursor-pointer">
                                <span>FB</span>
                            </div>
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary-dark transition-colors cursor-pointer">
                                <span>LI</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Right Panel) - White */}
                    <div className="bg-white p-12 md:p-16">
                        <h2 className="text-3xl font-serif font-bold text-primary-dark mb-8">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white transition-all outline-none" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white transition-all outline-none" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white transition-all outline-none" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Subject</label>
                                <select className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white transition-all outline-none">
                                    <option>Order Inquiry</option>
                                    <option>Product Question</option>
                                    <option>Wholesale / Bulk Order</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <div className="pt-4">
                                <button className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded text-lg uppercase tracking-wider transition-colors shadow-lg">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
