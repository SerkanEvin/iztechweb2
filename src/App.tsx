import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Magazine from './components/Magazine';
import Vehicles from './components/Vehicles';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

import Team from './components/Team';

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
            <div className="min-h-screen bg-black">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/magazine" element={<Magazine />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* ileride ayrı sayfa istersek buraya ekleriz örn: /vehicles, /gallery */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
