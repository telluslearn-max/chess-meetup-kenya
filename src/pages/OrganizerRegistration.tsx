import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const OrganizerRegistration: React.FC = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        lichessUsername: '',
        chessDotComUsername: '',
        experience: 'Beginner Organizer',
        eventTypes: [] as string[],
        hasEquipment: 'Yes',
        venueSupport: 'I need venue matching',
        agreed: false
    })

    const nextStep = () => setStep(s => Math.min(s + 1, 4))
    const prevStep = () => setStep(s => Math.max(s - 1, 1))

    const toggleEventType = (type: string) => {
        setFormData(prev => ({
            ...prev,
            eventTypes: prev.eventTypes.includes(type)
                ? prev.eventTypes.filter(t => t !== type)
                : [...prev.eventTypes, type]
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
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Organizer Onboarding</span>
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
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Become an Organizer</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Help us verify your chess identity and experience.</p>
                                </section>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Lichess Username</label>
                                        <div className="relative group">
                                            <span className="material-icons-round absolute left-5 top-1/2 -translate-y-1/2 text-primary">hub</span>
                                            <input
                                                className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-4 pl-14 pr-6 shadow-sm focus:ring-2 focus:ring-primary/20 text-sm font-bold text-slate-900 dark:text-white transition-all"
                                                placeholder="e.g., NairobiGrandmaster"
                                                type="text"
                                                value={formData.lichessUsername}
                                                onChange={e => setFormData({ ...formData, lichessUsername: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Chess.com Username</label>
                                        <div className="relative group">
                                            <span className="material-icons-round absolute left-5 top-1/2 -translate-y-1/2 text-[#81b64c]">grid_view</span>
                                            <input
                                                className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-4 pl-14 pr-6 shadow-sm focus:ring-2 focus:ring-primary/20 text-sm font-bold text-slate-900 dark:text-white transition-all"
                                                placeholder="e.g., ChessKing254"
                                                type="text"
                                                value={formData.chessDotComUsername}
                                                onChange={e => setFormData({ ...formData, chessDotComUsername: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Organizing Experience</label>
                                        <div className="grid grid-cols-1 gap-3">
                                            {['Beginner Organizer', 'Run 5+ Events', 'Club Manager', 'Certified TD/Arbiter'].map(exp => (
                                                <button
                                                    key={exp}
                                                    onClick={() => setFormData({ ...formData, experience: exp })}
                                                    className={cn(
                                                        "flex items-center gap-4 p-5 rounded-[2rem] border-2 transition-all active:scale-[0.98] text-left",
                                                        formData.experience === exp ? "border-primary bg-primary/5 shadow-xl shadow-primary/10" : "border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                                                        formData.experience === exp ? "bg-primary text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                                    )}>
                                                        <span className="material-icons-round text-lg">history_edu</span>
                                                    </div>
                                                    <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{exp}</span>
                                                    {formData.experience === exp && (
                                                        <span className="material-icons-round text-primary ml-auto">check_circle</span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Event Specialization</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">What kind of events do you want to manage?</p>
                                </section>

                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { id: 'Tournaments', label: 'Rated Tournaments', icon: 'emoji_events', desc: 'Swiss or Round Robin matches.' },
                                        { id: 'Casual', label: 'Casual Meetups', icon: 'coffee', desc: 'Social gatherings and friendlies.' },
                                        { id: 'Workshops', label: 'Coaching & Workshops', icon: 'school', desc: 'Teaching and group analysis.' },
                                        { id: 'Simuls', label: 'Simultaneous Exhibitions', icon: 'groups', desc: 'One vs many matches.' }
                                    ].map(type => (
                                        <button
                                            key={type.id}
                                            onClick={() => toggleEventType(type.id)}
                                            className={cn(
                                                "flex items-center gap-5 p-6 rounded-[2.5rem] border-2 transition-all active:scale-[0.98] text-left",
                                                formData.eventTypes.includes(type.id) ? "border-primary bg-primary/5 shadow-xl shadow-primary/10" : "border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900"
                                            )}
                                        >
                                            <div className={cn(
                                                "w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner",
                                                formData.eventTypes.includes(type.id) ? "bg-primary text-white" : "bg-slate-50 dark:bg-slate-800 text-slate-400"
                                            )}>
                                                <span className="material-icons-round text-3xl">{type.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{type.label}</h3>
                                                <p className="text-[10px] font-bold text-slate-400 leading-tight mt-1">{type.desc}</p>
                                            </div>
                                            {formData.eventTypes.includes(type.id) && (
                                                <span className="material-icons-round text-primary">check_circle</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Equipment & Logistics</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Let’s talk about resources and venues.</p>
                                </section>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Do you have boards and clocks?</label>
                                        <div className="flex gap-3">
                                            {['Yes', 'Partial', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => setFormData({ ...formData, hasEquipment: opt })}
                                                    className={cn(
                                                        "flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all",
                                                        formData.hasEquipment === opt ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                                    )}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Venue Preference</label>
                                        <div className="grid grid-cols-1 gap-3">
                                            {[
                                                { id: 'I have a venue', label: 'I have a home venue', desc: 'I already have a spot to play.' },
                                                { id: 'I need venue matching', label: 'Match with Partners', desc: 'Find me a café or hotel hub.' }
                                            ].map(opt => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => setFormData({ ...formData, venueSupport: opt.id })}
                                                    className={cn(
                                                        "flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-[2rem] border-2 transition-all shadow-sm",
                                                        formData.venueSupport === opt.id ? "border-primary bg-primary/5" : "border-slate-50 dark:border-slate-800"
                                                    )}
                                                >
                                                    <div>
                                                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{opt.label}</h3>
                                                        <p className="text-[10px] font-bold text-slate-400 mt-1">{opt.desc}</p>
                                                    </div>
                                                    <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center", formData.venueSupport === opt.id ? "border-primary" : "border-slate-200")}>
                                                        {formData.venueSupport === opt.id && <div className="w-3 h-3 bg-primary rounded-full"></div>}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">The Organizer Oath</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Join our network of verified community leaders.</p>
                                </section>

                                <div className="bg-primary/5 dark:bg-primary/10 border-2 border-primary/20 rounded-[3rem] p-8 space-y-6 shadow-xl shadow-primary/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                                            <span className="material-icons-round">verified_user</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-primary uppercase tracking-widest">Verification Status</p>
                                            <p className="text-sm font-black text-slate-900 dark:text-white">Profile Pending Review</p>
                                        </div>
                                    </div>
                                    <p className="text-xs font-bold text-slate-600 dark:text-slate-400 leading-relaxed">
                                        As a Nairobi Chess Meetup Organizer, I pledge to maintain a safe, fair, and welcoming environment for all players. I will report match results accurately and respect venue partner guidelines.
                                    </p>
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
                                        I agree to the <span className="text-primary font-black uppercase tracking-tighter decoration-primary decoration-2 underline-offset-4 underline">Organizer Code of Conduct</span> and verify that my identity info is correct.
                                    </p>
                                </label>
                            </div>
                        )}
                    </main>

                    {/* Sticky footer */}
                    <footer className="absolute bottom-0 left-0 right-0 p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800/50 z-50">
                        <button
                            disabled={step === 4 && !formData.agreed}
                            onClick={step === 4 ? () => navigate('/profile') : nextStep}
                            className={cn(
                                "w-full text-white font-black py-5 rounded-[1.5rem] shadow-2xl transition-all active:scale-[0.98] uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3",
                                step === 4 && !formData.agreed ? "bg-slate-300 cursor-not-allowed shadow-none" : "bg-primary shadow-primary/30 hover:brightness-110"
                            )}
                        >
                            {step === 4 ? 'Complete Registration' : 'Next Step'}
                            <span className="material-icons-round text-xl">{step === 4 ? 'assignment_turned_in' : 'arrow_forward'}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}
