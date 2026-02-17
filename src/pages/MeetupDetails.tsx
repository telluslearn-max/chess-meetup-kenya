import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    MapPin,
    Calendar,
    Clock,
    Users,
    MessageSquare,
    Coffee,
    Wifi,
    Star,
    ChevronLeft,
    Heart,
    Share2,
    ShieldCheck,
    ArrowRight,
    Trophy
} from 'lucide-react'

export const MeetupDetails: React.FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [isGoing, setIsGoing] = useState(false)

    // Mock data for the meetup and venue
    const meetup = {
        title: "Westlands Blitz Social",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD150KQdpuScaVOZ6jO-vHL6WbGapdsOUZDnYJKf7XN0zRixxf-c1oOnVrvl1B1TQeAAFw4BUxKS8qavzdcAwHIEGhBaCbGDPCUZQGAeV-h-jomxhJIJKddGgRpg8MWuFGFMufVqbWGkUoLX4_yMPllOR8pXv4SIGSed23snB6KOWiNnnoH952dPG79LxC_PXG8x0B1_lAwCjEfEtHeQ_KVXupBa3UJkeBH3_xmeYylIS3AQLRnEw_iwXqvY-VwYz87mxvO-vJbP7U",
        date: "Sat, Oct 14",
        time: "4:00 PM - 8:00 PM",
        attendees: 24,
        maxAttendees: 40,
        description: "Join us for our weekly Blitz social! Open to all levels. We usually play 5+3 or 3+2 increments. It's a great way to meet the local chess community in a relaxed setting.",
        tags: ["Social", "Blitz", "Casual"],
        organizer: {
            name: "Nairobi Chess Club",
            avatar: "https://i.pravatar.cc/100?u=ncc",
            role: "Verified Organizer"
        },
        venue: {
            name: "Bao Box",
            location: "General Mathenge Rd, Westlands",
            rating: 4.8,
            reviews: 124,
            status: "Busy Now",
            features: ["Chess Sets provided", "Premium Coffee", "High Speed WiFi", "Outdoor Seating"]
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-display pb-32">
            {/* Hero Section */}
            <div className="relative h-[45vh] w-full overflow-hidden">
                <img
                    src={meetup.image}
                    alt={meetup.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Top Actions */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <div className="flex gap-3">
                        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                            <Share2 size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                            <Heart size={20} />
                        </button>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-10 left-8 right-8 z-20">
                    <div className="flex gap-2 mb-4">
                        {meetup.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-lg text-[10px] font-black text-primary-light uppercase tracking-widest">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-none">{meetup.title}</h1>
                    <div className="flex flex-wrap gap-6 items-center text-white/80">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-primary" />
                            <span className="text-sm font-bold uppercase tracking-wider">{meetup.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-primary" />
                            <span className="text-sm font-bold uppercase tracking-wider">{meetup.time}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="px-6 md:px-12 -mt-8 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Highlights Card */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Event Details</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                {meetup.description}
                            </p>

                            <div className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <img src={meetup.organizer.avatar} className="w-12 h-12 rounded-2xl object-cover" />
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Organized by</p>
                                    <div className="flex items-center gap-2">
                                        <p className="font-black text-slate-900 dark:text-white">{meetup.organizer.name}</p>
                                        <ShieldCheck size={16} className="text-primary" />
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all">
                                    Follow
                                </button>
                            </div>
                        </div>

                        {/* Attendee Preview */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Who's Coming</h2>
                                <span className="text-xs font-black text-primary uppercase tracking-widest">{meetup.attendees}/{meetup.maxAttendees} Spaces</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[...Array(8)].map((_, i) => (
                                    <img
                                        key={i}
                                        src={`https://i.pravatar.cc/100?u=${i}`}
                                        className="w-12 h-12 rounded-2xl border-2 border-white dark:border-slate-800 shadow-sm"
                                    />
                                ))}
                                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-400 border-2 border-white dark:border-slate-800">
                                    +16
                                </div>
                            </div>
                        </div>

                        {/* Venue Deep Dive */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Venue Overview</h2>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} className="text-primary" />
                                        <p className="text-xs font-bold text-slate-500">{meetup.venue.name} • {meetup.venue.location}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="flex items-center gap-1.5 bg-accent-gold/10 px-3 py-1.5 rounded-xl border border-accent-gold/20">
                                        <Star size={14} fill="#FFD700" color="#FFD700" />
                                        <span className="text-sm font-black text-accent-gold">{meetup.venue.rating}</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 mt-1">{meetup.venue.reviews} Reviews</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {meetup.venue.features.map(feature => (
                                    <div key={feature} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-primary shadow-sm">
                                            {feature.includes('Chess') ? <Trophy size={16} /> :
                                                feature.includes('WiFi') ? <Wifi size={16} /> :
                                                    <Coffee size={16} />}
                                        </div>
                                        <span className="text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                        <div>
                                            <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{meetup.venue.status}</p>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Peak seating capacity reached</p>
                                        </div>
                                    </div>
                                    <button className="text-primary font-black text-xs flex items-center gap-1 group">
                                        View Map <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RSVD Sidebar / Sticky Mobile Button */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-40 space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl shadow-primary/10 border border-primary/10">
                                <div className="mb-6">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Event Entry</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-slate-900 dark:text-white">Free</span>
                                        <span className="text-sm font-bold text-slate-400">no venue fee</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={() => setIsGoing(!isGoing)}
                                        className={`w-full py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all ${isGoing
                                                ? "bg-slate-100 dark:bg-slate-800 text-slate-400 border-2 border-slate-200 dark:border-slate-700"
                                                : "bg-primary text-white shadow-xl shadow-primary/20 active:scale-95"
                                            }`}
                                    >
                                        {isGoing ? "I'm Going!" : "Reserve My Spot"}
                                    </button>

                                    <button
                                        onClick={() => navigate('/messages')}
                                        className="w-full py-5 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 border border-slate-100 dark:border-slate-800 active:scale-95 transition-all"
                                    >
                                        <MessageSquare size={18} />
                                        Ask Question
                                    </button>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="w-8 h-8 rounded-xl border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?u=friend${i}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">3 of your friends are going</p>
                                    </div>
                                </div>
                            </div>

                            {/* Community Perk */}
                            <div className="bg-gradient-to-br from-accent-gold to-orange-500 rounded-[2.5rem] p-8 text-white shadow-xl">
                                <Trophy size={32} className="mb-4 opacity-50" />
                                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Member Special</h3>
                                <p className="text-xs font-bold text-white/80 leading-relaxed">
                                    Flash your Chess Meetup profile for a 15% discount on all drinks at Bao Box today!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
