import { useTranslation } from 'react-i18next';

export default function Sponsors() {
  const { t } = useTranslation();
  const sponsors = [
    {
      tier: "platinum",
      members: [
        { name: "Prokom", logo: "/Logo_Prokom_W.png", url: "https://prokomtech.com/" },
        { name: "Olguntech", logo: "/olguntech.webp", url: "#" }
      ]
    },
    {
      tier: "gold",
      members: [
        { name: "Altair", logo: "/altair.png", url: "https://altair.com/" },
        { name: "ANSYS", logo: "/ANSYS_logo.png", url: "https://www.ansys.com/" },
        { name: "Numesys", logo: "/numesys-logo-gri-min.png", url: "https://www.numesys.com.tr/" },
        { name: "Tekyaz", logo: "/TEKYAZ_LOGO_002.png", url: "https://www.tekyaz.com/" },
        { name: "Sibe", logo: "/sibe2.png", url: "https://www.sibe.io/" },
        { name: "GT", logo: "/GT.png", url: "https://www.gtisoft.com/" },
        { name: "U Holding", logo: "/uholding.webp", url: "#" },
        { name: "Maxion", logo: "/maxion.webp", url: "#" },
        { name: "SKF", logo: "/skf.webp", url: "#" }
      ]
    },
    {
      tier: "silver",
      members: [
        { name: "Avioni Technologies", logo: "/5958e813d0893.png", url: "https://www.avionitech.com/tr/" },
        { name: "IZELTAŞ", logo: "/images.png", url: "https://izeltas.com.tr/" },
        { name: "silvs", logo: "/sivs.webp", url: "https://iztechracing.com.tr/" },
        { name: "Erenli", logo: "/erenli.webp", url: "#" },
        { name: "Festo", logo: "/festo.webp", url: "#" }
      ]
    },
    {
      tier: "bronze",
      members: [
        { name: "dekomod", logo: "/dekomod_logo_buyuk_1.webp", url: "https://dekomodmimarlik.com/" },
        { name: "XXL", logo: "/xxl.webp", url: "#" }
      ]
    },
    {
      tier: "supporters",
      members: [
        { name: "Urla Solar", logo: "/UrlaSolar_Tam_Logo.png", url: "https://urlasolar.com/" },
        { name: "Bilişim Vadisi", logo: "/BV_Logo_H.png", url: "https://bilisimvadisi.com.tr/" },
        { name: "Teknopark İzmir", logo: "/20190828083905.png", url: "https://teknoparkizmir.com.tr/" },
        { name: "URİKAD", logo: "/URiKADW.png", url: "#" },
        { name: "SCH-RA", logo: "/SCH-RA-White-N-L_2013W.png", url: "https://www.schrothracing.com/" },
        { name: "bosch", logo: "/bosch.png", url: "https://www.bosch.com.tr/" },
        { name: "yuksek", logo: "/yuksek.webp", url: "https://www.teknoparkizmir.com.tr/tr/firma-cron/izmir-teknoloji-sanayi-ve-ticaret-a-s/" },
        { name: "slogan", logo: "/logoSlogan.webp", url: "https://artibeton.com.tr/" },
        { name: "Simetrisöve", logo: "/simetrisove.webp", url: "#" },
        { name: "Plaka Metal Logo", logo: "/plaka_metal_logo.webp", url: "#" },
        { name: "Onur Yapı Market", logo: "/onuryapimarket.webp", url: "#" },
        { name: "Mustan Logo", logo: "/mustan_logo.webp", url: "#" },
        { name: "S Axis", logo: "/s_axis.webp", url: "#" },
        { name: "İzmir AV Market", logo: "/izmiravmarket.webp", url: "#" },
        { name: "Yeditepe Transportation", logo: "/yeditepe.webp", url: "#" },
        { name: "Şencanlar Egzoz Sistemleri", logo: "/sencanlar.webp", url: "#" },
        { name: "Spark", logo: "/spark.webp", url: "#" },
        { name: "Kramsan", logo: "/kramsan.webp", url: "#" },
        { name: "Alemdar", logo: "/alemdar.webp", url: "#" }
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('sponsors.title')}</h2>
          <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
            {t('sponsors.description')}
          </p>
        </div>

        {sponsors.map((tier, tierIndex) => (
          <div key={tierIndex} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{t(`sponsors.tiers.${tier.tier}.title`)}</h3>
            </div>

            <div className={`grid gap-6 ${['gold', 'silver', 'bronze'].includes(tier.tier) ? 'md:grid-cols-3 lg:grid-cols-4' :
              tier.members.length <= 2 ? 'md:grid-cols-2' :
                'md:grid-cols-2 lg:grid-cols-4'
              }`}>
              {tier.members.map((sponsor, sponsorIndex) => (
                <a
                  key={sponsorIndex}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 text-center hover:bg-[#2a2a2a]/70 transition-all duration-300 hover:scale-105 group h-48 flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className={`${sponsor.name === 'Prokom' ? 'h-32' : 'h-20 max-w-full'} w-auto object-contain mx-auto`}
                      style={{
                        maxHeight: sponsor.name === 'Prokom' ? '8rem' : '5rem',
                        width: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
