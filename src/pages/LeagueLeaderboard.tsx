import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Trophy, Users, CheckCircle2, ChevronRight } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const LeagueLeaderboard: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [activeTab, setActiveTab] = useState<'monthly' | 'all-time'>('monthly')

    const topThree = [
        { rank: 2, name: "Amara O.", points: 412, avatar: "https://i.pravatar.cc/150?u=amara", club: "Nairobi Knights" },
        { rank: 1, name: "Kamau W.", points: 485, avatar: "https://i.pravatar.cc/150?u=kamau", club: "Nairobi Chess Club" },
        { rank: 3, name: "David K.", points: 398, avatar: "https://i.pravatar.cc/150?u=david", club: "Bao Box Club" }
    ]

    const rankings = [
        { rank: 4, name: "Sarah J.", club: "Nairobi Knights", points: 375, verified: true, avatar: "https://i.pravatar.cc/100?u=sarah" },
        { rank: 5, name: "Otieno M.", club: "Kilimani Kings", points: 362, verified: true, avatar: "https://i.pravatar.cc/100?u=otieno" },
        { rank: 6, name: "Zuri K.", club: "Bao Box Club", points: 340, verified: true, avatar: "https://i.pravatar.cc/100?u=zuri" },
        { rank: 7, name: "Brian L.", club: "Independent", points: 328, verified: false, avatar: "https://i.pravatar.cc/100?u=brian" }
    ]

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="px-5 pt-8 pb-5 space-y-6 bg-white dark:bg-slate-900 shadow-sm z-30 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group cursor-pointer" onClick={() => navigate('/leagues')}>
                            <ArrowLeft size={20} />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Rankings</h1>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Physical League • Top Players</p>
                        </div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                        <span className="material-icons-round text-slate-900 dark:text-white text-lg">info</span>
                    </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex gap-3">
                    <button
                        onClick={() => setActiveTab('monthly')}
                        className={cn(
                            "flex-1 py-3 px-4 rounded-2xl text-sm font-black transition-all",
                            activeTab === 'monthly'
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        )}
                    >
                        MONTHLY
                    </button>
                    <button
                        onClick={() => setActiveTab('all-time')}
                        className={cn(
                            "flex-1 py-3 px-4 rounded-2xl text-sm font-black transition-all",
                            activeTab === 'all-time'
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        )}
                    >
                        ALL-TIME
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto px-5 py-6 space-y-6 pb-24">
                {/* Grandmasters of the Month */}
                <div>
                    <h2 className="text-center text-sm font-black text-primary uppercase tracking-widest mb-8">Grandmasters of the Month</h2>

                    {/* Podium */}
                    <div className="flex items-end justify-center gap-4 mb-12">
                        {topThree.map((player) => (
                            <div key={player.rank} className={cn("flex flex-col items-center", player.rank === 1 ? "order-2" : player.rank === 2 ? "order-1" : "order-3")}>
                                <div className="relative mb-4">
                                    {player.rank === 1 && (
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                                            <Trophy size={24} className="text-accent-gold" fill="currentColor" />
                                        </div>
                                    )}
                                    <div className={cn(
                                        "rounded-full border-4 overflow-hidden",
                                        player.rank === 1 ? "w-28 h-28 border-accent-gold shadow-xl shadow-accent-gold/20" : "w-20 h-20 border-slate-300 dark:border-slate-700"
                                    )}>
                                        <img src={player.avatar} className="w-full h-full object-cover" alt={player.name} />
                                    </div>
                                    <div className={cn(
                                        "absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-black text-sm border-2 border-white dark:border-slate-900",
                                        player.rank === 1 ? "bg-accent-gold text-white" : player.rank === 2 ? "bg-slate-300 text-slate-700" : "bg-orange-400 text-white"
                                    )}>
                                        {player.rank}
                                    </div>
                                </div>
                                <p className="font-black text-slate-900 dark:text-white text-sm mb-1">{player.name}</p>
                                <p className={cn("text-xs font-black", player.rank === 1 ? "text-accent-gold" : "text-slate-500")}>{player.points} pts</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rankings List */}
                <div className="space-y-3">
                    {rankings.map((player) => (
                        <div
                            key={player.rank}
                            onClick={() => navigate('/casual-profile/1')}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-2xl font-black text-slate-400 w-8">#{player.rank}</div>

                                <img src={player.avatar} className="w-12 h-12 rounded-2xl border-2 border-slate-200 dark:border-slate-800" alt={player.name} />

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-black text-slate-900 dark:text-white">{player.name}</p>
                                        {player.verified && <CheckCircle2 size={14} className="text-green-500" fill="currentColor" fillOpacity={0.1} />}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Users size={12} className="text-primary" />
                                        {player.club}
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">{player.points}</p>
                                    {player.verified && <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">Verified</p>}
                                </div>

                                <ChevronRight size={20} className="text-slate-400" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next Physical Meetup CTA */}
                <div className="bg-primary rounded-[2rem] p-6 flex items-center justify-between shadow-lg shadow-primary/20">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                            <span className="material-icons-round text-white">location_on</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-1">Next Physical Meetup</p>
                            <p className="font-black text-white">2 days at Bao Box</p>
                        </div>
                    </div>
                    <button className="px-6 py-3 bg-white text-primary rounded-2xl font-black text-sm hover:scale-105 transition-transform active:scale-95">
                        Join
                    </button>
                </div>
            </main>
        </div>
    )
}
