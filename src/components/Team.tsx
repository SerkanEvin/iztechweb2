import React, { useMemo } from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Types
type SocialLinks = {
  linkedin: string;
  email: string;
  github?: string;
  instagram?: string;
};

// Team role constants
const TEAM_ROLES = {
  TEAM_CAPTAIN: 'team_caption',
  ELECTRONICS_SOFTWARE_LEADER: 'electronics_software_team_leader',
  ELECTRONICS_SOFTWARE_MEMBER: 'electronics_software_team_member',
  VEHICLE_DYNAMICS_LEADER: 'vehicle_dynamics_team_leader',
  VEHICLE_DYNAMICS_MEMBER: 'vehicle_dynamics_team_member',
  CHASSIS_ERGONOMICS_LEADER: 'chassis_ergonomics_team_leader',
  CHASSIS_ERGONOMICS_MEMBER: 'chassis_ergonomics_team_member',
  POWERTRAIN_LEADER: 'powertrain_team_leader',
  POWERTRAIN_MEMBER: 'powertrain_team_member',
  AERODYNAMICS_LEADER: 'aerodynamics_team_leader',
  AERODYNAMICS_MEMBER: 'aerodynamics_team_member',
  ORGANIZATION_LEADER: 'organization_team_leader',
  ORGANIZATION_MEMBER: 'organization_team_member',
  BUSINESS_DEVELOPMENT_LEADER: 'business_development_leader',
  BUSINESS_DEVELOPMENT_MEMBER: 'business_development_member',
} as const;

type TeamRole = (typeof TEAM_ROLES)[keyof typeof TEAM_ROLES];

type TeamCategory = 
  | 'team.captain'
  | 'team.electronics_software_team'
  | 'team.vehicle_dynamics_team'
  | 'team.chassis_ergonomics_team'
  | 'team.powertrain_team'
  | 'team.aerodynamics_team'
  | 'team.organization_team'
  | 'team.business_development_team';

interface TeamMember {
  name: string;
  role: TeamRole;
  department: string;
  image: string;
  social: SocialLinks;
}


// Map team roles to their display categories
const TEAM_CATEGORIES: Record<TeamRole, TeamCategory> = {
  'team_caption': 'team.captain',
  'electronics_software_team_leader': 'team.electronics_software_team',
  'electronics_software_team_member': 'team.electronics_software_team',
  'vehicle_dynamics_team_leader': 'team.vehicle_dynamics_team',
  'vehicle_dynamics_team_member': 'team.vehicle_dynamics_team',
  'chassis_ergonomics_team_leader': 'team.chassis_ergonomics_team',
  'chassis_ergonomics_team_member': 'team.chassis_ergonomics_team',
  'powertrain_team_leader': 'team.powertrain_team',
  'powertrain_team_member': 'team.powertrain_team',
  'aerodynamics_team_leader': 'team.aerodynamics_team',
  'aerodynamics_team_member': 'team.aerodynamics_team',
  'organization_team_leader': 'team.organization_team',
  'organization_team_member': 'team.organization_team',
  'business_development_leader': 'team.business_development_team',
  'business_development_member': 'team.business_development_team',
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

// Helper function to safely get role from translation
const getRole = (t: (key: string) => string, roleKey: TeamRole): string => {
  const roleTranslationKey = `roles.${roleKey}`;
  const translation = t(roleTranslationKey);
  return translation === roleTranslationKey ? roleKey : translation;
};

const TeamMemberCard: React.FC<{ member: TeamMember; t: (key: string) => string }> = ({ member, t }) => (
  <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative h-64 w-full bg-black">
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
          {getRole(t, member.role)}
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

type TeamMemberInput = Omit<TeamMember, 'role'> & { 
  role: string;
};

// Define the Team component
const Team: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  
  // Helper function to validate team role
  const isValidTeamRole = (role: string): role is TeamRole => {
    // Check if it's a direct role key
    if (Object.values(TEAM_ROLES).includes(role as TeamRole)) {
      return true;
    }
    
    // Check if it's a translated role (English or Turkish)
    const translatedRoles = [
      t('roles.team_captain'),
      t('roles.electronics_software_team_leader'),
      t('roles.electronics_software_team_member'),
      t('roles.vehicle_dynamics_team_leader'),
      t('roles.vehicle_dynamics_team_member'),
      t('roles.chassis_ergonomics_team_leader'),
      t('roles.chassis_ergonomics_team_member'),
      t('roles.powertrain_team_leader'),
      t('roles.powertrain_team_member'),
      t('roles.aerodynamics_team_leader'),
      t('roles.aerodynamics_team_member'),
      t('roles.organization_team_leader'),
      t('roles.organization_team_member'),
      t('roles.business_development_leader'),
      t('roles.business_development_member')
    ];
    
    return translatedRoles.includes(role);
  };
  
  // Process team members with type safety
  const processTeamMember = (member: TeamMemberInput): TeamMember | null => {
    // If role is a translated string, find the corresponding role key
    let roleKey = member.role;
    if (!Object.values(TEAM_ROLES).includes(member.role as TeamRole)) {
      // Try to find the role key that matches the translated role
      const foundRole = Object.entries({
        team_caption: t('roles.team_captain'),
        electronics_software_team_leader: t('roles.electronics_software_team_leader'),
        electronics_software_team_member: t('roles.electronics_software_team_member'),
        vehicle_dynamics_team_leader: t('roles.vehicle_dynamics_team_leader'),
        vehicle_dynamics_team_member: t('roles.vehicle_dynamics_team_member'),
        chassis_ergonomics_team_leader: t('roles.chassis_ergonomics_team_leader'),
        chassis_ergonomics_team_member: t('roles.chassis_ergonomics_team_member'),
        powertrain_team_leader: t('roles.powertrain_team_leader'),
        powertrain_team_member: t('roles.powertrain_team_member'),
        aerodynamics_team_leader: t('roles.aerodynamics_team_leader'),
        aerodynamics_team_member: t('roles.aerodynamics_team_member'),
        organization_team_leader: t('roles.organization_team_leader'),
        organization_team_member: t('roles.organization_team_member'),
        business_development_leader: t('roles.business_development_leader'),
        business_development_member: t('roles.business_development_member')
      }).find(([_, value]) => value === member.role);
      
      if (foundRole) {
        roleKey = foundRole[0];
      } else {
        console.warn(`Invalid role: ${member.role}`);
        return null;
      }
    }
    
    return {
      ...member,
      role: roleKey as TeamRole
    };
  };

  // Helper function to get image path with fallback
  const getImagePath = (filename: string): string => {
    // Remove leading slash and extension, convert to uppercase
    const name = filename.replace(/^\//, '').replace(/\.\w+$/, '').toUpperCase();
    // Check if the file has an extension, if not default to .png
    const hasExtension = /\.\w+$/.test(filename);
    const ext = hasExtension ? filename.split('.').pop() : 'png';
    return `/${name}.${ext}`;
  };

  // Team member data with proper typing
  const teamMembers: TeamMemberInput[] = [
    {
      name: "Hüseyin Poyraz Kocamış",
      role: 'team_caption',
      department: t('departments.civil_engineering'),
      image: getImagePath("POYRAZ"),
      social: {
        linkedin: "https://www.linkedin.com/in/poyrazkocamis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "poyrazkocamis@iztechracing.com",
      }
    },
    {
      name: "Serkan Doğan Evin",
      role: 'electronics_software_team_leader',
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
      role: 'vehicle_dynamics_team_leader',
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
      role: 'powertrain_team_leader',
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
      role: 'aerodynamics_team_leader',
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
      role: 'organization_team_leader',
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
      role: 'electronics_software_team_member',
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
      role: 'electronics_software_team_member',
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
      role: 'chassis_ergonomics_team_member',
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
      role: 'vehicle_dynamics_team_member',
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
      role: 'vehicle_dynamics_team_member',
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
      role: 'electronics_software_team_member',
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
      role: 'organization_team_member',
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
      role: 'powertrain_team_member',
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
      role: 'powertrain_team_member',
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
      role: 'aerodynamics_team_member',
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
      role: 'aerodynamics_team_member',
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
      role: 'chassis_ergonomics_team_member',
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
      role: 'chassis_ergonomics_team_member',
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
      role: 'powertrain_team_member',
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
      role: 'powertrain_team_member',
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
      role: 'vehicle_dynamics_team_member',
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
      role: 'vehicle_dynamics_team_member',
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
      role: 'vehicle_dynamics_team_member',
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
      role: 'chassis_ergonomics_team_member',
      department: t('departments.mechanical_engineering'),
      image: getImagePath("KHAYAL"),
      social: {
        linkedin: "https://www.linkedin.com/in/khayal-musayev-98b769343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Sinan Efe Bayrak",
      role: 'aerodynamics_team_member',
      department: t('departments.mechanical_engineering'),
      image: getImagePath("SiNANEFE"),
      social: {
        linkedin: "#",
        email: "@iztechracing.com"
      }
    }
  ];

  const { sortedCategories } = useMemo<{ sortedCategories: Array<{ category: TeamCategory; members: TeamMember[] }> }>(() => {
    // Process and validate team members
    const validMembers = teamMembers
      .map(processTeamMember)
      .filter((member): member is TeamMember => member !== null);

    // Categorize members by role
    const categories = validMembers.reduce((acc, member) => {
      const categoryKey = TEAM_CATEGORIES[member.role as TeamRole];
      
      if (!categoryKey) {
        console.warn(`No category found for role: ${member.role}`);
        return acc;
      }
      
      if (!acc.has(categoryKey)) {
        acc.set(categoryKey, []);
      }
      acc.get(categoryKey)?.push(member);
      return acc;
    }, new Map<TeamCategory, TeamMember[]>());

    // Sort categories and members within each category
    const categoryOrder: TeamCategory[] = [
      'team.captain',
      'team.electronics_software_team',
      'team.vehicle_dynamics_team',
      'team.chassis_ergonomics_team',
      'team.powertrain_team',
      'team.aerodynamics_team',
      'team.organization_team',
      'team.business_development_team'
    ];

    const sorted = Array.from(categories.entries())
      .map(([category, members]) => ({
        category,
        members: [...members].sort((a, b) => {
          const aIsLeader = a.role.endsWith('_leader') || a.role === 'team_caption';
          const bIsLeader = b.role.endsWith('_leader') || b.role === 'team_caption';
          
          if (aIsLeader && !bIsLeader) return -1;
          if (!aIsLeader && bIsLeader) return 1;
          return a.name.localeCompare(b.name);
        })
      }))
      .sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));

    return { sortedCategories: sorted } as const;
  }, [teamMembers, t]);

  return (
    <section id="team" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
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
                {t(`team.${category.split('.')[1]}`)}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {members.map((member) => (
                  <TeamMemberCard key={`${member.name}-${member.role}`} member={member} t={t} />
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