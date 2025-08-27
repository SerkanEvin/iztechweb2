import { useState, useRef } from "react";
import { BookOpen, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Magazines = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState<number | null>(null);
    const sliderRef = useRef<Slider>(null);

    const magazines = [
        {
            title: t('magazines.may.title'),
            description: t('magazines.may.description'),
            cover: "/may.png",
            pdf: "mayrecap.pdf",
        },
        {
            title: t('magazines.june.title'),
            description: t('magazines.june.description'),
            cover: "/june.png",
            pdf: "junerecap.pdf",
        },
        {
            title: t('magazines.july.title'),
            description: t('magazines.july.description'),
            cover: "/july.png",
            pdf: "julyrecap.pdf",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        afterChange: (current: number) => setCurrentSlide(current)
    };

    return (
        <>
            <section id="magazines" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="text-[#a02638]">{t('magazines.title')}</span> {t('magazines.and')} {t('magazines.recap')}
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {t('magazines.subtitle')}
                        </p>
                    </div>

                    {/* Magazine Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {magazines.map((mag, index) => (
                            <div
                                key={index}
                                className="group bg-black/80 border border-[#0e669a]/50 rounded-xl overflow-hidden hover:bg-[#0e669a]/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                                onClick={() => setCurrentSlide(index)}
                            >
                                <div className="h-60 overflow-hidden">
                                    <img
                                        src={mag.cover}
                                        alt={mag.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{mag.title}</h3>
                                    <p className="text-gray-400 mb-4">{mag.description}</p>
                                    <div className="inline-flex items-center text-[#a02638] font-semibold group-hover:text-white transition-colors">
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        {t('magazines.viewPdf')}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PDF Slider */}
            <div className={`fixed inset-0 bg-black/95 z-50 transition-all duration-300 transform ${currentSlide !== null ? 'translate-x-0' : 'translate-x-full'}`}>
                <button 
                    onClick={() => setCurrentSlide(null)}
                    className="absolute top-4 right-4 text-white hover:text-red-500 z-50 p-2"
                    aria-label={t('magazines.close')}
                >
                    <X size={32} />
                </button>
                
                <div className="relative h-full w-full max-w-6xl mx-auto">
                    <Slider 
                        ref={sliderRef}
                        {...settings}
                        initialSlide={currentSlide || 0}
                        className="h-full"
                    >
                        {magazines.map((mag, index) => (
                            <div key={index} className="h-[100vh] flex items-center justify-center p-4">
                                <div className="w-full h-full flex flex-col">
                                    <h3 className="text-2xl font-bold text-white text-center mb-4">{mag.title}</h3>
                                    <div className="flex-1">
                                        <iframe
                                            src={mag.pdf}
                                            className="w-full h-full min-h-[80vh] border-none"
                                            title={mag.title}
                                            aria-label={mag.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    
                    <button 
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-10"
                        aria-label={t('magazines.previous')}
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button 
                        onClick={() => sliderRef.current?.slickNext()}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-10"
                        aria-label={t('magazines.next')}
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Magazines;