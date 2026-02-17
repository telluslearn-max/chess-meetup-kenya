import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { HomeMapView } from './pages/HomeMapView'
import { DiscoveryListView } from './pages/DiscoveryListView'
import { RegistrationPage } from './pages/RegistrationPage'
import { LoginPage } from './pages/LoginPage'
import { MeetupsDiscovery } from './pages/MeetupsDiscovery'
import { ClubRegistrationPage } from './pages/ClubRegistrationPage'
import { ClubsPage } from './pages/ClubsPage'
import { ClubDetailsPage } from './pages/ClubDetailsPage'
import { ClubDashboard } from './pages/ClubDashboard'
import { MessagingPage } from './pages/MessagingPage'
import { ProfilePage } from './pages/ProfilePage'
import { LiveStandings } from './pages/LiveStandings'
import { EntryTicket } from './pages/EntryTicket'
import { TicketScanner } from './pages/TicketScanner'
import { Leaderboard } from './pages/Leaderboard'
import { MatchResultReporting } from './pages/MatchResultReporting'
import { ActivityFeed } from './pages/ActivityFeed'
import { VenueDashboard } from './pages/VenueDashboard'
import { MyMeetups } from './pages/MyMeetups'
import { GameHostFlow } from './pages/GameHostFlow'
import { VenueRegistrationPage } from './pages/VenueRegistrationPage'
import { WelcomeOnboarding } from './pages/WelcomeOnboarding'
import { OrganizerRegistration } from './pages/OrganizerRegistration'
import { VerifyResultsDashboard } from './pages/VerifyResultsDashboard'
import { MonthlyRewards } from './pages/MonthlyRewards'
import { PartnerDashboard } from './pages/PartnerDashboard'
import { TournamentDetails } from './pages/TournamentDetails'
import { TournamentManagement } from './pages/TournamentManagement'
import { TournamentSponsors } from './pages/TournamentSponsors'
import { AddSponsor } from './pages/AddSponsor'
import { SponsorAnalytics } from './pages/SponsorAnalytics'
import { SponsorDetails } from './pages/SponsorDetails'
import { InviteSponsor } from './pages/InviteSponsor'
import { TournamentsShowcase } from './pages/TournamentsShowcase'
import { LeaguesPage } from './pages/LeaguesPage'
import { LeagueLeaderboard } from './pages/LeagueLeaderboard'
import { LeagueProfile } from './pages/LeagueProfile'
import { SettingsPage } from './pages/SettingsPage'
import { HelpCenter } from './pages/HelpCenter'
import { SupportPage } from './pages/SupportPage'
import { RaiseDispute } from './pages/RaiseDispute'

import { MeetupDetails } from './pages/MeetupDetails'
import { CasualProfile } from './pages/CasualProfile'
import { SearchLocationView } from './pages/SearchLocationView'
import { DiscoveryProvider } from './context/DiscoveryContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
    return (
        <ThemeProvider>
            <DiscoveryProvider>
                <BrowserRouter>
                    <AppLayout>
                        <Routes>
                            <Route path="/" element={<HomeMapView />} />
                            <Route path="/welcome" element={<WelcomeOnboarding />} />
                            <Route path="/discover" element={<MeetupsDiscovery />} />
                            <Route path="/register" element={<RegistrationPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/meetups" element={<MeetupsDiscovery />} />
                            <Route path="/clubs" element={<ClubsPage />} />
                            <Route path="/club/:id" element={<ClubDetailsPage />} />
                            <Route path="/club-registration" element={<ClubRegistrationPage />} />
                            <Route path="/club-dashboard" element={<ClubDashboard />} />
                            <Route path="/messages" element={<MessagingPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/standings/:id" element={<LiveStandings />} />
                            <Route path="/ticket" element={<EntryTicket />} />
                            <Route path="/scanner" element={<TicketScanner />} />
                            <Route path="/leaderboard" element={<Leaderboard />} />
                            <Route path="/match-report" element={<MatchResultReporting />} />
                            <Route path="/activity" element={<ActivityFeed />} />
                            <Route path="/venue-dashboard" element={<VenueDashboard />} />
                            <Route path="/my-meetups" element={<MyMeetups />} />
                            <Route path="/host" element={<GameHostFlow />} />
                            <Route path="/venue-registration" element={<VenueRegistrationPage />} />
                            <Route path="/organizer-registration" element={<OrganizerRegistration />} />
                            <Route path="/verify-results" element={<VerifyResultsDashboard />} />
                            <Route path="/rewards" element={<MonthlyRewards />} />
                            <Route path="/partner-dashboard" element={<PartnerDashboard />} />
                            <Route path="/tournament/:id" element={<TournamentDetails />} />
                            <Route path="/tournament/:id/sponsors" element={<TournamentSponsors />} />
                            <Route path="/tournament/:id/sponsors/add" element={<AddSponsor />} />
                            <Route path="/tournament/:id/sponsors/invite" element={<InviteSponsor />} />
                            <Route path="/tournament/:id/sponsors/:sponsorId" element={<SponsorDetails />} />
                            <Route path="/tournament/:id/sponsors/:sponsorId/analytics" element={<SponsorAnalytics />} />
                            <Route path="/tournaments" element={<TournamentsShowcase />} />
                            <Route path="/tournament-manage/:id" element={<TournamentManagement />} />
                            <Route path="/meetup/:id" element={<MeetupDetails />} />
                            <Route path="/search-location" element={<SearchLocationView />} />
                            <Route path="/casual-profile/:id" element={<CasualProfile />} />
                            <Route path="/leagues" element={<LeaguesPage />} />
                            <Route path="/leagues/leaderboard/:id" element={<LeagueLeaderboard />} />
                            <Route path="/leagues/profile" element={<LeagueProfile />} />
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="/help" element={<HelpCenter />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/dispute" element={<RaiseDispute />} />
                        </Routes>
                    </AppLayout>
                </BrowserRouter>
            </DiscoveryProvider>
        </ThemeProvider>
    )
}

export default App
