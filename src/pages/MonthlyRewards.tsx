import React from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const MonthlyRewards: React.FC = () => {
    const navigate = useNavigate()

    const rewards = [
        { id: 1, title: 'Speed Demon', desc: 'Won 5+ Blitz games in a week', pts: '+500', icon: 'bolt', color: 'text-amber-500', bg: 'bg-amber-100' },
        { id: 2, title: 'Checkmate Artist', desc: 'Resolved match in under 20 moves', pts: '+300', icon: 'brush', color: 'text-purple-500', bg: 'bg-purple-100' },
        { id: 3, title: 'Social Butterfly', desc: 'Attended meetups in 3+ venues', pts: '+200', icon: 'groups', color: 'text-blue-500', bg: 'bg-blue-100' },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            <div className="flex-1 w-full max-w-2xl mx-auto md:py-12 md:px-6">
                <div className="bg-white dark:bg-slate-900 md:rounded-[3rem] shadow-2xl md:border border-slate-100 dark:border-slate-800 flex flex-col h-full min-h-[700px] overflow-hidden relative pb-32">
                    {/* Hero Header */}
                    <div className="relative h-64 bg-primary overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-600"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 blur-2xl -ml-24 -mb-24"></div>

                        <header className="relative z-10 px-8 pt-12 flex flex-col items-center text-white">
                            <div className="flex items-center justify-between w-full mb-8">
                                <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                                    <span className="material-icons-round">arrow_back</span>
                                </button>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Season Rewards</span>
                                <div className="w-10"></div>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">My Current Points</p>
                                <h1 className="text-5xl font-black tracking-tight mb-2">1,420</h1>
                                <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full inline-flex items-center gap-2">
                                    <span className="material-icons-round text-sm">trending_up</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Top 4% Overall</span>
                                </div>
                            </div>
                        </header>
                    </div>

                    <main className="relative z-20 flex-1 bg-white dark:bg-slate-900 -mt-10 rounded-t-[3rem] px-8 pt-10">
                        {/* Monthly Progress */}
                        <section className="mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">December Pool Goal</h2>
                                <span className="text-[10px] font-bold text-primary px-3 py-1 bg-primary/10 rounded-full font-black">75% Reached</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-4 rounded-full overflow-hidden mb-4">
                                <div className="h-full bg-primary w-3/4 rounded-full shadow-[0_0_15px_#1152d4]"></div>
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Unlocks KSh 5,000 Group Bonus at 100%</p>
                        </section>

                        {/* Trophies/Badges */}
                        <section className="space-y-6">
                            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Monthly Achievements</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {rewards.map((r) => (
                                    <div key={r.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-50 dark:border-slate-800 shadow-sm flex items-center gap-6 group hover:shadow-xl hover:border-primary/20 transition-all">
                                        <div className={cn("w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-inner", r.bg)}>
                                            <span className={cn("material-icons-round text-3xl", r.color)}>{r.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{r.title}</h3>
                                            <p className="text-[10px] font-bold text-slate-400 mt-1">{r.desc}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-black text-primary">{r.pts}</p>
                                            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">XP</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Weekly Recap */}
                        <section className="mt-12 mb-8 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <span className="material-icons-round">calendar_today</span>
                                </div>
                                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Weekly Recap</h3>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { label: 'Wins', val: '12' },
                                    { label: 'Draws', val: '4' },
                                    { label: 'Lost', val: '2' }
                                ].map(s => (
                                    <div key={s.label} className="text-center">
                                        <p className="text-lg font-black text-slate-900 dark:text-white">{s.val}</p>
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
