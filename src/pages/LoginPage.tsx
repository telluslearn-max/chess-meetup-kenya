import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const LoginPage: React.FC = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark px-6 py-12">
            {/* Logo */}
            <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-3xl flex items-center justify-center shadow-xl mb-8 border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                    <span className="material-icons-round text-white text-2xl">grid_view</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Chess Meetup Kenya</h1>
            <p className="text-sm font-bold text-slate-500 mb-12">Connect. Play. Master.</p>

            {/* Hero Image */}
            <div className="w-full max-w-md rounded-3xl overflow-hidden mb-8 shadow-2xl">
                <img
                    src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800"
                    alt="Chess pieces"
                    className="w-full h-48 object-cover"
                />
            </div>

            {/* Welcome Text */}
            <div className="w-full max-w-md mb-8 text-center">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Welcome back</h2>
                <p className="text-sm font-bold text-slate-500">Sign in to join the next tournament</p>
            </div>

            {/* Auth Buttons */}
            <div className="w-full max-w-md space-y-4">
                {/* Google Sign In */}
                <button className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 flex items-center justify-center gap-3 font-black text-slate-900 dark:text-white hover:border-primary/30 transition-all active:scale-[0.98] shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4" />
                        <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853" />
                        <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" />
                        <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>

                {/* Email Sign In */}
                <button
                    onClick={() => navigate('/register')}
                    className="w-full bg-primary text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-3 font-black hover:bg-primary/90 transition-all active:scale-[0.98] shadow-xl shadow-primary/20"
                >
                    <span className="material-icons-round">email</span>
                    Continue with Email
                </button>
            </div>

            {/* Sign Up Link */}
            <p className="mt-8 text-sm font-bold text-slate-500">
                New here?{' '}
                <Link to="/register" className="text-primary hover:underline font-black">
                    Create an account
                </Link>
            </p>
        </div>
    )
}
