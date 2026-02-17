import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight, MessageSquare } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const SupportPage: React.FC = () => {
    const navigate = useNavigate()

    const categories = [
        { icon: 'person', label: 'Account Help', sublabel: 'Profile and security', color: 'text-cyan-500', bg: 'bg-cyan-500/10', path: '/help' },
        { icon: 'payments', label: 'Payments', sublabel: 'Fees & payouts', color: 'text-emerald-500', bg: 'bg-emerald-500/10', path: '/help' },
        { icon: 'event', label: 'Meetup Issues', sublabel: 'Event problems', color: 'text-blue-500', bg: 'bg-blue-500/10', path: '/help' },
        { icon: 'groups', label: 'Club Tools', sublabel: 'Organizer support', color: 'text-purple-500', bg: 'bg-purple-500/10', path: '/help' }
    ]

    const recentTickets = [
        { id: '#CH-8821', title: 'Club membership fee error', status: 'IN REVIEW', statusColor: 'text-orange-500', statusBg: 'bg-orange-500/10', updated: 'Updated 2 hours ago' },
        { id: '#CH-7490', title: 'Unable to cancel RSVP', status: 'RESOLVED', statusColor: 'text-green-500', statusBg: 'bg-green-500/10', updated: 'Aug 12, 2023' },
        { id: '#CH-6211', title: 'Organizer badge not showing', status: 'OPEN', statusColor: 'text-blue-500', statusBg: 'bg-blue-500/10', updated: 'Aug 09, 2023' }
    ]

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="px-5 pt-8 pb-5 bg-white dark:bg-slate-900 shadow-sm z-30 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group cursor-pointer" onClick={() => navigate('/settings')}>
                            <ArrowLeft size={20} />
                        </div>
                        <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Help & Support</h1>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageSquare size={20} className="text-primary" />
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto px-5 py-6 space-y-8 pb-24">
                {/* Search Bar */}
                <div className="relative">
                    <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        placeholder="How can we help?"
                        className="w-full pl-12 pr-4 py-4 bg-cyan-50 dark:bg-cyan-950/20 border-none rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>

                {/* Categories */}
                <section>
                    <h2 className="text-sm font-black text-slate-900 dark:text-white mb-4">Categories</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {categories.map((category, idx) => (
                            <div
                                key={idx}
                                onClick={() => navigate(category.path)}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer active:scale-[0.98]"
                            >
                                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-3", category.bg)}>
                                    <span className={cn("material-icons-round text-2xl", category.color)}>{category.icon}</span>
                                </div>
                                <p className="font-black text-slate-900 dark:text-white mb-1">{category.label}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{category.sublabel}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Chat with Support CTA */}
                <button
                    onClick={() => navigate('/help')}
                    className="w-full py-5 bg-primary text-white rounded-3xl font-black text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                >
                    <MessageSquare size={20} />
                    Chat with Support
                </button>

                {/* Recent Tickets */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-black text-slate-900 dark:text-white">Recent Tickets</h2>
                        <button className="text-sm font-black text-primary">View All</button>
                    </div>

                    <div className="space-y-3">
                        {recentTickets.map((ticket, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer active:scale-[0.98]"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">ID: {ticket.id}</p>
                                        <p className="font-black text-slate-900 dark:text-white mb-2">{ticket.title}</p>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <span className="material-icons-round text-sm">schedule</span>
                                            {ticket.updated}
                                        </div>
                                    </div>
                                    <div className={cn("px-3 py-1 rounded-full text-[10px] font-black tracking-widest", ticket.statusColor, ticket.statusBg)}>
                                        {ticket.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
