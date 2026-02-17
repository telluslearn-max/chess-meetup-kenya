import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Globe, Mail } from 'lucide-react'

export const SponsorDetails: React.FC = () => {
    const navigate = useNavigate()
    const { id, sponsorId } = useParams()

    const sponsor = {
        name: 'Safaricom',
        logo: 'https://ui-avatars.com/api/?name=SF&background=16a34a&color=fff&size=400',
        badge: 'Official Connectivity Partner',
        mission: 'Empowering the Kenyan chess community through high-speed connectivity and digital innovation',
        social: {
            website: 'https://safaricom.co.ke',
            twitter: 'https://twitter.com/safaricom',
            youtube: 'https://youtube.com/safaricom'
        },
        perk: {
            title: 'Free high-speed data at venue',
            description: 'Connect to "Safaricom_Chess_Open" with your player ID to redeem',
            active: true
        },
        events: [
            { image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400', title: 'Chess Event 1' },
            { image: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=400', title: 'Chess Event 2' },
            { image: 'https://images.unsplash.com/photo-1611195974226-ef7f1a3e6a34?w=400', title: 'Chess Event 3' },
            { image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400', title: 'Chess Event 4' }
        ]
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between px-6 py-4">
                    <button
                        onClick={() => navigate(`/tournament/${id}/sponsors`)}
                        className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-90 transition-all"
                    >
                        <span className="material-icons-round text-xl">arrow_back</span>
                    </button>
                    <h1 className="text-base font-black text-slate-900 dark:text-white">Sponsor Details</h1>
                    <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-90 transition-all">
                        <span className="material-icons-round text-xl">share</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 p-6 pb-32 space-y-6">
                {/* Sponsor Header */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm text-center">
                    <div className="w-24 h-24 bg-green-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                        <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{sponsor.name}</h2>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                        <span className="material-icons-round text-sm">wifi</span>
                        <span className="text-[10px] font-black uppercase tracking-wider">{sponsor.badge}</span>
                    </div>
                </div>

                {/* Mission */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed text-center">
                        {sponsor.mission}
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                    <a
                        href={sponsor.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/30 transition-all active:scale-90"
                    >
                        <Globe size={20} />
                    </a>
                    <a
                        href={sponsor.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/30 transition-all active:scale-90"
                    >
                        <span className="material-icons-round text-xl">close</span>
                    </a>
                    <a
                        href={sponsor.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-500/20 transition-all active:scale-90"
                    >
                        <span className="material-icons-round text-xl">play_arrow</span>
                    </a>
                </div>

                {/* Perks for Players */}
                <div>
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Perks for Players</h3>
                        {sponsor.perk.active && (
                            <span className="text-[9px] font-black text-green-500 uppercase tracking-wider">Active Now</span>
                        )}
                    </div>

                    <div className="bg-primary p-6 rounded-[2.5rem] shadow-lg shadow-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] -mr-16 -mt-16"></div>
                        <div className="relative z-10">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="material-icons-round text-white">wifi</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-white/80 uppercase tracking-wider mb-1">Sponsorship Benefit</p>
                                    <h4 className="text-base font-black text-white mb-2">{sponsor.perk.title}</h4>
                                    <p className="text-xs font-medium text-white/70 leading-relaxed">
                                        {sponsor.perk.description}
                                    </p>
                                </div>
                            </div>

                            <button className="w-full bg-white text-primary py-3 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all">
                                Claim Perk
                            </button>
                        </div>
                    </div>
                </div>

                {/* Previous Chess Events */}
                <div>
                    <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 px-2">
                        Previous Chess Events
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {sponsor.events.map((event, index) => (
                            <div
                                key={index}
                                className="aspect-square rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <button className="w-full text-primary text-xs font-bold py-3 hover:underline">
                        View All Impact Stories
                    </button>
                </div>
            </main>

            {/* Fixed Footer Actions */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-50">
                <div className="flex gap-4">
                    <button className="flex-1 bg-white dark:bg-slate-800 border-2 border-primary text-primary py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
                        <Mail size={16} />
                        Contact
                    </button>
                    <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
                        Visit Official Site
                    </button>
                </div>
            </div>
        </div>
    )
}
