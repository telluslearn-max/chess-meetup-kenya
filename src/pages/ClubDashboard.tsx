import React from 'react'

export const ClubDashboard: React.FC = () => {
    const stats = [
        { label: 'Active Members', value: '142', growth: '+12%', icon: 'groups' },
        { label: 'Events Hosted', value: '28', growth: '+3', icon: 'emoji_events' },
        { label: 'Avg. Attendance', value: '85%', growth: '+5%', icon: 'trending_up' },
    ]

    const upcomingEvents = [
        { title: 'Blitz Championship', date: 'Oct 20', attendees: '24 Players', status: 'Live' },
        { title: 'Weekly Social', date: 'Oct 25', attendees: '12 Players', status: 'Planned' },
    ]

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display p-6 pb-32 overflow-y-auto no-scrollbar">
            <header className="mb-10 pt-4">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Admin Dashboard</h1>
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                        <span className="material-icons-round">settings</span>
                    </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-semibold uppercase text-[10px] tracking-widest">Nairobi Kings Chess Club</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-icons-round text-xl">{stat.icon}</span>
                            </div>
                            <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">{stat.growth}</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Main Sections */}
            <div className="space-y-8">
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Upcoming Club Events</h2>
                        <button className="p-2 bg-primary/10 text-primary rounded-xl">
                            <span className="material-icons-round">add</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        {upcomingEvents.map((ev, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                        <span className="material-icons-round">event</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{ev.title}</h4>
                                        <p className="text-xs text-slate-500">{ev.date} • {ev.attendees}</p>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${ev.status === 'Live' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                                    {ev.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 border border-primary/20">
                    <h3 className="text-lg font-extrabold text-primary mb-2">Member Growth Spiking!</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        Your club has seen a significant increase in new members this week. Consider hosting a beginner-friendly meetup soon.
                    </p>
                    <button className="bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all text-sm">
                        Schedule Meetup
                    </button>
                </section>
            </div>
        </div>
    )
}
