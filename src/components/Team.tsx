import React, { useMemo } from 'react';
import { Linkedin, Mail, Github, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Types
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

// Constants
const TEAM_CATEGORIES = {
  'roles.team_captain': 'Team Captain',
  'roles.electronics_software_team_leader': 'Electronics & Software Team',
  'roles.electronics_software_team_member': 'Electronics & Software Team',
  'roles.vehicle_dynamics_team_leader': 'Vehicle Dynamics Team',
  'roles.vehicle_dynamics_team_member': 'Vehicle Dynamics Team',
  'roles.chassis_ergonomics_team_leader': 'Chassis & Ergonomics Team',
  'roles.chassis_ergonomics_team_member': 'Chassis & Ergonomics Team',
  'roles.powertrain_team_leader': 'Powertrain Team',
  'roles.powertrain_team_member': 'Powertrain Team',
  'roles.aerodynamics_team_leader': 'Aerodynamics Team',
  'roles.aerodynamics_team_member': 'Aerodynamics Team',
  'roles.organization_team_leader': 'Organization Team',
  'roles.organization_team_member': 'Organization Team',
  'roles.business_team_leader': 'Business Development',
  'roles.business_team_member': 'Business Development'
} as const;

// Helper Components
const SocialIcons: React.FC<{ social: SocialLinks }> = ({ social }) => (
  <div className="flex justify-center space-x-4 mt-4">
    <a 
      href={social.linkedin} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      aria-label="LinkedIn"
    >
      <Linkedin size={20} />
    </a>
    <a 
      href={`mailto:${social.email}`} 
      className="text-gray-400 hover:text-white transition-colors"
      aria-label="Email"
    >
      <Mail size={20} />
    </a>
    {social.github && (
      <a 
        href={social.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
    )}
    {social.instagram && (
      <a 
        href={social.instagram} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
    )}
  </div>
);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative h-64 w-full bg-gray-800">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.src !== '/insan.png') {
            target.src = '/insan.png';
          }
        }}
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm">
          {member.role}
        </span>
      </div>
    </div>
    <div className="p-4 text-center">
      <h4 className="text-xl font-semibold text-white mb-1">
        {member.name}
      </h4>
      <p className="text-gray-400 text-sm mb-3">
        {member.department}
      </p>
      <SocialIcons social={member.social} />
    </div>
  </div>
);

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
      },
    },
  ];

  // Categorize team members by their roles
  const categorizedMembers = useMemo(() => {
    const categories = new Map<TeamCategory, TeamMember[]>();
    
    teamMembers.forEach(member => {
      // Find the best matching category for the member's role
      let categoryKey: TeamCategory | null = null;
      
      // First try exact match
      for (const [key] of Object.entries(TEAM_CATEGORIES)) {
        if (member.role === t(key)) {
          categoryKey = key as TeamCategory;
          break;
        }
      }
      
      // If no exact match, try partial match
      if (!categoryKey) {
        for (const [key] of Object.entries(TEAM_CATEGORIES)) {
          const teamName = t(key).split(' ')[0];
          if (member.role.includes(teamName)) {
            categoryKey = key as TeamCategory;
            break;
          }
        }
      }
      
      // Default to team_captain if no match found (shouldn't happen with our data)
      if (!categoryKey) {
        console.warn(`No category found for role: ${member.role}`);
        categoryKey = 'roles.team_captain';
      }
      
      // Add member to the category
      if (!categories.has(categoryKey)) {
        categories.set(categoryKey, []);
      }
      categories.get(categoryKey)?.push(member);
    });
    
    return categories;
  }, [teamMembers, t]);

  // Sort categories and team members
  const sortedCategories = useMemo(() => {
    return Array.from(categorizedMembers.entries())
      .map(([category, members]) => {
        // Sort members: leaders first, then by name
        const sortedMembers = [...members].sort((a, b) => {
          const aIsLeader = a.role.includes('Leader') || a.role.includes('Captain');
          const bIsLeader = b.role.includes('Leader') || b.role.includes('Captain');
          
          if (aIsLeader && !bIsLeader) return -1;
          if (!aIsLeader && bIsLeader) return 1;
          return a.name.localeCompare(b.name);
        });
        
        return { category, members: sortedMembers };
      })
      // Sort categories by the order in TEAM_CATEGORIES
      .sort((a, b) => {
        const orderA = Object.keys(TEAM_CATEGORIES).indexOf(a.category);
        const orderB = Object.keys(TEAM_CATEGORIES).indexOf(b.category);
        return orderA - orderB;
      });
  }, [categorizedMembers]);

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

        <div className="space-y-16">
          {sortedCategories.map(({ category, members }) => (
            <div key={category} className="w-full max-w-6xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                {t(TEAM_CATEGORIES[category as TeamCategory])}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {members.map((member, index) => (
                  <TeamMemberCard 
                    key={`${member.name}-${index}`} 
                    member={member} 
                  />
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