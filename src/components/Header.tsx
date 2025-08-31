import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
        window.location.reload();
    };

    return (
        <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#9a0e20]/20" style={{ height: 64 }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 relative">

                    {/* Logo Area */}
                    <div className="flex items-center relative" style={{ width: 260, height: 40, position: 'relative' }}>
                        {/* Main Logo - Always visible */}
                        <div 
                            className="relative overflow-hidden"
                            style={{
                                height: '40px',
                                zIndex: 10,
                                transform: 'translateZ(0)',
                                marginLeft: '56px' // Space for the animated logo
                            }}
                        >
                            <img
                                onClick={handleRefresh}
                                src="/logotype2.png"
                                alt="IZTECH Racing Team"
                                className="w-auto h-10 transition-all duration-500 hover:opacity-90"
                                style={{ 
                                    filter: 'drop-shadow(0 2px 8px rgba(154, 14, 32, 0.4))',
                                    backfaceVisibility: 'hidden'
                                }}
                                draggable={false}
                            />
                        </div>

                        {/* Animated Logo - Slides over the main logo */}
                        <div
                            className="w-10 h-10 rounded-lg overflow-hidden flex items-center will-change-transform"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 20,
                                transformOrigin: 'center',
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                                opacity: 1
                            }}
                        >
                            <img
                                src="/amblemSTROKELIGHT.png"
                                alt="Logo"
                                className="w-full h-full object-contain transition-all duration-300 hover:scale-110 hover:rotate-1"
                                draggable={false}
                                style={{
                                    transform: 'translateZ(0)', // Force hardware acceleration
                                    backfaceVisibility: 'hidden'
                                }}
                            />
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {['home', 'team', 'vehicles', 'magazines', 'gallery', 'sponsors', 'contact'].map((item) => (
                            <a 
                                key={item}
                                href={`#${item}`} 
                                className="nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2 transition-colors duration-200"
                            >
                                {t(`header.${item === 'magazines' ? 'magazine' : item}`)}
                            </a>
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
                            <a href="#home" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.home')}</a>
                            <a href="#team" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.team')}</a>
                            <a href="#vehicles" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.vehicles')}</a>
                            <a href="#magazines" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.magazine')}</a>
                            <a href="#gallery" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.gallery')}</a>
                            <a href="#sponsors" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.sponsors')}</a>
                            <a href="#contact" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.contact')}</a>
                        </div>
                    </div>
                )}
            </div>

        </header>
    );
};

export default Header;


