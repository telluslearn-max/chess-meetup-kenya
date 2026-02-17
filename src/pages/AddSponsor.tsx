import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Search, Plus, HelpCircle, Upload } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

type SponsorTier = 'headline' | 'gold' | 'silver' | 'logistics'

export const AddSponsor: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [currentStep] = useState(4)
    const totalSteps = 5

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedTier, setSelectedTier] = useState<SponsorTier>('headline')
    const [brandName, setBrandName] = useState('')
    const [sponsorPerk, setSponsorPerk] = useState('')
    const [logoFile, setLogoFile] = useState<File | null>(null)

    const tiers = [
        {
            id: 'headline' as SponsorTier,
            name: 'Headline',
            subtitle: 'PREMIUM PLACEMENT',
            icon: 'stars',
            color: 'primary'
        },
        {
            id: 'gold' as SponsorTier,
            name: 'Gold',
            subtitle: 'HIGH VISIBILITY',
            icon: 'emoji_events',
            color: 'yellow'
        },
        {
            id: 'silver' as SponsorTier,
            name: 'Silver',
            subtitle: 'STANDARD TIER',
            icon: 'workspace_premium',
            color: 'slate'
        },
        {
            id: 'logistics' as SponsorTier,
            name: 'Logistics',
            subtitle: 'SERVICE PARTNER',
            icon: 'local_shipping',
            color: 'blue'
        }
    ]

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setLogoFile(e.target.files[0])
        }
    }

    const handleContinue = () => {
        // Navigate to next step or complete
        navigate(`/tournament/${id}/sponsors`)
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between px-6 py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-90 transition-all"
                    >
                        <span className="material-icons-round text-xl">arrow_back</span>
                    </button>

                    <div className="text-center">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Step {currentStep} of {totalSteps}</p>
                        <h1 className="text-base font-black text-slate-900 dark:text-white">Add Sponsor</h1>
                    </div>

                    <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-90 transition-all">
                        <HelpCircle size={20} />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="px-6 pb-4">
                    <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 p-6 pb-32 space-y-6">
                {/* Search Existing Partners */}
                <div>
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search existing partners..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white dark:bg-slate-900 rounded-[2rem] py-4 pl-12 pr-4 border border-slate-200 dark:border-slate-800 font-bold text-sm shadow-sm transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                    </div>
                </div>

                {/* OR Divider */}
                <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">OR</span>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
                </div>

                {/* Create New Sponsor */}
                <button className="w-full p-6 border-2 border-dashed border-primary/30 dark:border-primary/20 rounded-[2rem] bg-primary/5 dark:bg-primary/5 hover:bg-primary/10 transition-all active:scale-[0.98]">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                            <Plus size={20} className="text-white" />
                        </div>
                        <span className="text-sm font-black text-primary">Create New Sponsor</span>
                    </div>
                </button>

                {/* Sponsorship Tier */}
                <div>
                    <h2 className="text-xs font-black text-slate-900 dark:text-white mb-4">Sponsorship Tier</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {tiers.map((tier) => (
                            <button
                                key={tier.id}
                                onClick={() => setSelectedTier(tier.id)}
                                className={cn(
                                    "p-4 rounded-2xl border-2 transition-all active:scale-95",
                                    selectedTier === tier.id
                                        ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-lg shadow-primary/10"
                                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                                )}
                            >
                                <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center mb-3",
                                    selectedTier === tier.id ? "bg-primary" : "bg-slate-100 dark:bg-slate-800"
                                )}>
                                    <span className={cn(
                                        "material-icons-round text-xl",
                                        selectedTier === tier.id ? "text-white" : "text-slate-400"
                                    )}>
                                        {tier.icon}
                                    </span>
                                </div>
                                <h3 className={cn(
                                    "text-sm font-black mb-1",
                                    selectedTier === tier.id ? "text-primary" : "text-slate-900 dark:text-white"
                                )}>
                                    {tier.name}
                                </h3>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                    {tier.subtitle}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sponsor Brand Name */}
                <div>
                    <label className="text-xs font-black text-slate-900 dark:text-white mb-3 block">
                        Sponsor Brand Name
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Grandmaster Gear"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 rounded-2xl py-4 px-4 border border-slate-200 dark:border-slate-800 font-medium text-sm shadow-sm transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                </div>

                {/* Sponsor Perk */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <label className="text-xs font-black text-slate-900 dark:text-white">
                            Sponsor Perk
                        </label>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Optional</span>
                    </div>
                    <textarea
                        placeholder="What do attendees get? (e.g. 20% discount code on chess sets)"
                        value={sponsorPerk}
                        onChange={(e) => setSponsorPerk(e.target.value)}
                        rows={3}
                        className="w-full bg-white dark:bg-slate-900 rounded-2xl py-4 px-4 border border-slate-200 dark:border-slate-800 font-medium text-sm shadow-sm transition-all focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                    />
                    <p className="text-[10px] font-medium text-slate-400 mt-2 px-1">
                        This perk will be automatically shared with all registered attendees via the event app.
                    </p>
                </div>

                {/* Brand Identity */}
                <div>
                    <label className="text-xs font-black text-slate-900 dark:text-white mb-3 block">
                        Brand Identity
                    </label>
                    <div className="relative">
                        <input
                            type="file"
                            accept="image/png,image/jpeg,image/jpg"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="logo-upload"
                        />
                        <label
                            htmlFor="logo-upload"
                            className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl cursor-pointer hover:border-primary/50 transition-all"
                        >
                            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                                {logoFile ? (
                                    <span className="material-icons-round text-primary">check_circle</span>
                                ) : (
                                    <Upload size={20} className="text-slate-400" />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                                    {logoFile ? logoFile.name : 'Upload Logo'}
                                </p>
                                <p className="text-[10px] font-medium text-slate-400">
                                    PNG, JPG up to 5MB
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
            </main>

            {/* Fixed Footer Actions */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-50">
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] active:scale-[0.98] transition-all"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleContinue}
                        disabled={!brandName}
                        className={cn(
                            "flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] active:scale-[0.98] transition-all",
                            brandName
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                        )}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}
