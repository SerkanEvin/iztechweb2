import { Zap, Gauge, Weight, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Vehicles = () => {
  const { t } = useTranslation();

  const vehicles = [
    {
      name: "Freakmobile",
      category: t('vehicles.categories.formulaStudent', "Formula Student"),
      year: "2024-2025",
      image: "/freakmobile.jpg",
      specs: {
        power: "2.5HP",
        weight: "250 Kg",
        topSpeed: "35 km/h",
        acceleration: "4.1s"
      },
      features: [
        t('vehicles.features.openDifferential', "Open Differential"),
        t('vehicles.features.doubleWishbone', "Double Wishbone Suspension System"),
        t('vehicles.features.aluminumWheels', "13 Inch Aluminum Wheels"),
        t('vehicles.features.studentDisplay', "Student Designed Display and Datalogger")
      ],
      description: t('vehicles.descriptions.freakmobile', "Dehşetsel")
    },
    {
      name: "Corsa",
      category: t('vehicles.categories.prototypeDevelopment', "Prototype Development"),
      year: "2025-2026",
      image: "/doruk.jpg",
      specs: {
        power: "6 HP",
        weight: "250kg",
        topSpeed: "40km/h",
        acceleration: "9.2s"
      },
      features: [
        t('vehicles.features.spaceFrame', "Space type cage chassis, S235JR steel pipe"),
        t('vehicles.features.decoupledSuspension', "Decoupled suspension"),
        t('vehicles.features.coolingSystem', "Custom made cooling system"),
        t('vehicles.features.comingSoon', "Coming soon...")
      ],
      description: t('vehicles.descriptions.comingSoon', "Coming Soon...")
    },
    {
      name: "Doruk",
      category: t('vehicles.categories.mainCarDevelopment', "Formula Student Main Car Development"),
      year: "2025-2026",
      image: "/doruk.jpg",
      specs: {
        power: "80HP",
        weight: "220kg",
        topSpeed: "100km/h",
        acceleration: "3.0s"
      },
      features: [
        t('vehicles.features.spaceFrame', "4130 steel space frame chassis"),
        t('vehicles.features.aeroPackage', "Student-designed aerodynamic package: Front and rear wing, Diffuser, Sidepods"),
        t('vehicles.features.lsdDifferential', "LSD Differential"),
        t('vehicles.features.suspension', "Double wishbone suspension")
      ],
      description: t('vehicles.descriptions.comingSoon', "Coming Soon...")
    }
  ];

  return (
      <section id="vehicles" className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('vehicles.title', "Our Vehicles")}
            </h2>
            <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
              {t('vehicles.description')}
            </p>
          </div>

          <div className="space-y-16">
            {vehicles.map((vehicle, index) => (
                <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                >
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                      <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-[#a02638] text-white px-4 py-2 rounded-lg font-semibold">
                      {vehicle.year}
                    </div>
                  </div>

                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <div className="inline-block bg-[#a02638]/20 text-[#a02638] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        {vehicle.category}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{vehicle.name}</h3>
                      <p className="text-[#cccccc] leading-relaxed mb-6">
                        {vehicle.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Zap className="w-5 h-5 text-[#a02638] mr-2" />
                          <span className="text-[#cccccc] text-sm">
                        {t('vehicles.specs.power', "Power")}
                      </span>
                        </div>
                        <div className="text-white font-bold text-lg">{vehicle.specs.power}</div>
                      </div>
                      <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Weight className="w-5 h-5 text-[#a02638] mr-2" />
                          <span className="text-[#cccccc] text-sm">
                        {t('vehicles.specs.weight', "Weight")}
                      </span>
                        </div>
                        <div className="text-white font-bold text-lg">{vehicle.specs.weight}</div>
                      </div>
                      <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Gauge className="w-5 h-5 text-[#a02638] mr-2" />
                          <span className="text-[#cccccc] text-sm">
                        {t('vehicles.specs.topSpeed', "Top Speed")}
                      </span>
                        </div>
                        <div className="text-white font-bold text-lg">{vehicle.specs.topSpeed}</div>
                      </div>
                      <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Settings className="w-5 h-5 text-[#a02638] mr-2" />
                          <span className="text-[#cccccc] text-sm">
                        {t('vehicles.specs.acceleration', "0-35 km/h")}
                      </span>
                        </div>
                        <div className="text-white font-bold text-lg">{vehicle.specs.acceleration}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">
                        {t('vehicles.keyFeatures', "Key Features")}
                      </h4>
                      <ul className="space-y-2">
                        {vehicle.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-[#cccccc]">
                              <div className="w-2 h-2 bg-[#a02638] rounded-full mr-3"></div>
                              {feature}
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Vehicles;