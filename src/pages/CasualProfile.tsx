import React from 'react'
import { MapPin, MessageSquare, Sword, Trophy, Heart, Coffee, Star, Users, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CasualProfileProps {
    name?: string
    level?: string
    karma?: number
    gamesPlayed?: number
    joinedDate?: string
    avatar?: string
    isVerified?: boolean
    club?: {
        name: string
        role: string
        logo?: string
    }
    achievements?: Array<{
        id: string
        label: string
        icon: string
        color: string
    }>
    lichessVerified?: boolean
    lichessStats?: {
        blitz: number
        rapid: number
        puzzles: number
    }
}

export const CasualProfile: React.FC<CasualProfileProps> = ({
    name = "Sly Fox",
    level = "Intermediate",
    karma = 482,
    gamesPlayed = 156,
    joinedDate = "Oct 2022",
    avatar = "https://i.pravatar.cc/300?u=fox",
    isVerified = true,
    club = {
        name: "Nairobi Chess Club",
        role: "Pro Member"
    },
    achievements = [
        { id: "1", label: "Tournament Winner", icon: "emoji_events", color: "text-accent-gold" },
        { id: "2", label: "Community Mentor", icon: "auto_awesome", color: "text-purple-500" },
        { id: "3", label: "Fair Play", icon: "verified_user", color: "text-green-500" }
    ],
    lichessVerified = true,
    lichessStats = {
        blitz: 1845,
        rapid: 1920,
        puzzles: 2150
    }
}) => {
    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-slate-950 font-display">
            {/* Header / Hero */}
            <div className="relative pt-20 pb-12 px-8 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="absolute top-8 left-8">
                    <button className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-lg flex items-center justify-center text-slate-400">
                        <span className="material-icons-round">arrow_back</span>
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                        <div className="absolute -inset-4 bg-primary/10 rounded-full animate-pulse-ring"></div>
                        <img
                            src={avatar}
                            className="w-32 h-32 rounded-[3rem] border-8 border-white dark:border-slate-900 shadow-2xl relative z-10"
                            alt={name}
                        />
                        <div className="absolute -bottom-2 -right-2 bg-accent-gold text-white p-2.5 rounded-2xl shadow-lg border-4 border-white dark:border-slate-900 z-20">
                            <Star size={18} fill="currentColor" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{name}</h1>
                        {isVerified && (
                            <div className="bg-primary/10 text-primary p-1 rounded-lg" title="Verified Player">
                                <CheckCircle2 size={20} fill="currentColor" fillOpacity={0.1} />
                            </div>
                        )}
                    </div>
                    <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mt-1">{level}</p>

                    <div className="flex items-center gap-6 mt-8">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-black text-slate-900 dark:text-white">{gamesPlayed}</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Games</span>
                        </div>
                        <div className="w-[1px] h-8 bg-slate-200 dark:bg-slate-800"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-black text-accent-gold">{karma}</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Social Karma</span>
                        </div>
                    </div>

                    {/* Club Affiliation Badge */}
                    <div className="mt-6 flex items-center gap-3 bg-slate-100 dark:bg-slate-800/50 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-lg">
                            {club?.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{club?.role}</p>
                            <p className="text-sm font-black text-slate-900 dark:text-white">{club?.name}</p>
                        </div>
                        <div className="ml-auto w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-icons-round text-xs">chevron_right</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Tabs area */}
            <div className="flex-1 bg-white dark:bg-slate-900 rounded-t-[3.5rem] shadow-[0_-30px_100px_rgba(0,0,0,0.05)] p-8">
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <button className="bg-primary text-white py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-primary/20 active:scale-95 transition-all">
                        <Sword size={20} strokeWidth={2.5} />
                        Invite
                    </button>
                    <button className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all">
                        <MessageSquare size={20} strokeWidth={2.5} />
                        Chat
                    </button>
                </div>

                <div className="space-y-8">
                    {/* Favorite spots section */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Favorite Spots</h2>
                            <span className="text-xs font-bold text-primary">See Map</span>
                        </div>
                        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                            {[
                                { name: "Bao Box", icon: <Coffee />, rating: "4.8" },
                                { name: "Java House", icon: <Coffee />, rating: "4.5" },
                                { name: "Alchemist", icon: <Coffee />, rating: "4.9" }
                            ].map((spot, i) => (
                                <div key={i} className="flex-none w-40 bg-slate-50 dark:bg-slate-800 p-5 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 group">
                                    <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                        {spot.icon}
                                    </div>
                                    <p className="font-black text-slate-900 dark:text-white text-sm mb-1">{spot.name}</p>
                                    <div className="flex items-center gap-1.5">
                                        <Star size={10} fill="#FFD700" color="#FFD700" />
                                        <span className="text-[10px] font-bold text-slate-400">{spot.rating} Social Score</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Community Badges */}
                    <section>
                        <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">Community Badges</h2>
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { icon: <Heart size={20} />, label: "Polite", color: "bg-pink-100 text-pink-500" },
                                { icon: <Trophy size={20} />, label: "Winner", color: "bg-blue-100 text-blue-500" },
                                { icon: <Coffee size={20} />, label: "Regular", color: "bg-orange-100 text-orange-500" },
                                { icon: <Users size={20} />, label: "Mentor", color: "bg-green-100 text-green-500" }
                            ].map((badge, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <div className={`w-14 h-14 rounded-2xl ${badge.color} flex items-center justify-center shadow-sm`}>
                                        {badge.icon}
                                    </div>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Achievement Badges */}
                    <section>
                        <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">Achievement History</h2>
                        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                            {achievements?.map((achievement) => (
                                <div key={achievement.id} className="flex-none p-5 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 w-36">
                                    <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center shadow-lg ${achievement.color}`}>
                                        <span className="material-icons-round text-2xl">{achievement.icon}</span>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center leading-tight">
                                        {achievement.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Lichess / Connected Platforms */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Connected Platforms</h2>
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">Lichess Official</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { label: "Blitz", rating: lichessStats?.blitz, icon: "lightning_bolt", color: "text-orange-500", bg: "bg-orange-50" },
                                { label: "Rapid", rating: lichessStats?.rapid, icon: "timer", color: "text-blue-500", bg: "bg-blue-50" },
                                { label: "Puzzles", rating: lichessStats?.puzzles, icon: "extension", color: "text-purple-500", bg: "bg-purple-50" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center">
                                    <div className={`w-8 h-8 rounded-xl ${stat.bg} dark:${stat.bg.replace('bg-', 'bg-')}/20 flex items-center justify-center ${stat.color} mx-auto mb-2`}>
                                        <span className="material-icons-round text-sm">{stat.icon}</span>
                                    </div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                    <p className="font-black text-slate-900 dark:text-white mt-0.5">{stat.rating}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
