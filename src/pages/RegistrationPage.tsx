import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const RegistrationPage: React.FC = () => {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCasualPlay, setIsCasualPlay] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle registration logic
        navigate('/')
    }

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark px-6 py-12">
            {/* Header */}
            <div className="mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-6 active:scale-95 transition-all"
                >
                    <span className="material-icons-round text-slate-600 dark:text-slate-400">arrow_back</span>
                </button>
                <h1 className="text-xl font-black text-slate-900 dark:text-white mb-2">Chess Meetup Kenya</h1>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <span className="material-icons-round text-primary text-3xl">person_add</span>
                </div>
            </div>

            {/* Title */}
            <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Create Your Account</h2>
                <p className="text-sm font-bold text-slate-500">
                    Join the vibrant Chess Meetup Kenya community and find your next match.
                </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                {/* Full Name */}
                <div>
                    <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                        Full Name
                    </label>
                    <div className="relative">
                        <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                        Email
                    </label>
                    <div className="relative">
                        <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">email</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">
                        Password
                    </label>
                    <div className="relative">
                        <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary/30 focus:outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Casual Play Toggle */}
                <button
                    type="button"
                    onClick={() => setIsCasualPlay(!isCasualPlay)}
                    className="flex items-center gap-3 active:scale-95 transition-all"
                >
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${isCasualPlay
                            ? 'bg-primary border-primary'
                            : 'border-slate-300 dark:border-slate-700'
                        }`}>
                        {isCasualPlay && (
                            <span className="material-icons-round text-white text-sm">check</span>
                        )}
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        I'm joining for casual play
                    </span>
                </button>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-primary text-white rounded-2xl py-4 font-black text-sm uppercase tracking-wider hover:bg-primary/90 transition-all active:scale-[0.98] shadow-xl shadow-primary/20"
                >
                    Create Account
                </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-wider">Or join with</span>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
            </div>

            {/* Social Auth */}
            <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 flex items-center justify-center gap-2 font-black text-sm hover:border-primary/30 transition-all active:scale-95">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4" />
                        <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853" />
                        <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" />
                        <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335" />
                    </svg>
                    Google
                </button>
                <button className="flex-1 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 flex items-center justify-center gap-2 font-black text-sm hover:border-primary/30 transition-all active:scale-95">
                    <span className="material-icons-round text-slate-900 dark:text-white">apple</span>
                    Apple
                </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm font-bold text-slate-500">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline font-black">
                    Login
                </Link>
            </p>
        </div>
    )
}
