import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Search, ChevronDown } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const HelpCenter: React.FC = () => {
    const navigate = useNavigate()
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

    const categories = [
        { icon: 'rocket_launch', label: 'Getting Started', color: 'text-green-500', bg: 'bg-green-500/10' },
        { icon: 'location_on', label: 'Venues & Hosting', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { icon: 'payments', label: 'Payments & M-Pesa', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { icon: 'build', label: 'Technical Issues', color: 'text-orange-500', bg: 'bg-orange-500/10' }
    ]

    const faqs = [
        { question: 'How do I find meetups in Nairobi?', answer: 'Use the Explore tab to discover nearby chess meetups. You can filter by location, date, and skill level.' },
        { question: 'Are tournament fees refundable?', answer: 'Tournament fees are non-refundable unless the event is cancelled by the organizer.' },
        { question: 'How to register as a Chess Coach?', answer: 'Navigate to Profile > Settings > Account Type and select "Coach Registration" to get started.' },
        { question: 'Problems with M-Pesa verification?', answer: 'Ensure your M-Pesa number matches your registered phone number. Contact support if issues persist.' }
    ]

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="px-5 pt-8 pb-5 bg-white dark:bg-slate-900 shadow-sm z-30 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group cursor-pointer" onClick={() => navigate('/settings')}>
                            <ArrowLeft size={20} />
                        </div>
                        <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Help Center</h1>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                        <span className="material-icons-round text-slate-900 dark:text-white text-lg">notifications</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto px-5 py-6 space-y-8 pb-24">
                {/* Hero Section */}
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">How can we help?</h2>

                    {/* Search Bar */}
                    <div className="relative mt-6">
                        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search for articles, topics..."
                            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                </div>

                {/* Browse Categories */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Browse Categories</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {categories.map((category, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer active:scale-[0.98]"
                            >
                                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", category.bg)}>
                                    <span className={cn("material-icons-round text-2xl", category.color)}>{category.icon}</span>
                                </div>
                                <p className="font-black text-slate-900 dark:text-white">{category.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Top FAQs */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Top FAQs</h3>
                        <button className="text-sm font-black text-green-500">View All</button>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                    className="w-full p-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                    <p className="font-black text-slate-900 dark:text-white text-left">{faq.question}</p>
                                    <ChevronDown
                                        size={20}
                                        className={cn(
                                            "text-slate-400 transition-transform",
                                            expandedFaq === idx && "rotate-180"
                                        )}
                                    />
                                </button>
                                {expandedFaq === idx && (
                                    <div className="px-5 pb-5 pt-0">
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Support */}
                <section className="bg-green-500 rounded-[2rem] p-8 text-center">
                    <h3 className="text-2xl font-black text-white mb-2">Can't find what you're looking for?</h3>
                    <p className="text-white/80 mb-6">Our Kenyan support team is available 24/7 to help you move your pieces.</p>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-2">
                            <span className="material-icons-round text-lg">chat</span>
                            Live Chat
                        </button>
                        <button className="py-4 bg-white text-slate-900 rounded-2xl font-black text-sm hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-2">
                            <span className="material-icons-round text-lg">email</span>
                            Email Support
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}
