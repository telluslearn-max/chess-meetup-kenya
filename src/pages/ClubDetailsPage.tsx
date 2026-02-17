import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ClubDetailsPage: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    // Mock data - in real app, fetch based on id
    const club = {
        name: 'Nairobi Kings',
        established: 2012,
        location: 'Westlands, Nairobi',
        venueName: 'Bao Box',
        about: 'Promoting chess excellence in the heart of Nairobi. We bring together a diverse community of grandmasters and hobbyists alike, dedicated to fostering strategic thinking and sportsmanship through the beautiful game of chess.',
        schedule: [
            { day: 'Tuesdays', time: '6:00 PM', activity: 'Training' },
            { day: 'Saturdays', time: '2:00 PM', activity: 'Blitz Open' },
            { day: 'Sundays', time: '10:00 AM', activity: 'Casual Play' }
        ],
        perks: [
            'Free Entry to Blitz Saturdays',
            'Access to FIDE Club Coach',
            '10% Discount at Bao Box',
            'Exclusive Yearly Tournament Access'
        ],
        image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800'
    }

    return (
        <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
            {/* Header */}
            <header className="px-6 pt-16 pb-6 bg-white dark:bg-slate-900">
                <button
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 active:scale-95 transition-all"
                >
                    <span className="material-icons-round text-slate-600 dark:text-slate-400">arrow_back</span>
                </button>
                <h1 className="text-xl font-black text-slate-900 dark:text-white">Club Details</h1>
            </header>

            <main className="flex-1 overflow-y-auto pb-32">
                {/* Club Logo & Name */}
                <div className="px-6 py-8 bg-white dark:bg-slate-900 flex flex-col items-center border-b border-slate-100 dark:border-slate-800">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 flex items-center justify-center mb-4 border-4 border-white dark:border-slate-900 shadow-xl">
                        <span className="material-icons-round text-amber-600 dark:text-amber-500 text-4xl">emoji_events</span>
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{club.name}</h2>
                    <p className="text-xs font-black text-primary uppercase tracking-widest">Established {club.established}</p>
                </div>

                {/* About the Club */}
                <section className="px-6 py-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="material-icons-round text-primary text-sm">info</span>
                        </div>
                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">About the Club</h3>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                        {club.about}
                    </p>
                </section>

                {/* Meeting Venue */}
                <section className="px-6 py-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="material-icons-round text-primary text-sm">place</span>
                        </div>
                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Meeting Venue</h3>
                    </div>

                    {/* Map Placeholder */}
                    <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-4 overflow-hidden relative">
                        <img
                            src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-1.2921,36.8219,12,0/600x300@2x?access_token=YOUR_MAPBOX_TOKEN"
                            alt="Map"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl">
                                <span className="material-icons-round text-white">location_on</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start justify-between">
                        <div>
                            <p className="font-black text-slate-900 dark:text-white mb-1">{club.venueName}</p>
                            <p className="text-xs font-bold text-slate-500">{club.location}</p>
                        </div>
                        <button className="text-xs font-black text-primary uppercase tracking-wider flex items-center gap-1">
                            View Map
                            <span className="material-icons-round text-sm">open_in_new</span>
                        </button>
                    </div>
                </section>

                {/* Weekly Schedule */}
                <section className="px-6 py-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="material-icons-round text-primary text-sm">event</span>
                        </div>
                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Weekly Schedule</h3>
                    </div>

                    <div className="space-y-3">
                        {club.schedule.map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <div>
                                    <p className="font-black text-slate-900 dark:text-white mb-0.5">{item.day}</p>
                                    <p className="text-xs font-bold text-slate-500">{item.activity}</p>
                                </div>
                                <p className="text-sm font-black text-primary">{item.time}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Member Perks */}
                <section className="px-6 py-6 bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="material-icons-round text-primary text-sm">stars</span>
                        </div>
                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Member Perks</h3>
                    </div>

                    <div className="space-y-3">
                        {club.perks.map((perk, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-icons-round text-primary text-sm">check</span>
                                </div>
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{perk}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Bottom Actions */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex gap-3 z-50">
                <button className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center active:scale-95 transition-all">
                    <span className="material-icons-round text-slate-600 dark:text-slate-400">chat_bubble</span>
                </button>
                <button className="flex-1 bg-primary text-white rounded-2xl py-4 font-black text-sm uppercase tracking-wider hover:bg-primary/90 transition-all active:scale-[0.98] shadow-xl shadow-primary/20">
                    Join Club
                </button>
            </div>
        </div>
    )
}
