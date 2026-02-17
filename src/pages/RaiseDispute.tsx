import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Camera, AlertCircle } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const RaiseDispute: React.FC = () => {
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState<string>('feedback')
    const [description, setDescription] = useState('')
    const [uploadedFile, setUploadedFile] = useState<string | null>('endgame_state_oct14.jpg')

    const categories = [
        { id: 'feedback', icon: 'chat', label: 'Feedback', color: 'text-primary', bg: 'bg-primary/10' },
        { id: 'report-player', icon: 'person', label: 'Report Player', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { id: 'report-venue', icon: 'location_off', label: 'Report Venue', color: 'text-orange-500', bg: 'bg-orange-500/10' },
        { id: 'feature', icon: 'lightbulb', label: 'Feature Request', color: 'text-purple-500', bg: 'bg-purple-500/10' }
    ]

    const currentStep = 3
    const totalSteps = 3

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="px-5 pt-8 pb-5 bg-white dark:bg-slate-900 shadow-sm z-30 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group cursor-pointer" onClick={() => navigate('/support')}>
                            <ArrowLeft size={20} />
                        </div>
                        <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Raise a Dispute</h1>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-black text-slate-900 dark:text-white">Tell us what happened</p>
                        <p className="text-xs font-bold text-slate-500">Step {currentStep} of {totalSteps}</p>
                    </div>
                    <div className="flex gap-2">
                        {[1, 2, 3].map((step) => (
                            <div
                                key={step}
                                className={cn(
                                    "flex-1 h-1.5 rounded-full transition-colors",
                                    step <= currentStep ? "bg-primary" : "bg-slate-200 dark:bg-slate-800"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto px-5 py-6 space-y-6 pb-24">
                {/* Category Selection */}
                <section>
                    <h2 className="text-sm font-black text-slate-900 dark:text-white mb-4">How can we help?</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Select a category to help us route your request to the right moderator.</p>

                    <div className="grid grid-cols-2 gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    "p-5 rounded-2xl border-2 transition-all",
                                    selectedCategory === category.id
                                        ? "border-primary bg-primary/5"
                                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                                )}
                            >
                                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-3 mx-auto", category.bg)}>
                                    <span className={cn("material-icons-round text-2xl", category.color)}>{category.icon}</span>
                                </div>
                                <p className="font-black text-slate-900 dark:text-white text-sm">{category.label}</p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Description */}
                <section>
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-black text-slate-900 dark:text-white">Description</h2>
                        <span className="text-xs font-bold text-red-500">REQUIRED</span>
                    </div>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Please provide as much detail as possible. If reporting a player, include their handle or the game time..."
                        className="w-full h-32 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                </section>

                {/* Evidence Upload */}
                <section>
                    <h2 className="text-sm font-black text-slate-900 dark:text-white mb-2">Evidence (Optional)</h2>

                    {uploadedFile ? (
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=100" alt="Upload" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-black text-slate-900 dark:text-white text-sm">{uploadedFile}</p>
                                    <p className="text-xs text-slate-500">2.4 MB</p>
                                </div>
                                <button className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 hover:bg-red-500/20 transition-colors">
                                    <span className="material-icons-round text-lg">delete</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 text-center cursor-pointer hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <Camera size={32} className="text-primary" />
                            </div>
                            <p className="font-black text-slate-900 dark:text-white mb-1">Add photos or screenshots</p>
                            <p className="text-xs text-slate-500">Upload board state or scoresheets (Max 10MB)</p>
                        </div>
                    )}
                </section>

                {/* Info Alert */}
                <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-2xl p-4 flex gap-3">
                    <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Our moderators will review your dispute within 24-48 hours. Providing clear evidence and a detailed description helps us resolve issues faster.
                    </p>
                </div>

                {/* Submit Button */}
                <button className="w-full py-5 bg-primary text-white rounded-3xl font-black text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                    Submit Dispute
                    <span className="material-icons-round">arrow_forward</span>
                </button>
            </main>
        </div>
    )
}
