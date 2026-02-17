import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface Player {
    rank: number
    name: string
    avatar: string
    points: number
    status: 'Active' | 'Waiting' | 'Eliminated'
}

export const LiveStandings: React.FC = () => {
    const navigate = useNavigate()
    const [view, setView] = useState<'standings' | 'brackets'>('standings')

    const rankings: Player[] = [
        { rank: 1, name: "Magnus Carlsen", avatar: "https://i.pravatar.cc/100?u=magnus", points: 3.5, status: 'Active' },
        { rank: 2, name: "Hou Yifan", avatar: "https://i.pravatar.cc/100?u=hou", points: 3.0, status: 'Waiting' },
        { rank: 3, name: "Fabiano Caruana", avatar: "https://i.pravatar.cc/100?u=fabiano", points: 2.5, status: 'Active' },
        { rank: 4, name: "Alireza Firouzja", avatar: "https://i.pravatar.cc/100?u=alireza", points: 1.5, status: 'Eliminated' },
    ]

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display overflow-y-auto no-scrollbar pb-32">
            {/* Header */}
            <header className="px-6 pt-12 pb-6 bg-white dark:bg-slate-900 shadow-sm rounded-b-[2.5rem] sticky top-0 z-20">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <button onClick={() => navigate(-1)} className="p-1 -ml-1 text-slate-400 hover:text-primary transition-colors">
                                <span className="material-icons-round">arrow_back_ios_new</span>
                            </button>
                            <span className="bg-primary/10 text-primary text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest border border-primary/20">Live Now</span>
                        </div>
                        <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Masters Invitational</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Round 4 of 7 • Zurich</p>
                    </div>
                    <button className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-all active:scale-95 shadow-sm">
                        <span className="material-icons-round">share</span>
                    </button>
                </div>

                {/* Segmented Control */}
                <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl flex relative overflow-hidden">
                    <div
                        className="absolute top-1 bottom-1 bg-white dark:bg-primary shadow-md rounded-xl transition-all duration-300 ease-out z-0"
                        style={{
                            width: 'calc(50% - 2px)',
                            left: view === 'standings' ? '1px' : 'calc(50% + 1px)'
                        }}
                    ></div>
                    <button
                        onClick={() => setView('standings')}
                        className={cn("flex-1 py-3 px-4 relative z-10 font-bold text-sm transition-colors duration-300", view === 'standings' ? 'text-slate-900 dark:text-white' : 'text-slate-500')}
                    >
                        Standings
                    </button>
                    <button
                        onClick={() => setView('brackets')}
                        className={cn("flex-1 py-3 px-4 relative z-10 font-bold text-sm transition-colors duration-300", view === 'brackets' ? 'text-slate-900 dark:text-white' : 'text-slate-500')}
                    >
                        Brackets
                    </button>
                </div>
            </header>

            {/* Content */}
            <main className="flex-1 p-6">
                {view === 'standings' ? (
                    <section className="space-y-4">
                        <div className="flex items-center justify-between px-2 mb-2">
                            <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Rankings</h2>
                            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Match Points</span>
                        </div>
                        {rankings.map((p) => (
                            <div key={p.rank} className="bg-white dark:bg-slate-900 p-4 rounded-3xl flex items-center gap-4 border border-slate-50 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                                <div className="w-8 flex justify-center">
                                    <span className={cn("text-xl font-black", p.rank === 1 ? "text-primary scale-110" : "text-slate-300")}>{p.rank}</span>
                                </div>
                                <div className="relative">
                                    <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm group-hover:border-primary/30 transition-colors" />
                                    {p.status === 'Active' && (
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{p.name}</h3>
                                    <span className={cn("text-[10px] font-black uppercase tracking-widest",
                                        p.status === 'Active' ? 'text-primary' :
                                            p.status === 'Eliminated' ? 'text-red-400' : 'text-slate-400'
                                    )}>
                                        {p.status}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl font-black text-slate-900 dark:text-white">{p.points.toFixed(1)}</span>
                                </div>
                            </div>
                        ))}
                    </section>
                ) : (
                    <section className="space-y-8 overflow-hidden animate-in fade-in duration-500">
                        <div className="flex items-center justify-between px-2 mb-2">
                            <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Knockout Bracket</h2>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Live Match</span>
                                </div>
                                <button className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group">
                                    Fullscreen <span className="material-icons-round text-sm group-hover:scale-110 transition-transform">open_in_full</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex overflow-x-auto gap-12 pb-12 no-scrollbar -mx-6 px-12 relative min-h-[500px] items-center">
                            {/* Round 1: Semi Finals */}
                            <div className="flex flex-col gap-32 relative py-12">
                                {[
                                    { p1: { name: 'Carlsen', score: '1.0' }, p2: { name: 'Firouzja', score: '0.0' }, live: true },
                                    { p1: { name: 'Nakamura', score: '0.5' }, p2: { name: 'Caruana', score: '0.5' }, live: false }
                                ].map((match, i) => (
                                    <div key={i} className="relative">
                                        {/* Connector to next round */}
                                        <div className="absolute top-1/2 -right-12 w-12 h-[2px] bg-slate-100 dark:bg-slate-800"></div>

                                        <div className={cn(
                                            "w-60 bg-white dark:bg-slate-900 rounded-[2rem] border-2 shadow-xl p-1 relative group overflow-hidden",
                                            match.live ? "border-primary shadow-primary/10" : "border-slate-50 dark:border-slate-800"
                                        )}>
                                            {match.live && (
                                                <div className="absolute top-0 right-0 h-full w-1 bg-primary/20 animate-pulse"></div>
                                            )}
                                            <div className="p-4 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl mb-1">
                                                <div className="flex items-center gap-3">
                                                    <div className={cn("w-1.5 h-1.5 rounded-full", match.p1.score > match.p2.score ? "bg-primary" : "bg-slate-200 dark:bg-slate-700")}></div>
                                                    <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">{match.p1.name}</span>
                                                </div>
                                                <span className="text-sm font-black text-primary">{match.p1.score}</span>
                                            </div>
                                            <div className="p-4 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className={cn("w-1.5 h-1.5 rounded-full", match.p2.score > match.p1.score ? "bg-primary" : "bg-slate-200 dark:bg-slate-700")}></div>
                                                    <span className="text-xs font-black text-slate-500 uppercase tracking-tight">{match.p2.name}</span>
                                                </div>
                                                <span className="text-sm font-black text-slate-300">{match.p2.score}</span>
                                            </div>

                                            <button
                                                onClick={() => navigate('/match-report')}
                                                className="absolute inset-0 flex items-center justify-center bg-primary text-white font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm bg-primary/90"
                                            >
                                                Match Details
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                {/* Vertical Connector Line */}
                                <div className="absolute top-[calc(25%+24px)] bottom-[calc(25%+24px)] -right-12 w-[2px] bg-slate-100 dark:bg-slate-800"></div>
                            </div>

                            {/* Round 2: Grand Finals */}
                            <div className="flex flex-col justify-center relative">
                                <div className="absolute top-1/2 -left-12 w-12 h-[2px] bg-slate-100 dark:bg-slate-800"></div>

                                <div className="flex flex-col items-center">
                                    <div className="mb-4 bg-yellow-500/10 dark:bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 flex items-center gap-2">
                                        <span className="material-icons-round text-yellow-500 text-sm">emoji_events</span>
                                        <span className="text-[10px] font-black text-yellow-600 dark:text-yellow-400 uppercase tracking-widest">Grand Finals</span>
                                    </div>
                                    <div className="w-64 aspect-video bg-slate-50 dark:bg-slate-800/40 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-8 group transition-all hover:border-primary/40 cursor-pointer">
                                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-300 mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-icons-round text-3xl">hourglass_empty</span>
                                        </div>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Pending Round 1</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bracket Legend */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 mx-2">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <span className="material-icons-round text-lg">hotel_class</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seeds</p>
                                        <p className="text-sm font-black text-slate-900 dark:text-white">Top 8 Active</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                                        <span className="material-icons-round text-lg">history</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">History</p>
                                        <p className="text-sm font-black text-slate-900 dark:text-white">32 Eliminated</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Featured Highlights */}
                <section className="mt-10">
                    <div className="bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-[80px] -mr-16 -mt-16"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Featured Game</span>
                                <div className="flex items-center gap-1.5 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-red-500 text-[9px] font-black uppercase tracking-widest">4.2k Active</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/20 p-1 mb-3">
                                        <img src="https://i.pravatar.cc/100?u=magnus" alt="Magnus" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <p className="text-white font-black text-xs">Carlsen</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-white/20 text-[10px] font-black mb-1 italic">VS</span>
                                    <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                                        <span className="text-primary font-black text-lg tracking-tighter">18:42</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/20 p-1 mb-3">
                                        <img src="https://i.pravatar.cc/100?u=nepo" alt="Nepo" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <p className="text-white font-black text-xs">Nepo</p>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 active:scale-95 transition-all text-sm uppercase tracking-widest">
                                Watch Live Stream
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
