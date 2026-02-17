import React from 'react'
import { Star, MapPin } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface VenueCardProps {
    name: string
    image: string
    rating: number
    location: string
    distance: string
    type: 'Partner' | 'Casual'
    tags?: string[]
    nextGame?: string
    variant?: 'horizontal' | 'vertical'
}

export const VenueCard: React.FC<VenueCardProps> = ({
    name,
    image,
    rating,
    location,
    distance,
    type,
    tags,
    nextGame,
    variant = 'vertical'
}) => {
    return (
        <div className={cn(
            "bg-white dark:bg-background-dark rounded-2xl shadow-xl overflow-hidden flex border border-gray-100 dark:border-primary/10 transition-all active:scale-[0.98]",
            variant === 'vertical' ? "flex-col w-full" : "flex-row w-full h-32"
        )}>
            {/* Image Section */}
            <div className={cn(
                "relative overflow-hidden",
                variant === 'vertical' ? "h-32 w-full" : "h-full w-32"
            )}>
                <img
                    alt={name}
                    className="w-full h-full object-cover"
                    src={image}
                />
                <div className="absolute top-2 right-2 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center shadow-sm">
                    <span className="material-icons-round text-accent-gold text-[10px] mr-1">star</span>
                    <span className="text-[10px] font-bold text-gray-800 dark:text-gray-200">{rating}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-0.5">
                        <h3 className="font-bold text-sm text-gray-900 dark:text-white truncate">{name}</h3>
                        <span className={cn(
                            "text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider",
                            type === 'Partner' ? "bg-primary/10 text-primary" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                        )}>
                            {type}
                        </span>
                    </div>

                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-[10px] mb-2">
                        <span className="material-icons-round text-[12px] mr-1">location_on</span>
                        <span className="truncate">{location} • {distance}</span>
                    </div>

                    {nextGame && (
                        <p className="text-[10px] font-semibold text-gray-900 dark:text-gray-200 mb-2">
                            Next game: <span className="text-primary">{nextGame}</span>
                        </p>
                    )}
                </div>

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {tags.map(tag => (
                            <span key={tag} className="bg-accent-blue/10 text-accent-blue text-[9px] font-bold px-2 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
