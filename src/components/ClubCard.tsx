import React from 'react'
import { useNavigate } from 'react-router-dom'

interface ClubCardProps {
    id: string
    name: string
    location: string
    image: string
    isVerified?: boolean
    tags: string[]
    pricePerMonth?: number
    priceLabel?: string
}

export const ClubCard: React.FC<ClubCardProps> = ({
    id,
    name,
    location,
    image,
    isVerified = false,
    tags,
    pricePerMonth,
    priceLabel
}) => {
    const navigate = useNavigate()

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
                {isVerified && (
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-primary/20">
                        <span className="material-icons-round text-primary text-sm">verified</span>
                        <span className="text-[9px] font-black text-primary uppercase tracking-wider">Verified</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Name & Location */}
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1">{name}</h3>
                <div className="flex items-center gap-1.5 mb-4">
                    <span className="material-icons-round text-slate-400 text-sm">location_on</span>
                    <p className="text-xs font-bold text-slate-500">{location}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${tag.toLowerCase() === 'competitive'
                                    ? 'bg-primary/10 text-primary border border-primary/20'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                    <div>
                        {pricePerMonth !== undefined && (
                            <>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Starts from</p>
                                <p className="text-xl font-black text-primary">
                                    KSh {pricePerMonth.toLocaleString()}
                                    <span className="text-xs font-bold text-slate-400">/mo</span>
                                </p>
                            </>
                        )}
                        {priceLabel && !pricePerMonth && (
                            <p className="text-sm font-black text-green-600">{priceLabel}</p>
                        )}
                    </div>
                    <button
                        onClick={() => navigate(`/club/${id}`)}
                        className="bg-primary text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}
