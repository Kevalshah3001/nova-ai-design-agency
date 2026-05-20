import { Star } from "lucide-react";
import { BlurredInfiniteSlider } from "./ui/infinite-slider";

const reviews = [
    {
        name: "Sarah Jenkins",
        role: "Creative Director",
        image: "https://i.pravatar.cc/150?img=47",
        text: "Lumina generated our entire agency portfolio in 14 minutes. The animations, the responsiveness, the dark mode—everything was flawless out of the box."
    },
    {
        name: "Marcus Thorne",
        role: "Startup Founder",
        image: "https://i.pravatar.cc/150?img=11",
        text: "We were quoted $15k and a 6-week timeline for our SaaS landing page. Lumina built a better converting version over the weekend for a fraction of the cost."
    },
    {
        name: "Emily Chen",
        role: "Freelance Designer",
        image: "https://i.pravatar.cc/150?img=5",
        text: "I use Lumina to generate the foundational code for my client projects. It's increased my output by 3x. The generated React components are incredibly clean."
    },
    {
        name: "David Ross",
        role: "Marketing Head",
        image: "https://i.pravatar.cc/150?img=33",
        text: "The real-time A/B testing has blown my mind. Our conversion rate jumped 40% in two weeks just from the autonomous layout optimizations."
    },
    {
        name: "Elena Rodriguez",
        role: "E-commerce Owner",
        image: "https://i.pravatar.cc/150?img=44",
        text: "I described my brand aesthetic and Lumina nailed it on the first try. The integrated payment flow was ready to use immediately."
    },
    {
        name: "James Wilson",
        role: "Frontend Dev",
        image: "https://i.pravatar.cc/150?img=15",
        text: "As a developer, I was skeptical. But the code it writes is exactly how I would structure it. It's not a toy; it's a serious productivity multiplier."
    }
];

export function TestimonialsSection() {
    return (
        <section className="relative z-10 w-full py-24 md:py-32 bg-[#050505] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tighter leading-[1.1] mb-6">
                    Join thousands of <span className="text-white/50 italic">visionaries</span>
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium max-w-2xl mx-auto">
                    Don't just take our word for it. See what top agencies and founders are saying about Lumina's AI capabilities.
                </p>
            </div>

            <div className="relative">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

                <BlurredInfiniteSlider speed={30} gap={24} fadeWidth={100} containerClassName="py-10">
                    {reviews.map((review, i) => (
                        <div 
                            key={i} 
                            className="w-[350px] md:w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-colors shrink-0"
                        >
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-white/80 text-lg leading-relaxed mb-8 font-medium">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border border-white/20" />
                                <div>
                                    <div className="font-bold text-white">{review.name}</div>
                                    <div className="text-white/50 text-sm">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </BlurredInfiniteSlider>
            </div>
        </section>
    );
}
