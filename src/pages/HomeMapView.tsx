import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Navigation, Plus, Minus, Users, MessageSquare, Sword, Search, ChevronRight } from 'lucide-react'
import { useDiscovery } from '../context/DiscoveryContext'
import { FilterModal } from '../components/discovery/FilterModal'
import { TournamentCard } from '../components/TournamentCard'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const HomeMapView: React.FC = () => {
    const navigate = useNavigate()
    const { searchQuery, setSearchQuery, setActiveLocation } = useDiscovery()
    const [isSeekingGame, setIsSeekingGame] = useState(false)
    const [showNearbyTray, setShowNearbyTray] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [localSearch, setLocalSearch] = useState(searchQuery)

    const handleSearchSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        setSearchQuery(localSearch)
        setActiveLocation(localSearch || 'Westlands')
        navigate('/meetups')
    }

    return (
        <div className="h-full w-full relative overflow-hidden bg-background-light dark:bg-background-dark">
            {/* Map Background Wrapper */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Map view of Nairobi Westlands area"
                    className="w-full h-full object-cover opacity-80 grayscale-[0.2]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF91NbvG7YO1P9ZocS0v7drFgXdjIGLBE-UeBBZDavPQwHyFfBvYObyNbtauWZpCoIpTtV7N62LsWXJkc35ngba4vvXEtinkasj1SofY6ty_HZJya1h7WEtATdVsN2Qt-PS2OaRpL_QQNq50mO-jLuz0LkzQTXuLGMx1Y0O_4T8pPYVmxUzKaWLprdP1ReBjWEFT-NBCJwnrVuxrv625WZtljBYLdVVtObz6nZfb69lU8gvOAG0nQeYWlileQbI5-xTBvauCaDf0I"
                />

                {/* Custom Map Markers Overlay */}
                {/* Gold Marker (Partner Venue) */}
                {(!searchQuery || "Bao Box".toLowerCase().includes(searchQuery.toLowerCase())) && (
                    <div className="absolute top-[35%] left-[45%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10 transition-all duration-500 animate-in fade-in zoom-in">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-accent-gold/20 rounded-full animate-pulse-ring"></div>
                            <div className="bg-accent-gold text-white p-2 rounded-full shadow-lg border-2 border-white flex items-center justify-center relative z-10">
                                <span className="material-icons-round text-lg">workspace_premium</span>
                            </div>
                            {/* Activity HUD */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2 py-1 rounded-full shadow-md border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-300">
                                <div className="flex -space-x-1.5 mr-1">
                                    <div className="w-3 h-3 rounded-full bg-green-500 border border-white"></div>
                                    <div className="w-3 h-3 rounded-full bg-primary border border-white"></div>
                                </div>
                                <span className="text-[9px] font-black text-slate-800 dark:text-white uppercase tracking-tight whitespace-nowrap">8 Active</span>
                            </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm mt-1 border border-primary/10">
                            <p className="text-[10px] font-bold text-gray-800">Bao Box</p>
                        </div>
                    </div>
                )}

                {/* Blue Marker (Casual) */}
                {(!searchQuery || "Java House".toLowerCase().includes(searchQuery.toLowerCase())) && (
                    <div className="absolute top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10 transition-all duration-500 animate-in fade-in zoom-in">
                        <div className="relative">
                            <div className="bg-accent-blue text-white p-2 rounded-full shadow-2xl border-2 border-white flex items-center justify-center">
                                <span className="material-icons-round text-lg">person</span>
                            </div>
                            {/* Activity HUD */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2 py-1 rounded-full shadow-md border border-slate-100 dark:border-slate-800">
                                <span className="text-[9px] font-black text-accent-blue uppercase tracking-tight">3 Seeking</span>
                            </div>
                        </div>
                        <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-xl mt-2 border border-primary/10">
                            <p className="text-[10px] font-bold text-gray-800">Java House</p>
                        </div>
                    </div>
                )}

                {/* My Location Marker (If Seeking) */}
                {isSeekingGame && (
                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 animate-in fade-in zoom-in">
                        <div className="relative">
                            <div className="absolute -inset-8 bg-primary/20 rounded-full animate-ping"></div>
                            <div className="absolute -inset-4 bg-primary/30 rounded-full animate-pulse"></div>
                            <img
                                src="https://i.pravatar.cc/100?u=me"
                                className="w-10 h-10 rounded-full border-4 border-white shadow-2xl relative z-10"
                                alt="Me"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full border-2 border-white z-20 shadow-lg">
                                <Sword size={10} strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Header: Search Bar */}
            <div className="absolute top-12 left-0 right-0 px-4 z-20 flex flex-col items-center gap-4">
                <form
                    onSubmit={handleSearchSubmit}
                    className="flex items-center bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-full px-5 py-4 border border-white/20 w-full max-w-xl transition-all hover:shadow-primary/10"
                >
                    <Search className="text-primary text-xl mr-3" size={20} />
                    <input
                        className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm font-black text-slate-800 dark:text-slate-100 w-full placeholder-slate-400"
                        placeholder="Find casual chess spots..."
                        type="text"
                        value={localSearch}
                        onChange={(e) => setLocalSearch(e.target.value)}
                    />
                    <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-3"></div>
                    <button
                        type="button"
                        onClick={() => setIsFilterOpen(true)}
                        className="flex items-center justify-center text-slate-400 hover:text-primary transition-all active:scale-90"
                    >
                        <span className="material-icons-round text-2xl">tune</span>
                    </button>
                </form>

                {/* Live Tournament Spotlight (Phase 26) */}
                <div
                    onClick={() => navigate('/tournament/t-live?tab=rankings')}
                    className="w-full max-w-xl bg-primary/10 backdrop-blur-md rounded-[2rem] p-4 border border-primary/20 shadow-lg group cursor-pointer active:scale-[0.98] transition-all duration-300 animate-in fade-in slide-in-from-top-4"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl overflow-hidden relative border border-primary/30">
                                <img
                                    src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=200"
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                    alt="Live"
                                />
                                <div className="absolute inset-0 bg-primary/20"></div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                                    <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">Live Now</span>
                                </div>
                                <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight line-clamp-1">Grandmaster Blitz Open</h4>
                                <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Round 4 of 12 • Watch Live</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                            <ChevronRight size={18} />
                        </div>
                    </div>
                </div>

                {/* Casual Matchmaking HUD */}
                <div className="w-full max-w-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-full p-2 pr-6 shadow-2xl border border-white/20 flex items-center justify-between group transition-all duration-500">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsSeekingGame(!isSeekingGame)}
                            className={cn(
                                "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 relative overflow-hidden",
                                isSeekingGame ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                            )}
                        >
                            {isSeekingGame && <div className="absolute inset-0 bg-white/10 animate-pulse"></div>}
                            <span className="material-icons-round text-2xl relative z-10">
                                {isSeekingGame ? 'search' : 'bolt'}
                            </span>
                        </button>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Quick Match</p>
                            <p className="text-xs font-black text-slate-900 dark:text-white">
                                {isSeekingGame ? 'Looking for opponents...' : 'Seek a casual game nearby'}
                            </p>
                        </div>
                    </div>
                    {isSeekingGame ? (
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-primary/20 animate-pulse" style={{ animationDelay: `${i * 300}ms` }}></div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                            <span className="text-[9px] font-black text-primary uppercase tracking-widest">12 Seekers</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Tournaments Section - Minimal */}
            <div className={cn(
                "absolute left-0 right-0 px-4 transition-all duration-700 z-30",
                showNearbyTray ? "bottom-[calc(65vh+1rem)]" : "bottom-28"
            )}>
                <div className="space-y-3 max-w-xl mx-auto">
                    {/* Competitive Tournament */}
                    <div
                        onClick={() => navigate('/tournament/123')}
                        className="w-full bg-primary/10 backdrop-blur-md rounded-[2rem] p-4 border border-primary/20 shadow-lg group cursor-pointer active:scale-[0.98] transition-all duration-300 animate-in fade-in slide-in-from-top-4"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl overflow-hidden relative border border-primary/30">
                                    <img
                                        src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=200"
                                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                        alt="Tournament"
                                    />
                                    <div className="absolute inset-0 bg-primary/20"></div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">Competitive</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span className="text-[9px] font-black text-yellow-600 uppercase tracking-widest">KSh 50k</span>
                                    </div>
                                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight line-clamp-1">Nairobi Masters</h4>
                                    <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Oct 20-22 • 48/64 Players</p>
                                </div>
                            </div>
                            <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                <ChevronRight size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Casual Tournament */}
                    <div
                        onClick={() => navigate('/tournament/125')}
                        className="w-full bg-green-500/10 backdrop-blur-md rounded-[2rem] p-4 border border-green-500/20 shadow-lg group cursor-pointer active:scale-[0.98] transition-all duration-300 animate-in fade-in slide-in-from-top-4"
                        style={{ animationDelay: '100ms' }}
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center border border-green-500/30">
                                    <span className="material-icons-round text-green-600 text-xl">coffee</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">Casual</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Free Entry</span>
                                    </div>
                                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight line-clamp-1">Friday Chess Meetup</h4>
                                    <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Every Friday • Java House</p>
                                </div>
                            </div>
                            <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                                <ChevronRight size={18} />
                            </div>
                        </div>
                    </div>

                    {/* View All Link */}
                    <Link
                        to="/tournaments"
                        className="block text-center text-xs font-black text-slate-400 hover:text-primary uppercase tracking-wider transition-colors"
                    >
                        View All Tournaments →
                    </Link>
                </div>
            </div>

            {/* Floating Tournaments Button */}
            {!showNearbyTray && (
                <div className="absolute bottom-[calc(28rem)] left-1/2 -translate-x-1/2 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Link to="/tournaments" className="bg-[#1a1a1a] dark:bg-primary text-white px-10 py-5 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center gap-3 hover:scale-105 transition-all duration-300 active:scale-95 border-2 border-white/10">
                        <span className="text-sm font-black tracking-widest uppercase">Tournaments</span>
                        <span className="material-icons-round text-xl">emoji_events</span>
                    </Link>
                </div>
            )}

            {/* Nearby Players Peek Tray */}
            <div className={cn(
                "absolute left-0 right-0 bottom-0 bg-white dark:bg-slate-900 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] rounded-t-[3rem] border-t border-slate-100 dark:border-slate-800 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-[60]",
                showNearbyTray ? "h-[65vh]" : "h-24"
            )}>
                {/* Pull Handle/Header */}
                <div
                    onClick={() => setShowNearbyTray(!showNearbyTray)}
                    className="h-24 flex items-center justify-between px-8 cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                            <Users size={24} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">Social Discovery</h3>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">42 Players in Westlands</p>
                        </div>
                    </div>
                    <button className={cn("text-slate-300 transition-transform duration-500", showNearbyTray && "rotate-180")}>
                        <span className="material-icons-round text-3xl">expand_less</span>
                    </button>
                </div>

                {/* Expanded Content */}
                <div className="px-8 pb-32 overflow-y-auto no-scrollbar h-full">
                    <div className="flex gap-4 mb-8">
                        <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-800">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Top Spot</p>
                            <p className="text-sm font-black text-slate-900 dark:text-white">Bao Box Cafe</p>
                        </div>
                        <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-800">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Local Vibe</p>
                            <p className="text-sm font-black text-slate-900 dark:text-white">Active Blitz</p>
                        </div>
                    </div>

                    <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">Nearby Seekers</h4>
                    <div className="space-y-4">
                        {[
                            { name: "Sly Fox", level: "Intermediate", dist: "0.2km", status: "Looking for game" },
                            { name: "Rook Star", level: "Beginner", dist: "0.5km", status: "At Bao Box" },
                            { name: "Checkmate Queen", level: "Expert", dist: "0.8km", status: "Looking for game" }
                        ].filter(player => !searchQuery || player.name.toLowerCase().includes(searchQuery.toLowerCase()) || player.status.toLowerCase().includes(searchQuery.toLowerCase()))
                            .map((player, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-[2rem] border border-slate-50 dark:border-slate-700 flex items-center justify-between group animate-in fade-in slide-in-from-right-4 duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                                    <div className="flex items-center gap-4">
                                        <img src={`https://i.pravatar.cc/100?u=${player.name}`} className="w-12 h-12 rounded-2xl object-cover" alt={player.name} />
                                        <div>
                                            <p className="font-black text-slate-900 dark:text-white text-sm">{player.name}</p>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className="text-[10px] font-bold text-slate-400">{player.level}</span>
                                                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                                                <span className="text-[10px] font-bold text-primary">{player.dist}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center border border-primary/20 active:scale-90 transition-all">
                                        <MessageSquare size={18} strokeWidth={2.5} />
                                    </button>
                                </div>
                            ))}
                        {searchQuery && ![
                            { name: "Sly Fox", level: "Intermediate", dist: "0.2km", status: "Looking for game" },
                            { name: "Rook Star", level: "Beginner", dist: "0.5km", status: "At Bao Box" },
                            { name: "Checkmate Queen", level: "Expert", dist: "0.8km", status: "Looking for game" }
                        ].some(player => player.name.toLowerCase().includes(searchQuery.toLowerCase()) || player.status.toLowerCase().includes(searchQuery.toLowerCase())) && (
                                <div className="py-10 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No players matching "{searchQuery}"</p>
                                </div>
                            )}
                    </div>
                </div>
            </div>

            {/* Map Zoom/Current Location Controls */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                <button className="bg-white/95 dark:bg-background-dark/95 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-100 dark:border-primary/10 text-gray-600 dark:text-gray-300 active:scale-90 transition-all">
                    <Navigation size={22} strokeWidth={2} />
                </button>
                <div className="flex flex-col bg-white/95 dark:bg-background-dark/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100 dark:border-primary/10 overflow-hidden">
                    <button className="p-3 text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-primary/10 active:bg-gray-100/50 transition-colors">
                        <Plus size={22} strokeWidth={2.5} />
                    </button>
                    <button className="p-3 text-gray-600 dark:text-gray-300 active:bg-gray-100/50 transition-colors">
                        <Minus size={22} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* Modals */}
            <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        </div>
    )
}
