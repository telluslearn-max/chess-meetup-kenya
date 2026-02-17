import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Download, TrendingUp } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

type ViewTab = 'live' | 'daily' | 'total'

export const SponsorAnalytics: React.FC = () => {
    const navigate = useNavigate()
    const { id, sponsorId } = useParams()
    const [activeView, setActiveView] = useState<ViewTab>('live')

    const metrics = {
        impressions: { value: '24.8k', change: '+12%', trending: 'up' },
        perks: { value: '1,204', change: '+8.4%', trending: 'up' },
        clicks: { value: '892', change: '+15.1%', trending: 'up' }
    }

    const engagementData = [
        { time: '08:00', value: 45 },
        { time: '12:00', value: 65 },
        { time: '16:00', value: 85, peak: true },
        { time: '20:00', value: 55 },
        { time: '00:00', value: 25 }
    ]

    const maxValue = Math.max(...engagementData.map(d => d.value))

    const topPlayers = [
        { rank: 1, name: 'Alex Rivera', perks: 4, shares: 12, score: 940, avatar: 'https://i.pravatar.cc/100?u=alex' },
        { rank: 2, name: 'Sarah Jenkins', perks: 3, shares: 8, score: 812, avatar: 'https://i.pravatar.cc/100?u=sarah' },
        { rank: 3, name: 'Marcus Chen', perks: 2, shares: 15, score: 785, avatar: 'https://i.pravatar.cc/100?u=marcus' }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-slate-900 dark:bg-slate-950 font-display text-white">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
                <div className="px-6 py-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-black text-white mb-1">Sponsor Analytics</h1>
                            <p className="text-xs font-medium text-slate-400">Real-time engagement performance</p>
                        </div>
                        <button className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary active:scale-90 transition-all">
                            <span className="material-icons-round">settings</span>
                        </button>
                    </div>

                    {/* View Tabs */}
                    <div className="flex bg-slate-800/50 p-1 rounded-2xl gap-1">
                        {(['live', 'daily', 'total'] as ViewTab[]).map((view) => (
                            <button
                                key={view}
                                onClick={() => setActiveView(view)}
                                className={cn(
                                    "flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all",
                                    activeView === view
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-slate-400 hover:text-slate-200"
                                )}
                            >
                                {view}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 p-6 pb-32 space-y-6">
                {/* Metrics Cards */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/50">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-2">Impressions</p>
                        <p className="text-2xl font-black text-primary mb-1">{metrics.impressions.value}</p>
                        <div className="flex items-center gap-1">
                            <TrendingUp size={10} className="text-green-400" />
                            <span className="text-[9px] font-bold text-green-400">{metrics.impressions.change}</span>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/50">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-2">Perks</p>
                        <p className="text-2xl font-black text-primary mb-1">{metrics.perks.value}</p>
                        <div className="flex items-center gap-1">
                            <TrendingUp size={10} className="text-green-400" />
                            <span className="text-[9px] font-bold text-green-400">{metrics.perks.change}</span>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/50">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-2">Clicks</p>
                        <p className="text-2xl font-black text-primary mb-1">{metrics.clicks.value}</p>
                        <div className="flex items-center gap-1">
                            <TrendingUp size={10} className="text-green-400" />
                            <span className="text-[9px] font-bold text-green-400">{metrics.clicks.change}</span>
                        </div>
                    </div>
                </div>

                {/* Engagement Chart */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-sm font-black text-white mb-1">Engagement Over Time</h3>
                            <p className="text-[10px] font-medium text-slate-400">Activity peaked at 2:00 AM</p>
                        </div>
                        <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-xl">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Last 24h</span>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="flex items-end justify-between gap-2 h-40">
                        {engagementData.map((data, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                <div className="w-full flex flex-col justify-end h-full relative">
                                    {data.peak && (
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] font-black px-2 py-1 rounded-lg whitespace-nowrap">
                                            Peak
                                        </div>
                                    )}
                                    <div
                                        className={cn(
                                            "w-full rounded-t-xl transition-all",
                                            data.peak ? "bg-primary shadow-[0_0_20px_rgba(17,82,212,0.5)]" : "bg-primary/60"
                                        )}
                                        style={{ height: `${(data.value / maxValue) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="text-[9px] font-bold text-slate-500">{data.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Most Engaged Players */}
                <div>
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h3 className="text-sm font-black text-white">Most Engaged Players</h3>
                        <button className="text-[10px] font-bold text-primary uppercase tracking-wider hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="space-y-3">
                        {topPlayers.map((player) => (
                            <div
                                key={player.rank}
                                className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/50 flex items-center gap-4"
                            >
                                <div className="flex items-center gap-3 flex-1">
                                    <div className="relative">
                                        <div className={cn(
                                            "absolute -top-2 -left-2 w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shadow-lg",
                                            player.rank === 1 ? "bg-yellow-500 text-slate-900" :
                                                player.rank === 2 ? "bg-slate-400 text-slate-900" :
                                                    "bg-orange-600 text-white"
                                        )}>
                                            {player.rank}
                                        </div>
                                        <img
                                            src={player.avatar}
                                            alt={player.name}
                                            className="w-12 h-12 rounded-xl object-cover border-2 border-slate-700"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-white mb-1">{player.name}</h4>
                                        <p className="text-[9px] font-medium text-slate-400">
                                            {player.perks} Perk Claims • {player.shares} Shares
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-black text-primary">{player.score}</p>
                                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Score</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Export Report */}
                <button className="w-full bg-primary/10 border-2 border-primary/20 text-primary py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
                    <Download size={18} />
                    Export Full Analytics Report
                </button>
            </main>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 z-50">
                <div className="flex items-center justify-around py-3">
                    <button
                        onClick={() => navigate(`/tournament/${id}`)}
                        className="flex flex-col items-center gap-1 px-6 py-2 text-slate-400 hover:text-slate-200 transition-all"
                    >
                        <span className="material-icons-round text-xl">home</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider">Home</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 px-6 py-2 text-slate-400 hover:text-slate-200 transition-all">
                        <span className="material-icons-round text-xl">calendar_today</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider">Schedule</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 px-6 py-2 text-primary">
                        <span className="material-icons-round text-xl">insights</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider">Insights</span>
                    </button>
                    <button
                        onClick={() => navigate(`/tournament/${id}/sponsors/${sponsorId}`)}
                        className="flex flex-col items-center gap-1 px-6 py-2 text-slate-400 hover:text-slate-200 transition-all"
                    >
                        <span className="material-icons-round text-xl">person</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
