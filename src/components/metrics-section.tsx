import { motion } from "motion/react";

const metrics = [
    {
        value: "99.9",
        unit: "%",
        label: "Lighthouse Score",
        desc: "Optimized for speed, accessibility, and SEO automatically."
    },
    {
        value: "10",
        unit: "x",
        label: "Faster Deployment",
        desc: "Go from concept to live production URL in minutes."
    },
    {
        value: "24",
        unit: "/7",
        label: "Continuous Iteration",
        desc: "Our AI agents monitor and improve your site constantly."
    }
];

export function MetricsSection() {
    return (
        <section className="relative z-10 w-full py-24 md:py-32 bg-white text-black border-y border-black/5">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-black/10">
                    {metrics.map((metric, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col ${index !== 0 ? 'pt-16 md:pt-0 md:pl-10' : ''}`}
                        >
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-7xl md:text-8xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-black to-black/60">
                                    {metric.value}
                                </span>
                                <span className="text-4xl md:text-5xl font-display font-bold text-black/40">
                                    {metric.unit}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight">{metric.label}</h3>
                            <p className="text-black/50 font-medium leading-relaxed">
                                {metric.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
