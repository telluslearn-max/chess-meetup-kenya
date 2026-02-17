import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const GameHostFlow: React.FC = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        venue: 'Bao Box',
        date: 'Oct 14',
        time: '02:00 PM',
        vibe: 'Casual / Social',
        spots: 8,
        description: '',
        isPublic: true
    })

    const nextStep = () => setStep(s => Math.min(s + 1, 4))
    const prevStep = () => setStep(s => Math.max(s - 1, 1))

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            <div className="flex-1 w-full max-w-2xl mx-auto md:py-12 md:px-6">
                <div className="bg-white dark:bg-slate-900 md:rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none md:border border-slate-100 dark:border-slate-800 flex flex-col h-full min-h-[600px] overflow-hidden relative">
                    {/* Header & Progress */}
                    <header className="px-6 pt-12 pb-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800/50">
                        <div className="flex items-center justify-between mb-6">
                            <button
                                onClick={step === 1 ? () => navigate(-1) : prevStep}
                                className="w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-90 transition-all shadow-sm"
                            >
                                <span className="material-icons-round">{step === 1 ? 'close' : 'arrow_back'}</span>
                            </button>
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Step {step} of 4</span>
                            </div>
                            <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors">Cancel</button>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden shadow-inner">
                            <div
                                className="bg-primary h-full transition-all duration-500 ease-out shadow-[0_0_10px_#1152d4]"
                                style={{ width: `${(step / 4) * 100}%` }}
                            ></div>
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar pb-32">
                        {step === 1 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Where is the match?</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Select a partner venue or add a custom one.</p>
                                </section>

                                <div className="relative group">
                                    <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                                    <input
                                        className="w-full bg-white dark:bg-slate-900 border-none rounded-2xl py-5 pl-12 pr-4 shadow-xl shadow-slate-200/50 dark:shadow-none focus:ring-2 focus:ring-primary/20 text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
                                        placeholder="Search for a cafe, park, or address..."
                                        type="text"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Recommended Partner Venues</h2>
                                    {[
                                        { name: 'Bao Box', dist: '0.3 mi', tags: 'Coffee & Board Games', rating: '4.8', img: 'https://i.pravatar.cc/300?u=bao' },
                                        { name: 'Java House', dist: '0.8 mi', tags: 'Quiet Atmosphere', rating: '4.5', img: 'https://i.pravatar.cc/300?u=java' },
                                        { name: 'Central Park', dist: '1.2 mi', tags: 'Outdoor Match', rating: '4.9', img: 'https://i.pravatar.cc/300?u=park' }
                                    ].map((v, i) => (
                                        <button
                                            key={i}
                                            onClick={() => { setFormData({ ...formData, venue: v.name }); nextStep(); }}
                                            className={cn(
                                                "w-full flex items-center gap-4 p-5 rounded-[2rem] border-2 transition-all active:scale-[0.98] text-left",
                                                formData.venue === v.name ? "border-primary bg-primary/5 shadow-xl shadow-primary/10" : "border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900"
                                            )}
                                        >
                                            <img src={v.img} className="w-16 h-16 rounded-2xl object-cover shadow-sm" alt={v.name} />
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="font-black text-slate-900 dark:text-white">{v.name}</h3>
                                                    <span className="text-[9px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full">Partner</span>
                                                </div>
                                                <p className="text-xs font-bold text-slate-400 mt-0.5">{v.dist} away • {v.tags}</p>
                                                <div className="flex items-center gap-1 mt-2">
                                                    <span className="material-icons-round text-sm text-amber-400">star</span>
                                                    <span className="text-[10px] font-black text-slate-600 dark:text-slate-400">{v.rating}</span>
                                                </div>
                                            </div>
                                            <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all", formData.venue === v.name ? "border-primary" : "border-slate-200 dark:border-slate-700")}>
                                                {formData.venue === v.name && <div className="w-3 h-3 bg-primary rounded-full animate-in zoom-in-50"></div>}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">When are you playing?</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Pick a date and time for your match.</p>
                                </section>

                                {/* Calendar Widget (Simplified Premium Mockup) */}
                                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="font-black text-lg text-slate-900 dark:text-white tracking-tight">October 2023</h3>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-not-allowed"><span className="material-icons-round text-lg">chevron_left</span></button>
                                            <button className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-not-allowed"><span className="material-icons-round text-lg">chevron_right</span></button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-y-4 text-center">
                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                                            <div key={d} className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">{d}</div>
                                        ))}
                                        {Array.from({ length: 31 }, (_, i) => i + 1).slice(10, 31).map(d => (
                                            <button
                                                key={d}
                                                onClick={() => setFormData({ ...formData, date: `Oct ${d}` })}
                                                className={cn(
                                                    "relative w-10 h-10 mx-auto text-sm font-black transition-all rounded-xl",
                                                    formData.date === `Oct ${d}` ? "text-white bg-primary shadow-xl shadow-primary/20 scale-110" : "text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                                )}
                                            >
                                                {d}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Select Duration</h3>
                                    <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6">
                                        {['1h', '2h', '3h', 'Open'].map(t => (
                                            <button key={t} className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 font-black text-xs uppercase tracking-widest text-slate-600 dark:text-slate-300 active:scale-95 transition-all shadow-sm">
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Set the vibe</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Help players know what to expect.</p>
                                </section>

                                <div className="space-y-4">
                                    {[
                                        { title: 'Casual / Social', desc: 'Relaxed play, beginners welcome, coffee.', icon: 'coffee' },
                                        { title: 'Competitive', desc: 'Serious games, clock play, and rating focused.', icon: 'military_tech' }
                                    ].map((v, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setFormData({ ...formData, vibe: v.title })}
                                            className={cn(
                                                "w-full flex items-center gap-5 p-6 rounded-[2.5rem] border-2 transition-all active:scale-[0.98] text-left",
                                                formData.vibe === v.title ? "border-primary bg-primary/5 shadow-xl shadow-primary/10" : "border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900"
                                            )}
                                        >
                                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner", formData.vibe === v.title ? "bg-primary text-white" : "bg-slate-50 dark:bg-slate-800 text-slate-400")}>
                                                <span className="material-icons-round text-3xl">{v.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-black text-slate-900 dark:text-white">{v.title}</h3>
                                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1 leading-snug">{v.desc}</p>
                                            </div>
                                            <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all", formData.vibe === v.title ? "border-primary" : "border-slate-200 dark:border-slate-700")}>
                                                {formData.vibe === v.title && <div className="w-3 h-3 bg-primary rounded-full animate-in zoom-in-50"></div>}
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-50 dark:border-slate-800 shadow-sm mt-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">Max Players</h3>
                                            <p className="text-xs font-bold text-slate-400 mt-1">Even numbers recommended</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => setFormData(f => ({ ...f, spots: Math.max(2, f.spots - 2) }))}
                                                className="w-10 h-10 rounded-full border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all font-black"
                                            > - </button>
                                            <span className="text-2xl font-black text-primary">{formData.spots}</span>
                                            <button
                                                onClick={() => setFormData(f => ({ ...f, spots: Math.min(20, f.spots + 2) }))}
                                                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 active:scale-95 transition-all font-black"
                                            > + </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Final touches</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Review your game details.</p>
                                </section>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">About this game</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-[2rem] p-6 text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all min-h-[150px] shadow-sm"
                                        placeholder="I'm bringing a board, let's play over coffee! Beginners welcome for analysis..."
                                    />
                                </div>

                                <div className="bg-primary/5 dark:bg-primary/10 border-2 border-primary/20 rounded-[2.5rem] p-8 space-y-6">
                                    {[
                                        { icon: 'location_on', label: 'Venue', value: formData.venue },
                                        { icon: 'schedule', label: 'Time', value: `${formData.date} • ${formData.time}` },
                                        { icon: 'mood', label: 'Vibe', value: `${formData.vibe} (${formData.spots} spots)` }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-5">
                                            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm text-primary">
                                                <span className="material-icons-round text-2xl">{item.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">{item.label}</p>
                                                <p className="text-sm font-black text-slate-900 dark:text-white">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-slate-50 dark:border-slate-800 shadow-sm">
                                    <div className="pr-4">
                                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Make Public</h3>
                                        <p className="text-[10px] font-bold text-slate-400 leading-tight mt-1">Allow anyone nearby to join.</p>
                                    </div>
                                    <button
                                        onClick={() => setFormData({ ...formData, isPublic: !formData.isPublic })}
                                        className={cn("w-12 h-6 rounded-full relative transition-all", formData.isPublic ? "bg-primary" : "bg-slate-200 dark:bg-slate-800")}
                                    >
                                        <div className={cn("absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm", formData.isPublic ? "right-1" : "left-1")}></div>
                                    </button>
                                </div>
                            </div>
                        )}
                    </main>

                    {/* Sticky footer */}
                    <footer className="absolute bottom-0 left-0 right-0 p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800/50 z-50">
                        <button
                            onClick={step === 4 ? () => navigate('/activity') : nextStep}
                            className="w-full bg-primary text-white font-black py-5 rounded-[1.5rem] shadow-2xl shadow-primary/30 hover:brightness-110 transition-all active:scale-[0.98] uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2"
                        >
                            {step === 4 ? 'Publish Match' : 'Next Step'}
                            <span className="material-icons-round text-lg">{step === 4 ? 'rocket_launch' : 'arrow_forward'}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}
