import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
        window.location.href = '/';   // 🔹 Artık siteyi ana sayfaya yönlendiriyor, reload yerine route değiştiriyor
    };

    return (
        <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#9a0e20]/20" style={{ height: 64 }}>
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
                                marginLeft: 0 // ← burayı 0 yaptık
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
                        {[
                            { path: '/', key: 'home' },
                            { path: '/team', key: 'team' },
                            { path: '/vehicles', key: 'vehicles' },
                            { path: '/magazine', key: 'magazine' },
                            { path: '/gallery', key: 'gallery' },
                            { path: '/sponsors', key: 'sponsors' },
                            { path: '/contact', key: 'contact' }
                        ].map((item) => (
                            <Link
                                key={item.key}
                                to={item.path}
                                className="nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200"
                            >
                                {t(`header.${item.key}`)}
                            </Link>
                        ))}
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
                            <Link to="/team" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.team')}</Link>
                            <Link to="/vehicles" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.vehicles')}</Link>
                            <Link to="/magazine" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.magazine')}</Link>
                            <Link to="/gallery" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.gallery')}</Link>
                            <Link to="/sponsors" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.sponsors')}</Link>
                            <Link to="/contact" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;



