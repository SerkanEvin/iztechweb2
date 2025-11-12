import { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTeamOpen, setIsTeamOpen] = useState(false);
    const closeTimer = useRef<number | null>(null);

    const openTeam = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        setIsTeamOpen(true);
    };

    const scheduleTeamClose = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }
        closeTimer.current = window.setTimeout(() => {
            setIsTeamOpen(false);
            closeTimer.current = null;
        }, 150);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        const newLang = currentLanguage === 'en' ? 'tr' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLanguage(newLang);
    };

    const handleRefresh = () => {
        window.location.href = '/';   // 🔹 Artık siteyi ana sayfaya yönlendiriyor, reload yerine route değiştiriyor
    };

    return (
        <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#9a0e20]/20" style={{ height: 88 }}>
            {/* Top Ticker
            <div className="w-full overflow-hidden border-b border-[#9a0e20]/20 bg-[#9a0e20]">
                <div className="relative whitespace-nowrap">
                    <style>{`
                        @keyframes marquee-ltr { 
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(calc(100vw + 100%)); }
                        }
                    `}</style>
                    <span
                        className="inline-block text-[13px] leading-6 text-white/80 py-1 px-2"
                        style={{ animation: 'marquee-ltr 10s linear infinite' }}
                    >
                        {t('header.ticker')}
                    </span>
                </div>
            </div> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 relative">

                    {/* Logo Area */}
                    <div className="flex items-center relative" style={{ width: 260, height: 40, position: 'relative' }}>
                        <div
                            className="relative overflow-hidden"
                            style={{
                                height: '40px',
                                zIndex: 10,
                                transform: 'translateZ(0)',
                                marginLeft: 0 
                            }}
                        >
                            <img
                                onClick={handleRefresh}
                                src="/logo2RR.png"
                                alt="IZTECH Racing Team"
                                className="w-auto h-10 transition-all duration-500 hover:opacity-90 cursor-pointer"
                                style={{
                                    filter: 'drop-shadow(0 2px 8px rgba(154, 14, 32, 0.4))',
                                    backfaceVisibility: 'hidden'
                                }}
                                draggable={false}
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
                            {t('header.home')}
                        </Link>

                        {/* Team with controlled hover dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={openTeam}
                            onMouseLeave={scheduleTeamClose}
                        >
                            <button type="button" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
                                {t('header.team')}
                            </button>
                            <div
                                className={`absolute left-0 mt-2 w-44 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg transition-opacity duration-150 ${isTeamOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                onMouseEnter={openTeam}
                                onMouseLeave={scheduleTeamClose}
                            >
                                <Link to="/team/2024-2025" onClick={() => setIsTeamOpen(false)} className="block px-4 py-2 text-sm text-white hover:bg-[#2a2a2a]">
                                    2024 - 2025
                                </Link>
                                <Link to="/team/2025-2026" onClick={() => setIsTeamOpen(false)} className="block px-4 py-2 text-sm text-white hover:bg-[#2a2a2a]">
                                    2025 - 2026
                                </Link>
                            </div>
                        </div>

                        <Link to="/vehicles" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
                            {t('header.vehicles')}
                        </Link>
                        <Link to="/magazine" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
                            {t('header.magazine')}
                        </Link>
                        <Link to="/gallery" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
                            {t('header.gallery')}
                        </Link>
                        <Link to="/sponsors" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
                            {t('header.sponsors')}
                        </Link>
                        <Link to="/contact" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
                            {t('header.contact')}
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-[#9a0e20] transition-all duration-300 transform hover:scale-110 focus:outline-none"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? (
                                <X className="h-7 w-7 transition-transform duration-300" />
                            ) : (
                                <Menu className="h-7 w-7 transition-transform duration-300" />
                            )}
                        </button>
                    </div>

                    {/* Language toggle button */}
                    <div className="hidden md:flex items-center space-x-1">
                        <button
                            onClick={toggleLanguage}
                            className="ml-4 px-3 py-1.5 rounded-md text-sm font-medium text-white bg-[#9a0e20] hover:bg-[#7a0b1a] transition-colors"
                        >
                            {t('language')}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm border-t border-[#9a0e20]/20">
                            <Link to="/" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.home')}</Link>
                            <div className="px-3 py-2 text-white/80">{t('header.team')}</div>
                            <Link to="/team/2024-2025" className="block px-6 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>2024 - 2025</Link>
                            <Link to="/team/2025-2026" className="block px-6 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>2025 - 2026</Link>
                            <Link to="/vehicles" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.vehicles')}</Link>
                            <Link to="/magazine" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.magazine')}</Link>
                            <Link to="/gallery" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.gallery')}</Link>
                            <Link to="/sponsors" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.sponsors')}</Link>
                            <Link to="/contact" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</Link>
                            <Link to="/join" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.joinUs')}</Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;



