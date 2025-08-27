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

    // Start animation on component mount
    useEffect(() => {
        setAnimateLogo(true);
        const timer = setTimeout(() => {
            setAnimateLogo(false);
        }, 1800); // Reduced duration for faster feel
        return () => clearTimeout(timer);
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
                    <nav className="hidden md:flex space-x-6">
                        {['home', 'team', 'vehicles', 'magazines', 'gallery', 'sponsors', 'contact'].map((item) => (
                            <a 
                                key={item}
                                href={`#${item}`} 
                                className="relative text-white hover:text-[#9a0e20] transition-all duration-300 font-medium group"
                            >
                                {t(`header.${item}`)}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9a0e20] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-[#9a0e20] transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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

            {/* Animations */}
            <style>{`
                @keyframes logoSlide {
                    0% { 
                        transform: translateX(0) scale(1);
                        opacity: 1;
                    }
                    40% { 
                        transform: translateX(180px) scale(1.1);
                        opacity: 0.9;
                    }
                    60% {
                        transform: translateX(180px) scale(1.1);
                        opacity: 0.9;
                    }
                    100% { 
                        transform: translateX(0) scale(1);
                        opacity: 1;
                    }
                }

                @keyframes textFade {
                    0% { 
                        opacity: 1;
                        transform: translateX(0);
                    }
                    40% { 
                        opacity: 0.3;
                        transform: translateX(10px);
                    }
                    60% { 
                        opacity: 0.3;
                        transform: translateX(10px);
                    }
                    100% { 
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animating-text {
                    animation: textFade 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }

                /* Smooth transitions for mobile menu */
                .mobile-menu-enter {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                .mobile-menu-enter-active {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 300ms ease-out, transform 300ms ease-out;
                }
                .mobile-menu-exit {
                    opacity: 1;
                }
                .mobile-menu-exit-active {
                    opacity: 0;
                    transform: translateY(-10px);
                    transition: opacity 200ms ease-in, transform 200ms ease-in;
                }
            `}</style>
        </header>
    );
};

export default Header;


