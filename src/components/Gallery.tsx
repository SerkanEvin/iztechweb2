import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const getImagePath = (filename: string) => {
  return `${filename}?v=1`;
};

const photos = [
    getImagePath("/1.webp"),
    getImagePath("/2.webp"),
    getImagePath("/3.webp"),
    getImagePath("/4.webp"),
    getImagePath("/5.webp"),
    getImagePath("/6.webp"),
    getImagePath("/7.webp"),
    getImagePath("/8.webp"),
    getImagePath("/9.webp"),
    getImagePath("/11.webp"),
    getImagePath("/12.webp"),
    getImagePath("/13.webp"),
    getImagePath("/14.webp"),
    getImagePath("/15.webp"),
    getImagePath("/16.webp"),
    getImagePath("/17.webp"),
    getImagePath("/18.webp"),
    getImagePath("/19.webp"),
    getImagePath("/20.webp"),
    getImagePath("/21.webp"),
    getImagePath("/22.webp"),
    getImagePath("/23.webp"),
    getImagePath("/24.webp")
];

const Gallery = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevPhoto = () => {
        setCurrentIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const nextPhoto = () => {
        setCurrentIndex(prev => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const goToPhoto = (index: number) => {
        setCurrentIndex(index);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.error('Failed to load image:', photos[currentIndex]);
        const target = e.target as HTMLImageElement;
        target.src = '/insan.png';
    };

    return (
        <section id="gallery" className="py-20 bg-black relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('gallery.title')} <span className="text-[#a02638]">{t('gallery.titleHighlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('gallery.subtitle')}
                    </p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="relative w-full aspect-video bg-black/20 rounded-xl overflow-hidden border border-[#a02638]/50 shadow-lg">
                        {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => {
                            const actualIndex = (index + photos.length) % photos.length;
                            const src = photos[actualIndex];
                            return (
                                <img
                                    key={actualIndex}
                                    src={src}
                                    alt={t('gallery.alt', { number: actualIndex + 1 })}
                                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                                        actualIndex === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onError={handleImageError}
                                    loading="eager"
                                    decoding="async"
                                />
                            );
                        })}
                    </div>

                    <button
                        onClick={prevPhoto}
                        aria-label={t('gallery.previous')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#9a0e20] hover:bg-[#7a0b1a] text-white p-3 rounded-full shadow-lg transition-colors z-10"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextPhoto}
                        aria-label={t('gallery.next')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#9a0e20] hover:bg-[#7a0b1a] text-white p-3 rounded-full shadow-lg transition-colors z-10"
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
                                    ? "bg-[#9a0e20] scale-125" 
                                    : "bg-gray-600 hover:bg-gray-400 hover:scale-110"
                            }`}
                            />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;