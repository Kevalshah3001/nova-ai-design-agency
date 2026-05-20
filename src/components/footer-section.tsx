import { ArrowRight, Sparkles, Twitter, Github, Linkedin } from "lucide-react";

export function FooterSection() {
    return (
        <footer className="relative w-full bg-[#050505] text-white overflow-hidden pt-32">
            {/* Massive CTA Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-32 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 mb-8 rotate-3 shadow-2xl">
                    <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-6xl md:text-[100px] font-display font-black tracking-tighter leading-[0.85] mb-10 selection:bg-white selection:text-black">
                    READY TO <br />
                    <span className="text-white/40 italic">BUILD?</span>
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto relative z-20">
                    <input 
                        type="email" 
                        placeholder="Enter your email..." 
                        className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    />
                    <button className="px-8 py-4 bg-white text-black rounded-full font-black text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all">
                        START FREE <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Glowing Orb */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

            {/* Standard Footer */}
            <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-3xl">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 mb-16">
                        
                        <div className="col-span-2 lg:col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <Sparkles className="w-6 h-6 text-white" />
                                <span className="font-display font-black text-2xl tracking-tighter italic">LUMINA.AI</span>
                            </div>
                            <p className="text-white/40 font-medium leading-relaxed max-w-xs mb-8">
                                The autonomous AI agent that designs, builds, and deploys premium web experiences in minutes.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                                    <Github className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Product</h4>
                            <ul className="space-y-4 text-white/50 font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Resources</h4>
                            <ul className="space-y-4 text-white/50 font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-white/50 font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>

                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-white/40 font-medium">
                        <p>© {new Date().getFullYear()} Lumina.ai. All rights reserved.</p>
                        <p className="mt-4 md:mt-0">Designed autonomously.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
