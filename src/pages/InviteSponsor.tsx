import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Mail, Link as LinkIcon, Copy, Check } from 'lucide-react'

export const InviteSponsor: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [emails, setEmails] = useState('')
    const [message, setMessage] = useState('')
    const [copied, setCopied] = useState(false)
    const [sent, setSent] = useState(false)

    const inviteLink = `https://chessmeetup.app/sponsor-invite/${id}`

    const handleCopyLink = () => {
        navigator.clipboard.writeText(inviteLink)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleSendInvites = () => {
        // Simulate sending invites
        setSent(true)
        setTimeout(() => {
            navigate(`/tournament/${id}?tab=partners`)
        }, 1500)
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
                    <h1 className="text-base font-black text-slate-900 dark:text-white">Invite Sponsors</h1>
                    <div className="w-10"></div>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 p-6 pb-32 space-y-6">
                {/* Info Card */}
                <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-[2.5rem] border border-primary/20">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <span className="material-icons-round text-primary text-xl">info</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-black text-slate-900 dark:text-white mb-2">How It Works</h3>
                            <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                                Send invitation links to potential sponsors. They'll be guided through the onboarding process by our app admin team. You can track their status in the Partners tab.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Share Link Section */}
                <div>
                    <h2 className="text-xs font-black text-slate-900 dark:text-white mb-3 px-2">Share Invitation Link</h2>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-1 bg-slate-50 dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700">
                                <p className="text-xs font-mono text-slate-600 dark:text-slate-400 truncate">
                                    {inviteLink}
                                </p>
                            </div>
                            <button
                                onClick={handleCopyLink}
                                className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center active:scale-90 transition-all shadow-lg shadow-primary/20"
                            >
                                {copied ? <Check size={20} /> : <Copy size={20} />}
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <button className="flex flex-col items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95">
                                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <Mail size={18} className="text-white" />
                                </div>
                                <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400">Email</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95">
                                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                                    <span className="material-icons-round text-white text-lg">chat</span>
                                </div>
                                <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400">WhatsApp</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95">
                                <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                                    <LinkIcon size={18} className="text-white" />
                                </div>
                                <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400">More</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* OR Divider */}
                <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">OR</span>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
                </div>

                {/* Email Invitation Section */}
                <div>
                    <h2 className="text-xs font-black text-slate-900 dark:text-white mb-3 px-2">Send Email Invitations</h2>
                    <div className="space-y-4">
                        {/* Email Addresses */}
                        <div>
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block px-2">
                                Email Addresses
                            </label>
                            <textarea
                                placeholder="Enter email addresses (comma separated)&#10;e.g. sponsor@company.com, partner@brand.com"
                                value={emails}
                                onChange={(e) => setEmails(e.target.value)}
                                rows={4}
                                className="w-full bg-white dark:bg-slate-900 rounded-2xl py-4 px-4 border border-slate-200 dark:border-slate-800 font-medium text-sm shadow-sm transition-all focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                            />
                        </div>

                        {/* Custom Message */}
                        <div>
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block px-2">
                                Custom Message (Optional)
                            </label>
                            <textarea
                                placeholder="Add a personal message to your invitation..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                className="w-full bg-white dark:bg-slate-900 rounded-2xl py-4 px-4 border border-slate-200 dark:border-slate-800 font-medium text-sm shadow-sm transition-all focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                            />
                            <p className="text-[10px] font-medium text-slate-400 mt-2 px-2">
                                This message will be included in the invitation email along with the tournament details.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Preview Card */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-3">Email Preview</h3>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2">
                            You're Invited to Sponsor Our Chess Tournament
                        </h4>
                        <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                            {message || "We'd love to have your organization as a sponsor for our upcoming chess event. Click the link below to learn more and get started."}
                        </p>
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-xl text-[10px] font-bold">
                            <span className="material-icons-round text-sm">link</span>
                            View Sponsorship Opportunities
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                {sent && (
                    <div className="bg-green-500/10 border-2 border-green-500/20 p-5 rounded-2xl flex items-center gap-3 animate-in fade-in duration-300">
                        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Check size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-black text-green-700 dark:text-green-400 mb-1">Invitations Sent!</h4>
                            <p className="text-xs font-medium text-green-600 dark:text-green-500">
                                Your sponsor invitations have been sent. Redirecting...
                            </p>
                        </div>
                    </div>
                )}
            </main>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-50">
                <button
                    onClick={handleSendInvites}
                    disabled={!emails.trim() || sent}
                    className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all ${emails.trim() && !sent
                            ? 'bg-primary text-white shadow-lg shadow-primary/20 active:scale-[0.98]'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        }`}
                >
                    {sent ? (
                        <span className="flex items-center justify-center gap-2">
                            <Check size={16} />
                            Sent Successfully
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            <Mail size={16} />
                            Send Invitations
                        </span>
                    )}
                </button>
            </div>
        </div>
    )
}
