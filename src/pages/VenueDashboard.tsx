import React from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const VenueDashboard: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display pb-32 overflow-y-auto no-scrollbar">
            {/* Header Section */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-6 py-6 transition-all">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                            <span className="material-icons-round text-3xl">storefront</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Bao Box</h1>
                            <p className="text-[10px] uppercase font-black tracking-[0.2em] text-primary">Venue Partner</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="p-6 space-y-10 pt-8">
                {/* Monthly Performance Card */}
                <section>
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Monthly Performance</h2>
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">June 2024</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors"></div>

                        <div className="mb-8 relative z-10">
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3">Estimated Commission</p>
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">KSh 15,000</span>
                                <span className="text-xs font-black text-primary flex items-center bg-primary/10 px-2 py-1 rounded-lg">
                                    <span className="material-icons-round text-sm mr-1">trending_up</span> 12%
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-slate-50 dark:border-slate-800 pt-8 relative z-10">
                            <div>
                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">Total Referrals</p>
                                <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">142</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">Active Meetups</p>
                                <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">5</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Referral Growth Chart */}
                <section>
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Referral Growth</h2>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#1152d4]"></div>
                            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Weekly</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 h-56 relative overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800 flex items-end justify-between px-8">
                        <svg className="absolute inset-0 w-full h-full p-8" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0 80 Q 20 75, 40 50 T 80 30 T 100 20" fill="none" stroke="#1152d4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M0 80 Q 20 75, 40 50 T 80 30 T 100 20 V 100 H 0 Z" fill="url(#gradient)" opacity="0.15"></path>
                            <defs>
                                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#1152d4', stopOpacity: 1 }}></stop>
                                    <stop offset="100%" style={{ stopColor: '#1152d4', stopOpacity: 0 }}></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="relative z-10 w-full flex justify-between text-[10px] font-black text-slate-300 dark:text-slate-600 pb-2 uppercase tracking-widest">
                            <span>WK1</span>
                            <span>WK2</span>
                            <span>WK3</span>
                            <span>WK4</span>
                        </div>
                    </div>
                </section>

                {/* Recent Check-ins List */}
                <section>
                    <div className="flex items-center justify-between mb-6 px-2">
                        <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Recent Check-ins</h2>
                        <button className="text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:underline">View All</button>
                    </div>
                    <div className="space-y-3">
                        {[
                            { name: "Alex M.", level: "Grandmaster Level", time: "5 mins ago", avatar: "https://i.pravatar.cc/100?u=alex" },
                            { name: "Sarah J.", level: "Newcomer", time: "22 mins ago", avatar: "https://i.pravatar.cc/100?u=sarah" },
                            { name: "David K.", level: "Regular Member", time: "1 hr ago", avatar: "https://i.pravatar.cc/100?u=david" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-50 dark:border-slate-800 shadow-sm transition-all active:scale-[0.98]">
                                <div className="flex items-center gap-4">
                                    <img alt="User avatar" className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shadow-sm" src={item.avatar} />
                                    <div>
                                        <p className="font-black text-slate-900 dark:text-white text-sm">{item.name}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.level}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.time}</p>
                                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest">Verified</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Floating Action Button area for marketing tools */}
            <div className="fixed bottom-28 left-0 right-0 p-6 pointer-events-none z-40">
                <div className="max-w-md mx-auto flex flex-col items-center gap-4">
                    <div className="bg-slate-900 dark:bg-slate-800/90 backdrop-blur-2xl px-6 py-4 rounded-[2rem] border border-white/10 flex items-center gap-5 shadow-2xl pointer-events-auto">
                        <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-black mb-1">Current Perk</span>
                            <span className="text-white text-xs font-black tracking-tight tracking-wide">Free Coffee for Referrals</span>
                        </div>
                        <div className="w-[1px] h-8 bg-white/20"></div>
                        <button className="bg-primary hover:bg-primary/90 text-white font-black px-5 py-2.5 rounded-2xl text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all active:scale-95 shadow-xl shadow-primary/20">
                            Update Perks
                            <span className="material-icons-round text-sm">edit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
