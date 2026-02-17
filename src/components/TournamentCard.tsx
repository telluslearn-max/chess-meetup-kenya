import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Users, Trophy, Sparkles } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface Sponsor {
    name: string
    logo?: string
}

interface TournamentCardProps {
    id: string
    title: string
    type: 'casual' | 'competitive'
    date: string
    time: string
    location: string
    venue: string
    attendees: number
    maxAttendees?: number
    prizePool?: string
    image?: string
    sponsors?: Sponsor[]
    isOrganizer?: boolean
    onInviteSponsor?: () => void
}

export const TournamentCard: React.FC<TournamentCardProps> = ({
    id,
    title,
    type,
    date,
    time,
    location,
    venue,
    attendees,
    maxAttendees,
    prizePool,
    image,
    sponsors = [],
    isOrganizer = false,
    onInviteSponsor
}) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate(`/tournament/${id}`)
    }

    const handleInviteClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (onInviteSponsor) {
            onInviteSponsor()
        } else {
            navigate(`/tournament/${id}/sponsors/invite`)
        }
    }

    const handleSponsorsClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        navigate(`/tournament/${id}/sponsors`)
    }

    return (
        <div
            onClick={handleCardClick}
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden group"
        >
            {/* Image Header */}
            <div className="relative h-40 overflow-hidden">
                <img
                    src={image || 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600'}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                    <span className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider backdrop-blur-md border",
                        type === 'competitive'
                            ? "bg-primary/90 text-white border-white/20"
                            : "bg-green-500/90 text-white border-white/20"
                    )}>
                        {type === 'competitive' ? (
                            <><Trophy size={12} /> Competitive</>
                        ) : (
                            <><Sparkles size={12} /> Casual</>
                        )}
                    </span>
                </div>

                {/* Sponsor Count Badge */}
                {sponsors.length > 0 && (
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={handleSponsorsClick}
                            className="flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full border border-white/20 hover:bg-white transition-all"
                        >
                            <div className="flex -space-x-2">
                                {sponsors.slice(0, 3).map((sponsor, i) => (
                                    <div
                                        key={i}
                                        className="w-6 h-6 bg-primary/10 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center overflow-hidden"
                                    >
                                        {sponsor.logo ? (
                                            <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-[8px] font-black text-primary">{sponsor.name[0]}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <span className="text-[10px] font-black text-slate-900 dark:text-white">
                                {sponsors.length} {sponsors.length === 1 ? 'Sponsor' : 'Sponsors'}
                            </span>
                        </button>
                    </div>
                )}

                {/* Prize Pool (Competitive only) */}
                {type === 'competitive' && prizePool && (
                    <div className="absolute bottom-4 left-4">
                        <div className="bg-yellow-500/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-yellow-400/30">
                            <p className="text-[8px] font-black text-yellow-900 uppercase tracking-wider">Prize Pool</p>
                            <p className="text-sm font-black text-yellow-900">{prizePool}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-base font-black text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {/* Info Grid */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <span className="material-icons-round text-primary text-sm">calendar_today</span>
                        <span className="text-xs font-bold">{date} • {time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <MapPin size={14} className="text-primary" />
                        <span className="text-xs font-bold truncate">{venue}, {location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Users size={14} className="text-primary" />
                        <span className="text-xs font-bold">
                            {attendees} {maxAttendees ? `/ ${maxAttendees}` : ''} Attendees
                        </span>
                    </div>
                </div>

                {/* Organizer Actions */}
                {isOrganizer && (
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button
                            onClick={handleInviteClick}
                            className="w-full bg-primary/10 hover:bg-primary/20 border-2 border-primary/20 hover:border-primary/30 text-primary py-3 rounded-xl font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="material-icons-round text-sm">mail</span>
                            Invite Sponsors
                        </button>
                    </div>
                )}

                {/* Attendee View - Sponsors Preview */}
                {!isOrganizer && sponsors.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button
                            onClick={handleSponsorsClick}
                            className="w-full flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                        >
                            <span>Sponsored by {sponsors[0].name}{sponsors.length > 1 ? ` +${sponsors.length - 1}` : ''}</span>
                            <span className="material-icons-round text-sm">chevron_right</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
