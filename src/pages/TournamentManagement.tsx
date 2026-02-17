import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const TournamentManagement: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [lichessSync, setLichessSync] = useState(false)

    const pairings = [
        { board: 1, p1: "Magnus C.", p2: "Nepo", status: 'Live', type: 'Physical' },
        { board: 2, p1: "Hikaru N.", p2: "Fabiano C.", status: 'Waiting', type: 'Online' },
        { board: 3, p1: "Hou Yifan", p2: "Alireza F.", status: 'Physical Reported', type: 'Physical' },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display pb-32">
            {/* Header */}
            <header className="px-6 pt-12 pb-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-icons-round">arrow_back</span>
                        </button>
                        <div>
                            <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Admin Console</h1>
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-0.5">Nairobi Masters Invitational</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Organizer Mode</span>
                    </div>
                </div>

                {/* Quick Controls */}
                <div className="flex gap-4">
                    <button className="flex-1 bg-primary text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                        <span className="material-icons-round text-sm">bolt</span>
                        New Round
                    </button>
                    <button
                        onClick={() => setLichessSync(!lichessSync)}
                        className={cn(
                            "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 border transition-all",
                            lichessSync ? "bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/20" : "bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700"
                        )}
                    >
                        <span className="material-icons-round text-sm">{lichessSync ? 'sync' : 'sync_disabled'}</span>
                        Lichess {lichessSync ? 'Live' : 'Sync'}
                    </button>
                </div>
            </header>

            <main className="p-6 space-y-8">
                {/* Active Pairings */}
                <section>
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Board Assignments</h2>
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">3 Pairings</span>
                    </div>

                    <div className="space-y-4">
                        {pairings.map((pair, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 px-4 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-bl-3xl border-l border-b border-slate-100 dark:border-slate-700">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Board {pair.board}</span>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="font-black text-slate-900 dark:text-white">{pair.p1}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">VS</span>
                                            <p className="font-black text-slate-900 dark:text-white">{pair.p2}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-3">
                                        <span className={cn(
                                            "text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                                            pair.status === 'Live' ? "bg-red-100 text-red-500" :
                                                pair.status === 'Physical Reported' ? "bg-green-100 text-green-500" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                        )}>
                                            {pair.status}
                                        </span>
                                        <div className="flex gap-2">
                                            <button className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-all active:scale-95">
                                                <span className="material-icons-round text-sm">settings</span>
                                            </button>
                                            <button
                                                onClick={() => navigate('/match-report')}
                                                className="h-10 px-4 bg-primary text-white rounded-xl flex items-center justify-center font-black text-[9px] uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-all"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {pair.type === 'Online' && (
                                    <div className="mt-6 flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                                        <img src="https://lichess1.org/assets/images/favicon-32.x2.png" className="w-4 h-4 grayscale opacity-50" alt="Lichess" />
                                        <p className="text-[10px] font-bold text-slate-400 truncate">lichess.org/match/z8p2Xy9...</p>
                                        <span className="material-icons-round text-slate-300 text-sm ml-auto">open_in_new</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Organizer Quick Actions */}
                <section className="bg-slate-900 dark:bg-slate-800 p-8 rounded-[3rem] text-white">
                    <h3 className="text-xs font-black uppercase tracking-widest mb-6">Management Tools</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Check-in Desk', icon: 'how_to_reg' },
                            { label: 'Pairing Engine', icon: 'account_tree' },
                            { label: 'Attendee List', icon: 'view_list' },
                            { label: 'Public Link', icon: 'qr_code_2' },
                        ].map((action, i) => (
                            <button key={i} className="flex flex-col items-center p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all">
                                <span className="material-icons-round text-primary mb-3 text-2xl">{action.icon}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest">{action.label}</span>
                            </button>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
