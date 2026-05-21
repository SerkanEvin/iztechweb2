import React from 'react';
import { useTranslation } from 'react-i18next';
import ElectronicsSoftware from './join/ElectronicsSoftware';
import VehicleDynamics from './join/VehicleDynamics';
import ChassisErgonomics from './join/ChassisErgonomics';
import Powertrain from './join/Powertrain';
import Aerodynamics from './join/Aerodynamics';
import Organization from './join/Organization';
import BusinessDevelopment from './join/BusinessDevelopment';

const JoinUs = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-black text-white">
      {/* Page Header */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('joinUs.title')}</h1>
        <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
          {t('joinUs.subtitle')}
        </p>
      </section>

      {/* 7 Full-page Sections stacked like the homepage composition */}
      <BusinessDevelopment />
      <Organization />
      <ElectronicsSoftware />
      <Aerodynamics />
      <Powertrain />
      <VehicleDynamics />
      <ChassisErgonomics />

      {/* Bottom Primary CTA */}
      <section className="relative z-10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="https://docs.google.com/forms/d/1hOF90R7Ma0psoUeRVyWk1qD1HjtKEWT91Q1KNJ1D8c8/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-52 py-4 rounded-xl bg-[#9a0e20] hover:bg-[#7a0b1a] text-white text-lg md:text-xl font-bold shadow-lg transition-colors"
          >
            {t('joinUs.applyButton')}
          </a>
        </div>
      </section>
    </main>
  );
};

export default JoinUs;

