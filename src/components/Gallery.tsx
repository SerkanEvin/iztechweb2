import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const getImagePath = (filename: string) => {
  return `${filename}?v=1`;
};

const photos = [
    getImagePath("/_MG_0416.webp"),
    getImagePath("/_MG_0426.webp"),
    getImagePath("/_MG_0495.webp"),
    getImagePath("/_MG_0651.webp"),
    getImagePath("/_MG_0803.webp"),
    getImagePath("/_MG_2223.webp"),
    getImagePath("/_MG_2409.webp"),
    getImagePath("/_MG_2847.webp"),
    getImagePath("/_MG_3107.webp"),
    getImagePath("/_MG_5113.webp"),
    getImagePath("/_MG_5236.webp"),
    getImagePath("/_MG_5275.webp"),
    getImagePath("/IMG-20250511-WA0031.webp"),
    getImagePath("/IMG_5353.webp")
];

const Gallery = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const prevPhoto = () => {
        setIsLoading(true);
        setCurrentIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const nextPhoto = () => {
        setIsLoading(true);
        setCurrentIndex(prev => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const goToPhoto = (index: number) => {
        setIsLoading(true);
        setCurrentIndex(index);
    };

    const handleImageLoad = () => {
        setIsLoading(false);
        setError(null);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.error('Failed to load image:', photos[currentIndex]);
        setError('Failed to load image');
        const target = e.target as HTMLImageElement;
        target.src = '/insan.png';
    };

    return (
        <section id="gallery" className="py-20 bg-black relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('gallery.title')} <span className="text-[#a02638]">{t('gallery.titleHighlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('gallery.subtitle')}
                    </p>
                </div>

                {/* Photo Display */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="relative w-full aspect-video bg-black/20 rounded-xl overflow-hidden border border-[#a02638]/50 shadow-lg">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#a02638]"></div>
                            </div>
                        )}
                        {error && (
                            <div className="absolute inset-0 flex items-center justify-center bg-red-900/50 text-white p-4 text-center">
                                {error}
                            </div>
                        )}
                        <img
                            key={currentIndex}
                            src={photos[currentIndex]}
                            alt={t('gallery.alt', { number: currentIndex + 1 })}
                            className={`w-full h-full object-contain transition-opacity duration-300 ${
                                isLoading ? 'opacity-0' : 'opacity-100'
                            }`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            loading="eager"
                            decoding="async"
                        />
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevPhoto}
                        aria-label={t('gallery.previous')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#a02638] hover:bg-[#8e1f31] text-white p-3 rounded-full shadow-lg transition-colors z-10"
                        disabled={isLoading}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextPhoto}
                        aria-label={t('gallery.next')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#a02638] hover:bg-[#8e1f31] text-white p-3 rounded-full shadow-lg transition-colors z-10"
                        disabled={isLoading}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-6 space-x-2">
                    {photos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPhoto(index)}
                            aria-label={t('gallery.goTo', { number: index + 1 })}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                currentIndex === index 
                                    ? "bg-[#a02638] scale-125" 
                                    : "bg-gray-600 hover:bg-gray-400 hover:scale-110"
                            }`}
                            disabled={isLoading}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;