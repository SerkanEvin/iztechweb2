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
function HomePage() {
    return (
        <>
            <Hero />
            <About />
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-black overflow-x-hidden">
                <ScrollToTop />
                <Header />
                {/* Spacer to offset the fixed header height (88px) */}
                <div className="h-[88px]" />
                <Routes>
                    <Route path="/" element={<HomePage />} />
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
    );
}

export default App;


