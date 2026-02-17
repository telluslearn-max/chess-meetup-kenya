import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const LeagueProfile: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="px-5 pt-8 pb-5 bg-white dark:bg-slate-900 shadow-sm z-30 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group cursor-pointer" onClick={() => navigate('/leagues')}>
                            <ArrowLeft size={20} />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">League Profile</h1>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Stats & Rankings</p>
                        </div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                        <span className="material-icons-round text-slate-900 dark:text-white text-lg">settings</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto px-5 py-6 space-y-6 pb-24">
                {/* Profile Card */}
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-6">
                        <img src="https://i.pravatar.cc/100?u=master" className="w-20 h-20 rounded-2xl border-4 border-primary/20" alt="Profile" />
                        <div className="flex-1">
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Magnus Carlsen</h2>
                            <p className="text-sm font-bold text-slate-500">@magnus_chess</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-50 dark:bg-slate-950/50 rounded-2xl p-4 text-center">
                            <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">14<span className="text-lg text-slate-400">th</span></p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Physical Rank</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-950/50 rounded-2xl p-4 text-center">
                            <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">8<span className="text-lg text-slate-400">th</span></p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Online Rank</p>
                        </div>
                    </div>
                </div>

                {/* League Mastery Section */}
                <div>
                    <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">League Mastery</h2>

                    {/* Physical League */}
                    <div className="mb-4 bg-white dark:bg-slate-900 rounded-[2rem] p-5 border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Physical League</p>
                                <p className="text-lg font-black text-slate-900 dark:text-white">Silver II</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-black text-primary">2,250</p>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">XP</p>
                            </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="relative h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-700" style={{ width: '75%' }}></div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Silver II</p>
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest">750 to Gold I</p>
                        </div>
                    </div>

                    {/* Online League */}
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Online League</p>
                                <p className="text-lg font-black text-slate-900 dark:text-white">Diamond I</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-black text-purple-500">4,200</p>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">XP</p>
                            </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="relative h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700" style={{ width: '84%' }}></div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Diamond I</p>
                            <p className="text-[10px] font-black text-purple-500 uppercase tracking-widest">800 to Master</p>
                        </div>
                    </div>
                </div>

                {/* Lichess Connection */}
                <div className="bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-6 border border-slate-800 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                <span className="material-icons-round text-white">link</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-1">Lichess Account</p>
                                <p className="font-black text-white">Connected</p>
                            </div>
                        </div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-bold text-white/70">Username</p>
                            <p className="font-black text-white">magnus_carlsen</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-bold text-white/70">Rating</p>
                            <p className="font-black text-white">2850</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-bold text-white/70">Games Played</p>
                            <p className="font-black text-white">12,450</p>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                        <ExternalLink size={16} />
                        View on Lichess
                    </button>
                </div>

                {/* View League History Button */}
                <button className="w-full py-5 bg-primary text-white rounded-3xl font-black text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-[0.98]">
                    View League History
                </button>
            </main>
        </div>
    )
}
