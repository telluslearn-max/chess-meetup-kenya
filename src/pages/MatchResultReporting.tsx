import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const MatchResultReporting: React.FC = () => {
    const navigate = useNavigate()
    const [outcome, setOutcome] = useState<'p1' | 'draw' | 'p2' | null>(null)
    const [pin, setPin] = useState(['', '', '', ''])
    const [otpSent, setOtpSent] = useState(false)
    const [otpVerified, setOtpVerified] = useState(false)
    const [otpLoading, setOtpLoading] = useState(false)

    const handlePinChange = (val: string, index: number) => {
        if (val.length > 1) return
        const newPin = [...pin]
        newPin[index] = val
        setPin(newPin)

        if (val !== '' && index < 3) {
            const nextInput = document.getElementById(`pin-${index + 1}`)
            nextInput?.focus()
        }
    }

    const simulateOtpSend = () => {
        setOtpLoading(true)
        setTimeout(() => {
            setOtpLoading(false)
            setOtpSent(true)
        }, 1500)
    }

    const simulateOtpVerify = () => {
        setOtpLoading(true)
        setTimeout(() => {
            setOtpLoading(false)
            setOtpVerified(true)
        }, 1000)
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            <div className="flex-1 w-full max-w-2xl mx-auto md:py-12 md:px-6">
                <div className="bg-white dark:bg-slate-900 md:rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none md:border border-slate-100 dark:border-slate-800 flex flex-col h-full min-h-[600px] overflow-hidden relative">
                    <header className="px-6 pt-12 pb-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800/50">
                        <div className="flex justify-between items-center">
                            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-400 hover:text-primary transition-colors">
                                <span className="material-icons-round">close</span>
                            </button>
                            <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] leading-none mt-1">Record Match</h1>
                            <div className="w-10"></div>
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar pb-32">
                        <div className="grid grid-cols-7 gap-1 items-center mb-12 relative">
                            <div className="col-span-3 flex flex-col items-center p-5 bg-primary/5 dark:bg-primary/10 rounded-[2rem] border border-primary/20 shadow-sm">
                                <div className="relative mb-3">
                                    <img src="https://i.pravatar.cc/150?u=peter" alt="Peter" className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl ring-4 ring-primary/20" />
                                </div>
                                <span className="font-black text-slate-900 dark:text-white">Peter</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">White</span>
                            </div>
                            <div className="col-span-1 flex justify-center z-10">
                                <div className="bg-primary/10 text-primary text-[10px] font-black w-10 h-10 rounded-full flex items-center justify-center border-4 border-background-light dark:border-background-dark shadow-lg">VS</div>
                            </div>
                            <div className="col-span-3 flex flex-col items-center p-5 bg-slate-50 dark:bg-slate-900/40 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="relative mb-3">
                                    <img src="https://i.pravatar.cc/150?u=ray" alt="Ray" className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl ring-4 ring-slate-100 dark:ring-slate-900" />
                                </div>
                                <span className="font-black text-slate-900 dark:text-white">Ray</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Black</span>
                            </div>
                        </div>

                        <div className="space-y-6 mb-12">
                            <h2 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] px-2 mb-4">Select Winner</h2>
                            <div className="space-y-3">
                                {(['p1', 'draw', 'p2'] as const).map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => setOutcome(opt)}
                                        className={cn(
                                            "w-full flex items-center justify-between p-5 rounded-3xl border-2 transition-all active:scale-[0.98]",
                                            outcome === opt ? "border-primary bg-primary/10 shadow-lg shadow-primary/10" : "border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900/40"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={cn("material-icons-round text-2xl", outcome === opt ? "text-primary" : "text-slate-300")}>
                                                {opt === 'draw' ? 'balance' : 'emoji_events'}
                                            </span>
                                            <span className={cn("font-black tracking-tight", outcome === opt ? "text-slate-900 dark:text-white" : "text-slate-400")}>
                                                {opt === 'p1' ? 'Peter Won' : opt === 'p2' ? 'Ray Won' : 'Draw Match'}
                                            </span>
                                        </div>
                                        {outcome === opt && <span className="material-icons-round text-primary">check_circle</span>}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-50 dark:border-slate-800 mb-6 shadow-sm">
                            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.1em] mb-6 flex items-center gap-2">
                                <span className="material-icons-round text-primary text-sm">verified</span>
                                Results Verification
                            </h3>

                            {!otpSent && !otpVerified ? (
                                <div className="space-y-6">
                                    <p className="text-[11px] font-bold text-slate-400 leading-relaxed uppercase tracking-wider">Step 1: Organizer Pin</p>
                                    <div className="flex justify-between gap-4">
                                        {[0, 1, 2, 3].map((i) => (
                                            <input
                                                key={i}
                                                id={`pin-${i}`}
                                                value={pin[i]}
                                                onChange={(e) => handlePinChange(e.target.value, i)}
                                                className="w-full aspect-square bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-center text-2xl font-black focus:ring-4 focus:ring-primary/20 dark:text-white shadow-inner"
                                                type="number"
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={simulateOtpSend}
                                        disabled={pin.some(p => p === '') || otpLoading}
                                        className="w-full bg-slate-900 dark:bg-slate-800 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 disabled:opacity-50 transition-all font-display"
                                    >
                                        {otpLoading ? <span className="animate-spin text-lg material-icons-round">sync</span> : 'Confirm & Request SMS OTP'}
                                    </button>
                                </div>
                            ) : !otpVerified ? (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <p className="text-[11px] font-bold text-slate-400 leading-relaxed uppercase tracking-wider text-center">SMS OTP sent to Organizer's Phone</p>
                                    <div className="flex justify-center gap-3">
                                        {[0, 1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={simulateOtpVerify}
                                        className="w-full bg-primary text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 font-display"
                                    >
                                        {otpLoading ? <span className="animate-spin text-lg material-icons-round">sync</span> : 'Verify Code'}
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center py-6 animate-in zoom-in duration-300">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-4 shadow-xl shadow-green-200">
                                        <span className="material-icons-round text-3xl">check</span>
                                    </div>
                                    <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">OTP Verified</p>
                                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest text-center">Referee: Grandmaster-OTP-21</p>
                                </div>
                            )}
                        </div>
                    </main>

                    <footer className="p-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50 z-50">
                        <button
                            disabled={!outcome || !otpVerified}
                            onClick={() => navigate('/profile')}
                            className={cn(
                                "w-full text-white font-black py-5 rounded-[1.5rem] shadow-2xl transition-all active:scale-[0.98] uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 font-display",
                                outcome && otpVerified ? "bg-primary shadow-primary/30" : "bg-slate-300 cursor-not-allowed shadow-none"
                            )}
                        >
                            Finalize Result
                            <span className="material-icons-round text-xl">publish</span>
                        </button>
                        <p className="text-center text-[10px] font-bold text-slate-400 mt-6 px-6 leading-relaxed opacity-60 italic">
                            By submitting, both players confirm the accuracy of this data. Elo and points will be updated within 2 hours of verification.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
