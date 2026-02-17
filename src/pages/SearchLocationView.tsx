import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Search,
    ArrowLeft,
    Navigation,
    Star,
    Clock,
    ChevronRight,
    Search as SearchIcon,
    History,
    X
} from 'lucide-react'
import { useDiscovery } from '../context/DiscoveryContext'

export const SearchLocationView: React.FC = () => {
    const navigate = useNavigate()
    const { searchQuery, setSearchQuery, setActiveLocation } = useDiscovery()
    const [search, setSearch] = useState(searchQuery)

    const popularLocations = ['Westlands', 'Kilimani', 'Kasarani', 'Karen', 'Lavington', 'Upperhill']

    const handleSelectLocation = (loc: string) => {
        setSearchQuery(loc)
        setActiveLocation(loc)
        navigate('/discover')
    }

    const suggestedVenues = [
        { name: 'Bao Box', location: 'Westlands', rating: 4.8, distance: '0.4 km' },
        { name: 'Connect Coffee', location: 'Riverside', rating: 4.5, distance: '1.2 km' },
        { name: 'The Java House', location: 'Westlands', rating: 4.2, distance: '0.8 km' },
    ]

    const recentSearches = [
        { label: 'Westlands Blitz', type: 'Meetup' },
        { label: 'Sarit Centre', type: 'Location' },
    ]

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col font-display animate-in fade-in duration-500">
            {/* Header */}
            <header className="px-6 pt-10 pb-6 space-y-8">
                <div className="flex gap-4 items-center">
                    {/* Search input and Cancel button */}
                    <div className="flex-1 relative flex items-center">
                        <Search className="absolute left-6 text-primary" size={24} />
                        <input
                            autoFocus
                            className="w-full bg-primary/5 border-2 border-primary/20 rounded-full py-5 pl-16 pr-6 text-sm font-black text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary"
                            placeholder="Find a place to play..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="text-primary font-black text-sm uppercase tracking-widest px-2"
                    >
                        Cancel
                    </button>
                </div>
                {/* Use Current Location button */}
                <button className="w-full bg-primary/5 rounded-[2.5rem] p-6 flex items-center justify-between group active:scale-95 transition-all">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm">
                            <Navigation size={20} fill="#1152d4" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase">Use Current Location</h4>
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Nairobi, Kenya</p>
                        </div>
                    </div>
                    <ChevronRight size={20} className="text-primary" />
                </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 space-y-12 no-scrollbar pb-32">
                {/* Popular Locations */}
                <section className="animate-fade-in-up stagger-1">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">Popular Locations</h3>
                    <div className="flex flex-wrap gap-3">
                        {popularLocations.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => handleSelectLocation(loc)}
                                className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary hover:border-primary transition-all duration-300 active:scale-95 shadow-sm"
                            >
                                {loc}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Suggested Venues */}
                <section className="animate-fade-in-up stagger-2">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">Suggested Venues</h3>
                    <div className="space-y-4">
                        {suggestedVenues.map((venue) => (
                            <div
                                key={venue.name}
                                onClick={() => handleSelectLocation(venue.name)}
                                className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 cursor-pointer group hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 active:scale-[0.98] shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-background-light dark:bg-background-dark rounded-2xl flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                                        <Star size={20} fill="#1152d4" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{venue.name}</h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{venue.location} • {venue.distance}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl border-slate-50 dark:border-slate-800">
                                    <span className="text-sm font-black text-slate-900 dark:text-white">{venue.rating}</span>
                                    <Star size={12} className="text-primary" fill="#1152d4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recent Searches */}
                <section className="animate-fade-in-up stagger-3">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">Recent Searches</h3>
                    <div className="space-y-6">
                        {recentSearches.map((item) => (
                            <div
                                key={item.label}
                                onClick={() => handleSelectLocation(item.label)}
                                className="flex items-center gap-5 cursor-pointer group"
                            >
                                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300 shadow-sm">
                                    <History size={20} />
                                </div>
                                <div className="flex-1 text-left border-b border-slate-50 dark:border-slate-800 pb-4 group-hover:border-primary/20 transition-all">
                                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase group-hover:text-primary transition-colors">{item.label}</h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.type}</p>
                                </div>
                                <X size={20} className="text-slate-200 hover:text-red-400 transition-colors" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Sticky Search Button */}
            <div className="fixed bottom-10 left-6 right-6 z-50 animate-fade-in-up stagger-4">
                <button
                    onClick={() => handleSelectLocation(search)}
                    className="w-full bg-primary text-white py-6 rounded-full text-sm font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-2xl shadow-primary/30 active:scale-95 hover:brightness-110 transition-all duration-300"
                >
                    <SearchIcon size={20} />
                    Search Locations
                </button>
            </div>
        </div>
    )
}
