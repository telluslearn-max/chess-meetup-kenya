import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgressStepper } from '../components/ProgressStepper'

export const ClubRegistrationPage: React.FC = () => {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(1)
    const totalSteps = 3

    // Form state
    const [clubName, setClubName] = useState('')
    const [description, setDescription] = useState('')
    const [logoFile, setLogoFile] = useState<File | null>(null)
    const [location, setLocation] = useState('')
    const [meetingDays, setMeetingDays] = useState<string[]>([])
    const [membershipFee, setMembershipFee] = useState('')
    const [perks, setPerks] = useState<string[]>([''])

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleSubmit = () => {
        // Handle form submission
        console.log('Club registration submitted')
        navigate('/clubs')
    }

    const addPerk = () => {
        setPerks([...perks, ''])
    }

    const updatePerk = (index: number, value: string) => {
        const newPerks = [...perks]
        newPerks[index] = value
        setPerks(newPerks)
    }

    const removePerk = (index: number) => {
        setPerks(perks.filter((_, i) => i !== index))
    }

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
            {/* Header */}
            <header className="px-6 pt-16 pb-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <button
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 active:scale-95 transition-all"
                >
                    <span className="material-icons-round text-slate-600 dark:text-slate-400">arrow_back</span>
                </button>
                <h1 className="text-xl font-black text-slate-900 dark:text-white mb-6">Club Registration</h1>
                <ProgressStepper
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    stepLabels={['Basic Info', 'Venue & Schedule', 'Membership']}
                />
            </header>

            <main className="flex-1 overflow-y-auto px-6 py-6 pb-32">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Basic Information</h2>
                            <p className="text-sm font-bold text-slate-500">Tell us about your chess club</p>
                        </div>

                        {/* Club Name */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                                Club Name *
                            </label>
                            <input
                                type="text"
                                value={clubName}
                                onChange={(e) => setClubName(e.target.value)}
                                placeholder="e.g. Nairobi Kings Chess Club"
                                className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                                Description *
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe your club's mission, values, and what makes it unique..."
                                rows={5}
                                className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all resize-none"
                                required
                            />
                        </div>

                        {/* Logo Upload */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                                Club Logo (Optional)
                            </label>
                            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center hover:border-primary/30 transition-all cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                                    className="hidden"
                                    id="logo-upload"
                                />
                                <label htmlFor="logo-upload" className="cursor-pointer">
                                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="material-icons-round text-slate-400 text-3xl">upload</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
                                        {logoFile ? logoFile.name : 'Click to upload logo'}
                                    </p>
                                    <p className="text-xs font-bold text-slate-400 mt-1">PNG, JPG up to 5MB</p>
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Venue & Schedule */}
                {currentStep === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Venue & Schedule</h2>
                            <p className="text-sm font-bold text-slate-500">Where and when do you meet?</p>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                                Meeting Location *
                            </label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="e.g. Bao Box, Westlands, Nairobi"
                                    className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Meeting Days */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-3 block">
                                Meeting Days *
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                    <button
                                        key={day}
                                        type="button"
                                        onClick={() => {
                                            if (meetingDays.includes(day)) {
                                                setMeetingDays(meetingDays.filter(d => d !== day))
                                            } else {
                                                setMeetingDays([...meetingDays, day])
                                            }
                                        }}
                                        className={`py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all active:scale-95 ${meetingDays.includes(day)
                                                ? 'bg-primary text-white'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                                            }`}
                                    >
                                        {day.substring(0, 3)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Membership */}
                {currentStep === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Membership Details</h2>
                            <p className="text-sm font-bold text-slate-500">Set your membership fee and perks</p>
                        </div>

                        {/* Free Club Notice */}
                        <div className="p-4 bg-green-50 dark:bg-green-900/10 border-2 border-green-200 dark:border-green-800 rounded-2xl">
                            <div className="flex items-start gap-3">
                                <span className="material-icons-round text-green-600 dark:text-green-500">check_circle</span>
                                <div>
                                    <p className="font-black text-green-900 dark:text-green-100 text-sm mb-1">100% Free Platform</p>
                                    <p className="text-xs font-bold text-green-700 dark:text-green-300">
                                        No subscription fees! We only take commission on events hosted at partner venues and ticket sales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Membership Fee */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                                Monthly Membership Fee (Optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">KSh</span>
                                <input
                                    type="number"
                                    value={membershipFee}
                                    onChange={(e) => setMembershipFee(e.target.value)}
                                    placeholder="0"
                                    className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-16 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                                />
                            </div>
                            <p className="text-xs font-bold text-slate-400 mt-2">Leave as 0 for free membership</p>
                        </div>

                        {/* Member Perks */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-3 block">
                                Member Perks
                            </label>
                            <div className="space-y-3">
                                {perks.map((perk, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={perk}
                                            onChange={(e) => updatePerk(index, e.target.value)}
                                            placeholder="e.g. Free entry to weekly tournaments"
                                            className="flex-1 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                                        />
                                        {perks.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removePerk(index)}
                                                className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/10 text-red-500 flex items-center justify-center active:scale-95 transition-all"
                                            >
                                                <span className="material-icons-round text-xl">close</span>
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addPerk}
                                    className="w-full py-3 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-xs font-black text-slate-400 uppercase tracking-wider hover:border-primary/30 hover:text-primary transition-all"
                                >
                                    + Add Perk
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex gap-3 z-50">
                {currentStep > 1 && (
                    <button
                        onClick={handleBack}
                        className="px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black text-sm uppercase tracking-wider active:scale-95 transition-all"
                    >
                        Back
                    </button>
                )}
                <button
                    onClick={currentStep === totalSteps ? handleSubmit : handleNext}
                    className="flex-1 bg-primary text-white rounded-2xl py-4 font-black text-sm uppercase tracking-wider hover:bg-primary/90 transition-all active:scale-[0.98] shadow-xl shadow-primary/20"
                >
                    {currentStep === totalSteps ? 'Submit Registration' : 'Next Step'}
                </button>
            </div>
        </div>
    )
}
