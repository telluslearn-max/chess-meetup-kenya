import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const VenueRegistrationPage: React.FC = () => {
    const navigate = useNavigate()
    const [venueName, setVenueName] = useState('')
    const [address, setAddress] = useState('')
    const [contactName, setContactName] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [amenities, setAmenities] = useState<string[]>([])
    const [operatingHours, setOperatingHours] = useState('')
    const [photos, setPhotos] = useState<FileList | null>(null)

    const availableAmenities = [
        'Chess Boards & Sets',
        'Free WiFi',
        'Parking Available',
        'Food & Beverages',
        'Air Conditioning',
        'Outdoor Seating',
        'Accessible Entrance',
        'Restrooms'
    ]

    const toggleAmenity = (amenity: string) => {
        if (amenities.includes(amenity)) {
            setAmenities(amenities.filter(a => a !== amenity))
        } else {
            setAmenities([...amenities, amenity])
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle venue registration
        console.log('Venue registration submitted')
        navigate('/profile')
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
                <h1 className="text-xl font-black text-slate-900 dark:text-white mb-2">Venue Registration</h1>
                <p className="text-sm font-bold text-slate-500">Partner with us to host chess events</p>
            </header>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-6 pb-32 space-y-6">
                {/* Commission Info */}
                <div className="p-5 bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-3xl">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="material-icons-round text-primary">handshake</span>
                        </div>
                        <div>
                            <h3 className="font-black text-slate-900 dark:text-white mb-1">Partnership Benefits</h3>
                            <p className="text-xs font-bold text-slate-600 dark:text-slate-400 leading-relaxed">
                                Join our network of partner venues! We take a small commission only on events hosted at your location and ticket sales through our app. No upfront fees or monthly charges.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-primary/10">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Commission</p>
                            <p className="text-lg font-black text-primary">10-15%</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-primary/10">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Monthly Fee</p>
                            <p className="text-lg font-black text-green-600">KSh 0</p>
                        </div>
                    </div>
                </div>

                {/* Venue Details */}
                <div>
                    <h2 className="text-lg font-black text-slate-900 dark:text-white mb-4">Venue Details</h2>

                    {/* Venue Name */}
                    <div className="mb-4">
                        <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                            Venue Name *
                        </label>
                        <input
                            type="text"
                            value={venueName}
                            onChange={(e) => setVenueName(e.target.value)}
                            placeholder="e.g. Bao Box Restaurant"
                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                            Address *
                        </label>
                        <div className="relative">
                            <span className="material-icons-round absolute left-4 top-4 text-slate-400">location_on</span>
                            <textarea
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Full address including city and postal code"
                                rows={3}
                                className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all resize-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div>
                        <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                            Operating Hours *
                        </label>
                        <input
                            type="text"
                            value={operatingHours}
                            onChange={(e) => setOperatingHours(e.target.value)}
                            placeholder="e.g. Mon-Fri: 9AM-10PM, Sat-Sun: 10AM-11PM"
                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Amenities */}
                <div>
                    <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-3 block">
                        Amenities
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        {availableAmenities.map((amenity) => (
                            <button
                                key={amenity}
                                type="button"
                                onClick={() => toggleAmenity(amenity)}
                                className={`p-4 rounded-2xl font-bold text-xs text-left transition-all active:scale-95 ${amenities.includes(amenity)
                                        ? 'bg-primary/10 border-2 border-primary text-primary'
                                        : 'bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center ${amenities.includes(amenity) ? 'border-primary bg-primary' : 'border-slate-300 dark:border-slate-700'
                                        }`}>
                                        {amenities.includes(amenity) && (
                                            <span className="material-icons-round text-white text-xs">check</span>
                                        )}
                                    </div>
                                    <span>{amenity}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Photos */}
                <div>
                    <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                        Venue Photos
                    </label>
                    <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center hover:border-primary/30 transition-all cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => setPhotos(e.target.files)}
                            className="hidden"
                            id="photos-upload"
                        />
                        <label htmlFor="photos-upload" className="cursor-pointer">
                            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="material-icons-round text-slate-400 text-3xl">add_photo_alternate</span>
                            </div>
                            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
                                {photos && photos.length > 0 ? `${photos.length} photos selected` : 'Click to upload photos'}
                            </p>
                            <p className="text-xs font-bold text-slate-400 mt-1">Upload multiple photos of your venue</p>
                        </label>
                    </div>
                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-lg font-black text-slate-900 dark:text-white mb-4">Contact Information</h2>

                    <div className="space-y-4">
                        {/* Contact Name */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                                Contact Person *
                            </label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                                <input
                                    type="text"
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                    placeholder="Full name"
                                    className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                                Phone Number *
                            </label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">phone</span>
                                <input
                                    type="tel"
                                    value={contactPhone}
                                    onChange={(e) => setContactPhone(e.target.value)}
                                    placeholder="+254 700 000 000"
                                    className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                                Email Address *
                            </label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">email</span>
                                <input
                                    type="email"
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    placeholder="venue@example.com"
                                    className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* Submit Button */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 z-50">
                <button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white rounded-2xl py-4 font-black text-sm uppercase tracking-wider hover:bg-primary/90 transition-all active:scale-[0.98] shadow-xl shadow-primary/20"
                >
                    Submit for Verification
                </button>
            </div>
        </div>
    )
}
