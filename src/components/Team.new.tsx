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

// Team role constants
const TEAM_ROLES = {
  TEAM_CAPTAIN: 'team_captain',
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
  BUSINESS_DEVELOPMENT_MEMBER: 'business_development_member'
} as const;

type TeamRole = (typeof TEAM_ROLES)[keyof typeof TEAM_ROLES];

type TeamCategory = 
  | 'team_categories.team_captain'
  | 'team_categories.electronics_software_team'
  | 'team_categories.vehicle_dynamics_team'
  | 'team_categories.chassis_ergonomics_team'
  | 'team_categories.powertrain_team'
  | 'team_categories.aerodynamics_team'
  | 'team_categories.organization_team'
  | 'team_categories.business_development_team';

interface TeamMember {
  name: string;
  role: TeamRole;
  department: string;
  image: string;
  social: SocialLinks;
}

type TeamMemberInput = Omit<TeamMember, 'role'> & { 
  role: string;
};

// Map team roles to their display categories
const TEAM_CATEGORIES: Record<TeamRole, TeamCategory> = {
  'team_captain': 'team_categories.team_captain',
  'electronics_software_team_leader': 'team_categories.electronics_software_team',
  'electronics_software_team_member': 'team_categories.electronics_software_team',
  'vehicle_dynamics_team_leader': 'team_categories.vehicle_dynamics_team',
  'vehicle_dynamics_team_member': 'team_categories.vehicle_dynamics_team',
  'chassis_ergonomics_team_leader': 'team_categories.chassis_ergonomics_team',
  'chassis_ergonomics_team_member': 'team_categories.chassis_ergonomics_team',
  'powertrain_team_leader': 'team_categories.powertrain_team',
  'powertrain_team_member': 'team_categories.powertrain_team',
  'aerodynamics_team_leader': 'team_categories.aerodynamics_team',
  'aerodynamics_team_member': 'team_categories.aerodynamics_team',
  'organization_team_leader': 'team_categories.organization_team',
  'organization_team_member': 'team_categories.organization_team',
  'business_development_leader': 'team_categories.business_development_team',
  'business_development_member': 'team_categories.business_development_team'
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
          {t(`roles.${member.role}`)}
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

  // Helper function to validate team role
  const isValidTeamRole = (role: string): role is TeamRole => {
    return Object.values(TEAM_ROLES).includes(role as TeamRole);
  };
  
  // Process team members with type safety
  const processTeamMember = (member: TeamMemberInput): TeamMember | null => {
    if (!isValidTeamRole(member.role)) {
      console.warn(`Invalid role: ${member.role}`);
      return null;
    }
    return {
      ...member,
      role: member.role as TeamRole
    };
  };

  // Helper function to get image path with fallback
  const getImagePath = (filename: string): string => {
    const basePath = '/photos';
    const name = filename.replace(/^\//, '').replace(/\.\w+$/, '');
    const ext = filename.split('.').pop() || 'png';
    return `${basePath}/${name.toUpperCase()}.${ext}`;
  };

  // Team member data with proper typing
  const teamMembers: TeamMemberInput[] = [
    // Add your team members here
    // Example:
    // {
    //   name: "John Doe",
    //   role: 'team_captain',
    //   department: t('departments.computer_engineering'),
    //   image: getImagePath("/john_doe.png"),
    //   social: {
    //     linkedin: "https://linkedin.com/in/johndoe",
    //     email: "john@example.com",
    //     github: "https://github.com/johndoe"
    //   }
    // }
  ];

  // Process and categorize team members
  const { sortedCategories } = useMemo(() => {
    // Process and validate team members
    const validMembers = teamMembers
      .map(processTeamMember)
      .filter((member): member is TeamMember => member !== null);

    // Categorize members by role
    const categories = validMembers.reduce((acc, member) => {
      const categoryKey = TEAM_CATEGORIES[member.role];
      
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
      'team_categories.team_captain',
      'team_categories.electronics_software_team',
      'team_categories.vehicle_dynamics_team',
      'team_categories.chassis_ergonomics_team',
      'team_categories.powertrain_team',
      'team_categories.aerodynamics_team',
      'team_categories.organization_team',
      'team_categories.business_development_team'
    ];

    const sorted = Array.from(categories.entries())
      .map(([category, members]) => ({
        category,
        members: [...members].sort((a, b) => {
          const aIsLeader = a.role.endsWith('_leader') || a.role === 'team_captain';
          const bIsLeader = b.role.endsWith('_leader') || b.role === 'team_captain';
          
          if (aIsLeader && !bIsLeader) return -1;
          if (!aIsLeader && bIsLeader) return 1;
          return a.name.localeCompare(b.name);
        })
      }))
      .sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));

    return { sortedCategories: sorted };
  }, [teamMembers, t]);

  return (
    <section className="py-16 bg-gray-900">
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
                {t(category)}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {members.map((member) => (
                  <TeamMemberCard key={member.name} member={member} t={t} />
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
