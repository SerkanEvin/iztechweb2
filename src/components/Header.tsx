import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [animateLogo, setAnimateLogo] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        const newLang = currentLanguage === 'en' ? 'tr' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLanguage(newLang);
    };

    // Start animation on component mount with smoother timing
    useEffect(() => {
        const startAnimation = () => {
            setAnimateLogo(true);
            // Clear any existing timeouts to prevent memory leaks
            const timer = setTimeout(() => {
                setAnimateLogo(false);
            }, 1600); // Slightly reduced duration for snappier feel
            return () => clearTimeout(timer);
        };
        
        // Small delay to ensure the component is mounted
        const initTimer = setTimeout(startAnimation, 100);
        return () => clearTimeout(initTimer);
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#9a0e20]/20" style={{ height: 64 }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 relative">

                    {/* Logo Area */}
                    <div className="flex items-center relative" style={{ width: 260, height: 40 }}>
                        {/* Animated Logo */}
                        <div
                            className="w-10 h-10 rounded-lg overflow-hidden flex items-center will-change-transform"
                            style={{
                                position: animateLogo ? 'absolute' : 'relative',
                                top: 0,
                                left: 0,
                                animation: animateLogo ? 'logoSlide 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none',
                                zIndex: 20,
                                transformOrigin: 'center',
                            }}
                        >
                            <img
                                src="/amblemSTROKELIGHT.png"
                                alt="Logo"
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                                draggable={false}
                            />
                        </div>

                        {/* Main Logo */}
                        <img
                            onClick={handleRefresh}
                            src="/logotype2.png"
                            alt="IZTECH Racing Team"
                            className={`ml-4 w-auto h-10 transition-all duration-300 hover:opacity-90 ${animateLogo ? 'animating-text' : ''}`}
                            style={{ 
                                position: 'relative', 
                                zIndex: 10,
                                filter: 'drop-shadow(0 0 8px rgba(154, 14, 32, 0.3))'
                            }}
                            draggable={false}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {['home', 'team', 'vehicles', 'magazines', 'gallery', 'sponsors', 'contact'].map((item) => (
                            <a 
                                key={item}
                                href={`#${item}`} 
                                className="nav-link text-white hover:text-[#9a0e20] font-medium px-1 py-2"
                            >
                                {t(`header.${item}`)}
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

            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes logoSlide {
                        0% { 
                            transform: translateX(0) scale(1);
                            opacity: 1;
                            filter: drop-shadow(0 0 8px rgba(154, 14, 32, 0.3));
                        }
                        30% { 
                            transform: translateX(180px) scale(1.1) rotate(5deg);
                            opacity: 0.8;
                            filter: drop-shadow(0 0 12px rgba(154, 14, 32, 0.5));
                        }
                        60% {
                            transform: translateX(180px) scale(1.1) rotate(-2deg);
                            opacity: 0.9;
                        }
                        100% { 
                            transform: translateX(0) scale(1) rotate(0);
                            opacity: 1;
                            filter: drop-shadow(0 0 8px rgba(154, 14, 32, 0.3));
                        }
                    }

                    @keyframes textFade {
                        0% { 
                            opacity: 1;
                            transform: translateX(0) scale(1);
                        }
                        30% { 
                            opacity: 0.4;
                            transform: translateX(15px) scale(0.95);
                        }
                        60% { 
                            opacity: 0.4;
                            transform: translateX(15px) scale(0.95);
                        }
                        100% { 
                            opacity: 1;
                            transform: translateX(0) scale(1);
                        }
                    }

                    .animating-text {
                        animation: textFade 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                        will-change: transform, opacity;
                    }

                    .nav-link {
                        position: relative;
                        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
                    }
                    
                    .nav-link::after {
                        content: '';
                        position: absolute;
                        bottom: -4px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: #9a0e20;
                        transform: scaleX(0);
                        transform-origin: right;
                        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
                    }
                    
                    .nav-link:hover::after {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                `
            }} />
        </header>
    );
};

export default Header;


