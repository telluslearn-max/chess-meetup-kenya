import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const MyMeetups: React.FC = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState<'upcoming' | 'history'>('upcoming')

    return (
        <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="px-6 pt-12 pb-6 bg-white dark:bg-slate-900 shadow-sm rounded-b-[2.5rem] transition-all">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">My Meetups</h1>
                    <div className="flex items-center gap-3">
                        <button className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-2xl border border-primary/20 text-primary shadow-sm active:scale-95 transition-all">
                            <span className="material-icons-round text-2xl">add</span>
                        </button>
                        <div className="w-12 h-12 rounded-2xl border-4 border-primary/20 overflow-hidden shadow-lg">
                            <img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?u=me" alt="Me" />
                        </div>
                    </div>
                </div>

                {/* Segmented Control */}
                <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-[1.5rem] flex relative overflow-hidden shadow-inner">
                    <div
                        className="absolute top-1.5 bottom-1.5 bg-white dark:bg-primary shadow-xl rounded-xl transition-all duration-300 ease-out z-0"
                        style={{
                            width: 'calc(50% - 3px)',
                            left: activeTab === 'upcoming' ? '1.5px' : 'calc(50% + 1.5px)'
                        }}
                    ></div>
                    <button
                        onClick={() => setActiveTab('upcoming')}
                        className={cn("flex-1 py-3 px-4 relative z-10 font-black text-sm transition-all duration-300", activeTab === 'upcoming' ? 'text-slate-900 dark:text-white' : 'text-slate-500')}
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={cn("flex-1 py-3 px-4 relative z-10 font-black text-sm transition-all duration-300", activeTab === 'history' ? 'text-slate-900 dark:text-white' : 'text-slate-500')}
                    >
                        History
                    </button>
                </div>
            </header>

            <main className="flex-1 px-6 py-10 space-y-8 no-scrollbar">
                {activeTab === 'upcoming' ? (
                    <>
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Scheduled Matches</h2>
                            <span className="text-[10px] bg-primary/10 text-primary font-black px-3 py-1 rounded-full uppercase tracking-widest">3 Active</span>
                        </div>

                        <div className="space-y-6">
                            {/* Today's Meetup Card */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border-l-[6px] border-primary relative overflow-hidden transition-all active:scale-[0.98]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div>
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 block">Happening Today</span>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mt-1">Goan Gymkhana</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold flex items-center gap-1.5 mt-2">
                                            <span className="material-icons-round text-primary text-sm">location_on</span> Marine Lines, Mumbai
                                        </p>
                                    </div>
                                    <div className="bg-primary/10 px-4 py-2 rounded-2xl border border-primary/20">
                                        <span className="text-xs font-black text-primary">18:30</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm">
                                            <span className="material-icons-round text-xl">bolt</span>
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest leading-none">Vibe</p>
                                            <p className="text-xs font-black text-slate-800 dark:text-slate-200 mt-1">Casual Drop-in</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm">
                                            <span className="material-icons-round text-xl">people</span>
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest leading-none">Players</p>
                                            <p className="text-xs font-black text-slate-800 dark:text-slate-200 mt-1">12 Joined</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-6 relative z-10">
                                    <div className="flex -space-x-3">
                                        <img className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-sm" src="https://i.pravatar.cc/100?u=12" alt="p" />
                                        <img className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-sm" src="https://i.pravatar.cc/100?u=13" alt="p" />
                                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-primary flex items-center justify-center text-[10px] font-black text-white uppercase shadow-sm">+9</div>
                                    </div>
                                    <button
                                        onClick={() => navigate('/ticket')}
                                        className="bg-primary text-white px-6 py-3.5 rounded-[1.25rem] font-black text-xs uppercase tracking-[0.15em] flex items-center gap-2 shadow-xl shadow-primary/20 active:scale-95 transition-all"
                                    >
                                        <span className="material-icons-round text-lg">qr_code_2</span>
                                        Check-in
                                    </button>
                                </div>
                            </div>

                            {/* Future Cards */}
                            {[
                                { title: "The Chess Cafe", loc: "Bandra West", date: "Oct 24", time: "16:00", tag: "Blitz Tournament" },
                                { title: "Knights Arena", loc: "Powai Central", date: "Oct 28", time: "11:00", tag: "Rapid Game", opacity: "opacity-80" }
                            ].map((item, idx) => (
                                <div key={idx} className={cn("bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-sm border border-slate-50 dark:border-slate-800 transition-all active:scale-[0.98]", item.opacity)}>
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">{item.title}</h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold flex items-center gap-1.5 mt-1.5">
                                                <span className="material-icons-round text-primary text-sm">location_on</span> {item.loc}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.date}</p>
                                            <p className="text-sm font-black text-slate-900 dark:text-white mt-0.5">{item.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                                                <span className="text-[9px] font-black text-primary uppercase tracking-widest">{item.tag}</span>
                                            </div>
                                            <div className="flex -space-x-2.5">
                                                <img className="w-8 h-8 rounded-full border border-white dark:border-slate-800 object-cover shadow-sm" src="https://i.pravatar.cc/100?u=21" alt="p" />
                                                <img className="w-8 h-8 rounded-full border border-white dark:border-slate-800 object-cover shadow-sm" src="https://i.pravatar.cc/100?u=22" alt="p" />
                                                <div className="w-8 h-8 rounded-full border border-white dark:border-slate-800 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[8px] font-black text-slate-400 shadow-sm">+4</div>
                                            </div>
                                        </div>
                                        <button className="text-primary font-black text-xs uppercase tracking-widest hover:underline">Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 opacity-40">
                        <span className="material-icons-round text-6xl mb-4 text-slate-300">history</span>
                        <p className="font-black text-sm text-slate-400 uppercase tracking-widest">No past matches found</p>
                    </div>
                )}

                {/* Empty State Preview (Subtle Footer) */}
                <div className="mt-12 text-center pb-10">
                    <p className="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-widest">Looking for more challenges?</p>
                    <button
                        onClick={() => navigate('/meetups')}
                        className="text-primary font-black text-xs mt-3 uppercase tracking-[0.2em] border-b border-primary/30 pb-0.5 hover:border-primary transition-all"
                    >
                        Explore upcoming events
                    </button>
                </div>
            </main>
        </div>
    )
}
