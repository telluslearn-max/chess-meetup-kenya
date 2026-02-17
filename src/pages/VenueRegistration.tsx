import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const VenueRegistration: React.FC = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        address: '',
        city: 'Nairobi',
        landmarks: '',
        hideLocation: false,
        amenities: [] as string[],
        perks: '',
        agreed: false
    })

    const nextStep = () => setStep(s => Math.min(s + 1, 4))
    const prevStep = () => setStep(s => Math.max(s - 1, 1))

    const handleAmenityToggle = (amenity: string) => {
        setFormData(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
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
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Venue Onboarding</span>
                                <span className="text-[12px] font-black text-slate-400">Step {step} of 4</span>
                            </div>
                            <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Help</button>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden shadow-inner">
                            <div
                                className="bg-primary h-full transition-all duration-500 ease-out"
                                style={{ width: `${(step / 4) * 100}%` }}
                            ></div>
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar pb-32">
                        {step === 1 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Partner with us</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Let's start with some basic information about your venue.</p>
                                </section>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Venue Name</label>
                                        <input
                                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-4 px-6 shadow-sm focus:ring-2 focus:ring-primary/20 text-sm font-bold text-slate-900 dark:text-white transition-all"
                                            placeholder="e.g., Artcaffe Village Market"
                                            type="text"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Street Address</label>
                                        <div className="relative">
                                            <input
                                                className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-4 pl-6 pr-12 shadow-sm focus:ring-2 focus:ring-primary/20 text-sm font-bold text-slate-900 dark:text-white transition-all"
                                                placeholder="Limuru Rd, Nairobi"
                                                type="text"
                                                value={formData.address}
                                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                                            />
                                            <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Venue Type</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['Café', 'Park', 'Hotel', 'Club / Bar'].map(type => (
                                                <button
                                                    key={type}
                                                    onClick={() => setFormData({ ...formData, type })}
                                                    className={cn(
                                                        "py-4 rounded-2xl border-2 font-black text-xs uppercase tracking-widest transition-all",
                                                        formData.type === type ? "border-primary bg-primary/5 text-primary" : "border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400"
                                                    )}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="relative w-full h-40 rounded-3xl overflow-hidden shadow-inner bg-primary/5 border border-primary/10 flex items-center justify-center p-8 text-center">
                                        <span className="material-icons-round text-primary text-5xl opacity-20 absolute -top-2 -left-2 rotate-12">storefront</span>
                                        <p className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest italic">Join 500+ venues hosting chess meetups worldwide.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Pin your location</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Drag the map to position the pin exactly.</p>
                                </section>

                                <div className="relative h-64 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-200">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7o3vZJ9fRawfPA3KNivuAIoneJPD7WUsfNz4xiVlIWUO-IcKT8LiY7iemzIPeyuhSdpMRdA8c5g7mS4-T5wGW4_9TCurCApRRFhWjGwasQC--q3lkrP0lluO6GQqltRhfEyuw8YnLSyq2PRpxQ_WKpjXxhCRb2am8pMRc0NdfZqGEbvaJlO0Wu9ulsJsTPb0qmLGM3PGcPDQxv8_9cfg9erVnapxJbLn8KqW_yl1nnrlyf-JZbLGom9rwTyE3QO6yiTxqrf3Xg1c"
                                        className="w-full h-full object-cover opacity-80"
                                        alt="Map"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="flex flex-col items-center mb-10 translate-y-[-50%]">
                                            <div className="bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-full mb-2 shadow-2xl animate-bounce tracking-widest">DRAG TO PIN</div>
                                            <span className="material-icons-round text-primary text-5xl drop-shadow-[0_10px_10px_rgba(17,82,212,0.5)]">place</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-slate-50 dark:border-slate-800 shadow-sm">
                                        <div className="pr-4">
                                            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Hide exact location</h3>
                                            <p className="text-[10px] font-bold text-slate-400 leading-tight mt-1">Show approximate area until booking confirmed.</p>
                                        </div>
                                        <button
                                            onClick={() => setFormData({ ...formData, hideLocation: !formData.hideLocation })}
                                            className={cn("w-12 h-6 rounded-full relative transition-all", formData.hideLocation ? "bg-primary" : "bg-slate-200 dark:bg-slate-800")}
                                        >
                                            <div className={cn("absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm", formData.hideLocation ? "right-1" : "left-1")}></div>
                                        </button>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Landmark / Instructions</label>
                                        <input
                                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-4 px-6 shadow-sm focus:ring-2 focus:ring-primary/20 text-sm font-bold text-slate-900 dark:text-white transition-all"
                                            placeholder="e.g., 2nd floor balcony, next to Java"
                                            type="text"
                                            value={formData.landmarks}
                                            onChange={e => setFormData({ ...formData, landmarks: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Offerings & Perks</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">What makes your space chess-friendly?</p>
                                </section>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { id: 'boards', label: 'Boards Provided', icon: 'grid_on' },
                                        { id: 'wifi', label: 'Free WiFi', icon: 'wifi' },
                                        { id: 'power', label: 'Power Outlets', icon: 'power' },
                                        { id: 'coffee', label: 'Coffee / Drinks', icon: 'coffee' },
                                        { id: 'outdoor', label: 'Outdoor Setting', icon: 'deck' },
                                        { id: 'quiet', label: 'Quiet Zone', icon: 'volume_off' }
                                    ].map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleAmenityToggle(item.id)}
                                            className={cn(
                                                "flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 transition-all active:scale-[0.98]",
                                                formData.amenities.includes(item.id)
                                                    ? "border-primary bg-primary/5 text-primary shadow-lg shadow-primary/10"
                                                    : "border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400"
                                            )}
                                        >
                                            <span className="material-icons-round text-3xl mb-2">{item.icon}</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-center">{item.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Perks for Chess Players</label>
                                    <textarea
                                        value={formData.perks}
                                        onChange={e => setFormData({ ...formData, perks: e.target.value })}
                                        className="w-full bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-[2rem] p-6 text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px] shadow-sm"
                                        placeholder="e.g., 10% off drinks for members, Reserved tables for 2pm matches..."
                                    />
                                    <p className="text-[10px] font-bold text-primary italic px-2">Tip: Players are 3x more likely to choose venues with specific "Chess Member" discounts.</p>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <section>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Showcase your space</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Add photos to give players a first look.</p>
                                </section>

                                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 border-4 border-dashed border-primary/20 flex flex-col items-center justify-center p-8 group cursor-pointer hover:bg-primary/5 transition-all">
                                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform">
                                        <span className="material-icons-round text-3xl">add_a_photo</span>
                                    </div>
                                    <span className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-widest">Add Photos</span>
                                    <span className="text-[9px] font-bold text-slate-400 mt-2 tracking-wide uppercase">Minimum 3 high-quality images</span>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 space-y-6 border border-slate-50 dark:border-slate-800 shadow-sm relative">
                                    <button className="absolute top-6 right-8 text-[10px] font-black text-primary uppercase tracking-widest" onClick={() => setStep(1)}>Edit</button>
                                    <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-2">Registration Summary</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                                <span className="material-icons-round text-xl">storefront</span>
                                            </div>
                                            <p className="text-sm font-black text-slate-600 dark:text-slate-300">{formData.name || 'Untitled Venue'}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                                <span className="material-icons-round text-xl">location_on</span>
                                            </div>
                                            <p className="text-sm font-black text-slate-600 dark:text-slate-300 truncate">{formData.address || 'Address not set'}</p>
                                        </div>
                                    </div>
                                </div>

                                <label className="flex items-start gap-4 p-6 bg-primary/5 dark:bg-primary/10 rounded-3xl border border-primary/20 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6 rounded-lg border-2 border-primary/30 text-primary focus:ring-primary mt-1"
                                        checked={formData.agreed}
                                        onChange={e => setFormData({ ...formData, agreed: e.target.checked })}
                                    />
                                    <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 leading-snug group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        I agree to the <span className="text-primary font-black uppercase tracking-tighter decoration-primary decoration-2 underline-offset-4 underline">partnership commission terms</span> and confirm that the venue provides a suitable environment for chess.
                                    </p>
                                </label>
                            </div>
                        )}
                    </main>

                    {/* Sticky footer */}
                    <footer className="absolute bottom-0 left-0 right-0 p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800/50 z-50">
                        <button
                            disabled={step === 4 && !formData.agreed}
                            onClick={step === 4 ? () => navigate('/venue-dashboard') : nextStep}
                            className={cn(
                                "w-full text-white font-black py-5 rounded-[1.5rem] shadow-2xl transition-all active:scale-[0.98] uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2",
                                step === 4 && !formData.agreed ? "bg-slate-300 cursor-not-allowed shadow-none" : "bg-primary shadow-primary/30 hover:brightness-110"
                            )}
                        >
                            {step === 4 ? 'Submit Application' : 'Next Step'}
                            <span className="material-icons-round text-lg">{step === 4 ? 'send' : 'arrow_forward'}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}
