import { useTranslation } from "react-i18next";
import { BookOpen } from "lucide-react";

const Magazines = () => {
    const { t } = useTranslation();

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
                            <a
                                key={index}
                                href={mag.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-black/80 border border-[#0e669a]/50 rounded-xl overflow-hidden hover:bg-[#0e669a]/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
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
                            </a>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Magazines;