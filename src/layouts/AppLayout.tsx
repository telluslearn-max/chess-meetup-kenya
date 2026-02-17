import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface AppLayoutProps {
    children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const location = useLocation()

    const navItems = [
        { icon: 'explore', label: 'Explore', path: '/', active: location.pathname === '/' },
        { icon: 'groups', label: 'Clubs', path: '/clubs', active: location.pathname.startsWith('/clubs') },
        { icon: 'emoji_events', label: 'Tournaments', path: '/tournaments', active: location.pathname.startsWith('/tournament') },
        { icon: 'military_tech', label: 'Leagues', path: '/leagues', active: location.pathname.startsWith('/leagues') },
        { isAction: true, icon: 'add', label: 'Host', path: '/host' },
        { icon: 'notifications', label: 'Alerts', path: '/activity', active: location.pathname === '/activity', badge: true },
        { icon: 'settings', label: 'Settings', path: '/settings', active: location.pathname === '/settings' },
    ]

    return (
        <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-72 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 sticky top-0 h-screen z-50">
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-10 px-2 transition-all hover:scale-105 cursor-pointer">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="material-icons-round text-white">grid_view</span>
                        </div>
                        <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">Chess <span className="text-primary">Meetup</span></span>
                    </div>

                    <nav className="space-y-2">
                        {navItems.map((item, idx) => (
                            !item.isAction && (
                                <Link
                                    key={idx}
                                    to={item.path}
                                    className={cn(
                                        "flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group",
                                        item.active
                                            ? "bg-primary/5 text-primary"
                                            : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                    )}
                                >
                                    <div className="relative">
                                        <span className={cn(
                                            "material-icons-round text-[24px]",
                                            item.active ? "text-primary rotate-12 transition-transform" : "group-hover:rotate-6 transition-transform"
                                        )}>{item.icon}</span>
                                        {item.badge && (
                                            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                                        )}
                                    </div>
                                    <span className={cn("text-sm transition-all", item.active ? "font-black tracking-tight" : "font-bold group-hover:translate-x-1")}>
                                        {item.label}
                                    </span>
                                </Link>
                            )
                        ))}
                    </nav>
                </div>

                <div className="mt-auto p-8">
                    <button className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-between text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-black text-xs uppercase tracking-widest">
                        <span>Legal & Privacy</span>
                        <span className="material-icons-round text-sm">lock</span>
                    </button>
                    <p className="text-[10px] font-black text-slate-300 dark:text-slate-600 mt-6 uppercase tracking-[0.2em] text-center">Nairobi v1.2.0</p>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
                <main className="flex-1 relative mx-auto w-full max-w-7xl md:px-8 pb-24 md:pb-12">
                    {children}
                </main>

                {/* Mobile Bottom Navigation Bar */}
                <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-t border-slate-200 dark:border-slate-800 z-[100]">
                    <div className="px-2 pt-2 pb-6 flex justify-between items-center max-w-md mx-auto">
                        {/* Home */}
                        <Link
                            to="/"
                            className={cn(
                                "flex flex-col items-center gap-1 transition-all active:scale-95 min-w-[50px]",
                                location.pathname === "/" ? "text-primary" : "text-slate-400 dark:text-slate-500"
                            )}
                        >
                            <span className="material-icons-round text-[24px]">explore</span>
                            <span className={cn("text-[9px] uppercase tracking-wider", location.pathname === "/" ? "font-black" : "font-bold")}>
                                Home
                            </span>
                        </Link>

                        {/* Clubs */}
                        <Link
                            to="/clubs"
                            className={cn(
                                "flex flex-col items-center gap-1 transition-all active:scale-95 min-w-[50px]",
                                location.pathname.startsWith("/club") ? "text-primary" : "text-slate-400 dark:text-slate-500"
                            )}
                        >
                            <span className="material-icons-round text-[24px]">groups</span>
                            <span className={cn("text-[9px] uppercase tracking-wider", location.pathname.startsWith("/club") ? "font-black" : "font-bold")}>
                                Clubs
                            </span>
                        </Link>

                        {/* Tournaments */}
                        <Link
                            to="/tournaments"
                            className={cn(
                                "flex flex-col items-center gap-1 transition-all active:scale-95 min-w-[50px]",
                                location.pathname.startsWith("/tournament") ? "text-primary" : "text-slate-400 dark:text-slate-500"
                            )}
                        >
                            <span className="material-icons-round text-[24px]">emoji_events</span>
                            <span className={cn("text-[9px] uppercase tracking-wider", location.pathname.startsWith("/tournament") ? "font-black" : "font-bold")}>
                                Events
                            </span>
                        </Link>

                        {/* Host Action Button */}
                        <Link
                            to="/host"
                            className="flex flex-col items-center gap-1 group -mt-8 transition-all active:scale-90 min-w-[50px]"
                        >
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/30 border-4 border-white dark:border-slate-900 group-active:shadow-primary/50 transition-all">
                                <span className="material-icons-round text-white text-2xl">add</span>
                            </div>
                            <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">Host</span>
                        </Link>

                        {/* Leagues */}
                        <Link
                            to="/leagues"
                            className={cn(
                                "flex flex-col items-center gap-1 transition-all active:scale-95 min-w-[50px]",
                                location.pathname.startsWith("/leagues") ? "text-primary" : "text-slate-400 dark:text-slate-500"
                            )}
                        >
                            <span className="material-icons-round text-[24px]">military_tech</span>
                            <span className={cn("text-[9px] uppercase tracking-wider", location.pathname.startsWith("/leagues") ? "font-black" : "font-bold")}>
                                Leagues
                            </span>
                        </Link>

                        {/* Profile/More */}
                        <Link
                            to="/profile"
                            className={cn(
                                "flex flex-col items-center gap-1 transition-all active:scale-95 min-w-[50px] relative",
                                location.pathname === "/profile" || location.pathname === "/settings" || location.pathname === "/activity" ? "text-primary" : "text-slate-400 dark:text-slate-500"
                            )}
                        >
                            <div className="relative">
                                <span className="material-icons-round text-[24px]">person</span>
                                {/* Notification badge */}
                                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                            </div>
                            <span className={cn("text-[9px] uppercase tracking-wider", (location.pathname === "/profile" || location.pathname === "/settings") ? "font-black" : "font-bold")}>
                                Profile
                            </span>
                        </Link>
                    </div>

                    {/* iOS Home Indicator */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900/10 dark:bg-white/10 rounded-full pointer-events-none"></div>
                </nav>
            </div>
        </div>
    )
}
