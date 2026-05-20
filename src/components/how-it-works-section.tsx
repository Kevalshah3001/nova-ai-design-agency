import { motion } from "motion/react";
import { MessageSquareText, Cpu, Globe2, ArrowDown } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Describe Your Vision",
        desc: "Chat with our AI in plain English. Tell it your brand vibe, target audience, and what features you need.",
        icon: <MessageSquareText className="w-8 h-8 text-blue-500" />,
        color: "blue"
    },
    {
        num: "02",
        title: "Autonomous Generation",
        desc: "Watch as our engine writes the code, designs the UI/UX, and optimizes assets in real-time.",
        icon: <Cpu className="w-8 h-8 text-purple-500" />,
        color: "purple"
    },
    {
        num: "03",
        title: "One-Click Deploy",
        desc: "Review the live preview and hit deploy. Your site goes live on our global edge network instantly.",
        icon: <Globe2 className="w-8 h-8 text-green-500" />,
        color: "green"
    }
];

export function HowItWorksSection() {
    return (
        <section className="relative z-10 w-full py-24 md:py-32 bg-white text-black overflow-hidden border-t border-black/5">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 bg-black/5 rounded-full mb-6 text-sm font-bold tracking-widest uppercase">
                        How It Works
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter leading-[1.1] mb-6">
                        From idea to live site in <span className="italic opacity-50">3 minutes</span>
                    </h2>
                </div>

                {/* Steps Layout */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical connecting line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-black/5 -translate-x-1/2 hidden md:block" />

                    <div className="flex flex-col gap-12 md:gap-24">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Node */}
                                <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-2xl flex items-center justify-center z-10 hidden md:flex rotate-3 group-hover:rotate-12 transition-transform duration-500">
                                    {step.icon}
                                </div>

                                {/* Content Side */}
                                <div className={`md:w-1/2 flex flex-col ${index % 2 !== 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-start text-left`}>
                                    <div className="bg-[#f9f9fb] p-8 md:p-10 rounded-[32px] border border-black/5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden group">
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-${step.color}-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-500`} />
                                        
                                        <div className="text-sm font-black text-black/30 tracking-widest mb-4">STEP {step.num}</div>
                                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{step.title}</h3>
                                        <p className="text-black/60 font-medium leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Spacer for the other side */}
                                <div className="md:w-1/2 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
