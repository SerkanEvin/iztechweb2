import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Magazine from './components/Magazine';
import Vehicles from './components/Vehicles.tsx';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

import Team from './components/Team';
import JoinUs from './components/JoinUs';

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
                    <Route path="/team" element={<Team />} />
                    <Route path="/join" element={<JoinUs />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/magazine" element={<Magazine />} />
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


