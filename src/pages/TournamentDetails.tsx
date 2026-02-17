import React, { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Trophy, Users, Info, Gavel, Layout, List } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

type TabType = 'overview' | 'players' | 'rules' | 'rankings' | 'brackets' | 'partners'

export const TournamentDetails: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    // Default to 'overview' if no tab param exists
    const initialTab = (searchParams.get('tab') as TabType) || 'overview'
    const [activeTab, setActiveTab] = useState<TabType>(initialTab)

    const [searchQuery, setSearchQuery] = useState('')
    const [myStatus, setMyStatus] = useState<'Pending' | 'Checked-In'>('Pending')
    const [isCheckingIn, setIsCheckingIn] = useState(false)

    // Sync tab with URL
    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab)
        setSearchParams({ tab })
    }

    const tabs = [
        { id: 'overview', label: 'Overview', icon: 'info' },
        { id: 'rankings', label: 'Live', icon: 'leaderboard' },
        { id: 'brackets', label: 'Brackets', icon: 'account_tree' },
        { id: 'players', label: 'Attendees', icon: 'groups' },
        { id: 'partners', label: 'Partners', icon: 'handshake' },
        { id: 'rules', label: 'Rules', icon: 'gavel' },
    ]

    const players = [
        { name: "Magnus Carlsen", rating: 2854, checkedIn: true, avatar: "https://i.pravatar.cc/100?u=magnus", seed: 1 },
        { name: "Hou Yifan", rating: 2658, checkedIn: true, avatar: "https://i.pravatar.cc/100?u=hou", seed: 2 },
        { name: "Fabiano Caruana", rating: 2822, checkedIn: false, avatar: "https://i.pravatar.cc/100?u=fabiano", seed: 3 },
        { name: "Alireza Firouzja", rating: 2785, checkedIn: true, avatar: "https://i.pravatar.cc/100?u=alireza", seed: 4 },
        { name: "Hikaru Nakamura", rating: 2795, checkedIn: false, avatar: "https://i.pravatar.cc/100?u=hikaru", seed: 5 },
        { name: "Wesley So", rating: 2760, checkedIn: false, avatar: "https://i.pravatar.cc/100?u=wesley" },
        { name: "Anish Giri", rating: 2770, checkedIn: true, avatar: "https://i.pravatar.cc/100?u=anish" },
    ]

    const handleCheckIn = () => {
        setIsCheckingIn(true)
        setTimeout(() => {
            setMyStatus('Checked-In')
            setIsCheckingIn(false)
        }, 1500)
    }

    const filteredPlayers = players.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    const seeds = filteredPlayers.filter(p => p.seed)
    const general = filteredPlayers.filter(p => !p.seed)

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            {/* Hero Header */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=1200"
                    alt="Tournament"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent"></div>
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-12 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-lg active:scale-90 transition-all z-10"
                >
                    <span className="material-icons-round">arrow_back</span>
                </button>
            </div>

            {/* Title Section */}
            <div className="px-6 -mt-16 relative z-10">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800">
                    <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">Grand Slam Series</span>
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                                <span className="material-icons-round text-sm">stars</span>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">Nairobi Masters Invitational</h1>
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center gap-3">
                            <i className="material-icons-round text-primary text-sm">calendar_today</i>
                            <span className="text-xs font-bold text-slate-500">Oct 20-22, 2023</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="material-icons-round text-primary text-sm">location_on</i>
                            <span className="text-xs font-bold text-slate-500">Sarit Center</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Personalized Registration Status Card */}
            <div className="px-6 mt-6">
                <div className={cn(
                    "p-6 rounded-[2.5rem] border relative overflow-hidden transition-all duration-500",
                    myStatus === 'Checked-In'
                        ? "bg-green-500/10 border-green-500/20 dark:bg-green-500/5 dark:border-green-500/10"
                        : "bg-slate-900 dark:bg-slate-800 border-white/10 shadow-xl"
                )}>
                    {myStatus === 'Checked-In' && (
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[40px] -mr-16 -mt-16"></div>
                    )}
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <img src="https://i.pravatar.cc/100?u=me" className="w-12 h-12 rounded-2xl border-2 border-white/20 object-cover" alt="Me" />
                                {myStatus === 'Checked-In' && (
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-2 border-white">
                                        <span className="material-icons-round text-[10px]">check</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className={cn("text-xs font-black uppercase tracking-widest", myStatus === 'Checked-In' ? "text-green-500" : "text-white/40")}>My Participation</p>
                                <p className={cn("text-sm font-black mt-0.5", myStatus === 'Checked-In' ? "text-slate-900 dark:text-white" : "text-white")}>
                                    {myStatus === 'Checked-In' ? 'Live & Ready' : 'Awaiting Check-in'}
                                </p>
                            </div>
                        </div>

                        {myStatus === 'Pending' ? (
                            <button
                                onClick={handleCheckIn}
                                disabled={isCheckingIn}
                                className="h-11 px-6 bg-primary text-white rounded-xl flex items-center justify-center font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-all overflow-hidden"
                            >
                                {isCheckingIn ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Processing
                                    </div>
                                ) : 'Check In Now'}
                            </button>
                        ) : (
                            <div className="bg-green-500 text-white p-2 rounded-xl">
                                <span className="material-icons-round">qr_code_2</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="px-6 mt-8 flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-[1.5rem] mx-6 overflow-x-auto no-scrollbar gap-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id as TabType)}
                        className={cn(
                            "flex-1 min-w-[80px] py-3 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2",
                            activeTab === tab.id
                                ? "bg-white dark:bg-primary text-primary dark:text-white shadow-md scale-[1.02]"
                                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        )}
                    >
                        <span className="material-icons-round text-sm">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <main className="flex-1 p-6 pb-32">
                {activeTab === 'overview' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Prize</p>
                                <p className="text-xl font-black text-primary">KSh 50k</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Format</p>
                                <p className="text-xl font-black text-slate-900 dark:text-white">Knockout</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">Event Flow</h3>
                                <div className="flex items-center gap-1.5 bg-green-500/5 dark:bg-green-500/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-500/20">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-[9px] font-black text-green-600 dark:text-green-400 uppercase tracking-widest leading-none">In Progress</span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { time: '09:00 AM', event: 'Player Check-in & Briefing', active: true, completed: true },
                                    { time: '10:00 AM', event: 'Round 1: Quarter Finals', active: true, completed: true },
                                    { time: '01:30 PM', event: 'Lunch & Blitz Side-Matches', active: true, completed: false },
                                    { time: '03:00 PM', event: 'Semi-Finals & Finals', active: false, completed: false },
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4 relative">
                                        {i !== 3 && <div className="absolute left-1.5 top-6 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800"></div>}
                                        <div className={cn(
                                            "w-3 h-3 rounded-full z-10 mt-1",
                                            step.completed ? "bg-green-500" : step.active ? "bg-primary shadow-[0_0_8px_#1152d4]" : "bg-slate-200 dark:bg-slate-700"
                                        )}></div>
                                        <div>
                                            <p className={cn("text-[10px] font-black uppercase tracking-widest", step.completed ? "text-green-500" : "text-primary")}>{step.time}</p>
                                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-0.5">{step.event}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'rankings' && (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <section className="space-y-4">
                            <div className="flex items-center justify-between px-2 mb-2">
                                <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Live Rankings</h2>
                                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Match Points</span>
                            </div>
                            {[
                                { rank: 1, name: "Magnus Carlsen", avatar: "https://i.pravatar.cc/100?u=magnus", points: 3.5, status: 'Active' },
                                { rank: 2, name: "Hou Yifan", avatar: "https://i.pravatar.cc/100?u=hou", points: 3.0, status: 'Waiting' },
                                { rank: 3, name: "Fabiano Caruana", avatar: "https://i.pravatar.cc/100?u=fabiano", points: 2.5, status: 'Active' },
                                { rank: 4, name: "Alireza Firouzja", avatar: "https://i.pravatar.cc/100?u=alireza", points: 1.5, status: 'Eliminated' },
                            ].map((p) => (
                                <div key={p.rank} className="bg-white dark:bg-slate-900 p-4 rounded-3xl flex items-center gap-4 border border-slate-50 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                                    <div className="w-8 flex justify-center">
                                        <span className={cn("text-xl font-black", p.rank === 1 ? "text-primary scale-110" : "text-slate-300")}>{p.rank}</span>
                                    </div>
                                    <div className="relative">
                                        <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm group-hover:border-primary/30 transition-colors" />
                                        {p.status === 'Active' && (
                                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 dark:text-white text-sm">{p.name}</h3>
                                        <span className={cn("text-[10px] font-black uppercase tracking-widest",
                                            p.status === 'Active' ? 'text-primary' :
                                                p.status === 'Eliminated' ? 'text-red-400' : 'text-slate-400'
                                        )}>
                                            {p.status}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xl font-black text-slate-900 dark:text-white">{p.points.toFixed(1)}</span>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* Stream Action Card */}
                        <div className="bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl mt-8 border border-white/5">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[80px] -mr-20 -mt-20"></div>
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 bg-red-500/10 px-3 py-1.5 rounded-full border border-red-500/20">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                                        <span className="text-[9px] font-black text-red-500 uppercase tracking-widest leading-none">Live Stream</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-white/40 text-[9px] font-black uppercase tracking-widest">
                                        4.2k Watching
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Featured Match</p>
                                    <h4 className="text-xl font-black text-white uppercase tracking-tight leading-tight">Carlsen <span className="text-white/30 italic px-2">vs</span> Nepo</h4>
                                </div>
                                <button className="w-full bg-primary hover:bg-primary-light text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 active:scale-[0.98] transition-all text-[10px] uppercase tracking-[0.2em] border border-white/10">
                                    Watch Board 1
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'brackets' && (
                    <div className="space-y-8 overflow-hidden animate-in fade-in duration-500">
                        <section className="space-y-6">
                            <div className="flex items-center justify-between px-2 mb-2">
                                <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Knockout Bracket</h2>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Live Match</span>
                                </div>
                            </div>

                            <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar -mx-6 px-12 relative items-center">
                                {/* Round 1: Semi Finals */}
                                <div className="flex flex-col gap-12 relative">
                                    {[
                                        { p1: { name: 'Carlsen', score: '1.0' }, p2: { name: 'Firouzja', score: '0.0' }, live: true },
                                        { p1: { name: 'Nakamura', score: '0.5' }, p2: { name: 'Caruana', score: '0.5' }, live: false }
                                    ].map((match, i) => (
                                        <div key={i} className="relative">
                                            <div className={cn(
                                                "w-52 bg-white dark:bg-slate-900 rounded-[2rem] border-2 shadow-sm p-1 relative group overflow-hidden",
                                                match.live ? "border-primary shadow-primary/5" : "border-slate-50 dark:border-slate-800"
                                            )}>
                                                <div className="p-3 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl mb-1">
                                                    <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase truncate pr-2">{match.p1.name}</span>
                                                    <span className="text-xs font-black text-primary">{match.p1.score}</span>
                                                </div>
                                                <div className="p-3 flex items-center justify-between">
                                                    <span className="text-[10px] font-black text-slate-400 uppercase truncate pr-2">{match.p2.name}</span>
                                                    <span className="text-xs font-black text-slate-300">{match.p2.score}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col justify-center">
                                    <div className="w-8 h-[2px] bg-slate-100 dark:bg-slate-800"></div>
                                </div>

                                {/* Finals */}
                                <div className="flex flex-col items-center">
                                    <div className="w-56 aspect-video bg-primary/5 rounded-[2.5rem] border border-dashed border-primary/20 flex flex-col items-center justify-center p-6">
                                        <Trophy size={24} className="text-primary/20 mb-2" />
                                        <span className="text-[9px] font-black text-primary/40 uppercase tracking-[0.2em] text-center">Grand Finals Pending</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'players' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="relative group">
                            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                            <input
                                type="text"
                                placeholder="Search attendees..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white dark:bg-slate-900 rounded-[2rem] py-4 pl-12 pr-4 border border-slate-100 dark:border-slate-800 font-bold text-sm shadow-sm transition-all focus:ring-2 focus:ring-primary/10 outline-none"
                            />
                        </div>

                        {/* Top Seeds Section */}
                        {seeds.length > 0 && (
                            <section>
                                <div className="flex items-center justify-between px-2 mb-4">
                                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                                        <span className="material-icons-round text-xs">emoji_events</span>
                                        Top Seeds
                                    </h3>
                                    <span className="text-[9px] font-bold text-slate-400 uppercase">Power Ranking</span>
                                </div>
                                <div className="space-y-3">
                                    {seeds.map((player, i) => (
                                        <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-[2.5rem] border border-primary/10 shadow-sm flex items-center justify-between group hover:border-primary/30 transition-all">
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <img src={player.avatar} alt={player.name} className="w-12 h-12 rounded-2xl border-2 border-white dark:border-slate-800 shadow-md object-cover" />
                                                    <div className="absolute -top-1.5 -left-1.5 w-6 h-6 bg-accent-gold text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-lg">
                                                        {player.seed}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="font-black text-slate-900 dark:text-white text-sm">{player.name}</p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Elo {player.rating}</span>
                                                        <div className={cn(
                                                            "w-1.5 h-1.5 rounded-full",
                                                            player.checkedIn ? "bg-green-500" : "bg-slate-200"
                                                        )}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button className="w-9 h-9 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-all active:scale-90">
                                                    <span className="material-icons-round text-sm">person_search</span>
                                                </button>
                                                <button className="w-9 h-9 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-all active:scale-90">
                                                    <span className="material-icons-round text-sm">chat_bubble_outline</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* General List Section */}
                        {general.length > 0 && (
                            <section>
                                <div className="flex items-center justify-between px-2 mb-4">
                                    <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Open Field</h3>
                                    <span className="text-[9px] font-bold text-slate-400 uppercase">{general.length} Registered</span>
                                </div>
                                <div className="space-y-2">
                                    {general.map((player, i) => (
                                        <div key={i} className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-3xl border border-slate-50 dark:border-slate-800 flex items-center justify-between hover:bg-white dark:hover:bg-slate-900 transition-all">
                                            <div className="flex items-center gap-4">
                                                <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-xl object-cover grayscale opacity-80" />
                                                <div>
                                                    <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">{player.name}</p>
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Rating {player.rating}</p>
                                                </div>
                                            </div>
                                            <div className={cn(
                                                "w-2 h-2 rounded-full",
                                                player.checkedIn ? "bg-green-500" : "bg-slate-200 dark:bg-slate-700"
                                            )}></div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                )}

                {activeTab === 'partners' && (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        {/* Main Organizer */}
                        <section>
                            <div className="flex items-center gap-2 mb-3 px-2">
                                <div className="w-1 h-3 bg-primary rounded-full"></div>
                                <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Main Club</h3>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-5 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center overflow-hidden">
                                        <span className="text-lg font-black text-primary">GM</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-sm font-black text-slate-900 dark:text-white">Grandmaster...</h4>
                                            <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                                                <span className="material-icons-round text-white text-[10px]">check</span>
                                            </div>
                                        </div>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Main Club</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Venue Host */}
                        <section>
                            <div className="flex items-center gap-2 mb-3 px-2">
                                <div className="w-1 h-3 bg-primary rounded-full"></div>
                                <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Venue Host</h3>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-5 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-slate-900 dark:bg-slate-800 rounded-xl"></div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white">The Rook Cafe</h4>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Venue Host</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Brand Partner */}
                        <section>
                            <div className="flex items-center gap-2 mb-3 px-2">
                                <div className="w-1 h-3 bg-primary rounded-full"></div>
                                <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Brand Partner</h3>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-5 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 bg-primary rounded-xl"></div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white">Logitech G</h4>
                                    </div>
                                    <span className="material-icons-round text-slate-300 dark:text-slate-600">chevron_right</span>
                                </div>
                            </div>
                        </section>

                        {/* Become a Sponsor CTA */}
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center">
                            <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">Become a Sponsor</h3>
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-6">
                                Get your brand in front of 200+ active chess players.
                            </p>
                            <button
                                onClick={() => navigate(`/tournament/${id}/sponsors`)}
                                className="w-full bg-primary text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-wider shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <span className="material-icons-round text-sm">mail</span>
                                View All Partners
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'rules' && (
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 space-y-6 animate-in fade-in duration-500">
                        {[
                            { title: 'Standard Rules', desc: 'FIDE Laws of Chess apply for all matches.' },
                            { title: 'Time Control', desc: '10 minutes + 5 seconds increment per move.' },
                            { title: 'Lateness', desc: 'Default time is 5 minutes after round start.' },
                            { title: 'Disputes', desc: 'Chief Arbiter decision is final and binding.' },
                        ].map((rule, i) => (
                            <div key={i}>
                                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{rule.title}</h4>
                                <p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">{rule.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Fixed Footer Actions */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-150 dark:border-slate-800 z-50">
                <div className="max-w-2xl mx-auto flex gap-4">
                    <button
                        onClick={() => handleTabChange('rankings')}
                        className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        <span className="material-icons-round text-lg">leaderboard</span>
                        Live Standings
                    </button>
                    <button
                        onClick={() => navigate('/ticket')}
                        className="w-16 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 active:scale-90 transition-all"
                    >
                        <span className="material-icons-round text-2xl">confirmation_number</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
