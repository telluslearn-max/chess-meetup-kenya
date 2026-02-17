import React from 'react'
import { useNavigate } from 'react-router-dom'

export const EntryTicket: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display antialiased p-6 pb-32 overflow-y-auto no-scrollbar">
            {/* Header */}
            <header className="flex items-center justify-between mb-8 pt-4">
                <button onClick={() => navigate(-1)} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 text-slate-400">
                    <span className="material-icons-round">chevron_left</span>
                </button>
                <h1 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">Entry Pass</h1>
                <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 text-slate-400">
                    <span className="material-icons-round">share</span>
                </button>
            </header>

            {/* Ticket Card */}
            <main className="w-full max-w-sm mx-auto">
                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-slate-50 dark:border-slate-800">
                    {/* Header Section */}
                    <div className="p-8 pb-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary mb-3">
                                    Blitz Tournament
                                </span>
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">Westlands Blitz Social</h2>
                            </div>
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <span className="material-icons-round text-primary text-3xl">grid_view</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center text-slate-500 dark:text-slate-400">
                                <span className="material-icons-round text-primary mr-3 text-2xl">location_on</span>
                                <span className="text-sm font-bold">Bao Box, Westlands</span>
                            </div>
                            <div className="flex items-center text-slate-500 dark:text-slate-400">
                                <span className="material-icons-round text-primary mr-3 text-2xl">calendar_today</span>
                                <span className="text-sm font-bold">Sat, Oct 24 • 6 PM - 10 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Divider */}
                    <div className="relative border-t-4 border-dashed border-slate-100 dark:border-slate-800 my-2">
                        <div className="absolute -left-4 -top-4 w-8 h-8 bg-background-light dark:bg-background-dark rounded-full"></div>
                        <div className="absolute -right-4 -top-4 w-8 h-8 bg-background-light dark:bg-background-dark rounded-full"></div>
                    </div>

                    {/* QR Code Section */}
                    <div className="p-10 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/20">
                        <div className="p-5 bg-white rounded-[2rem] shadow-xl border border-slate-100">
                            <img alt="QR Code" className="w-48 h-48" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CHSS-8829-TL" />
                        </div>
                        <p className="mt-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Scan at entrance</p>

                        <div className="mt-10 flex flex-col items-center">
                            <div className="relative">
                                <img alt="Player" className="w-20 h-20 rounded-full border-4 border-white dark:border-slate-900 shadow-2xl object-cover" src="https://i.pravatar.cc/150?u=tellus" />
                                <div className="absolute -right-1 -bottom-1 bg-primary text-white p-1.5 rounded-full border-4 border-white dark:border-slate-900 shadow-lg">
                                    <span className="material-icons-round text-xs">verified</span>
                                </div>
                            </div>
                            <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">Tellus</h3>
                            <div className="mt-2 flex items-center bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Verified Player</span>
                            </div>
                        </div>
                    </div>

                    {/* Perks Section */}
                    <div className="bg-primary/5 dark:bg-primary/10 p-5 mx-8 mb-8 rounded-[1.5rem] border border-primary/10 flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mr-4 shadow-lg shadow-primary/30">
                            <span className="material-icons-round">local_bar</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Exclusive Perk</h4>
                            <p className="text-xs font-bold text-slate-500">10% off drinks at the counter</p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-10 space-y-4">
                    <button className="w-full bg-slate-900 dark:bg-primary text-white rounded-2xl py-5 font-black uppercase text-xs tracking-widest flex items-center justify-center shadow-2xl active:scale-95 transition-all">
                        <span className="material-icons-round mr-3">account_balance_wallet</span>
                        Add to Apple Wallet
                    </button>
                    <button className="w-full flex items-center justify-center text-primary font-black uppercase text-xs tracking-widest py-3 hover:bg-primary/5 rounded-xl transition-all">
                        <span className="material-icons-round mr-2 text-xl">directions</span>
                        Get Directions
                    </button>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Order ID: #CHSS-8829-TL</p>
                </div>
            </main>
        </div>
    )
}
