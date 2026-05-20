import { ArrowRight, BarChart2, Bell } from "lucide-react";

export function AboutSection() {
    return (
        <section className="relative z-10 w-full py-24 md:py-32 overflow-hidden bg-white text-black">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Side - Video Mockup */}
                <div className="relative w-full rounded-[40px] overflow-hidden bg-white border border-black/5 shadow-[0_40px_80px_rgba(0,0,0,0.07)]">
                    <video
                        src={`${import.meta.env.BASE_URL}videomp_.mp4`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto relative z-0 scale-[0.95]"
                    />
                    {/* Top Border Mask */}
                    <div className="absolute top-0 left-0 w-full h-[22%] bg-white z-10 pointer-events-none" />
                    {/* Bottom Border Mask */}
                    <div className="absolute bottom-0 left-0 w-full h-[23%] bg-white z-10 pointer-events-none" />
                </div>

                {/* Right Side - Typography and Content */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-5xl lg:text-[64px] font-display font-medium tracking-tighter leading-[1.1] mb-8">
                        Designing your<br />
                        digital future today
                    </h2>

                    <p className="text-lg text-black/50 leading-relaxed mb-16 max-w-xl font-medium">
                        Our AI-driven agents craft pixel-perfect interfaces that scale with your brand, ensuring you stay ahead of the curve. Beautiful design, fully automated.
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-2xl font-medium tracking-tight">real-time UX optimization</h3>
                        <ArrowRight className="w-6 h-6" />
                    </div>

                    <p className="text-lg text-black/50 leading-relaxed mb-12 max-w-xl font-medium">
                        Our intelligent systems constantly analyze user behavior to iterate on your design autonomously. No manual tweaking required, just results that grow your business.
                    </p>

                    <div className="w-full h-px bg-black/10 mb-12" />

                    <div className="flex flex-col sm:flex-row gap-10">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                                <BarChart2 className="w-8 h-8" />
                            </div>
                            <span className="text-[17px] font-medium tracking-tight leading-tight">
                                Monitor analytics<br />
                                in real-time
                            </span>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                                <Bell className="w-8 h-8" />
                            </div>
                            <span className="text-[17px] font-medium tracking-tight leading-tight">
                                Instant deployment<br />
                                alerts
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
