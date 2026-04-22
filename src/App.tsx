import './i18n';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Documents from './components/Documents';
import Vehicles from './components/Vehicles.tsx';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Team2024 from './components/Team2024';
import Team2025 from './components/Team2025';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';

import { AuthProvider, useAuth } from './context/AuthContext';

function HomePage() {
    return (
        <>
            <Hero />
            <About />
        </>
    );
}

function ProtectedRoute({ children, adminOnly = false }: { children: React.ReactNode, adminOnly?: boolean }) {
    const { user, isAdmin, loading } = useAuth();

    if (loading) return <div className="min-h-screen bg-black" />;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && !isAdmin) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="min-h-screen bg-black overflow-x-hidden">
                    <ScrollToTop />
                    <Header />
                    {/* Spacer to offset the fixed header height (88px) */}
                    <div className="h-[88px]" />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route 
                            path="/admin" 
                            element={
                                <ProtectedRoute adminOnly>
                                    <AdminDashboard />
                                </ProtectedRoute>
                            } 
                        />
                        <Route 
                            path="/profile" 
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            } 
                        />
                        <Route path="/team" element={<Navigate to="/team/2025-2026" replace />} />
                        <Route path="/team/2024-2025" element={<Team2024 />}>
                            <Route path=":memberName" element={null} />
                        </Route>
                        <Route path="/team/2025-2026" element={<Team2025 />}>
                            <Route path=":memberName" element={null} />
                        </Route>
                        <Route path="/vehicles" element={<Vehicles />} />
                        <Route path="/documents" element={<Documents />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/sponsors" element={<Sponsors />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;


