import React, { createContext, useContext, useState, ReactNode } from 'react'

interface DiscoveryFilters {
    distance: number
    vibe: string
    amenities: string[]
    entryFee: number
    casualOnly: boolean
    eventType: string
    time: string
    skillLevel: string
    eloRange: [number, number]
}

interface DiscoveryContextType {
    searchQuery: string
    setSearchQuery: (query: string) => void
    filters: DiscoveryFilters
    setFilters: (filters: DiscoveryFilters) => void
    resetFilters: () => void
    activeLocation: string
    setActiveLocation: (loc: string) => void
}

const defaultFilters: DiscoveryFilters = {
    distance: 15,
    vibe: 'Cozy Cafe',
    amenities: ['WiFi'],
    entryFee: 2500,
    casualOnly: false,
    eventType: 'Casual',
    time: 'Today',
    skillLevel: 'Intermediate',
    eloRange: [800, 1650]
}

const DiscoveryContext = createContext<DiscoveryContextType | undefined>(undefined)

export const DiscoveryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('Westlands')
    const [activeLocation, setActiveLocation] = useState('Westlands')
    const [filters, setFilters] = useState<DiscoveryFilters>(defaultFilters)

    const resetFilters = () => setFilters(defaultFilters)

    return (
        <DiscoveryContext.Provider value={{
            searchQuery,
            setSearchQuery,
            filters,
            setFilters,
            resetFilters,
            activeLocation,
            setActiveLocation
        }}>
            {children}
        </DiscoveryContext.Provider>
    )
}

export const useDiscovery = () => {
    const context = useContext(DiscoveryContext)
    if (!context) throw new Error('useDiscovery must be used within DiscoveryProvider')
    return context
}
