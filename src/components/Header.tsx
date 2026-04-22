import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        const newLang = currentLanguage === 'en' ? 'tr' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLanguage(newLang);
    };

    const handleRefresh = () => {
        window.location.href = '/';
    };

    return (
        <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#9a0e20]/20" style={{ height: 88 }}>
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
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
                            {t('header.home')}
                        </Link>

                        <div className="relative group">
                            <Link to="/team" className="nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200">
                                {t('header.team')}
                            </Link>
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-black/95 backdrop-blur-sm border border-[#9a0e20]/20 rounded-md shadow-lg min-w-[180px]">
                                <Link to="/team/2025-2026" className="block px-4 py-2 text-sm text-white hover:bg-[#2a2a2a]">
                                    2025 - 2026
                                </Link>
                                <Link to="/team/2024-2025" className="block px-4 py-2 text-sm text-white hover:bg-[#2a2a2a]">
                                    2024 - 2025
                                </Link>
                            </div>
                        </div>

                        <Link to="/vehicles" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
                            {t('header.vehicles')}
                        </Link>
                        <Link to="/documents" className={`nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200`}>
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

                        {/* End Navigation Area */}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                         {/* Language toggle for mobile */}
                        <button
                            onClick={toggleLanguage}
                            className="px-2 py-1 rounded bg-[#9a0e20] text-white text-xs font-bold"
                        >
                            {currentLanguage.toUpperCase()}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-[#9a0e20] transition-all duration-300 transform hover:scale-110 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>

                    {/* Desktop Language toggle */}
                    <div className="hidden md:flex items-center">
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
                    <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-[#9a0e20]/20 max-h-[80vh] overflow-y-auto">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                             <Link to="/" className="block py-2 text-white hover:text-[#9a0e20]" onClick={() => setIsMenuOpen(false)}>{t('header.home')}</Link>
                             <Link to="/team" className="block py-2 text-white hover:text-[#9a0e20]" onClick={() => setIsMenuOpen(false)}>{t('header.team')}</Link>
                             <div className="pl-4 space-y-2">
                                 <Link to="/team/2025-2026" className="block py-1 text-zinc-400 hover:text-[#9a0e20]" onClick={() => setIsMenuOpen(false)}>2025 - 2026</Link>
                                 <Link to="/team/2024-2025" className="block py-1 text-zinc-400 hover:text-[#9a0e20]" onClick={() => setIsMenuOpen(false)}>2024 - 2025</Link>
                             </div>
                             <Link to="/vehicles" className="block py-2 text-white hover:text-[#9a0e20]" onClick={() => setIsMenuOpen(false)}>{t('header.vehicles')}</Link>
                             <Link to="/documents" className="block py-2 text-white hover:text-[#9a0e20]" onClick={() => setIsMenuOpen(false)}>{t('header.magazine')}</Link>
                             <Link to="/gallery" className="block py-2 text-white hover:text-[#9a0e20]" onClick={() => setIsMenuOpen(false)}>{t('header.gallery')}</Link>
                             <Link to="/sponsors" className="block py-2 text-white hover:text-[#9a0e20]" onClick={() => setIsMenuOpen(false)}>{t('header.sponsors')}</Link>
                             <Link to="/contact" className="block py-2 text-white hover:text-[#9a0e20]" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</Link>
                             
                             {/* Mobile Auth Removed */}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;



