import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight, Star, Users, Trophy, Globe, MapPin } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const LeaguesPage: React.FC = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState<'physical' | 'online'>('physical')

    const physicalLeagues = [
        {
            id: 'nairobi-otb',
            name: "Nairobi OTB Series",
            image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=600",
            rating: 4.9,
            location: "Nairobi Chess Club",
            distance: "0.8 miles",
            nextGame: "Sat, 2 PM",
            tags: ["OTB", "$500 PRIZE"],
            joinedCount: 124,
            avatars: ["https://i.pravatar.cc/100?u=1", "https://i.pravatar.cc/100?u=2", "https://i.pravatar.cc/100?u=3"]
        },
        {
            id: 'westlands-league',
            name: "Westlands Chess League",
            image: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=600",
            rating: 4.7,
            location: "Bao Box Westlands",
            distance: "1.2 miles",
            nextGame: "Sun, 10 AM",
            tags: ["CASUAL", "FREE"],
            joinedCount: 68,
            avatars: ["https://i.pravatar.cc/100?u=4", "https://i.pravatar.cc/100?u=5"]
        }
    ]

    const onlineLeagues = [
        {
            id: 'global-digital',
            name: "Global Digital League",
            image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=600",
            rating: 4.8,
            location: "Lichess Integration",
            distance: "Online",
            nextGame: "Live Now",
            tags: ["RATED", "$2500 PRIZE"],
            joinedCount: 1200,
            avatars: ["https://i.pravatar.cc/100?u=6", "https://i.pravatar.cc/100?u=7", "https://i.pravatar.cc/100?u=8"]
        }
    ]

    const finalItems = activeTab === 'physical' ? physicalLeagues : onlineLeagues

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display overflow-hidden">
            {/* Header */}
            <header className="px-5 pt-8 pb-5 space-y-6 bg-white dark:bg-slate-900 shadow-sm z-30 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group cursor-pointer" onClick={() => navigate('/')}>
                            <ArrowLeft size={20} />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Leagues</h1>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Competitive Play • {finalItems.length} Active</p>
                        </div>
                    </div>

                    <div
                        onClick={() => navigate('/leagues/profile')}
                        className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center cursor-pointer hover:scale-105 transition-all overflow-hidden"
                    >
                        <img src="https://i.pravatar.cc/100?u=master" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex gap-3">
                    <button
                        onClick={() => setActiveTab('physical')}
                        className={cn(
                            "flex-1 py-3 px-4 rounded-2xl text-sm font-black transition-all",
                            activeTab === 'physical'
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        )}
                    >
                        Physical
                    </button>
                    <button
                        onClick={() => setActiveTab('online')}
                        className={cn(
                            "flex-1 py-3 px-4 rounded-2xl text-sm font-black transition-all",
                            activeTab === 'online'
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        )}
                    >
                        Online
                    </button>
                </div>
            </header>

            {/* League Cards */}
            <main className="flex-1 overflow-y-auto px-5 py-6 space-y-5 pb-24">
                {finalItems.map((league) => (
                    <div
                        key={league.id}
                        onClick={() => navigate(`/leagues/leaderboard/${league.id}`)}
                        className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/30 transition-all active:scale-[0.98] cursor-pointer"
                    >
                        {/* Image */}
                        <div className="relative h-48">
                            <img src={league.image} className="w-full h-full object-cover" alt={league.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                            {/* Tags */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                {league.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black tracking-widest rounded-full border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Rating */}
                            <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                                <Star size={12} className="text-accent-gold fill-accent-gold" />
                                <span className="text-xs font-black text-slate-900 dark:text-white">{league.rating}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 space-y-4">
                            <div>
                                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{league.name}</h3>
                                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-bold">
                                    {activeTab === 'physical' ? <MapPin size={14} className="text-primary" /> : <Globe size={14} className="text-primary" />}
                                    <span>{league.location}</span>
                                    {league.distance !== "Online" && (
                                        <>
                                            <span>•</span>
                                            <span>{league.distance}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {league.avatars.map((avatar, idx) => (
                                            <img key={idx} src={avatar} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900" alt="" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                                        {league.joinedCount} players
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-primary">
                                    <Trophy size={14} />
                                    <span className="text-xs font-black">{league.nextGame}</span>
                                    <ChevronRight size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}
