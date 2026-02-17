import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const WelcomeOnboarding: React.FC = () => {
    const navigate = useNavigate()
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            title: <>Discover chess in <span className="text-primary">Nairobi’s</span> best spots</>,
            description: "Find casual games in cafés, parks, and hotels near you.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5sHsVi0_mZpBkvL21S2jQnMH5gPb3Jm2OjboevJACRqa5aCaBqLFgUgFyuzyo2_fqXPpsaH6zj_A7fpDYFOoaHw--Y8ljzCEqzoTdTYEWojCqJnet8ZlWhTQYxuGyLCR0vRvdy3afyDg24CMMx-05lHxQ9hBJPj2SN6cf2znammrwCNNOWfsj9lf6Y90SsoZqb9r2NRNf1xsC9hRNg2wGIiaasg0eMwPd6dEexypZoHNF_hyOfJMiAIZJDmz6VEbnx1DvUuNQPfY",
            alt: "People playing chess in a sunlit Kenyan café"
        },
        {
            title: <>Build your <span className="text-primary">Chess Identity</span></>,
            description: "Track your progress, earn badges, and join local clubs that match your vibe.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1rv46ljNamcserT7nzh_b63-VmaBfSObGqP2nV1pWJEEPeIBEuhKw4HXAOkO0tTVSCunNMyJvIcxx9y40JERXGpaljTckYSHHje4C_kgyTwnvBcQm3OnqDn8syzlpfNLR3YOXxzmgbiATbX871-WnUEnAyxRDQZ-uomuJwhlmKVBXSEUYH-vckjQBVByPjiycnTIrGyYTvTKn-US0UuO8PyiLqlk7Pw0tTCQn__ppE51np46Nhs8zE_ynKKg6Jc4CHqa8pdYRLqo",
            alt: "Close up of a chess piece being moved on a board"
        },
        {
            title: <>Host & Join <span className="text-primary">Meetups</span></>,
            description: "Create your own games or join others. The community is just a tap away.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7o3vZJ9fRawfPA3KNivuAIoneJPD7WUsfNz4xiVlIWUO-IcKT8LiY7iemzIPeyuhSdpMRdA8c5g7mS4-T5wGW4_9TCurCApRRFhWjGwasQC--q3lkrP0lluO6GQqltRhfEyuw8YnLSyq2PRpxQ_WKpjXxhCRb2am8pMRc0NdfZqGEbvaJlO0Wu9ulsJsTPb0qmLGM3PGcPDQxv8_9cfg9erVnapxJbLn8KqW_yl1nnrlyf-JZbLGom9rwTyE3QO6yiTxqrf3Xg1c",
            alt: "A group of people laughing and playing chess together"
        }
    ]

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1)
        } else {
            navigate('/')
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            <div className="flex-1 w-full max-w-2xl mx-auto md:py-12 md:px-6">
                <div className="bg-white dark:bg-slate-900 md:rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none md:border border-slate-100 dark:border-slate-800 flex flex-col h-full min-h-[600px] overflow-hidden relative">
                    {/* Background Glows */}
                    <div className="fixed -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                    <div className="fixed top-1/2 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>

                    {/* Header Actions */}
                    <header className="px-6 pt-12 pb-2 flex justify-end">
                        <button
                            onClick={() => navigate('/')}
                            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-black uppercase tracking-widest px-4 py-2"
                        >
                            Skip
                        </button>
                    </header>

                    <main className="flex-1 flex flex-col px-6">
                        {/* Image Container */}
                        <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 group">
                            <img
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 key={currentSlide}">
                            <h1 className="text-3xl font-black leading-tight tracking-tight mb-4 text-slate-900 dark:text-white">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-lg font-bold text-slate-500 dark:text-slate-400 leading-relaxed max-w-[90%]">
                                {slides[currentSlide].description}
                            </p>
                        </div>

                        {/* Bottom Controls */}
                        <div className="pb-12 pt-4">
                            {/* Progress Dots */}
                            <div className="flex justify-center gap-3 mb-8">
                                {slides.map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "h-2 rounded-full transition-all duration-300",
                                            currentSlide === i ? "w-8 bg-primary" : "w-2 bg-slate-200 dark:bg-slate-700"
                                        )}
                                    ></div>
                                ))}
                            </div>

                            {/* Primary Action */}
                            <button
                                onClick={nextSlide}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-[1.5rem] shadow-xl shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2 uppercase text-xs tracking-[0.2em]"
                            >
                                <span>{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}</span>
                                <span className="material-icons-round text-lg">arrow_forward</span>
                            </button>
                        </div>
                    </main>

                    {/* iOS Home Indicator Placeholder */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
