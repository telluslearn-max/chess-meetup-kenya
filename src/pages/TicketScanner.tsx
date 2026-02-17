import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TicketScanner: React.FC = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState<'idle' | 'scanning' | 'success'>('idle')

    const simulateScan = () => {
        setStatus('scanning')
        setTimeout(() => setStatus('success'), 2000)
    }

    return (
        <div className="flex flex-col h-full bg-slate-900 font-display text-white overflow-hidden">
            {/* Camera Viewport (Mock) */}
            <div className="flex-1 relative flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-slate-800 overflow-hidden opacity-50">
                    <img src="https://images.unsplash.com/photo-1542623024-a797a7a48d60?auto=format&fit=crop&q=80&w=800" alt="Camera feed" className="w-full h-full object-cover blur-sm" />
                </div>

                {/* Scanner Frame */}
                <div className="relative w-64 h-64 border-2 border-white/20 rounded-[3rem] flex items-center justify-center bg-black/20 backdrop-blur-sm shadow-2xl">
                    <div className="absolute inset-0 border-4 border-primary rounded-[3rem] animate-pulse opacity-40"></div>
                    <div className="w-56 h-56 border-2 border-dashed border-white/40 rounded-[2rem]"></div>
                    {/* Scanning Line */}
                    {status === 'scanning' && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-primary shadow-[0_0_20px_#1152d4] animate-[scan_2s_infinite]"></div>
                    )}
                </div>

                <div className="mt-12 text-center px-10">
                    <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-2">Organizer Scanner</h2>
                    <p className="text-white/60 text-sm font-bold">Align the QR code within the frame to check-in participants</p>
                </div>

                {status === 'success' && (
                    <div className="fixed inset-0 bg-primary/95 flex flex-col items-center justify-center p-10 z-50 animate-in fade-in zoom-in duration-300">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl">
                            <span className="material-icons-round text-primary text-6xl">check</span>
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-widest mb-2">Verified!</h3>
                        <p className="text-white font-bold opacity-80 mb-10">Tellus has successfully checked in.</p>
                        <button onClick={() => setStatus('idle')} className="bg-white text-primary font-black uppercase tracking-widest px-10 py-4 rounded-2xl shadow-xl active:scale-95 transition-all">
                            Scan Next
                        </button>
                    </div>
                )}
            </div>

            <footer className="p-8 bg-black/40 backdrop-blur-3xl border-t border-white/10 flex items-center justify-between">
                <button onClick={() => navigate(-1)} className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                    <span className="material-icons-round">close</span>
                </button>
                <button onClick={simulateScan} className="flex-1 mx-4 bg-primary text-white font-black uppercase text-xs tracking-widest py-5 rounded-2xl shadow-xl shadow-primary/20 active:scale-95 transition-all">
                    Simulate Scan
                </button>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                    <span className="material-icons-round">flash_on</span>
                </div>
            </footer>

            <style>{`
                @keyframes scan {
                    0% { top: 10%; }
                    50% { top: 90%; }
                    100% { top: 10%; }
                }
            `}</style>
        </div>
    )
}
