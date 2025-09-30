import React from 'react';
import { useTranslation } from 'react-i18next';

const VehicleDynamics: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative py-24 min-h-[70vh] flex items-center bg-center bg-cover"
      style={{ backgroundImage: "url('/canbaz.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t('team.categories.vehicleDynamics')}
        </h2>
        <p className="text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto leading-relaxed">
          {t('joinUs.teams.vehicle_dynamics_team.description')}
        </p>
      </div>
    </section>
  );
};

export default VehicleDynamics;
