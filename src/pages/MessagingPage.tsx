import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Message {
    id: string
    sender: string
    avatar: string
    text: string
    time: string
    isOwn: boolean
}

export const MessagingPage: React.FC = () => {
    const navigate = useNavigate()
    const [msg, setMsg] = useState('')

    const messages: Message[] = [
        {
            id: '1',
            sender: 'Marcus',
            avatar: 'https://i.pravatar.cc/150?u=marcus',
            text: "Nice one. I'm parking now, will be there in 5 mins. Who brought the clocks?",
            time: '17:45',
            isOwn: false
        },
        {
            id: '2',
            sender: 'You',
            avatar: '',
            text: "I've arrived! Secured the large table near the window. ♟️",
            time: '17:42',
            isOwn: true
        },
        {
            id: '3',
            sender: 'Sarah',
            avatar: 'https://i.pravatar.cc/150?u=sarah',
            text: "I have two digital clocks in my bag! Ready for some blitz.",
            time: '17:48',
            isOwn: false
        }
    ]

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 font-display">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons-round">arrow_back_ios_new</span>
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden shadow-sm">
                                <span className="material-icons-round">groups</span>
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                        </div>
                        <div>
                            <h1 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">Bao Box - Friday Blitz</h1>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">12 members • 4 online</p>
                        </div>
                    </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary active:scale-90 transition-all">
                    <span className="material-icons-round">info</span>
                </button>
            </header>

            {/* Chat Feed */}
            <main className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                <div className="flex flex-col items-center">
                    <span className="px-3 py-1 bg-slate-200/50 dark:bg-slate-800/50 rounded-full text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Today</span>
                </div>

                {messages.map((m) => (
                    <div key={m.id} className={`flex ${m.isOwn ? 'justify-end' : 'justify-start'} items-end gap-2.5`}>
                        {!m.isOwn && (
                            <img src={m.avatar} alt={m.sender} className="w-8 h-8 rounded-full shadow-sm" />
                        )}
                        <div className="flex flex-col max-w-[75%] gap-1">
                            {!m.isOwn && <span className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-wider">{m.sender}</span>}
                            <div className={`
                                p-4 rounded-2xl shadow-sm leading-relaxed text-sm
                                ${m.isOwn
                                    ? 'bg-primary text-white rounded-br-none'
                                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-700 rounded-bl-none'}
                            `}>
                                {m.text}
                            </div>
                            <span className={`text-[9px] font-bold text-slate-400 ${m.isOwn ? 'text-right mr-1' : 'ml-1'}`}>{m.time} {m.isOwn && '• Read'}</span>
                        </div>
                    </div>
                ))}
            </main>

            {/* Input Area */}
            <footer className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pb-10">
                <div className="flex items-center gap-3">
                    <button className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons-round">add</span>
                    </button>
                    <div className="flex-1 relative group">
                        <input
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3.5 px-5 text-sm focus:ring-2 focus:ring-primary/20 dark:text-white placeholder-slate-400 transition-all"
                            placeholder="Message group..."
                            type="text"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-primary transition-colors">
                            <span className="material-icons-round">sentiment_satisfied</span>
                        </button>
                    </div>
                    <button className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary text-white rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                        <span className="material-icons-round -rotate-45 ml-1">send</span>
                    </button>
                </div>
            </footer >
        </div>
    )
}
