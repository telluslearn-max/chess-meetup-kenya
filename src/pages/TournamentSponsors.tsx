import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MapPin, Share2, Mail } from 'lucide-react'

export const TournamentSponsors: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const sponsors = {
        mainOrganizer: {
            name: 'The Grandmasters Club',
            logo: 'https://ui-avatars.com/api/?name=GM&background=1a5f7a&color=fff&size=200',
            description: 'Official Tournament Director',
            mission: '"Our mission is to foster the growth of strategic thinking through competitive chess in the region."',
            verified: true
        },
        venueHost: {
            name: 'Bao Box',
            logo: 'https://ui-avatars.com/api/?name=BB&background=0f172a&color=fff&size=200',
            location: 'Westlands, Nairobi',
            offer: '15% Off All Platters',
            directions: true
        },
        corporatePartner: {
            name: 'Safaricom',
            logo: 'https://ui-avatars.com/api/?name=SF&background=16a34a&color=fff&size=200',
            tier: 'PLATINUM PARTNER',
            mission: '"Connecting the youth through digital literacy and competitive mental sports. Empowering the next generation of masters."',
            link: 'Learn about digital initiatives'
        },
        brandSponsors: [
            {
                name: 'Chess Kenya',
                logo: 'https://ui-avatars.com/api/?name=CK&background=ea580c&color=fff&size=200',
                perk: 'Special membership discount for all participants'
            },
            {
                name: 'Mindset Global',
                logo: 'https://ui-avatars.com/api/?name=MG&background=94a3b8&color=fff&size=200',
                tier: 'Logistics Partner'
            }
        ]
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(`/tournament/${id}?tab=overview`)}
                            className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-90 transition-all"
                        >
                            <span className="material-icons-round text-xl">arrow_back</span>
                        </button>
                        <h1 className="text-lg font-black text-slate-900 dark:text-white">Tournament Sponsors</h1>
                    </div>
                    <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-90 transition-all">
                        <Share2 size={18} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 p-6 pb-32 space-y-6">
                {/* Main Organizer */}
                <section>
                    <div className="flex items-center gap-2 mb-4 px-2">
                        <div className="w-1 h-4 bg-primary rounded-full"></div>
                        <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Main Organizer</h2>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img src={sponsors.mainOrganizer.logo} alt={sponsors.mainOrganizer.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-base font-black text-slate-900 dark:text-white">{sponsors.mainOrganizer.name}</h3>
                                    {sponsors.mainOrganizer.verified && (
                                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                            <span className="material-icons-round text-white text-xs">check</span>
                                        </div>
                                    )}
                                </div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{sponsors.mainOrganizer.description}</p>
                            </div>
                        </div>

                        <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-2xl border-l-4 border-primary">
                            <p className="text-xs font-medium text-slate-600 dark:text-slate-400 italic leading-relaxed">
                                {sponsors.mainOrganizer.mission}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Venue Host */}
                <section>
                    <div className="flex items-center gap-2 mb-4 px-2">
                        <div className="w-1 h-4 bg-primary rounded-full"></div>
                        <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Venue Host</h2>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-slate-900 dark:bg-slate-800 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img src={sponsors.venueHost.logo} alt={sponsors.venueHost.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-black text-slate-900 dark:text-white mb-1">{sponsors.venueHost.name}</h3>
                                <div className="flex items-center gap-1.5 text-primary">
                                    <MapPin size={12} />
                                    <p className="text-[10px] font-bold">{sponsors.venueHost.location}</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-wider active:scale-95 transition-all">
                                Directions
                            </button>
                        </div>

                        <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-2xl flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="material-icons-round text-primary text-lg">local_offer</span>
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-primary uppercase tracking-wider mb-0.5">Exclusive Offer</p>
                                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{sponsors.venueHost.offer}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Corporate Partner */}
                <section>
                    <div className="flex items-center gap-2 mb-4 px-2">
                        <div className="w-1 h-4 bg-primary rounded-full"></div>
                        <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Corporate Partner</h2>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img src={sponsors.corporatePartner.logo} alt={sponsors.corporatePartner.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">{sponsors.corporatePartner.name}</h3>
                                <span className="inline-block bg-green-500 text-white text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                                    {sponsors.corporatePartner.tier}
                                </span>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl mb-4">
                            <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                                {sponsors.corporatePartner.mission}
                            </p>
                        </div>

                        <button className="flex items-center gap-2 text-primary text-xs font-bold hover:gap-3 transition-all">
                            <span>{sponsors.corporatePartner.link}</span>
                            <span className="material-icons-round text-sm">arrow_forward</span>
                        </button>
                    </div>
                </section>

                {/* Brand Sponsors */}
                <section>
                    <div className="flex items-center gap-2 mb-4 px-2">
                        <div className="w-1 h-4 bg-primary rounded-full"></div>
                        <h2 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Brand Sponsors</h2>
                    </div>

                    <div className="space-y-4">
                        {sponsors.brandSponsors.map((sponsor, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(`/tournament/${id}/sponsors/${index + 1}`)}
                                className="bg-white dark:bg-slate-900 p-5 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-all cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-black text-slate-900 dark:text-white mb-1">{sponsor.name}</h3>
                                    {sponsor.perk && (
                                        <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate">
                                            {sponsor.perk}
                                        </p>
                                    )}
                                    {sponsor.tier && (
                                        <span className="inline-block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                            {sponsor.tier}
                                        </span>
                                    )}
                                </div>
                                <span className="material-icons-round text-slate-300 dark:text-slate-600">chevron_right</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Thank You Card */}
                <div className="bg-slate-900 dark:bg-slate-800 rounded-[2.5rem] p-8 text-center relative overflow-hidden mt-8">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em] mb-2">Special Thanks</p>
                        <p className="text-sm font-bold text-white/90 leading-relaxed">
                            Special thanks to all our partners for making the 2024 Masters Open possible.
                        </p>
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/60 hover:bg-white/20 transition-all">
                                <span className="material-icons-round text-lg">language</span>
                            </button>
                            <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/60 hover:bg-white/20 transition-all">
                                <Mail size={18} />
                            </button>
                            <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/60 hover:bg-white/20 transition-all">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => navigate(`/tournament/${id}/sponsors/add`)}
                    className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl shadow-primary/30 flex items-center justify-center active:scale-90 transition-all"
                >
                    <Mail size={24} />
                </button>
            </div>
        </div>
    )
}
