import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../context/ThemeContext'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const SettingsPage: React.FC = () => {
    const navigate = useNavigate()
    const { theme, toggleTheme } = useTheme()
    const [notifications, setNotifications] = useState(true)
    const [leaderboardVisibility, setLeaderboardVisibility] = useState(true)

    const accountItems = [
        { icon: 'person', label: 'Profile', sublabel: 'Magnus_Carlsen_Fan', path: '/profile', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
        { icon: 'lock', label: 'Privacy', path: '/privacy', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { icon: 'security', label: 'Security', path: '/security', color: 'text-purple-500', bg: 'bg-purple-500/10' }
    ]

    const preferenceItems = [
        { icon: 'notifications', label: 'Notifications', toggle: true, value: notifications, onChange: setNotifications, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
        { icon: 'dark_mode', label: 'Dark Mode', toggle: true, value: theme === 'dark', onChange: toggleTheme, color: 'text-slate-700', bg: 'bg-slate-700/10' },
        { icon: 'language', label: 'Language', sublabel: 'English', path: '/language', color: 'text-blue-500', bg: 'bg-blue-500/10' }
    ]

    const communityItems = [
        { icon: 'leaderboard', label: 'Leaderboard Visibility', sublabel: 'Show your rank in Kenya', toggle: true, value: leaderboardVisibility, onChange: setLeaderboardVisibility, color: 'text-green-500', bg: 'bg-green-500/10' },
        { icon: 'workspace_premium', label: 'Club Badges', badge: '+6', path: '/badges', color: 'text-amber-500', bg: 'bg-amber-500/10' }
    ]

    const supportItems = [
        { icon: 'help_center', label: 'Help Center', path: '/help', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
        { icon: 'report', label: 'Raise a Dispute', path: '/dispute', color: 'text-red-500', bg: 'bg-red-500/10' },
        { icon: 'description', label: 'Terms of Service', external: true, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { icon: 'policy', label: 'Privacy Policy', external: true, color: 'text-blue-500', bg: 'bg-blue-500/10' }
    ]

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="px-5 pt-8 pb-5 bg-white dark:bg-slate-900 shadow-sm z-30 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group cursor-pointer" onClick={() => navigate('/')}>
                            <ArrowLeft size={20} />
                        </div>
                        <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Settings</h1>
                    </div>

                    <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                        <img src="https://i.pravatar.cc/100?u=settings" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto px-5 py-6 space-y-8 pb-24">
                {/* ACCOUNT Section */}
                <section>
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Account</h2>
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800">
                        {accountItems.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => item.path && navigate(item.path)}
                                className={cn(
                                    "flex items-center gap-4 p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors active:scale-[0.99]",
                                    idx !== accountItems.length - 1 && "border-b border-slate-100 dark:border-slate-800"
                                )}
                            >
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.bg)}>
                                    <span className={cn("material-icons-round text-lg", item.color)}>{item.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-black text-slate-900 dark:text-white">{item.label}</p>
                                    {item.sublabel && <p className="text-sm text-slate-500 dark:text-slate-400">{item.sublabel}</p>}
                                </div>
                                <ChevronRight size={20} className="text-slate-400" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* PREFERENCES Section */}
                <section>
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Preferences</h2>
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800">
                        {preferenceItems.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => !item.toggle && item.path && navigate(item.path)}
                                className={cn(
                                    "flex items-center gap-4 p-5 transition-colors",
                                    !item.toggle && "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 active:scale-[0.99]",
                                    idx !== preferenceItems.length - 1 && "border-b border-slate-100 dark:border-slate-800"
                                )}
                            >
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.bg)}>
                                    <span className={cn("material-icons-round text-lg", item.color)}>{item.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-black text-slate-900 dark:text-white">{item.label}</p>
                                    {item.sublabel && <p className="text-sm text-slate-500 dark:text-slate-400">{item.sublabel}</p>}
                                </div>
                                {item.toggle ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            item.onChange?.(!item.value)
                                        }}
                                        className={cn(
                                            "relative w-12 h-7 rounded-full transition-colors",
                                            item.value ? "bg-green-500" : "bg-slate-300 dark:bg-slate-700"
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute top-1 w-5 h-5 bg-white rounded-full transition-transform",
                                            item.value ? "translate-x-6" : "translate-x-1"
                                        )}></div>
                                    </button>
                                ) : (
                                    <ChevronRight size={20} className="text-slate-400" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* COMMUNITY Section */}
                <section>
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Community</h2>
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800">
                        {communityItems.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => !item.toggle && item.path && navigate(item.path)}
                                className={cn(
                                    "flex items-center gap-4 p-5 transition-colors",
                                    !item.toggle && "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 active:scale-[0.99]",
                                    idx !== communityItems.length - 1 && "border-b border-slate-100 dark:border-slate-800"
                                )}
                            >
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.bg)}>
                                    <span className={cn("material-icons-round text-lg", item.color)}>{item.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-black text-slate-900 dark:text-white">{item.label}</p>
                                    {item.sublabel && <p className="text-sm text-slate-500 dark:text-slate-400">{item.sublabel}</p>}
                                </div>
                                {item.toggle ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            item.onChange?.(!item.value)
                                        }}
                                        className={cn(
                                            "relative w-12 h-7 rounded-full transition-colors",
                                            item.value ? "bg-green-500" : "bg-slate-300 dark:bg-slate-700"
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute top-1 w-5 h-5 bg-white rounded-full transition-transform",
                                            item.value ? "translate-x-6" : "translate-x-1"
                                        )}></div>
                                    </button>
                                ) : item.badge ? (
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center">
                                            <span className="text-xs font-black text-white dark:text-slate-900">{item.badge}</span>
                                        </div>
                                        <ChevronRight size={20} className="text-slate-400" />
                                    </div>
                                ) : (
                                    <ChevronRight size={20} className="text-slate-400" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* SUPPORT & LEGAL Section */}
                <section>
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Support & Legal</h2>
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800">
                        {supportItems.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => item.path && navigate(item.path)}
                                className={cn(
                                    "flex items-center gap-4 p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors active:scale-[0.99]",
                                    idx !== supportItems.length - 1 && "border-b border-slate-100 dark:border-slate-800"
                                )}
                            >
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.bg)}>
                                    <span className={cn("material-icons-round text-lg", item.color)}>{item.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-black text-slate-900 dark:text-white">{item.label}</p>
                                </div>
                                {item.external ? (
                                    <ExternalLink size={18} className="text-slate-400" />
                                ) : (
                                    <ChevronRight size={20} className="text-slate-400" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Log Out Button */}
                <button className="w-full py-5 bg-white dark:bg-slate-900 text-red-500 rounded-3xl font-black text-sm uppercase tracking-widest border-2 border-red-500/20 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all active:scale-[0.98]">
                    Log Out
                </button>

                {/* App Version */}
                <div className="text-center space-y-1 pt-4">
                    <p className="text-sm font-bold text-primary">Chess Meet Kenya v2.4.1</p>
                    <p className="text-xs text-slate-400">Crafted for Grandmasters</p>
                </div>
            </main>
        </div>
    )
}
