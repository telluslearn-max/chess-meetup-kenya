import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const VerifyResultsDashboard: React.FC = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState<'pending' | 'flagged' | 'verified'>('pending')

    const pendingMatches = [
        { id: '1', p1: 'Kamau W.', p2: 'Otieno J.', result: '1-0', time: '10m ago', venue: 'Bao Box', status: 'pending' },
        { id: '2', p1: 'Sarah L.', p2: 'Davis K.', result: '1/2-1/2', time: '25m ago', venue: 'The Alchemist', status: 'pending' },
        { id: '3', p1: 'Hassan Z.', p2: 'Amina M.', result: '0-1', time: '1h ago', venue: 'Goan Gymkhana', status: 'flagged' }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            <div className="flex-1 w-full max-w-4xl mx-auto md:py-12 md:px-6">
                <div className="bg-white dark:bg-slate-900 md:rounded-[3rem] shadow-2xl md:border border-slate-100 dark:border-slate-800 flex flex-col h-full min-h-[700px] overflow-hidden relative">
                    {/* Header */}
                    <header className="px-8 pt-12 pb-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800/50">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <button onClick={() => navigate('/profile')} className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                    <span className="material-icons-round">arrow_back</span>
                                </button>
                                <div>
                                    <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Verify Results</h1>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-1">Organizer Control Panel</p>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl">
                                <span className="text-[10px] font-black text-slate-400 ml-2 uppercase">Status</span>
                                <div className="flex gap-1">
                                    {['pending', 'flagged', 'verified'].map((f) => (
                                        <button
                                            key={f}
                                            onClick={() => setFilter(f as any)}
                                            className={cn(
                                                "px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all",
                                                filter === f ? "bg-white dark:bg-primary shadow-sm text-primary dark:text-white" : "text-slate-400"
                                            )}
                                        >
                                            {f}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Filter */}
                        <div className="md:hidden flex gap-2 overflow-x-auto no-scrollbar pb-2">
                            {['pending', 'flagged', 'verified'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f as any)}
                                    className={cn(
                                        "px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap",
                                        filter === f ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                    )}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </header>

                    <main className="flex-1 p-8 space-y-6">
                        <div className="flex items-center justify-between px-2">
                            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Queue: {pendingMatches.length} Items</h2>
                            <button className="text-[11px] font-black text-primary uppercase tracking-widest flex items-center gap-1">
                                <span className="material-icons-round text-sm">filter_list</span>
                                Filter All
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pendingMatches.map((match) => (
                                <div key={match.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-50 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black text-xs">
                                                {match.result}
                                            </div>
                                            <div>
                                                <h3 className="font-black text-sm text-slate-900 dark:text-white uppercase tracking-tight">{match.venue}</h3>
                                                <p className="text-[9px] font-bold text-slate-400 mt-0.5">{match.time}</p>
                                            </div>
                                        </div>
                                        <div className={cn(
                                            "w-2 h-2 rounded-full",
                                            match.status === 'flagged' ? 'bg-red-500' : 'bg-amber-500'
                                        )}></div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">White</p>
                                            <p className="text-xs font-black text-slate-800 dark:text-slate-200">{match.p1}</p>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Black</p>
                                            <p className="text-xs font-black text-slate-800 dark:text-slate-200">{match.p2}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-primary text-white py-3 rounded-xl font-black text-[9px] uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-all">
                                            Verify
                                        </button>
                                        <button className="w-12 bg-red-50 dark:bg-red-950/30 text-red-500 rounded-xl flex items-center justify-center active:scale-95 transition-all">
                                            <span className="material-icons-round text-lg">flag</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>

                    {/* Footer Info */}
                    <footer className="p-8 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800/50">
                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="material-icons-round text-sm">info</span>
                            <p className="text-[9px] font-bold uppercase tracking-widest">Awaiting OTP Verification results are automatically prioritized.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
