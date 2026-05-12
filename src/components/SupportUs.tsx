import { useTranslation } from 'react-i18next';

const SupportUs = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-black min-h-[calc(100vh-88px)] flex flex-col items-center justify-start">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">
                    {t('supportUs.title')}
                </h1>

                <div className="flex flex-col items-center space-y-6">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-[#9a0e20]/30 shadow-2xl shadow-[#9a0e20]/10">
                        <img
                            src="/YARKIN.png"
                            alt="Yarkın Baran"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p className="text-2xl md:text-3xl font-medium text-gray-300 italic tracking-wide">
                        {t('supportUs.text')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SupportUs;
