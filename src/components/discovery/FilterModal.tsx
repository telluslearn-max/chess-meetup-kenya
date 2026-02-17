import React, { useState, useEffect } from 'react'
import {
    X,
    Wifi,
    Coffee,
    Zap,
    Grid,
    ChevronLeft
} from 'lucide-react'
import { useDiscovery } from '../../context/DiscoveryContext'

interface FilterModalProps {
    isOpen: boolean
    onClose: () => void
}

export const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    const { filters, setFilters, resetFilters } = useDiscovery()

    // Internal state for pending changes
    const [localFilters, setLocalFilters] = useState(filters)

    useEffect(() => {
        if (isOpen) {
            setLocalFilters(filters)
        }
    }, [isOpen, filters])

    const vibes = ['Cozy Cafe', 'Quiet Library', 'Outdoor Park', 'Lively Bar']
    const amenities = [
        { id: 'WiFi', label: 'WiFi', Icon: Wifi },
        { id: 'Boards', label: 'Boards Provided', Icon: Grid },
        { id: 'Coffee', label: 'Coffee', Icon: Coffee },
        { id: 'Power', label: 'Power', Icon: Zap },
    ]

    const toggleAmenity = (id: string) => {
        setLocalFilters(prev => ({
            ...prev,
            amenities: prev.amenities.includes(id)
                ? prev.amenities.filter(a => a !== id)
                : [...prev.amenities, id]
        }))
    }

    const handleApply = () => {
        setFilters(localFilters)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] bg-background-light dark:bg-background-dark flex flex-col font-display animate-in slide-in-from-bottom duration-500">
            {/* Header */}
            <header className="px-6 py-8 flex items-center justify-between border-b border-slate-50 dark:border-slate-800">
                <button onClick={onClose} className="p-2 -ml-2 text-slate-900 dark:text-white">
                    <X size={28} strokeWidth={2.5} />
                </button>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Filters</h2>
                <button
                    onClick={() => setLocalFilters(filters)}
                    className="text-primary font-black text-sm uppercase tracking-widest"
                >
                    Reset
                </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-10 space-y-12 no-scrollbar">
                {/* Distance Section */}
                <section className="animate-fade-in-up stagger-1">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Distance</h3>
                        <span className="glass text-primary px-4 py-1.5 rounded-full text-sm font-black tracking-widest leading-none flex items-center h-8 transition-all border-primary/20">
                            {localFilters.distance}km
                        </span>
                    </div>
                    <div className="px-2">
                        <input
                            type="range"
                            min="1"
                            max="50"
                            value={localFilters.distance}
                            onChange={(e) => setLocalFilters(prev => ({ ...prev, distance: parseInt(e.target.value) }))}
                            className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between mt-4">
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-300">1km</span>
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-300">50km</span>
                        </div>
                    </div>
                </section>

                {/* Venue Vibe Section */}
                <section className="animate-fade-in-up stagger-2">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">Venue Vibe</h3>
                    <div className="flex flex-wrap gap-4">
                        {vibes.map((vibe) => (
                            <button
                                key={vibe}
                                onClick={() => setLocalFilters(prev => ({ ...prev, vibe }))}
                                className={`px-8 py-4 rounded-[2rem] text-sm font-black uppercase tracking-widest transition-all duration-300 active:scale-95 ${localFilters.vibe === vibe
                                    ? "bg-primary text-white shadow-xl shadow-primary/20"
                                    : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-100 dark:border-slate-700"
                                    }`}
                            >
                                {vibe}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Amenities Section */}
                <section className="animate-fade-in-up stagger-3">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">Amenities</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {amenities.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => toggleAmenity(item.id)}
                                className={`flex flex-col items-center justify-center p-8 rounded-[2.5rem] border-2 transition-all duration-300 active:scale-95 ${localFilters.amenities.includes(item.id)
                                    ? "border-primary bg-primary/5 text-primary"
                                    : "border-slate-100 dark:border-slate-800 glass text-slate-400"
                                    }`}
                            >
                                <div className="mb-4">
                                    <item.Icon
                                        size={24}
                                        strokeWidth={2.5}
                                        color={localFilters.amenities.includes(item.id) ? "#1152d4" : undefined}
                                    />
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-center leading-tight ${localFilters.amenities.includes(item.id) ? "text-primary" : "text-slate-900 dark:text-white"
                                    }`}>
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Entry Fee Section */}
                <section className="animate-fade-in-up stagger-4">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Entry Fee</h3>
                        <span className="text-primary font-black">KSh {localFilters.entryFee.toLocaleString()}</span>
                    </div>
                    <div className="px-2">
                        <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            value={localFilters.entryFee}
                            onChange={(e) => setLocalFilters(prev => ({ ...prev, entryFee: parseInt(e.target.value) }))}
                            className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between mt-4">
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-300">Free</span>
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-300">KSh 5,000</span>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="px-6 py-10 flex items-center gap-10 border-t border-slate-50 dark:border-slate-800 bg-background-light dark:bg-background-dark">
                <button
                    onClick={resetFilters}
                    className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-widest border-b-4 border-primary pb-1"
                >
                    Clear All
                </button>
                <button
                    onClick={handleApply}
                    className="flex-1 bg-primary text-white py-6 rounded-full text-sm font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 active:scale-95 transition-all"
                >
                    Apply Filters
                    <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-[10px]">24</span>
                </button>
            </footer>
        </div>
    )
}
