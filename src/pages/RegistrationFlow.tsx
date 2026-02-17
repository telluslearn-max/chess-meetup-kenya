import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const RegistrationFlow: React.FC = () => {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    const nextStep = () => {
        if (step < 5) setStep(step + 1)
        else navigate('/')
    }

    const prevStep = () => {
        if (step > 1) setStep(step - 1)
        else navigate('/')
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6">
                        <header>
                            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Welcome!</h1>
                            <p className="text-slate-500 dark:text-slate-400">Let's start with the basics to set up your profile.</p>
                        </header>
                        <div className="space-y-4">
                            <div className="flex flex-col items-center justify-center mb-8">
                                <div className="w-24 h-24 rounded-full bg-primary/5 border-2 border-dashed border-primary/30 flex flex-col items-center justify-center text-primary cursor-pointer hover:bg-primary/10 transition-all">
                                    <span className="material-icons-round text-3xl">add_a_photo</span>
                                    <span className="text-[10px] font-bold uppercase mt-1">Photo</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                <input className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:ring-0 rounded-xl transition-all text-slate-900 dark:text-white" placeholder="Nairobi Chess Master" type="text" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                <input className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:ring-0 rounded-xl transition-all text-slate-900 dark:text-white" placeholder="hello@chessmeetup.com" type="email" />
                            </div>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className="space-y-6">
                        <header>
                            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">How do you play?</h1>
                            <p className="text-slate-500 dark:text-slate-400">Choose a style that best describes your chess journey.</p>
                        </header>
                        <div className="space-y-4">
                            {[
                                { id: 'casual', title: 'Casual Learner', desc: 'Focusing on basics and improving.', icon: 'school' },
                                { id: 'rec', title: 'Recreational Fun', desc: 'Social vibes and relaxed games.', icon: 'celebration' },
                                { id: 'comp', title: 'Competitive', desc: 'Ranked matches and tournaments.', icon: 'emoji_events' }
                            ].map(style => (
                                <div key={style.id} className="p-4 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl flex items-start gap-4 cursor-pointer hover:border-primary transition-all shadow-sm hover:shadow-md">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-icons-round">{style.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">{style.title}</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{style.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className="space-y-6">
                        <header>
                            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">A bit about you</h1>
                            <p className="text-slate-500 dark:text-slate-400">What are your interests and preferred game formats?</p>
                        </header>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Bio</label>
                                <textarea className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/40 resize-none text-sm text-slate-700 dark:text-slate-200" placeholder="Tell us about your chess journey..." rows={4}></textarea>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Preferred Formats</label>
                                <div className="flex flex-wrap gap-2">
                                    {['Blitz', 'Rapid', 'Classical', 'Bullet', 'Variants'].map(tag => (
                                        <span key={tag} className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-primary hover:text-white transition-all shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div className="space-y-6">
                        <header>
                            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Link Lichess</h1>
                            <p className="text-slate-500 dark:text-slate-400">Optional: Connect your account to showcase your tactical style.</p>
                        </header>
                        <div className="space-y-8">
                            <div className="bg-primary/5 rounded-[2.5rem] p-8 border-2 border-dashed border-primary/20 text-center space-y-4">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex items-center justify-center text-primary mx-auto">
                                    <span className="material-icons-round text-3xl">link</span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white">Verify Account</h3>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Online Ratings & Verification</p>
                                </div>
                                <input className="w-full px-5 py-4 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-primary focus:ring-0 rounded-2xl transition-all text-slate-900 dark:text-white text-center font-bold" placeholder="Lichess Username" type="text" />
                                <p className="text-[10px] text-slate-500 italic">This is optional and can be skipped.</p>
                            </div>
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div className="space-y-6">
                        <header>
                            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Finalize!</h1>
                            <p className="text-slate-500 dark:text-slate-400">Set your location and privacy preferences.</p>
                        </header>
                        <div className="space-y-8">
                            <div className="h-40 rounded-3xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative border border-slate-200 dark:border-slate-700 shadow-inner">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-icons-round text-primary text-4xl">location_on</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <div>
                                        <h3 className="font-bold text-sm text-slate-900 dark:text-white">Show Elo on profile</h3>
                                        <p className="text-[10px] text-slate-500">Allow others to see your skill level</p>
                                    </div>
                                    <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
                                        <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            <div className="flex-1 w-full max-w-2xl mx-auto md:py-12 md:px-6">
                <div className="bg-white dark:bg-slate-900 md:rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none md:border border-slate-100 dark:border-slate-800 flex flex-col h-full min-h-[600px] overflow-hidden relative">
                    {/* Header / Nav */}
                    <div className="px-6 pt-12 pb-2">
                        <div className="flex items-center justify-between mb-4">
                            <button onClick={prevStep} className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-90 transition-all border border-slate-100 dark:border-slate-700">
                                <span className="material-icons-round">chevron_left</span>
                            </button>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Step {step} of 5</span>
                            <div className="w-10"></div>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_10px_rgba(17,82,212,0.3)]" style={{ width: `${(step / 5) * 100}%` }}></div>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <main className="flex-1 overflow-y-auto px-6 pt-8 pb-32 no-scrollbar">
                        {renderStep()}
                    </main>

                    {/* Bottom Button */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light/95 to-transparent dark:from-background-dark dark:via-background-dark/95">
                        <button onClick={nextStep} className="w-full py-4.5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            <span>{step === 5 ? 'Complete' : 'Continue'}</span>
                            <span className="material-icons-round text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
