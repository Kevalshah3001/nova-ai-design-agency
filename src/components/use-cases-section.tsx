import { motion } from "motion/react";
import { Briefcase, Rocket, Sparkles, ArrowRight } from "lucide-react";

export function UseCasesSection() {
    return (
        <section className="relative z-10 w-full py-24 md:py-32 bg-[#050505] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tighter leading-[1.1] mb-6">
                        Built for everyone who wants to <span className="text-white/50 italic">move faster</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Agency Card (Large) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-14 relative overflow-hidden group hover:bg-white/[0.07] transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
                        
                        <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30 mb-8">
                            <Briefcase className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Design Agencies</h3>
                        <p className="text-white/60 text-lg max-w-md font-medium leading-relaxed mb-10">
                            Stop wasting hours on repetitive layouts. Use our AI to generate structural wireframes and production-ready code in minutes, allowing your team to focus entirely on creative direction and strategy.
                        </p>
                        <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                            Agency Solutions <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* Freelancer Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-14 relative overflow-hidden group hover:bg-white/[0.07] transition-colors flex flex-col justify-between"
                    >
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/20 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
                        
                        <div>
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 mb-8">
                                <Sparkles className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-3xl font-display font-bold mb-4">Freelancers</h3>
                            <p className="text-white/60 font-medium leading-relaxed mb-10">
                                Multiply your output. Deliver premium websites to clients faster than ever and increase your profit margins.
                            </p>
                        </div>
                    </motion.div>

                    {/* Startup Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[40px] p-10 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
                    >
                        <div className="md:w-1/2 z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 mb-8">
                                <Rocket className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Founders & Startups</h3>
                            <p className="text-white/80 text-lg font-medium leading-relaxed">
                                You need to validate your idea, not learn React. Describe your startup and get a high-converting landing page instantly. Iterate based on user feedback without a dev team.
                            </p>
                        </div>
                        <div className="md:w-1/3 z-10 w-full">
                            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
                                <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Time to Launch</div>
                                <div className="text-5xl font-display font-bold">12 <span className="text-2xl text-white/50 italic">mins</span></div>
                                <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
