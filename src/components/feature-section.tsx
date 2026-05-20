import { motion } from "motion/react";
import { 
    ShieldCheck, Zap, Layers, TrendingUp, Smartphone, Globe, 
    Star, ArrowRight, Sparkles
} from "lucide-react";

const features = [
    {
        title: "Trusted security",
        description: "Enterprise-grade protection with automated vulnerability patching and secure deployments.",
        icon: <img src={`${import.meta.env.BASE_URL}images/icon_security.png`} alt="Trusted Security" className="w-40 h-40 object-contain mix-blend-multiply mb-2 hover:scale-110 transition-transform duration-300" />
    },
    {
        title: "Autonomous agents",
        description: "Our AI agents work 24/7 to build, test, and iterate on your web platform.",
        icon: <img src={`${import.meta.env.BASE_URL}images/icon_robot.png`} alt="Autonomous Agents" className="w-40 h-40 object-contain mix-blend-multiply mb-2 hover:scale-110 transition-transform duration-300" />
    },
    {
        title: "Pixel-perfect layouts",
        description: "Flawless attention to detail ensuring your brand looks stunning on every device.",
        icon: <img src={`${import.meta.env.BASE_URL}images/icon_layout.png`} alt="Pixel-perfect Layouts" className="w-40 h-40 object-contain mix-blend-multiply mb-2 hover:scale-110 transition-transform duration-300" />
    },
    {
        title: "Real-time optimization",
        description: "Continuous A/B testing and layout adjustments to maximize your conversion rates.",
        icon: <img src={`${import.meta.env.BASE_URL}images/icon_bear.png`} alt="Real-time Optimization" className="w-40 h-40 object-contain mix-blend-multiply mb-2 hover:scale-110 transition-transform duration-300" />
    },
    {
        title: "Responsive design",
        description: "Fluid interfaces that adapt seamlessly to mobile, tablet, and desktop environments.",
        icon: <img src={`${import.meta.env.BASE_URL}images/icon_phone.png`} alt="Responsive Design" className="w-40 h-40 object-contain mix-blend-multiply mb-2 hover:scale-110 transition-transform duration-300" />
    },
    {
        title: "Global edge delivery",
        description: "Lightning-fast load times for users worldwide through our integrated edge network.",
        icon: <img src={`${import.meta.env.BASE_URL}images/icon_globe.png`} alt="Global Edge Delivery" className="w-40 h-40 object-contain mix-blend-multiply mb-2 hover:scale-110 transition-transform duration-300" />
    }
];

export function FeatureSection() {
    return (
        <section className="relative z-10 w-full py-24 md:py-32 bg-[#f9f9fb] text-black">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tighter leading-[1.1] mb-6">
                        Design confidently with our secure and automated platform
                    </h2>
                    <p className="text-xl text-black/50 leading-relaxed font-medium">
                        Stop managing tech stacks and start scaling your business. Our intelligent systems handle the heavy lifting of modern web design.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col items-center text-center hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center w-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight mb-3">{feature.title}</h3>
                            <p className="text-black/50 leading-relaxed font-medium text-sm md:text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Large CTA / Hero Feature Block */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full bg-[#050505] rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center border border-white/10 shadow-2xl"
                >
                    {/* Glowing Background Elements */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

                    {/* Left Side Text Content */}
                    <div className="relative z-10 p-10 md:p-16 lg:p-24 lg:w-1/2 flex flex-col justify-center">
                        <h3 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tighter leading-[1.1] mb-6">
                            Experience the future of design with autonomous agents
                        </h3>
                        <p className="text-white/50 text-lg leading-relaxed font-medium mb-10">
                            Our proprietary systems analyze, design, and deploy beautiful interfaces with zero human intervention. Watch your ideas come to life instantly.
                        </p>
                        <div>
                            <button className="px-8 py-4 bg-white text-black rounded-full text-sm font-black flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl">
                                GET STARTED NOW <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Creative 3D UI Stack */}
                    <div className="relative z-10 lg:w-1/2 h-[500px] lg:h-[700px] flex items-center justify-center p-10 overflow-hidden [perspective:1000px]">
                        {/* Decorative Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
                        
                        {/* Main Floating Website Canvas */}
                        <motion.div 
                            animate={{ rotateY: [-12, -2, -12], rotateX: [12, 2, 12], y: [-15, 15, -15] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[280px] sm:w-[320px] bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[32px] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.5)] z-10"
                        >
                            {/* Website Header */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                                    <Sparkles className="w-5 h-5 text-purple-400" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-16 h-2.5 bg-white/20 rounded-full" />
                                    <div className="w-12 h-2.5 bg-white/10 rounded-full" />
                                </div>
                            </div>
                            
                            {/* Hero Block */}
                            <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/10 mb-5 p-5 flex flex-col justify-end relative overflow-hidden group">
                                <motion.div 
                                    animate={{ left: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                                />
                                <div className="w-3/4 h-5 bg-white/40 rounded-sm mb-3" />
                                <div className="w-1/2 h-3 bg-white/20 rounded-sm" />
                            </div>

                            {/* Component Blocks */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-28 rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col justify-end hover:bg-white/10 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-blue-400/20 mb-auto flex items-center justify-center border border-blue-400/20">
                                        <Layers className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div className="w-full h-2 bg-white/20 rounded-sm mb-2" />
                                    <div className="w-2/3 h-2 bg-white/10 rounded-sm" />
                                </div>
                                <div className="h-28 rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col justify-end hover:bg-white/10 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-green-400/20 mb-auto flex items-center justify-center border border-green-400/20">
                                        <Zap className="w-4 h-4 text-green-400" />
                                    </div>
                                    <div className="w-full h-2 bg-white/20 rounded-sm mb-2" />
                                    <div className="w-2/3 h-2 bg-white/10 rounded-sm" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating AI Engine Card (Top Right) */}
                        <motion.div 
                            animate={{ y: [0, -20, 0], rotateZ: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-16 right-0 lg:right-10 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-purple-500/30 rounded-2xl p-5 flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 relative">
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-purple-500/50 rounded-xl border-dashed" />
                                <Zap className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <div className="text-xs text-purple-300/70 font-mono mb-1 uppercase tracking-widest">AI Engine Live</div>
                                <div className="text-base font-bold text-white flex items-center gap-2">
                                    Generating Layout <span className="flex gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" /><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{animationDelay: "0.1s"}} /><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{animationDelay: "0.2s"}} /></span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Code Snippet Card (Bottom Left) */}
                        <motion.div 
                            animate={{ y: [0, 20, 0], rotateZ: [0, -4, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-24 left-0 lg:left-4 bg-[#0d0d0d]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                        >
                            <div className="flex gap-1.5 mb-4 border-b border-white/10 pb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex gap-2 text-[11px] font-mono text-purple-300"><span className="text-blue-400">export</span> <span className="text-pink-400">function</span> <span className="text-yellow-200">HeroSection</span>() {'{'}</div>
                                <div className="flex gap-2 text-[11px] font-mono pl-4 text-white/70">return &lt;<span className="text-blue-300">motion.div</span></div>
                                <div className="flex gap-2 text-[11px] font-mono pl-8 text-white/40">className="grid grid-cols-2"</div>
                                <div className="flex gap-2 text-[11px] font-mono pl-4 text-white/70">&gt;</div>
                                <div className="flex gap-2 text-[11px] font-mono pl-8 text-white/90">Autonomous Generation</div>
                                <div className="flex gap-2 text-[11px] font-mono pl-4 text-white/70">&lt;/<span className="text-blue-300">motion.div</span>&gt;</div>
                                <div className="flex gap-2 text-[11px] font-mono text-purple-300">{'}'}</div>
                            </div>
                        </motion.div>
                        
                        {/* Floating Reviews Badge (Re-styled for the 3D stack) */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-10 right-4 lg:right-10 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 z-30 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                        >
                            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                                <Star className="w-6 h-6 text-white fill-white" />
                            </div>
                            <div>
                                <div className="flex -space-x-2 mb-1">
                                    <img src="https://i.pravatar.cc/100?img=1" className="w-6 h-6 rounded-full border-2 border-[#1a1a1a]" alt="User" />
                                    <img src="https://i.pravatar.cc/100?img=2" className="w-6 h-6 rounded-full border-2 border-[#1a1a1a]" alt="User" />
                                    <img src="https://i.pravatar.cc/100?img=3" className="w-6 h-6 rounded-full border-2 border-[#1a1a1a]" alt="User" />
                                    <div className="w-6 h-6 rounded-full border-2 border-[#1a1a1a] bg-white text-black flex items-center justify-center text-[8px] font-bold">+</div>
                                </div>
                                <div className="text-white text-xs font-medium leading-tight">
                                    Rated 4.9/5 from over<br/>600 reviews
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
