/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, ArrowRight, Zap, Target, MousePointer2, CheckCircle2 } from "lucide-react";
import { LogoCloud } from "./components/logo-cloud";
import { AboutSection } from "./components/about-section";
import { FeatureSection } from "./components/feature-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { UseCasesSection } from "./components/use-cases-section";
import { MetricsSection } from "./components/metrics-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { PricingSection } from "./components/pricing-section";
import { FaqSection } from "./components/faq-section";
import { FooterSection } from "./components/footer-section";

export default function App() {
  return (
    <div className="relative min-h-screen text-black bg-white font-sans overflow-hidden selection:bg-black selection:text-white">
      {/* Hero Section Wrapper */}
      <div className="bg-white p-3 md:p-5">
        <div className="relative rounded-[40px] bg-black text-white shadow-2xl">
          {/* Background Video Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[40px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          {/* 
              Your video has been detected! 
          */}
          <source src="/hero-video.mp4.mp4" type="video/mp4" />
          <source src="/hero-video.mp4" type="video/mp4" />
          <source 
            src="https://player.vimeo.com/external/391060935.hd.mp4?s=d94f2d718a35626cc967ff3cf2a0953a7a9de9b9&profile_id=175" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/95" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-6 py-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <Sparkles className="text-black w-7 h-7" />
          </div>
          <span className="font-display font-black text-3xl tracking-tighter italic">LUMINA.AI</span>
        </motion.div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-black rounded-full text-sm font-black flex items-center gap-3 shadow-2xl shadow-white/10"
        >
          BUILD NOW <ArrowRight className="w-5 h-5" />
        </motion.button>
      </nav>

      {/* Main Hero Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 min-h-[calc(100vh-100px)] pb-24 flex flex-col justify-center">
        <div className="max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10 shadow-xl">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[12px] font-black uppercase tracking-[0.3em]">AI DESIGN AGENT READY</span>
            </div>
            
            <h1 className="text-7xl md:text-[140px] font-display font-black leading-[0.8] tracking-tighter mb-10 text-white selection:bg-white selection:text-black">
              WE BUILD.<br />
              <span className="text-white/40 italic">YOU GROW.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-2xl md:text-4xl font-medium text-white/50 leading-tight mb-14 max-w-2xl">
              Stop fighting with tech. <br />
              <span className="text-white">Our AI builds your dream site while you sleep.</span> <br />
              Simple. Fast. Fun.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <button className="px-12 py-6 bg-white text-black rounded-3xl font-black text-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-5 group shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
                BUILD MINE NOW
                <Zap className="w-8 h-8 fill-black group-hover:animate-bounce" />
              </button>
              <button className="px-12 py-6 border-2 border-white/20 rounded-3xl font-black text-2xl hover:bg-white/10 transition-all text-white/40 hover:text-white">
                SEE MAGIC
              </button>
            </div>
          </motion.div>

          {/* Floating UI Components - Creative Cloud Style */}
          <div className="absolute top-0 right-[-25%] w-[700px] h-full pointer-events-none hidden xl:block">
            {/* Design Panel 1 */}
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[5%] left-[0%] p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] shadow-2xl flex flex-col gap-6"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                  <MousePointer2 className="text-blue-400 w-10 h-10" />
                </div>
                <div>
                  <p className="text-[12px] font-black text-white/30 tracking-widest uppercase">WORKFLOW AGENT</p>
                  <p className="text-2xl font-black tracking-tight">Auto-UX Optimization</p>
                </div>
              </div>
              <div className="w-[300px] bg-white/5 h-3 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]" 
                />
              </div>
            </motion.div>

            {/* Design Panel 2 */}
            <motion.div
              animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[45%] right-[-10%] p-8 bg-white text-black rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col gap-6 max-w-[320px]"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="text-green-400 w-10 h-10" />
                </div>
                <div>
                  <p className="text-[12px] font-black text-black/30 tracking-widest uppercase">CONVERSION</p>
                  <p className="text-2xl font-black tracking-tight">100/100</p>
                </div>
              </div>
              <p className="text-sm font-bold opacity-60 leading-tight italic">"This is the best website I've ever had." - Your Customer</p>
            </motion.div>

            {/* Design Panel 3 */}
            <motion.div
              animate={{ rotate: [0, 5, 0], y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[0%] left-[20%] p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] flex items-center gap-5"
            >
              <Target className="text-purple-400 w-12 h-12" />
              <div>
                <p className="text-[12px] font-black text-white/30 tracking-widest uppercase">SEO ENGINE</p>
                <p className="text-xl font-black tracking-tight">Ranking #1... Done.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Logo Cloud Section */}
      <LogoCloud />

      {/* About Us Section */}
      <AboutSection />

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Metrics Section */}
      <MetricsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Decorative Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-purple-600/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}


