import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

type TabType = 'analytics' | 'financials' | 'inventory' | 'presence'

export const PartnerDashboard: React.FC = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState<TabType>('analytics')

    const tabs = [
        { id: 'analytics', label: 'Performance', icon: 'insights' },
        { id: 'financials', label: 'Earnings', icon: 'payments' },
        { id: 'inventory', label: 'Inventory', icon: 'inventory_2' },
        { id: 'presence', label: 'Presence', icon: 'campaign' },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display pb-32">
            {/* Header */}
            <header className="px-6 pt-12 pb-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50">
                <div className="flex items-center gap-4 mb-6">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons-round">arrow_back</span>
                    </button>
                    <div>
                        <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Partner Central</h1>
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-0.5">Nairobi West Hub #422</p>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabType)}
                            className={cn(
                                "flex-1 flex flex-col items-center py-2.5 rounded-xl transition-all duration-300",
                                activeTab === tab.id
                                    ? "bg-white dark:bg-primary shadow-sm text-primary dark:text-white"
                                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            )}
                        >
                            <span className="material-icons-round text-lg">{tab.icon}</span>
                            <span className="text-[8px] font-black uppercase tracking-widest mt-1">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </header>

            <main className="flex-1 p-6 overflow-y-auto no-scrollbar">
                {activeTab === 'analytics' && <AnalyticsView />}
                {activeTab === 'financials' && <FinancialsView />}
                {activeTab === 'inventory' && <InventoryView />}
                {activeTab === 'presence' && <PresenceView />}
            </main>
        </div>
    )
}

const AnalyticsView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <section className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">30 Day Revenue</p>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">KSh 42,850</h2>

            <div className="h-40 flex items-end justify-between gap-2 px-2">
                {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/10 rounded-t-xl relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-xl transition-all duration-500 delay-100" style={{ height: `${h}%` }}></div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest mt-4">
                <span>Mon</span>
                <span>Sun</span>
            </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <span className="material-icons-round text-primary mb-3">group</span>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Footfall</p>
                <p className="text-xl font-black text-slate-900 dark:text-white mt-1">1,240</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <span className="material-icons-round text-yellow-500 mb-3">auto_awesome</span>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rating</p>
                <p className="text-xl font-black text-slate-900 dark:text-white mt-1">4.9/5</p>
            </div>
        </div>
    </div>
)

const FinancialsView = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2 mb-2">Earnings Breakdown</h3>
        {[
            { label: 'Referral Commissions', amount: 'KSh 12,400', color: 'text-primary', icon: 'share' },
            { label: 'Membership Revenue', amount: 'KSh 28,150', color: 'text-green-500', icon: 'card_membership' },
            { label: 'Event Hosting Fees', amount: 'KSh 2,300', color: 'text-purple-500', icon: 'event_available' },
        ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                        <span className={cn("material-icons-round text-lg", item.color)}>{item.icon}</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-tight">{item.label}</p>
                        <p className="text-lg font-black text-slate-900 dark:text-white mt-0.5">{item.amount}</p>
                    </div>
                </div>
                <span className="material-icons-round text-slate-300">chevron_right</span>
            </div>
        ))}

        <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl transition-all active:scale-[0.98]">
            Request Payout
        </button>
    </div>
)

const InventoryView = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-[2.5rem] border border-primary/20 flex items-center gap-4 mb-4">
            <span className="material-icons-round text-primary text-3xl">inventory</span>
            <div>
                <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">Active Inventory</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Supplied by HQ</p>
            </div>
        </div>

        <div className="space-y-3">
            {[
                { name: 'Tournament Boards', qty: 24, status: 'Good' },
                { name: 'Digital Clocks', qty: 12, status: 'Needs Battery' },
                { name: 'Demo Board', qty: 1, status: 'Good' },
                { name: 'Club T-shirts', qty: 15, status: 'In Stock' },
            ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        <p className="font-black text-slate-900 dark:text-white text-sm">{item.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">Qty: {item.qty}</p>
                    </div>
                    <span className={cn(
                        "text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                        item.status === 'Needs Battery' ? "bg-red-100 text-red-500" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                    )}>
                        {item.status}
                    </span>
                </div>
            ))}
        </div>
    </div>
)

const PresenceView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
        <div className="relative group">
            <img
                src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800"
                alt="Venue"
                className="w-full h-48 rounded-[3rem] object-cover shadow-2xl transition-transform group-hover:scale-[1.02]"
            />
            <button className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white p-3 rounded-2xl border border-white/20 shadow-lg">
                <span className="material-icons-round">camera_alt</span>
            </button>
        </div>

        <div className="space-y-6">
            <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Venue Description</label>
                <textarea
                    className="w-full bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-800 focus:ring-4 focus:ring-primary/10 text-sm font-bold resize-none h-32"
                    defaultValue="Premium chess hub with specialty coffee and standard tournament equipment. Open for casual play and weekly meetups."
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Opening Time</label>
                    <input type="time" className="w-full bg-white dark:bg-slate-900 rounded-[1.5rem] p-4 border border-slate-100 dark:border-slate-800 font-bold" defaultValue="09:00" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Closing Time</label>
                    <input type="time" className="w-full bg-white dark:bg-slate-900 rounded-[1.5rem] p-4 border border-slate-100 dark:border-slate-800 font-bold" defaultValue="22:00" />
                </div>
            </div>

            <button className="w-full bg-primary text-white py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-primary/30 transition-all active:scale-[0.98]">
                Save Changes
            </button>
        </div>
    </div>
)
