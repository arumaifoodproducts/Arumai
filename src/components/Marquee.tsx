'use client';

import { motion } from 'framer-motion';

const Marquee = () => {
    const items = [
        "100% ORGANIC", "NO PRESERVATIVES", "TRADITIONAL STONE GROUND",
        "GLUTEN FREE OPTIONS", "FARM FRESH", "SUSTAINABLY SOURCED",
        "100% ORGANIC", "NO PRESERVATIVES", "TRADITIONAL STONE GROUND"
    ];

    return (
        <div className="bg-primary py-3 overflow-hidden border-y border-white/10 relative z-20">
            <motion.div
                className="flex whitespace-nowrap gap-12"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                }}
            >
                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/90 font-bold tracking-widest text-xs md:text-sm uppercase">
                        <span>{item}</span>
                        <span className="text-secondary">✦</span>
                    </div>
                ))}
                {items.map((item, i) => (
                    <div key={`dup-${i}`} className="flex items-center gap-4 text-white/90 font-bold tracking-widest text-xs md:text-sm uppercase">
                        <span>{item}</span>
                        <span className="text-secondary">✦</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
