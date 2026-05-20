import { BlurredInfiniteSlider } from "./ui/infinite-slider";

const LOGOS = [
    { name: "OpenAI", src: "https://www.google.com/s2/favicons?domain=openai.com&sz=128" },
    { name: "Nvidia", src: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128" },
    { name: "Column", src: "https://www.google.com/s2/favicons?domain=column.com&sz=128" },
    { name: "GitHub", src: "https://www.google.com/s2/favicons?domain=github.com&sz=128" },
    { name: "Nike", src: "https://www.google.com/s2/favicons?domain=nike.com&sz=128" },
    { name: "Lemon Squeezy", src: "https://www.google.com/s2/favicons?domain=lemonsqueezy.com&sz=128" },
    { name: "Laravel", src: "https://www.google.com/s2/favicons?domain=laravel.com&sz=128" },
    { name: "Lilly", src: "https://www.google.com/s2/favicons?domain=lilly.com&sz=128" },
];

export function LogoCloud() {
    return (
        <section className="relative z-10 w-full py-16 overflow-hidden">
            <div className="m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="flex-shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-black/10 md:pr-6 mb-8 md:mb-0">
                        <p className="text-sm text-black/50 font-medium uppercase tracking-widest">
                            Powering the best teams
                        </p>
                    </div>
                    <div className="w-full md:w-auto md:flex-1 pl-0 md:pl-6">
                        <BlurredInfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}
                            fadeWidth={80}
                        >
                            {LOGOS.map((logo) => {
                                return (
                                    <div key={logo.name} className="flex items-center gap-4 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group">
                                        <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <img src={logo.src} alt={logo.name + " logo"} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="font-display font-black text-2xl tracking-tighter">
                                            {logo.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </BlurredInfiniteSlider>
                    </div>
                </div>
            </div>
        </section>
    );
}
