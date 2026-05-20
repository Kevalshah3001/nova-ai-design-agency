import { Check, Zap } from "lucide-react";
import { motion } from "motion/react";

const plans = [
    {
        name: "Starter",
        desc: "Perfect for personal projects and small sites.",
        price: "49",
        features: [
            "1 AI-Generated Website",
            "Custom Domain",
            "Basic Analytics",
            "Community Support",
            "7-Day Revision History"
        ],
        popular: false
    },
    {
        name: "Pro",
        desc: "For professionals who need speed and power.",
        price: "99",
        features: [
            "Unlimited AI Generations",
            "Advanced SEO Optimization",
            "Real-time A/B Testing",
            "Priority Support",
            "Export React Code",
            "Custom Animations"
        ],
        popular: true
    },
    {
        name: "Agency",
        desc: "For teams building for clients at scale.",
        price: "249",
        features: [
            "Everything in Pro",
            "White-label Dashboard",
            "Team Collaboration",
            "Dedicated Account Manager",
            "Custom Component Library",
            "API Access"
        ],
        popular: false
    }
];

export function PricingSection() {
    return (
        <section className="relative z-10 w-full py-24 md:py-32 bg-[#f9f9fb] text-black border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tighter leading-[1.1] mb-6">
                        Straightforward pricing for <br />
                        <span className="text-black/40 italic">unlimited potential</span>
                    </h2>
                    <p className="text-xl text-black/50 leading-relaxed font-medium">
                        Start building for free. Upgrade when you need more power, bandwidth, or collaborative features.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-[40px] p-8 md:p-10 flex flex-col bg-white ${plan.popular ? 'border-0 shadow-2xl scale-105 z-10' : 'border border-black/10 shadow-lg'}`}
                        >
                            {/* Animated Glowing Border for Popular Plan */}
                            {plan.popular && (
                                <div className="absolute inset-0 rounded-[40px] p-[2px] overflow-hidden">
                                    <motion.div 
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-20"
                                    />
                                    <div className="absolute inset-[2px] bg-black rounded-[38px] z-0" />
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                {plan.popular && (
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest self-start mb-6 border border-white/20">
                                        <Zap className="w-3.5 h-3.5 text-yellow-400" />
                                        Most Popular
                                    </div>
                                )}

                                <h3 className={`text-2xl font-display font-bold mb-2 ${plan.popular ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                                <p className={`mb-8 font-medium ${plan.popular ? 'text-white/60' : 'text-black/50'}`}>{plan.desc}</p>
                                
                                <div className="mb-8 flex items-baseline gap-1">
                                    <span className={`text-5xl font-display font-black tracking-tighter ${plan.popular ? 'text-white' : 'text-black'}`}>${plan.price}</span>
                                    <span className={`font-bold ${plan.popular ? 'text-white/50' : 'text-black/40'}`}>/mo</span>
                                </div>

                                <ul className="flex-1 space-y-4 mb-10">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
                                                <Check className="w-3.5 h-3.5" />
                                            </div>
                                            <span className={`font-medium ${plan.popular ? 'text-white/80' : 'text-black/70'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-full font-black text-sm tracking-widest uppercase transition-all ${plan.popular ? 'bg-white text-black hover:scale-105 shadow-xl' : 'bg-[#f4f4f5] text-black hover:bg-black hover:text-white'}`}>
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
