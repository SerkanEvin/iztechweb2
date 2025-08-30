import React from "react";

export default function Sponsors() {
  const sponsors = [
    {
      tier: "Platinum",
      members: [
        { name: "Prokom", logo: "/Logo_Prokom_W.png", url: "https://prokomtech.com/" }
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Sponsors</h2>
          <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with industry leaders who share our passion for innovation, excellence, and the future of automotive engineering.
          </p>
        </div>

        {sponsors.map((tier, tierIndex) => (
          <div key={tierIndex} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
            </div>

            <div className={`grid gap-8 ${
              tier.members.length <= 2 ? 'md:grid-cols-2' :
              tier.members.length === 3 ? 'md:grid-cols-3' :
              'md:grid-cols-2 lg:grid-cols-4'
            }`}>
              {tier.members.map((sponsor, sponsorIndex) => (
                <a
                  key={sponsorIndex}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-8 text-center hover:bg-[#2a2a2a]/70 transition-all duration-300 hover:scale-105 group h-40 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center h-full">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className={`${sponsor.name === 'Prokom' ? 'h-32' : 'h-24'} w-auto object-contain mx-auto`}
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
