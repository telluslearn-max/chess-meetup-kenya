import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { VenueCard } from '../components/ui/VenueCard'

export const DiscoveryListView: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = [
        { id: 'all', label: 'All', icon: 'grid_view' },
        { id: 'Partner', label: 'Partners', icon: 'verified' },
        { id: 'cafes', label: 'Cafés', icon: 'local_cafe' },
        { id: 'parks', label: 'Parks', icon: 'park' },
        { id: 'hotels', label: 'Hotels', icon: 'hotel' },
    ]

    const venues = [
        {
            name: "Bao Box - Westlands",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaA5CT9Cwa31V6P-voJJlzpcyFu820T6JUzVIp211UGe7J10clRPZcskdlptnGsqRnfb-KLUNXudT0n0xfMJ-pCRemxrmo6fkMYAwOp90gMk84U1PzbWSllHLLvlXRL4D0csidGUpsxt3U4cnNGBKUJqF8pBaqT-xPp7WUtb0GGH7oSvWTHQgy1EpNiMCSKOalc3APyH_aR_iunJBpLXe2q5WXLuLHkF5upuRQWolvjeqXlE-Aw12cXmeFZVd0wk5Lt2csBfJ5r20",
            rating: 4.9,
            location: "Westlands",
            distance: "0.8 miles",
            type: "Partner" as const,
            nextGame: "Today, 5 PM",
            tags: ["CASUAL", "NO FEE"],
            category: "cafes"
        },
        {
            name: "The Alchemist Bar",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0t2YXhhVFFUoZtGgIUF6cY9ZfD2DzF8te7uu-QxrBpzP2FjzjhAFFRs9vGqKGXmVrGM0Ey98QdDaojAD7v7-zok-HSQO464WKoKRsbH3VR_fQ9AT7Ufvm95kf6xfeWDl7q_F7fp4USqd1RSx63pu1F0CH0TYRShriXMmH-8fPXh3yTp-U2-JXf-RKkmwXKdNue29B2MNDBc0pRNt3jQL6pGsGmaMNhBdMcw2axEL_iqJetq3qgD1xIQpo-EVk1ezjYolzb2UPPWQ",
            rating: 4.8,
            location: "Parklands",
            distance: "1.2 miles",
            type: "Casual" as const,
            nextGame: "Tomorrow, 2 PM",
            tags: ["SOCIAL", "DRINK MIN."],
            category: "cafes"
        },
        {
            name: "Karura Forest - Gate A",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdBilQlA4tKJaLwVUDFm7mbCUtszgcMqB2JP4NRJETOoqE9jy_96waZv5zGgIH7LuaW2h5wdW3aiMC4UlPftgu86kUsuNOnWWfzOE7GuJfM51u70oI1H1SERkTLYfzwNjgf948IBL3JSsrabOLt1K1eQ2lZqrAitNOp7fuueKTbi32R9HDwlj6fDVLFXA-SwTa1ohin9dXoOgqPQvwaXzetHV5HzOQe_JA4jl_Yvcdwe08vdE63NuoPOChqsJFU7pZ7e8fAKjiPjQ",
            rating: 4.7,
            location: "Limuru Road",
            distance: "2.5 miles",
            type: "Casual" as const,
            nextGame: "Sun, 10 AM",
            tags: ["OUTDOORS", "PARK ENTRY"],
            category: "parks"
        }
    ]

    const filteredVenues = venues.filter(venue => {
        const matchesSearch = venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            venue.location.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = activeCategory === 'all' ||
            (activeCategory === 'Partner' ? venue.type === 'Partner' : venue.category === activeCategory)
        return matchesSearch && matchesCategory
    })

    return (
        <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
            <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md pb-2">
                <div className="px-4 pt-4">
                    <div className="flex items-center bg-white dark:bg-slate-900 rounded-full shadow-2xl border border-slate-100 dark:border-slate-800 px-4 py-3 gap-3">
                        <span className="material-icons-round text-primary">search</span>
                        <div className="flex-1">
                            <input
                                className="w-full bg-transparent border-none focus:ring-0 text-sm font-semibold text-gray-900 dark:text-white placeholder:text-gray-400"
                                placeholder="Find casual chess spots..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <p className="text-[10px] text-gray-500 dark:text-gray-400">Westlands · Any time · 2 guests</p>
                        </div>
                        <button className="p-2 border-l border-slate-100 dark:border-slate-800 text-slate-400">
                            <span className="material-icons-round text-xl">tune</span>
                        </button>
                    </div>
                </div>

                <div className="mt-4 px-4 overflow-x-auto flex gap-6 no-scrollbar">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex flex-col items-center gap-1 group cursor-pointer transition-all ${activeCategory !== cat.id ? 'opacity-40 hover:opacity-70' : ''}`}
                        >
                            <div className={activeCategory === cat.id ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}>
                                <span className="material-icons-round">{cat.icon}</span>
                            </div>
                            <span className="text-[10px] font-bold whitespace-nowrap uppercase tracking-wider">{cat.label}</span>
                            {activeCategory === cat.id && <div className="h-0.5 w-full bg-primary rounded-full mt-0.5 animate-in fade-in zoom-in-y duration-300"></div>}
                        </div>
                    ))}
                </div>
            </header>

            <main className="px-4 py-8 pb-32">
                {filteredVenues.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredVenues.map((venue) => (
                            <div key={venue.name} className="relative group cursor-pointer">
                                <div className="absolute top-4 right-4 z-10 text-white/90">
                                    <span className="material-icons-round text-2xl drop-shadow-md group-hover:scale-110 transition-transform">favorite_border</span>
                                </div>
                                {venue.type === "Partner" && (
                                    <div className="absolute top-4 left-4 z-10">
                                        <div className="bg-primary text-white text-[9px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 uppercase tracking-widest backdrop-blur-md bg-primary/90 shadow-lg">
                                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> Partner
                                        </div>
                                    </div>
                                )}
                                <div className="aspect-[16/10] w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-primary/10 transition-all group-hover:shadow-primary/5 group-hover:brightness-105">
                                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="mt-5 flex justify-between items-start px-2">
                                    <div className="flex flex-col gap-1.5">
                                        <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{venue.name}</h3>
                                        <div className="flex items-center text-xs font-bold text-slate-500 dark:text-slate-400">
                                            <span className="material-icons-round text-sm mr-1 text-primary">location_on</span>
                                            {venue.location} • {venue.distance}
                                        </div>
                                        <p className="text-xs font-black text-slate-900 dark:text-white mt-1">
                                            Next game: <span className="text-primary">{venue.nextGame}</span>
                                        </p>
                                        <div className="flex gap-2 mt-2">
                                            {venue.tags.map(tag => (
                                                <span key={tag} className="bg-primary/5 dark:bg-slate-800 text-primary dark:text-slate-400 text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800">
                                        <span className="material-icons-round text-accent-gold text-sm">star</span>
                                        <span className="text-xs font-black text-slate-900 dark:text-white">{venue.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-40 text-center">
                        <div className="w-24 h-24 bg-slate-50 dark:bg-slate-900 rounded-[3rem] flex items-center justify-center text-slate-200 mb-8">
                            <span className="material-icons-round text-5xl">location_off</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">No spots found</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Try changing your filters or searching a different area</p>
                    </div>
                )}
            </main>

            <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
                <Link to="/" className="bg-[#1a1a1a] dark:bg-primary text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-all duration-300 active:scale-95">
                    <span className="text-sm font-bold">Map</span>
                    <span className="material-icons-round text-xl">map</span>
                </Link>
            </div>
        </div>
    )
}
