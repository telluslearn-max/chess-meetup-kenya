import React, { useState } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface RankingItem {
    rank: number
    name: string
    club: string
    points: number
    avatar: string
    verified: boolean
}

export const Leaderboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'casual' | 'pro'>('pro')

    const rankings: RankingItem[] = [
        { rank: 4, name: "Nairobi Knights", club: "M. Amina", points: 1420, avatar: "https://i.pravatar.cc/100?u=amina", verified: true },
        { rank: 5, name: "Lakeside Kings", club: "D. Omondi", points: 1385, avatar: "https://i.pravatar.cc/100?u=omondi", verified: false },
        { rank: 6, name: "Coast Grandmasters", club: "Z. Hassan", points: 1210, avatar: "https://i.pravatar.cc/100?u=hassan", verified: false },
        { rank: 7, name: "Rift Rookies", club: "K. Ruto", points: 1150, avatar: "https://i.pravatar.cc/100?u=ruto", verified: false },
    ]

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display pb-32 overflow-y-auto no-scrollbar">
            {/* Prize Pool Banner */}
            <div className="m-6 bg-primary rounded-[2rem] p-6 shadow-2xl shadow-primary/30 flex items-center justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl -mr-16 -mt-16"></div>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                        <span className="material-icons-round text-white text-3xl">emoji_events</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">December Pool</p>
                        <h3 className="text-2xl font-black tracking-tight">KSh 25,000</h3>
                    </div>
                </div>
                <div className="text-right relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Ends In</p>
                    <div className="flex items-center gap-1.5 font-black text-sm">
                        <span className="material-icons-round text-xs">schedule</span>
                        <span>12 Days</span>
                    </div>
                </div>
            </div>

            {/* Live Match Feed Ticker */}
            <div className="mx-6 mb-8 overflow-hidden bg-slate-50 dark:bg-slate-900/40 py-3 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 border-r border-slate-200 dark:border-slate-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <span className="text-[9px] font-black text-slate-900 dark:text-white uppercase tracking-widest whitespace-nowrap">Live News</span>
                </div>
                <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
                        <p className="text-[10px] font-bold text-slate-500 flex items-center gap-2">
                            <span className="font-black text-primary">Kamau W.</span> just gained <span className="text-primary font-black">+18 XP</span> at Bao Box
                        </p>
                        <p className="text-[10px] font-bold text-slate-500 flex items-center gap-2">
                            <span className="font-black text-primary">Sarah L.</span> verified draw vs <span className="font-black">Davis K.</span>
                        </p>
                        <p className="text-[10px] font-bold text-slate-500 flex items-center gap-2">
                            New Season Pool increased to <span className="text-primary font-black">KSh 30,000</span>
                        </p>
                    </div>
                </div>
            </div>

            <header className="px-6 mb-6">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Global Ranks</h1>
                <p className="text-sm font-bold text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-widest">Kenya Chess Federation Official</p>
            </header>

            <div className="px-6 mb-10">
                <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl flex relative overflow-hidden">
                    <div
                        className="absolute top-1 bottom-1 bg-white dark:bg-primary shadow-md rounded-xl transition-all duration-300 ease-out z-0"
                        style={{
                            width: 'calc(50% - 2px)',
                            left: activeTab === 'casual' ? '1px' : 'calc(50% + 1px)'
                        }}
                    ></div>
                    <button
                        onClick={() => setActiveTab('casual')}
                        className={cn("flex-1 py-3 px-4 relative z-10 font-bold text-sm transition-colors duration-300", activeTab === 'casual' ? 'text-slate-900 dark:text-white' : 'text-slate-500')}
                    >
                        Casual
                    </button>
                    <button
                        onClick={() => setActiveTab('pro')}
                        className={cn("flex-1 py-3 px-4 relative z-10 font-bold text-sm transition-colors duration-300", activeTab === 'pro' ? 'text-slate-900 dark:text-white' : 'text-slate-500')}
                    >
                        Pro
                    </button>
                </div>
            </div>

            {/* Podium */}
            <div className="flex items-end justify-center gap-4 mb-12 px-2 mt-4">
                {/* 2nd Place */}
                <div className="flex flex-col items-center flex-1">
                    <div className="relative mb-4">
                        <div className="w-16 h-16 rounded-full border-4 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden ring-4 ring-slate-100 dark:ring-slate-900">
                            <img src="https://i.pravatar.cc/150?u=otieno" alt="2nd" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-300 text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] font-black border-4 border-white dark:border-slate-900 shadow-lg">2</div>
                    </div>
                    <p className="font-black text-xs text-slate-700 dark:text-slate-300 truncate w-20 text-center">Otieno J.</p>
                </div>

                {/* 1st Place */}
                <div className="flex flex-col items-center flex-1 -mt-8 scale-110">
                    <div className="relative mb-5">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary animate-bounce">
                            <span className="material-icons-round text-5xl drop-shadow-2xl">workspace_premium</span>
                        </div>
                        <div className="w-20 h-20 rounded-full border-4 border-primary shadow-2xl overflow-hidden ring-4 ring-primary/20">
                            <img src="https://i.pravatar.cc/150?u=kamau" alt="1st" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white rounded-full px-3 py-1 text-[8px] font-black border-4 border-white dark:border-slate-900 shadow-xl uppercase tracking-widest">WINNER</div>
                    </div>
                    <p className="font-black text-sm text-slate-900 dark:text-white truncate w-24 text-center">Kamau W.</p>
                </div>

                {/* 3rd Place */}
                <div className="flex flex-col items-center flex-1">
                    <div className="relative mb-4">
                        <div className="w-16 h-16 rounded-full border-4 border-orange-200 dark:border-orange-950 shadow-xl overflow-hidden ring-4 ring-orange-100 dark:ring-orange-900">
                            <img src="https://i.pravatar.cc/150?u=sarah" alt="3rd" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-400 text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] font-black border-4 border-white dark:border-slate-900 shadow-lg">3</div>
                    </div>
                    <p className="font-black text-xs text-slate-700 dark:text-slate-300 truncate w-20 text-center">Sarah L.</p>
                </div>
            </div>

            {/* Ranking List */}
            <div className="px-6 space-y-3">
                <div className="flex justify-between items-center px-4 py-2 text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    <span>Rank & Player</span>
                    <span>Points</span>
                </div>
                {rankings.map((p) => (
                    <div key={p.rank} className="bg-white dark:bg-slate-900 p-4 rounded-3xl flex items-center justify-between shadow-sm border border-slate-50 dark:border-slate-800 transition-all active:scale-[0.98]">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-black text-slate-300 w-4">{p.rank}</span>
                            <div className="relative">
                                <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-full object-cover shadow-sm border border-slate-100 dark:border-slate-800" />
                                {p.verified && (
                                    <div className="absolute -right-1 -bottom-1 bg-primary p-0.5 rounded-full border-2 border-white dark:border-slate-900 shadow-md">
                                        <span className="material-icons-round text-[10px] text-white">verified</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className="font-black text-slate-900 dark:text-white text-sm">{p.name}</p>
                                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{p.club}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-primary font-black text-lg">{p.points.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="mt-12 text-center px-10 pb-10">
                <div className="flex justify-center items-center gap-2 mb-3 text-slate-300 dark:text-slate-700">
                    <span className="material-icons-round text-sm">verified</span>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em]">Verified Matches Only</p>
                </div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium leading-relaxed italic">
                    Points are updated automatically from verified tournament results. Prize payouts are processed on the 1st of every month at 12:00 UTC.
                </p>
            </footer>
        </div>
    )
}
