import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "How does the AI actually build the website?",
        answer: "Lumina uses an ensemble of advanced LLMs and proprietary layout algorithms. You provide the prompt, and our AI writes the React code, styles it with Tailwind CSS, and structures the architecture automatically in real-time."
    },
    {
        question: "Can I export the code later?",
        answer: "Yes. All Pro and Agency users can export clean, production-ready React/Next.js code with zero lock-in. The code is yours to keep, host anywhere, and modify as you please."
    },
    {
        question: "Does it support complex web apps or just landing pages?",
        answer: "While Lumina excels at high-converting landing pages, our latest engine can handle multi-page sites, integrated CMS blogs, and e-commerce payment flows. We are constantly expanding its capabilities."
    },
    {
        question: "What happens if I don't like the generated design?",
        answer: "You can simply ask the AI to revise it. Tell it 'make it darker', 'use a more playful typography', or 'change the layout to be image-heavy'. It iterates instantly without losing your content."
    },
    {
        question: "Is the generated code SEO friendly?",
        answer: "Absolutely. The AI adheres to strict semantic HTML guidelines, automatically generates meta tags, optimizes images, and ensures Lighthouse scores of 95+ out of the box."
    }
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative z-10 w-full py-24 md:py-32 bg-white text-black">
            <div className="max-w-4xl mx-auto px-6">
                
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tighter leading-[1.1] mb-6">
                        Got questions? <br />
                        <span className="text-black/40 italic">We've got answers.</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index} 
                                className={`border rounded-[24px] overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#f9f9fb] border-black/10' : 'bg-white border-black/5 hover:border-black/10'}`}
                            >
                                <button 
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                >
                                    <span className="text-xl font-bold tracking-tight pr-8">{faq.question}</span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ${isOpen ? 'bg-black text-white rotate-45' : 'bg-black/5 text-black'}`}>
                                        <Plus className="w-5 h-5" />
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 md:px-8 pb-8 text-black/60 font-medium leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
