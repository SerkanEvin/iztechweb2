import { useState, useEffect } from 'react';
import { Mail, MapPin, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.emailTitle'),
      details: "iztechracing@iyte.edu.tr",
      description: t('contact.info.emailDescription')
    },
    {
      icon: MapPin,
      title: t('contact.info.visitTitle'),
      details: t('contact.info.address'),
      description: t('contact.info.visitDescription')
    }
  ];

  const [isMapLoading, setIsMapLoading] = useState(true);
  const [isMapVisible, setIsMapVisible] = useState(false);

  // Lazy load the map when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const mapElement = document.querySelector('.map-container');
    if (mapElement) {
      observer.observe(mapElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
      <section id="contact" className="py-20 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.title')} <span className="text-[#a02638]">{t('contact.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contact boxes + Map */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                  <a
                      key={index}
                      href={info.icon === Mail ? 'mailto:iztechracing@iyte.edu.tr' : 'https://maps.app.goo.gl/...'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 hover:bg-[#2a2a2a]/70 hover:border-[#a02638]/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      aria-label={`${info.title}: ${info.details}`}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#a02638]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-[#a02638]/30 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-[#a02638] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#a02638] transition-colors duration-300">{info.title}</h4>
                        <p className="text-[#a02638] font-semibold whitespace-pre-line mb-2">{info.details}</p>
                        <p className="text-[#cccccc] text-sm">{info.description}</p>
                      </div>
                    </div>
                  </a>
              ))}
            </div>

            {/* Map */}
            <div className="map-container">
              <div className="w-full h-80 border border-[#2a2a2a] rounded-xl overflow-hidden shadow-lg relative">
                {isMapLoading && (
                  <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-[#a02638] animate-spin" />
                  </div>
                )}
                {isMapVisible && (
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.4069533683887!2d26.636548075719706!3d38.31640597185376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb91003f866135%3A0x1ad04edcfce247d8!2sIZTECH%20RACING%20Laboratuvar%C4%B1!5e0!3m2!1str!2str!4v1756277692460!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0, opacity: isMapLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={t('contact.map.iframeTitle')}
                      aria-label="IZTECH Racing Laboratory location on map"
                      onLoad={() => setIsMapLoading(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;