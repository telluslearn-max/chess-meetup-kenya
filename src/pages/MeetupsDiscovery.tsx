import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { FilterModal } from '../components/discovery/FilterModal'
import { useDiscovery } from '../context/DiscoveryContext'
import {
    Search,
    ArrowLeft,
    ChevronRight,
    Star,
    Navigation,
    Trophy,
    Users,
    Map as MapIcon
} from 'lucide-react'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const MeetupsDiscovery: React.FC = () => {
    const navigate = useNavigate()
    const { searchQuery, activeLocation, filters, setFilters, resetFilters } = useDiscovery()
    const [activeTab, setActiveTab] = useState<'meetups' | 'tournaments'>('meetups')
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    // Data for the classic illustrative cards
    const meetups = [
        {
            id: 'm1',
            name: "Bao Box - Westlands",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
            rating: 4.9,
            location: "Westlands",
            distance: "0.8 miles",
            nextGame: "Today, 5 PM",
            tags: ["CASUAL", "NO FEE"],
            joinedCount: 12,
            avatars: ["https://i.pravatar.cc/100?u=1", "https://i.pravatar.cc/100?u=2", "https://i.pravatar.cc/100?u=3"]
        },
        {
            id: 'm2',
            name: "Urban Eatery Lounge",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
            rating: 4.5,
            location: "Kilimani",
            distance: "1.2 miles",
            nextGame: "Tomorrow, 2 PM",
            tags: ["SOCIAL", "DRINK MIN."],
            joinedCount: 8,
            avatars: ["https://i.pravatar.cc/100?u=4", "https://i.pravatar.cc/100?u=5"]
        },
        {
            id: 'm3',
            name: "Sankara Hotel Bar",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
            rating: 4.9,
            location: "Westlands",
            distance: "1.8 miles",
            nextGame: "Sun, 10 AM",
            tags: ["ELITE", "FEE"],
            joinedCount: 15,
            avatars: ["https://i.pravatar.cc/100?u=6", "https://i.pravatar.cc/100?u=7", "https://i.pravatar.cc/100?u=8"]
        }
    ]

    const tournaments = [
        {
            id: 't1',
            name: "Nairobi Open 2023",
            image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=600",
            rating: 4.7,
            location: "Nairobi CBD",
            distance: "5.2 miles",
            nextGame: "Nov 25, 9 AM",
            tags: ["RATED", "KSh 2500"],
            joinedCount: 120,
            avatars: ["https://i.pravatar.cc/100?u=9", "https://i.pravatar.cc/100?u=10"]
        }
    ]

    const finalItems = activeTab === 'meetups' ? meetups : tournaments

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display overflow-hidden">
            {/* Header: Streamlined for Discovery */}
            <header className="px-5 pt-8 pb-5 space-y-6 bg-white dark:bg-slate-900 shadow-sm z-30 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group cursor-pointer" onClick={() => navigate('/')}>
                            <ArrowLeft size={20} />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Discover</h1>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{activeLocation} • {finalItems.length} Spots</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsFilterOpen(true)}
                            className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-all"
                        >
                            <span className="material-icons-round text-xl">tune</span>
                        </button>
                    </div>
                </div>

                {/* Original Tab Navigation (Blue Theme) - Polished with Sliding Indicator */}
                <div className="relative flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                    {/* Animated Sliding Indicator */}
                    <div
                        className={cn(
                            "absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-slate-700 rounded-xl shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            activeTab === 'meetups' ? "left-1" : "left-[calc(50%+2px)]"
                        )}
                    />
                    <button
                        onClick={() => setActiveTab('meetups')}
                        className={cn(
                            "relative flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors duration-300",
                            activeTab === 'meetups' ? "text-primary" : "text-slate-500"
                        )}
                    >
                        <Users size={16} />
                        Meetups
                    </button>
                    <button
                        onClick={() => setActiveTab('tournaments')}
                        className={cn(
                            "relative flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors duration-300",
                            activeTab === 'tournaments' ? "text-primary" : "text-slate-500"
                        )}
                    >
                        <Trophy size={16} />
                        Competitive
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto no-scrollbar pt-6">
                <div className="px-5 space-y-8 pb-32 max-w-lg mx-auto">
                    {/* Live Now Card (Spotlight) - With Float Animation */}
                    {activeTab === 'tournaments' && (
                        <section className="space-y-4 animate-fade-in-up">
                            <div className="flex items-center justify-between px-2">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300">Live Tournament</h2>
                                <span className="flex items-center gap-1.5 bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                                    LIVE NOW
                                </span>
                            </div>
                            <div
                                onClick={() => navigate('/tournament/t-live?tab=rankings')}
                                className="relative rounded-[2rem] overflow-hidden bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5 group cursor-pointer active:scale-[0.98] transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=600"
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt="Live Tournament"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                                    <h3 className="text-xl font-black uppercase tracking-tight mb-2">Grandmaster Blitz Open</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">Round 4 of 12 • 45 viewers</p>
                                        <button
                                            onClick={() => navigate('/tournament/t-live?tab=rankings')}
                                            className="bg-white text-primary px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl active:scale-95 hover:bg-slate-50 transition-all"
                                        >
                                            Watch Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Results Count Header */}
                    <div className="flex items-center justify-between px-2 animate-fade-in-up stagger-1">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300">
                            {finalItems.length} {activeTab === 'meetups' ? 'Spots' : 'Events'} Nearby
                        </h2>
                    </div>

                    {/* Classic Illustrative List - With Staggered Entry */}
                    <div className="space-y-12">
                        {finalItems.length > 0 ? (
                            finalItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    onClick={() => navigate(activeTab === 'meetups' ? `/meetup/${item.id}` : `/tournament/${item.id}`)}
                                    className={cn(
                                        "group cursor-pointer animate-fade-in-up",
                                        index === 0 ? "stagger-2" : index === 1 ? "stagger-3" : "stagger-4"
                                    )}
                                >
                                    {/* Large Card with Aspect 16:10 */}
                                    <div className="relative">
                                        <div className="absolute top-4 right-4 z-10 text-white/90">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center glass hover:scale-110 transition-transform active:scale-90 duration-300">
                                                <span className="material-icons-round text-2xl drop-shadow-md">favorite_border</span>
                                            </div>
                                        </div>
                                        <div className="aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-slate-800 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 group-hover:brightness-105">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                            />
                                        </div>
                                        {/* Partner Badge - Glassmorphism */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <div className="glass text-primary text-[9px] font-black px-4 py-2 rounded-full flex items-center gap-2 uppercase tracking-widest shadow-xl border-primary/20">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> Partner
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Details */}
                                    <div className="mt-8 space-y-5 px-2">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-tight group-hover:text-primary transition-colors duration-300">
                                                    {item.name}
                                                </h3>
                                                <div className="flex items-center text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                                    <Navigation size={12} className="mr-1.5 text-primary" fill="#1152d4" />
                                                    {item.location} • {item.distance}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 glass px-4 py-2 rounded-2xl shadow-sm border-slate-100 dark:border-slate-800">
                                                <Star size={14} className="text-amber-500" fill="#f59e0b" />
                                                <span className="text-xs font-black text-slate-900 dark:text-white">{item.rating}</span>
                                            </div>
                                        </div>

                                        {/* Attendee Stack & Next Game - Polished */}
                                        <div className="flex items-center justify-between pb-2">
                                            <div className="flex items-center gap-4">
                                                <div className="flex -space-x-3">
                                                    {item.avatars.map((avatar: string, idx: number) => (
                                                        <div key={idx} className="relative group/avatar">
                                                            <img
                                                                className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-sm transition-transform duration-300 group-hover/avatar:-translate-y-1"
                                                                src={avatar}
                                                                alt="User"
                                                            />
                                                        </div>
                                                    ))}
                                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black border-2 border-white dark:border-slate-900 text-slate-500 dark:text-slate-300 shadow-sm">
                                                        +{item.joinedCount - item.avatars.length}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-[12px] font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">{item.joinedCount}</p>
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Joined</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Schedule</p>
                                                <p className="text-[11px] font-black text-primary uppercase tracking-tight">{item.nextGame}</p>
                                            </div>
                                        </div>

                                        {/* Tags - Elegant Styling */}
                                        <div className="flex flex-wrap gap-2.5">
                                            {item.tags.map((tag: string) => (
                                                <span
                                                    key={tag}
                                                    className="bg-white dark:bg-slate-800/30 text-slate-500 dark:text-slate-400 text-[8px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-[0.15em] border border-slate-100 dark:border-slate-700/50 shadow-sm hover:border-primary/30 transition-colors cursor-default"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-20 text-center space-y-6 animate-fade-in-up">
                                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search size={40} className="text-slate-300 dark:text-slate-600" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">No Matches Found</h3>
                                <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] max-w-[240px] mx-auto leading-relaxed">
                                    Try expanding your distance or adjusting your filters to find more spots.
                                </p>
                                <button
                                    onClick={resetFilters}
                                    className="bg-primary text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-95 transition-all"
                                >
                                    Reset All Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Modals */}
            <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        </div>
    )
}
