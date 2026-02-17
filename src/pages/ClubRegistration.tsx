import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const ClubRegistration: React.FC = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        clubName: '',
        mission: '',
        foundingYear: '2024',
        venue: '',
        membershipType: 'Open to All',
        meetingDays: [] as string[],
        startTime: '18:00',
        endTime: '21:30',
        manualApproval: true,
        perks: '',
        agreed: false
    })

    const nextStep = () => setStep(s => Math.min(s + 1, 4))
    const prevStep = () => setStep(s => Math.max(s - 1, 1))

    const toggleDay = (day: string) => {
        setFormData(prev => ({
            ...prev,
            meetingDays: prev.meetingDays.includes(day)
                ? prev.meetingDays.filter(d => d !== day)
                : [...prev.meetingDays, day]
        }))
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            <div className="flex-1 w-full max-w-2xl mx-auto md:py-12 md:px-6">
                <div className="bg-white dark:bg-slate-900 md:rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none md:border border-slate-100 dark:border-slate-800 flex flex-col h-full min-h-[600px] overflow-hidden relative">
                    {/* Header & Progress */}
                    <header className="px-6 pt-12 pb-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800/50">
                        <div className="flex items-center justify-between mb-6">
                            <button
                                onClick={step === 1 ? () => navigate(-1) : prevStep}
                                className="w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-90 transition-all shadow-sm"
                            >
                                <span className="material-icons-round">{step === 1 ? 'close' : 'arrow_back'}</span>
                            </button>
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Club Onboarding</span>
                                <span className="text-[12px] font-black text-slate-400">Step {step} of 4</span>
                            </div>
                            <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Help</button>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden shadow-inner">
                            <div
                                className="bg-primary h-full transition-all duration-500 ease-out shadow-[0_0_10px_#1152d4]"
                                style={{ width: `${(step / 4) * 100}%` }}
                            ></div>
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar pb-32">
                        {step === 1 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Start your Club</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Set up your identity and help chess players find you.</p>
                                </section>

                                {/* Logo Upload */}
                                <div className="flex flex-col items-center justify-center">
                                    <div className="relative group cursor-pointer">
                                        <div className="w-32 h-32 rounded-full border-2 border-dashed border-primary/40 bg-primary/5 flex flex-col items-center justify-center group-hover:bg-primary/10 transition-all shadow-xl shadow-primary/5">
                                            <span className="material-icons-round text-primary text-4xl mb-1">add_a_photo</span>
                                            <span className="text-[10px] font-black text-primary uppercase tracking-wider">Logo</span>
                                        </div>
                                        <div className="absolute bottom-1 right-1 w-10 h-10 bg-primary rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                            <span className="material-icons-round text-white text-sm">edit</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Club Name</label>
                                        <input
                                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-4 px-6 shadow-sm focus:ring-2 focus:ring-primary/20 text-sm font-bold text-slate-900 dark:text-white transition-all"
                                            placeholder="e.g., Nairobi Kings"
                                            type="text"
                                            value={formData.clubName}
                                            onChange={e => setFormData({ ...formData, clubName: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Mission Statement</label>
                                        <textarea
                                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-[2rem] p-6 text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px] shadow-sm resize-none"
                                            placeholder="What drives your club? Share your vision for the local chess community..."
                                            value={formData.mission}
                                            onChange={e => setFormData({ ...formData, mission: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Meeting Info</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Where and when does your club usually meet?</p>
                                </section>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Club Home Base</label>
                                        <div className="relative group">
                                            <span className="material-icons-round absolute left-5 top-1/2 -translate-y-1/2 text-primary group-focus-within:scale-110 transition-transform">location_on</span>
                                            <input
                                                className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-5 pl-14 pr-6 shadow-sm focus:ring-2 focus:ring-primary/20 text-sm font-bold text-slate-900 dark:text-white transition-all"
                                                placeholder="Search for a partner venue..."
                                                type="text"
                                                value={formData.venue}
                                                onChange={e => setFormData({ ...formData, venue: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Membership Type</label>
                                        <div className="grid grid-cols-1 gap-3">
                                            {[
                                                { id: 'Open to All', label: 'Open to All', desc: 'Anyone can join and see events.', icon: 'public' },
                                                { id: 'Invite Only', label: 'Invite Only', desc: 'Moderator approval required.', icon: 'lock' },
                                                { id: 'Fee-based', label: 'Fee-based', desc: 'Requires a monthly contribution.', icon: 'payments' }
                                            ].map(type => (
                                                <button
                                                    key={type.id}
                                                    onClick={() => setFormData({ ...formData, membershipType: type.id })}
                                                    className={cn(
                                                        "flex items-center gap-4 p-5 rounded-[2rem] border-2 transition-all active:scale-[0.98] text-left",
                                                        formData.membershipType === type.id ? "border-primary bg-primary/5 shadow-xl shadow-primary/10" : "border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                                                        formData.membershipType === type.id ? "bg-primary text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                                    )}>
                                                        <span className="material-icons-round">{type.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{type.label}</h3>
                                                        <p className="text-[10px] font-bold text-slate-400 leading-tight mt-1">{type.desc}</p>
                                                    </div>
                                                    {formData.membershipType === type.id && (
                                                        <span className="material-icons-round text-primary">check_circle</span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between px-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Meeting Days</label>
                                            <span className="text-[9px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-full">Multi-select</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                                <button
                                                    key={day}
                                                    onClick={() => toggleDay(day)}
                                                    className={cn(
                                                        "h-12 w-[calc(25%-0.5rem)] rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all",
                                                        formData.meetingDays.includes(day) ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                                    )}
                                                >
                                                    {day}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Policy & Recognition</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Define how your members are recognized.</p>
                                </section>

                                {/* Badge Preview */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Member Badge Preview</label>
                                    <div className="relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 shadow-xl overflow-hidden group">
                                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-110 transition-transform"></div>
                                        <div className="flex items-center gap-6">
                                            <div className="relative">
                                                <img
                                                    className="w-20 h-20 rounded-[1.5rem] border-4 border-white dark:border-slate-800 shadow-2xl object-cover"
                                                    src="https://i.pravatar.cc/300?u=alex"
                                                    alt="Alex"
                                                />
                                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center shadow-lg">
                                                    <span className="material-icons-round text-white text-[10px]">shield</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-slate-900 dark:text-white font-black text-lg">Alex Thompson</span>
                                                <div className="flex items-center gap-2 py-1.5 px-4 bg-primary/10 border border-primary/20 rounded-full w-fit">
                                                    <span className="material-icons-round text-[14px] text-primary">verified</span>
                                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">Verified {formData.clubName || 'Club'} Member</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 italic px-4">"This is how members will appear on leaderboards and event lists."</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-7 bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 shadow-sm">
                                        <div className="pr-4 flex-1">
                                            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Manual Member Approval</h3>
                                            <p className="text-[10px] font-bold text-slate-400 leading-tight mt-1">Review profiles before they join your club officially.</p>
                                        </div>
                                        <button
                                            onClick={() => setFormData({ ...formData, manualApproval: !formData.manualApproval })}
                                            className={cn("w-14 h-7 rounded-full relative transition-all", formData.manualApproval ? "bg-primary" : "bg-slate-200 dark:bg-slate-800")}
                                        >
                                            <div className={cn("absolute top-1 w-5 h-5 bg-white rounded-full transition-all shadow-sm", formData.manualApproval ? "right-1" : "left-1")}></div>
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between px-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Member Perks</label>
                                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Optional</span>
                                        </div>
                                        <textarea
                                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-[2rem] p-6 text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all min-h-[140px] shadow-sm resize-none"
                                            placeholder="e.g., Access to private tournaments, free coffee at meetups, discounts on coaching..."
                                            value={formData.perks}
                                            onChange={e => setFormData({ ...formData, perks: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Finalize your Club</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Review your club details before going live.</p>
                                </section>

                                <div className="bg-primary/5 dark:bg-primary/10 border-2 border-primary/20 rounded-[3rem] p-8 space-y-8 shadow-xl shadow-primary/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>

                                    <div className="flex items-center gap-6 relative">
                                        <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                                            <span className="material-icons-round text-3xl">diversity_3</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{formData.clubName || 'My Chess Club'}</h3>
                                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-1">{formData.membershipType}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6 border-t border-primary/10 pt-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                                <span className="material-icons-round">location_on</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Hub location</p>
                                                <p className="text-sm font-black text-slate-700 dark:text-slate-200">{formData.venue || 'No venue selected'}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                                <span className="material-icons-round">calendar_today</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Meetup schedule</p>
                                                <p className="text-sm font-black text-slate-700 dark:text-slate-200">
                                                    {formData.meetingDays.length > 0 ? formData.meetingDays.join(', ') : 'TBD'} • {formData.startTime}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mini Map Preview */}
                                    <div className="rounded-[2rem] overflow-hidden h-32 relative border-4 border-white dark:border-slate-800 shadow-lg">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH7PdtgkDmg4tAreHZugEzrpGKJ4ywwkbp6oYPEOl50R3NA1WXDSSHcugzf6gKXwuam6EWIN5PNwM2NN2d1ya7vhI1kmhqQkNLF1hvsH4sY3KSqWJyYVXS-i7TwoWKbaMLYsuCRL1SG8iQNtrQfEaOAlaS1qAdNwsweeAza-ORzO-isonjRb4pQ2H-IoCbuHp07bHglUIRHjGZi44LY8vDPR1bRpXFr7L1fxyuIGUycPMbqr10z2WB3BOvHwoYAHL11tt1juo9vo4"
                                            className="w-full h-full object-cover grayscale opacity-80"
                                            alt="Map"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                            <span className="material-icons-round text-white text-4xl drop-shadow-lg animate-pulse">place</span>
                                        </div>
                                    </div>
                                </div>

                                <label className="flex items-start gap-4 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 cursor-pointer group shadow-sm">
                                    <div className="relative flex items-center mt-1">
                                        <input
                                            type="checkbox"
                                            className="peer w-7 h-7 rounded-lg border-2 border-primary/30 text-primary focus:ring-primary focus:ring-offset-0 transition-all checked:bg-primary"
                                            checked={formData.agreed}
                                            onChange={e => setFormData({ ...formData, agreed: e.target.checked })}
                                        />
                                        <span className="material-icons-round absolute opacity-0 peer-checked:opacity-100 text-white text-lg left-1/2 -translate-x-1/2 pointer-events-none">check</span>
                                    </div>
                                    <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 leading-snug group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        I agree to the <span className="text-primary font-black uppercase tracking-tighter decoration-primary decoration-2 underline-offset-4 underline">Club Guidelines</span> and verify that all information provided is accurate and community-focused.
                                    </p>
                                </label>
                            </div>
                        )}
                    </main>

                    {/* Sticky footer */}
                    <footer className="absolute bottom-0 left-0 right-0 p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800/50 z-50">
                        <button
                            disabled={step === 4 && !formData.agreed}
                            onClick={step === 4 ? () => navigate('/club-dashboard') : nextStep}
                            className={cn(
                                "w-full text-white font-black py-5 rounded-[1.5rem] shadow-2xl transition-all active:scale-[0.98] uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3",
                                step === 4 && !formData.agreed ? "bg-slate-300 cursor-not-allowed shadow-none" : "bg-primary shadow-primary/30 hover:brightness-110"
                            )}
                        >
                            {step === 4 ? 'Launch Club' : 'Next Step'}
                            <span className="material-icons-round text-xl">{step === 4 ? 'rocket_launch' : 'arrow_forward'}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}
