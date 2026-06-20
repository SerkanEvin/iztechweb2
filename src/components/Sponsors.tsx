import { useTranslation } from 'react-i18next';

export default function Sponsors() {
  const { t } = useTranslation();
  const sponsors = [
    {
      tier: "platinum",
      members: [
        { name: "Prokom", logo: "/sponsors/prokom.png", url: "https://prokomtech.com/" },
        { name: "Olguntech", logo: "/sponsors/olguntech.png", url: "#" }
      ]
    },
    {
      tier: "gold",
      members: [
        { name: "Altair", logo: "/sponsors/altair.png", url: "https://altair.com/" },
        { name: "ANSYS", logo: "/sponsors/ansys.png", url: "https://www.ansys.com/" },
        { name: "Numesys", logo: "/sponsors/numesys.png", url: "https://www.numesys.com.tr/" },
        { name: "Tekyaz", logo: "/sponsors/tekyaz.png", url: "https://www.tekyaz.com/" },
        { name: "Sibe", logo: "/sponsors/sibe.png", url: "https://www.sibe.io/" },
        { name: "GT", logo: "/sponsors/gt.png", url: "https://www.gtisoft.com/" },
        { name: "U Holding", logo: "/sponsors/u_holding.png", url: "#" },
        { name: "Maxion", logo: "/sponsors/maxion.png", url: "#" },
        { name: "Magmaweld", logo: "/sponsors/magmaweld.png", url: "#" },
        { name: "VI-grade", logo: "/sponsors/vi-grade.png", url: "#" },
        { name: "Olgunçelik", logo: "/sponsors/olguncelik.png", url: "#" }
      ]
    },
    {
      tier: "silver",
      members: [
        { name: "Avioni Technologies", logo: "/sponsors/avioni_technologies.png", url: "https://www.avionitech.com/tr/" },
        { name: "IZELTAŞ", logo: "/sponsors/izeltas.png", url: "https://izeltas.com.tr/" },
        { name: "Uğur Makina", logo: "/sponsors/ugur_makina.png", url: "#" },
        { name: "Erenli", logo: "/sponsors/erenli.png", url: "#" },
        { name: "Festo", logo: "/sponsors/festo.png", url: "#" },
        { name: "Menemen Belediyesi", logo: "/sponsors/menemen_belediyesi.png", url: "#" },
        { name: "İnci Holding", logo: "/sponsors/inci_holding.png", url: "#" },
        { name: "Urla Belediyesi", logo: "/sponsors/urla_belediyesi.png", url: "#" },
        { name: "Özgörkey", logo: "/sponsors/ozgorkey.png", url: "#" },
        { name: "SKF", logo: "/sponsors/skf.png", url: "#" },
        { name: "XXL", logo: "/sponsors/xxl.png", url: "#" },
        { name: "slogan", logo: "/sponsors/slogan.png", url: "https://artibeton.com.tr/" },
        { name: "bosch", logo: "/sponsors/bosch.png", url: "https://www.bosch.com.tr/" }
      ]
    },
    {
      tier: "bronze",
      members: [
        { name: "dekomod", logo: "/sponsors/dekomod.png", url: "https://dekomodmimarlik.com/" },
        { name: "Galata Wind", logo: "/sponsors/galata_wind.png", url: "#" },
        { name: "Obel Cıvata", logo: "/sponsors/obel_civata.png", url: "#" },
        { name: "Spark", logo: "/sponsors/spark.png", url: "#" },
        { name: "Şencanlar Egzoz Sistemleri", logo: "/sponsors/sencanlar_egzoz_sistemleri.png", url: "#" },
        { name: "Urla Solar", logo: "/sponsors/urla_solar.png", url: "https://urlasolar.com/" }
      ]
    },
    {
      tier: "supporters",
      members: [
        { name: "Bilişim Vadisi", logo: "/sponsors/bilisim_vadisi.png", url: "https://bilisimvadisi.com.tr/" },
        { name: "Teknopark İzmir", logo: "/sponsors/teknopark_izmir.png", url: "https://teknoparkizmir.com.tr/" },
        { name: "URİKAD", logo: "/sponsors/urikad.png", url: "#" },
        { name: "SCH-RA", logo: "/sponsors/sch-ra.png", url: "https://www.schrothracing.com/" },
        { name: "yuksek", logo: "/sponsors/yuksek.png", url: "https://www.teknoparkizmir.com.tr/tr/firma-cron/izmir-teknoloji-sanayi-ve-ticaret-a-s/" },
        { name: "Simetrisöve", logo: "/sponsors/simetrisove.png", url: "#" },
        { name: "Plaka Metal Logo", logo: "/sponsors/plaka_metal_logo.png", url: "#" },
        { name: "Onur Yapı Market", logo: "/sponsors/onur_yapi_market.png", url: "#" },
        { name: "Mustan Logo", logo: "/sponsors/mustan_logo.png", url: "#" },
        { name: "S Axis", logo: "/sponsors/s_axis.png", url: "#" },
        { name: "İzmir AV Market", logo: "/sponsors/izmir_av_market.png", url: "#" },
        { name: "Yeditepe Transportation", logo: "/sponsors/yeditepe_transportation.png", url: "#" },
        { name: "Kramsan", logo: "/sponsors/kramsan.png", url: "#" },
        { name: "Alemdar", logo: "/sponsors/alemdar.png", url: "#" },
        { name: "Peak", logo: "/sponsors/peak.png", url: "#" },
        { name: "İşgören", logo: "/sponsors/isgoren.png", url: "#" },
        { name: "Plantero", logo: "/sponsors/plantero.png", url: "#" },
        { name: "Pin Drinks", logo: "/sponsors/pin_drinks.png", url: "#" },
        { name: "Katsimtaş", logo: "/sponsors/katsimtas.png", url: "#" }
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
