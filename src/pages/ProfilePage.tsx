import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link2, ShieldCheck, X, Award, Users, CheckCircle2, ChevronRight } from 'lucide-react'

export const ProfilePage: React.FC = () => {
    const navigate = useNavigate()
    const [showLichessModal, setShowLichessModal] = useState(false)
    const [lichessUsername, setLichessUsername] = useState('')
    const [isVerifying, setIsVerifying] = useState(false)
    const [isLinked, setIsLinked] = useState(false)
    const [isOrganizerMode, setIsOrganizerMode] = useState(false)
    const [isVerified, setIsVerified] = useState(true)

    // Grouped menu sections
    const quickActions = [
        { label: 'My Meetups', icon: 'event', path: '/my-meetups', desc: 'View history' },
        { label: 'Messages', icon: 'chat_bubble', path: '/messages', desc: '3 unread', badge: true },
        { label: 'Rewards', icon: 'stars', path: '/rewards', desc: 'Season stats' },
        { label: 'Leaderboard', icon: 'leaderboard', path: '/leaderboard', desc: 'Global rank' },
    ]

    const organizerTools = [
        { label: 'Business Dashboard', icon: 'dashboard', path: '/partner-dashboard' },
        { label: 'Verify Results', icon: 'fact_check', path: '/verify-results' },
        { label: 'Scan Tickets', icon: 'qr_code_scanner', path: '/scanner' },
    ]

    const getStarted = [
        { label: 'Start a Club', icon: 'group_add', path: '/club-registration', color: 'primary' },
        { label: 'Register Venue', icon: 'add_business', path: '/venue-registration', color: 'primary' },
        { label: 'Become Organizer', icon: 'verified_user', path: '/organizer-registration', color: 'primary' },
    ]

    const accountSettings = [
        { label: 'Edit Profile', icon: 'person', path: '/register' },
        { label: 'Notifications', icon: 'notifications', path: '/activity', badge: true },
        { label: 'Settings', icon: 'settings', path: '/settings' },
        { label: 'Help Center', icon: 'help', path: '/help' },
    ]

    return (
        <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="px-6 pt-16 pb-8 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 shadow-lg overflow-hidden">
                                <img src="https://i.pravatar.cc/150?u=me" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-lg border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
                                <span className="material-icons-round text-white text-xs">camera_alt</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-black text-slate-900 dark:text-white">Chess Master</h1>
                                {isVerified && <CheckCircle2 size={16} className="text-primary" fill="currentColor" fillOpacity={0.1} />}
                            </div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-0.5">
                                {isOrganizerMode ? 'Verified Organizer' : 'Blitz Enthusiast'}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOrganizerMode(!isOrganizerMode)}
                        className="px-4 py-2 bg-accent-gold/10 text-accent-gold rounded-xl text-[9px] font-black uppercase tracking-wider border border-accent-gold/20 active:scale-95 transition-all"
                    >
                        {isOrganizerMode ? 'Player' : 'Organizer'}
                    </button>
                </div>

                {/* Badges */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                    {[
                        { icon: <Award size={12} />, label: "Organizer", color: "bg-primary/10 text-primary border-primary/20" },
                        { icon: <Users size={12} />, label: "Nairobi Club", color: "bg-accent-gold/10 text-accent-gold border-accent-gold/20" },
                        { icon: <ShieldCheck size={12} />, label: "Fair Play", color: "bg-green-500/10 text-green-500 border-green-500/20" },
                    ].map((badge, i) => (
                        <div key={i} className={`flex-none flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${badge.color} text-[9px] font-black uppercase tracking-wider whitespace-nowrap`}>
                            {badge.icon}
                            {badge.label}
                        </div>
                    ))}
                </div>
            </header>

            <main className="flex-1 px-6 py-6 space-y-6 overflow-y-auto no-scrollbar pb-32">
                {/* Quick Actions Grid */}
                <section>
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Quick Access</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {quickActions.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => navigate(item.path)}
                                className="relative p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm active:scale-95 transition-all text-left"
                            >
                                {item.badge && (
                                    <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
                                )}
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                                    <span className="material-icons-round text-xl">{item.icon}</span>
                                </div>
                                <p className="font-black text-sm text-slate-900 dark:text-white mb-0.5">{item.label}</p>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{item.desc}</p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Lichess Integration */}
                <section>
                    <button
                        onClick={() => setShowLichessModal(true)}
                        className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all active:scale-[0.98] ${isLinked
                                ? 'bg-green-500/5 border-green-500/20'
                                : 'bg-primary/5 border-primary/20'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLinked ? 'bg-green-500/10 text-green-500' : 'bg-primary/10 text-primary'
                                }`}>
                                <span className="material-icons-round">{isLinked ? 'verified' : 'link'}</span>
                            </div>
                            <div className="text-left">
                                <p className="font-black text-sm text-slate-900 dark:text-white">
                                    {isLinked ? 'Lichess Linked' : 'Link Lichess'}
                                </p>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                    {isLinked ? 'Account verified' : 'Connect your account'}
                                </p>
                            </div>
                        </div>
                        <ChevronRight size={20} className="text-slate-300" />
                    </button>
                </section>

                {/* Organizer Tools (conditional) */}
                {isOrganizerMode && (
                    <section>
                        <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Organizer Tools</h2>
                        <div className="space-y-2">
                            {organizerTools.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => navigate(item.path)}
                                    className="w-full p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between shadow-sm active:scale-[0.98] transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                            <span className="material-icons-round text-lg">{item.icon}</span>
                                        </div>
                                        <span className="font-black text-sm text-slate-700 dark:text-slate-200">{item.label}</span>
                                    </div>
                                    <ChevronRight size={18} className="text-slate-300" />
                                </button>
                            ))}
                        </div>
                    </section>
                )}

                {/* Get Started Section */}
                <section>
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Get Started</h2>
                    <div className="space-y-2">
                        {getStarted.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => navigate(item.path)}
                                className="w-full p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl border border-primary/20 flex items-center justify-between active:scale-[0.98] transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                        <span className="material-icons-round text-lg">{item.icon}</span>
                                    </div>
                                    <span className="font-black text-sm text-slate-700 dark:text-slate-200">{item.label}</span>
                                </div>
                                <ChevronRight size={18} className="text-primary" />
                            </button>
                        ))}
                    </div>
                </section>

                {/* Account Settings */}
                <section>
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Account</h2>
                    <div className="space-y-2">
                        {accountSettings.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => navigate(item.path)}
                                className="w-full p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between shadow-sm active:scale-[0.98] transition-all relative"
                            >
                                {item.badge && (
                                    <div className="absolute top-4 right-14 w-2 h-2 bg-red-500 rounded-full"></div>
                                )}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
                                        <span className="material-icons-round text-lg">{item.icon}</span>
                                    </div>
                                    <span className="font-black text-sm text-slate-700 dark:text-slate-200">{item.label}</span>
                                </div>
                                <ChevronRight size={18} className="text-slate-300" />
                            </button>
                        ))}
                    </div>
                </section>

                {/* Logout */}
                <button className="w-full p-4 mt-4 text-red-500 font-black uppercase text-xs tracking-widest hover:bg-red-50 dark:hover:bg-red-500/10 rounded-2xl transition-all border border-red-500/20">
                    Log Out
                </button>
            </main>

            {/* Lichess Linking Modal */}
            {showLichessModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setShowLichessModal(false)}></div>
                    <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[3rem] p-8 shadow-2xl relative z-10 space-y-6">
                        <div className="flex justify-between items-center">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Link2 size={24} />
                            </div>
                            <button onClick={() => setShowLichessModal(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={24} />
                            </button>
                        </div>

                        <div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Link Lichess</h3>
                            <p className="text-sm font-bold text-slate-500 mt-2">Connect your account to showcase your online ratings and history.</p>
                        </div>

                        {!isLinked ? (
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 mb-2 block">Username</label>
                                    <input
                                        type="text"
                                        value={lichessUsername}
                                        onChange={(e) => setLichessUsername(e.target.value)}
                                        placeholder="e.g. drnykterstein"
                                        className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl py-4 px-6 font-bold text-sm border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all"
                                    />
                                </div>
                                <button
                                    onClick={() => {
                                        setIsVerifying(true)
                                        setTimeout(() => {
                                            setIsVerifying(false)
                                            setIsLinked(true)
                                        }, 2000)
                                    }}
                                    disabled={!lichessUsername || isVerifying}
                                    className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 active:scale-95 transition-all text-xs uppercase tracking-widest disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isVerifying ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Verifying...
                                        </>
                                    ) : 'Verify & Link'}
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center py-4">
                                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck size={32} />
                                </div>
                                <p className="font-bold text-slate-900 dark:text-white">Account Linked Successfully!</p>
                                <button
                                    onClick={() => setShowLichessModal(false)}
                                    className="w-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black py-4 rounded-2xl transition-all text-xs uppercase tracking-widest"
                                >
                                    Awesome
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
