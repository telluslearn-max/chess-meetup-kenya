import React from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const ActivityFeed: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="px-6 py-6 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50">
                <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Alerts</h1>
                <button className="text-primary text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity">Mark all read</button>
            </header>

            {/* Scrollable Content */}
            <div className="flex-1 px-4 py-6 space-y-8">
                {/* Section: New Game Alerts */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Upcoming Meetups</h2>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider">1 NEW</span>
                    </div>

                    {/* Featured Game Card */}
                    <div className="relative group overflow-hidden rounded-[2rem] border border-primary/20 bg-primary/5 dark:bg-primary/10 shadow-sm transition-all active:scale-[0.98]">
                        <div className="p-6 space-y-5">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30">
                                        <span className="material-icons-round text-white text-3xl">grid_view</span>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-lg text-slate-900 dark:text-white leading-tight">Rooftop Rapid Chess</h3>
                                        <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs font-bold gap-1 mt-1">
                                            <span className="material-icons-round text-sm text-primary">location_on</span>
                                            <span>Skyline Lounge • 1.2 mi</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl text-[10px] font-black shadow-sm border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white uppercase">
                                    In 15m
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    <img className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-sm" src="https://i.pravatar.cc/100?u=1" alt="User" />
                                    <img className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-sm" src="https://i.pravatar.cc/100?u=2" alt="User" />
                                    <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-black border-2 border-white dark:border-slate-800 text-slate-600 dark:text-slate-400">+12</div>
                                </div>
                                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">8 players already joined</p>
                            </div>

                            <button className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 hover:brightness-105 transition-all active:scale-[0.98] uppercase text-xs tracking-[0.2em]">
                                Join Tournament
                            </button>
                        </div>
                    </div>
                </section>

                {/* Section: Social Activity */}
                <section className="space-y-4">
                    <div className="px-2">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Social Activity</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Notification 1: Like */}
                        <div className="flex items-start gap-4 p-5 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-50 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all transition-colors group relative active:scale-[0.98]">
                            <div className="absolute right-6 top-6 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#1152d4]"></div>
                            <div className="relative shrink-0">
                                <img className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-md" src="https://i.pravatar.cc/150?u=amara" alt="Amara" />
                                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-pink-500 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
                                    <span className="material-icons-round text-white text-[14px]">favorite</span>
                                </div>
                            </div>
                            <div className="flex-1 pr-4">
                                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                                    <span className="font-black text-primary">Amara</span> liked your review of <span className="underline decoration-primary/30">Java House</span>
                                </p>
                                <span className="text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">2h ago</span>
                            </div>
                        </div>

                        {/* Notification 2: Group Joined */}
                        <div className="flex items-start gap-4 p-5 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-50 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-[0.98]">
                            <div className="relative shrink-0">
                                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center border border-indigo-100 dark:border-indigo-900/30">
                                    <span className="material-icons-round text-indigo-600 dark:text-indigo-400 text-3xl">group_add</span>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-indigo-500 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center text-white text-[10px] font-black shadow-lg">2+</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                                    <span className="font-black">2 new people</span> joined the <span className="text-primary font-black underline decoration-primary/30">Saturday Social</span> meetup
                                </p>
                                <span className="text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">4h ago</span>
                            </div>
                        </div>

                        {/* Notification 3: Star Rating */}
                        <div className="flex items-start gap-4 p-5 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-50 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-[0.98]">
                            <div className="relative shrink-0">
                                <img className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-md" src="https://i.pravatar.cc/150?u=leo" alt="Leo" />
                                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-amber-400 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
                                    <span className="material-icons-round text-white text-[14px]">star</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                                    <span className="font-black text-amber-500 uppercase tracking-tighter mr-1 underline decoration-amber-200">New Review:</span> Your game with <span className="font-black">Leo</span> was rated 5 stars
                                </p>
                                <span className="text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">Yesterday</span>
                            </div>
                        </div>

                        {/* Ranking Update */}
                        <div className="flex items-start gap-4 p-5 rounded-3xl bg-primary/5 dark:bg-primary/10 border border-primary/20 opacity-80">
                            <div className="shrink-0">
                                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20">
                                    <span className="material-icons-round text-3xl">emoji_events</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                                    Weekly rankings updated! You moved up <span className="font-black text-primary">3 spots</span> on the Global Board.
                                </p>
                                <span className="text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">1d ago</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
