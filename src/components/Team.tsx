import React, { useMemo } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type SocialLinks = {
  linkedin: string;
  email: string;
  github?: string;
  instagram?: string;
};

interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  social: SocialLinks;
}

type TeamCategory = keyof typeof TEAM_CATEGORIES;

const TEAM_CATEGORIES = {
  'roles.team_captain': 'Team Captain',
  'roles.electronics_software_team_leader': 'Electronics & Software Team',
  'roles.vehicle_dynamics_team_leader': 'Vehicle Dynamics Team',
  'roles.chassis_ergonomics_team_leader': 'Chassis & Ergonomics Team',
  'roles.powertrain_team_leader': 'Powertrain Team',
  'roles.aerodynamics_team_leader': 'Aerodynamics Team',
  'roles.organization_team_leader': 'Organization Team',
  'roles.business_team_leader': 'Business Development',
  'others': 'Other Team Members'
} as const;

const Team: React.FC = () => {
  const { t } = useTranslation();

  const getImagePath = (filename: string): string => {
    try {
      const cleanName = filename.replace(/^[\/\\]|\.[^/.]+$/g, '').toUpperCase();
      return `/${cleanName}.png`;
    } catch (error) {
      console.error('Error processing image path:', error);
      return '/insan.png';
    }
  };
  
  const teamMembers: TeamMember[] = [
    {
      name: "Hüseyin Poyraz Kocamış",
      role: t('roles.team_captain'),
      department: t('departments.civil_engineering'),
      image: getImagePath("/POYRAZ.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/poyrazkocamis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
      }
    },
    {
      name: "Serkan Doğan Evin",
      role: t('roles.electronics_software_team_leader'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/SERKAN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/serkan-do%C4%9Fan-evin-7569a61b8/",
        email: "@iztechracing.com",
        instagram: "#"
      }
    },
    {
      name: "Emre Canbaz",
      role: t('roles.vehicle_dynamics_team_leader'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/EMRE.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/emre-canbaz-30b087335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Onur Şen",
      role: t('roles.powertrain_team_leader'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/ONUR.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/onur-%C5%9Fen-b87b50239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Efe Yıldırım",
      role: t('roles.aerodynamics_team_leader'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/EFE.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/efeyldrm/",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Ödül Yarkın Baran",
      role: t('roles.organization_team_leader'),
      department: t('departments.photonics_department'),
      image: getImagePath("/ODULYARKINBARAN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/odulyarkinbaran/",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Ahmet Duha Aydın",
      role: t('roles.chassis_ergonomics_team_leader'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/DUHA.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/ahmet-duha-aydin-b81b98244",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Altay Alp",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.electronics_&_communication_engineering'),
      image: getImagePath("/ALTAYALP.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/altay-alp-4225bb251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Arda Onuk",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.mathematics_department'),
      image: getImagePath("/ARDAONUK.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/arda-onuk-8247b5352/",
        email: "ardaonuk9995@gmail.com",
        github: "#"
      }
    },
    {
      name: "Berkant Süren",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.materials_engineering'),
      image: getImagePath("/BERKANT.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/berkant-suren?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Arda Keskin",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.energy_systems_engineering'),
      image: getImagePath("/ARDAKESKIN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/arda-keskin-ba7b36230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Arda Akpolat",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/ARDAAKPOLAT.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/arda-akpolat-444a51315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Senanur Günay",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.computer_engineering'),
      image: getImagePath("/SENANUR.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/senanur-g%C3%BCnay-94172431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Beren Alptekin",
      role: t('roles.organization_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/insan.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/beren-alptekin-71b6a5343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Tarık Alperen Öcal",
      role: t('roles.powertrain_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/TARIKALPERENOCAL.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/tar%C4%B1k-alperen-%C3%B6cal-32b8722b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Yağız Yalçın",
      role: t('roles.powertrain_team_member'),
      department: t('departments.energy_systems_engineering'),
      image: getImagePath("/YAGIZYALCIN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/yagizyalcin00?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "alex@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Batuhan Elmaoğlu",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/BATU.png"),
      social: {
        linkedin: "http://www.linkedin.com/in/batuhan-elmaoğlu-338185296",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Eren Uruş",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/ERENURUS.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/erenurus",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Eren Karasakal",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/ERENKARASAKAL.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/eren-karasakal-406769342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Tuğçe Özcan",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.materials_engineering'),
      image: getImagePath("/TUGCE.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/tu%C4%9F%C3%A7e-%C3%B6zcan-0a9b1a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Nevzat Ediz Burçoğlu",
      role: t('roles.powertrain_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/EDIZ.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/nevzatedizburcoglu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Kerem Katrancı",
      role: t('roles.powertrain_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/KEREM.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/kerem-katranc%C4%B1-33294a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Emir Yaşa",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/EMIRYASA.png"),
      social: {
        linkedin: " https://www.linkedin.com/in/emir-ya%C5%9Fa-344460343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app,",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Tuna Kurban",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/TUNAKURBAN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/tuna-kurban-147606286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Hakan Şendaldal",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/HAKAN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/hakan-%C5%9Fendaldal-9b9688251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Khayal Musayev",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/KHAYAL.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/khayal-musayev-98b769343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Sinan Efe Bayrak",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: getImagePath("/SiNANEFE.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/sinan-efe-bayrak-578419331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Kuzey Demirer",
      role: t('roles.business_team_member'),
      department: t('departments.industrial_design'),
      image: getImagePath("/KUZEY.png"),
      social: {
        linkedin: "https://tr.linkedin.com/in/kuzey-demirer-76577a260",
        email: "@iztechracing.com",
        github: "#"
      }
    }
  ];

  const categorizedMembers = useMemo(() => {
    return teamMembers.reduce((acc, member) => {
      // Find the category key that matches the member's role
      const categoryKey = Object.keys(TEAM_CATEGORIES).find(
        key => member.role === t(key)
      ) || 'others';
      
      if (!acc[categoryKey as TeamCategory]) {
        acc[categoryKey as TeamCategory] = [];
      }
      acc[categoryKey as TeamCategory].push(member);
      return acc;
    }, {} as Record<TeamCategory, TeamMember[]>);
  }, [teamMembers, t]);

  return (
    <section id="team" className="py-20 bg-[#0f0f0f] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('team.title')}
          </h2>
          <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
            {t('team.description')}
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {Object.entries(categorizedMembers).map(([category, members]) => (
            <div key={category} className="w-full max-w-6xl mx-auto bg-[#1a1a1a]/70 border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {members.map((member, index) => (
                  <div key={index} className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-72">
                    <div className="relative h-64 w-full bg-[#1a1a1a] flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-opacity duration-300"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.src !== '/insan.png') {
                              target.src = '/insan.png';
                            }
                          }}
                          onLoad={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.classList.add('opacity-100');
                          }}
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            {member.role}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-[#a02638] font-semibold">{member.role}</p>
                      <p className="text-[#cccccc] text-sm">{member.department}</p>
                      <div className="flex justify-center gap-3 mt-3">
                        <a 
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href={`mailto:${member.social.email}`}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;