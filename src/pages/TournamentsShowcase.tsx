import React, { useState } from 'react'
import { TournamentCard } from '../components/TournamentCard'
import { useNavigate } from 'react-router-dom'

export const TournamentsShowcase: React.FC = () => {
    const navigate = useNavigate()
    const [viewMode, setViewMode] = useState<'organizer' | 'attendee'>('attendee')

    const tournaments = [
        {
            id: '123',
            title: 'Nairobi Masters Invitational 2024',
            type: 'competitive' as const,
            date: 'Oct 20-22, 2024',
            time: '9:00 AM',
            location: 'Westlands, Nairobi',
            venue: 'Sarit Center',
            attendees: 48,
            maxAttendees: 64,
            prizePool: 'KSh 50,000',
            image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600',
            sponsors: [
                { name: 'Safaricom', logo: 'https://ui-avatars.com/api/?name=SF&background=16a34a&color=fff&size=100' },
                { name: 'Chess Kenya', logo: 'https://ui-avatars.com/api/?name=CK&background=ea580c&color=fff&size=100' },
                { name: 'Mindset Global', logo: 'https://ui-avatars.com/api/?name=MG&background=94a3b8&color=fff&size=100' }
            ]
        },
        {
            id: '124',
            title: 'Weekend Blitz Championship',
            type: 'competitive' as const,
            date: 'Nov 5, 2024',
            time: '2:00 PM',
            location: 'Kilimani, Nairobi',
            venue: 'The Rook Cafe',
            attendees: 24,
            maxAttendees: 32,
            prizePool: 'KSh 20,000',
            sponsors: [
                { name: 'Bao Box', logo: 'https://ui-avatars.com/api/?name=BB&background=0f172a&color=fff&size=100' }
            ]
        },
        {
            id: '125',
            title: 'Casual Friday Chess Meetup',
            type: 'casual' as const,
            date: 'Every Friday',
            time: '6:00 PM',
            location: 'CBD, Nairobi',
            venue: 'Java House',
            attendees: 12,
            maxAttendees: 20,
            sponsors: []
        },
        {
            id: '126',
            title: 'Beginner Friendly Tournament',
            type: 'casual' as const,
            date: 'Nov 12, 2024',
            time: '10:00 AM',
            location: 'Karen, Nairobi',
            venue: 'Community Center',
            attendees: 16,
            sponsors: [
                { name: 'Chess Academy', logo: 'https://ui-avatars.com/api/?name=CA&background=6366f1&color=fff&size=100' },
                { name: 'Book Store', logo: 'https://ui-avatars.com/api/?name=BS&background=ec4899&color=fff&size=100' }
            ]
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
                <div className="px-6 py-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-black text-slate-900 dark:text-white">Tournaments</h1>
                        <button
                            onClick={() => navigate('/host')}
                            className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-primary/20 active:scale-95 transition-all"
                        >
                            Host Event
                        </button>
                    </div>

                    {/* View Toggle */}
                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl gap-1">
                        <button
                            onClick={() => setViewMode('attendee')}
                            className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${viewMode === 'attendee'
                                    ? 'bg-white dark:bg-primary text-primary dark:text-white shadow-md'
                                    : 'text-slate-400'
                                }`}
                        >
                            Attendee View
                        </button>
                        <button
                            onClick={() => setViewMode('organizer')}
                            className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${viewMode === 'organizer'
                                    ? 'bg-white dark:bg-primary text-primary dark:text-white shadow-md'
                                    : 'text-slate-400'
                                }`}
                        >
                            Organizer View
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 p-6 pb-32">
                {/* Info Banner */}
                <div className="bg-primary/5 dark:bg-primary/10 p-5 rounded-[2rem] border border-primary/20 mb-6">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="material-icons-round text-primary">info</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-black text-slate-900 dark:text-white mb-1">
                                {viewMode === 'organizer' ? 'Organizer Features' : 'Browse Tournaments'}
                            </h3>
                            <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                                {viewMode === 'organizer'
                                    ? 'As an organizer, you can invite sponsors to support your events. Click "Invite Sponsors" on any card to get started.'
                                    : 'Click on any tournament to view details, see sponsors, and register. Sponsored events often have exclusive perks!'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tournament Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tournaments.map((tournament) => (
                        <TournamentCard
                            key={tournament.id}
                            {...tournament}
                            isOrganizer={viewMode === 'organizer'}
                            onInviteSponsor={() => navigate(`/tournament/${tournament.id}/sponsors/invite`)}
                        />
                    ))}
                </div>

                {/* Empty State for No Sponsors */}
                {viewMode === 'organizer' && (
                    <div className="mt-8 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                            <span className="material-icons-round text-primary text-2xl">handshake</span>
                        </div>
                        <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">
                            Grow Your Events with Sponsors
                        </h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                            Invite local businesses and organizations to sponsor your tournaments. They'll be onboarded by our admin team and can offer perks to your attendees.
                        </p>
                    </div>
                )}
            </main>
        </div>
    )
}
