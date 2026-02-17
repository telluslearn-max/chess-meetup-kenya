import React, { useState } from 'react'
import { ClubCard } from '../components/ClubCard'

export const ClubsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedRegion, setSelectedRegion] = useState('all')
    const [selectedFeeRange, setSelectedFeeRange] = useState('all')
    const [selectedRating, setSelectedRating] = useState('all')

    // Mock data
    const clubs = [
        {
            id: '1',
            name: 'Nairobi Kings',
            location: 'Westlands, Nairobi',
            image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800',
            isVerified: true,
            tags: ['Competitive', 'Weekly Tournaments'],
            pricePerMonth: 1500
        },
        {
            id: '2',
            name: 'Kilimani Chess Club',
            location: 'Kilimani, Nairobi',
            image: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=800',
            isVerified: true,
            tags: ['Casual', 'Beginners Welcome'],
            priceLabel: 'Free to Join'
        },
        {
            id: '3',
            name: 'Mombasa Chess Academy',
            location: 'Nyali, Mombasa',
            image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800',
            isVerified: false,
            tags: ['Training', 'Youth Programs'],
            pricePerMonth: 800
        },
        {
            id: '4',
            name: 'Parklands Blitz Club',
            location: 'Parklands, Nairobi',
            image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800',
            isVerified: true,
            tags: ['Competitive', 'Blitz Specialists'],
            pricePerMonth: 2000
        }
    ]

    const filteredClubs = clubs.filter(club => {
        const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            club.location.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesSearch
    })

    return (
        <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
            {/* Header */}
            <header className="px-6 pt-16 pb-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white">Chess Clubs Kenya</h1>
                    <button className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center active:scale-95 transition-all">
                        <span className="material-icons-round text-slate-600 dark:text-slate-400">notifications</span>
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-4">
                    <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search clubs in Kenya..."
                        className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl py-4 pl-12 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                    />
                </div>

                {/* Filters */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {/* Region Filter */}
                    <button className="flex-none flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-full text-xs font-black uppercase tracking-wider active:scale-95 transition-all">
                        <span className="material-icons-round text-sm">location_on</span>
                        Region
                        <span className="material-icons-round text-sm">expand_more</span>
                    </button>

                    {/* Fee Range Filter */}
                    <button className="flex-none flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-black uppercase tracking-wider active:scale-95 transition-all border border-slate-200 dark:border-slate-700">
                        <span className="material-icons-round text-sm">payments</span>
                        Fee Range
                        <span className="material-icons-round text-sm">expand_more</span>
                    </button>

                    {/* Rating Filter */}
                    <button className="flex-none flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-black uppercase tracking-wider active:scale-95 transition-all border border-slate-200 dark:border-slate-700">
                        <span className="material-icons-round text-sm">star</span>
                        Rating
                        <span className="material-icons-round text-sm">expand_more</span>
                    </button>
                </div>
            </header>

            {/* Clubs Grid */}
            <main className="flex-1 px-6 py-6 overflow-y-auto pb-32">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-wider">
                        {filteredClubs.length} Clubs Found
                    </p>
                    <button className="text-xs font-black text-primary uppercase tracking-wider flex items-center gap-1">
                        Sort by
                        <span className="material-icons-round text-sm">swap_vert</span>
                    </button>
                </div>

                <div className="grid gap-6">
                    {filteredClubs.map(club => (
                        <ClubCard key={club.id} {...club} />
                    ))}
                </div>

                {filteredClubs.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-icons-round text-slate-400 text-3xl">search_off</span>
                        </div>
                        <p className="text-sm font-bold text-slate-500">No clubs found matching your search</p>
                    </div>
                )}
            </main>
        </div>
    )
}
