import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PlaceholderImage } from './PlaceholderImage';


// Define the team member type
interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  social: {
    linkedin: string;
    email: string;
    github?: string;
    instagram?: string;
  };
}

// Function to get team categories with translations
const getTeamCategories = (t: any) => ({
  // Team Categories with their display names
  'Team Captain': t('team.captain'),
  'Electronics & Software Team Leader': t('team.electronics_software_team'),
  'Vehicle Dynamics Team Leader': t('team.vehicle_dynamics_team'),
  'Chassis & Ergonomics Team Leader': t('team.chassis_ergonomics_team'),
  'Powertrain Team Leader': t('team.powertrain_team'),
  'Aerodynamics Team Leader': t('team.aerodynamics_team'),
  'Organization Team Leader': t('team.organization_team'),
  'Business Development': t('team.business_development_team'),
  // Add member roles that should be grouped with their respective teams
  'Electronics & Software Team Member': t('team.electronics_software_team'),
  'Chassis & Ergonomics Team Member': t('team.chassis_ergonomics_team'),
  'Vehicle Dynamics Team Member': t('team.vehicle_dynamics_team'),
  'Powertrain Team Member': t('team.powertrain_team'),
  'Aerodynamics Team Member': t('team.aerodynamics_team'),
  'Organization Team Member': t('team.organization_team')
});

interface CategorizedTeamMembers {
  [category: string]: TeamMember[];
}

const Team = () => {
  const { t } = useTranslation();

  // Get team categories with translations
  const teamCategories = getTeamCategories(t);

  // Team members data
  const teamMembers: TeamMember[] = [
    // ... team members data
  ];

  // Categorize team members by their role
  const categorizedTeam: CategorizedTeamMembers = {};

  teamMembers.forEach((member) => {
    // Normalize the role to match our categories (handle both leader and member roles)
    let category = member.role;
    if (member.role.endsWith('Team Member')) {
      category = member.role.replace('Team Member', 'Team Leader');
    }

    // Only add if the category exists in our team categories
    if ((teamCategories as any)[category] !== undefined) {
      if (!categorizedTeam[category]) {
        categorizedTeam[category] = [];
      }
      categorizedTeam[category].push(member);
    } else {
      console.warn(`No category found for role: ${member.role}`);
    }
  });

  // Convert categorized team to sections
  const teamSections = Object.entries(categorizedTeam).map(([title, members]) => ({ title, members }));

  return (
    <section id="team" className="py-20 bg-[#0f0f0f] relative">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('team.title')}
          </h2>
          <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
            {t('team.description')}
          </p>
        </div>

        {/* Kategorileri alt alta basma */}
        {teamSections.map(({ title, members }) => (
          <div key={title} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="w-[250px] sm:w-[220px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:bg-[#1a1a1a]/90 transition-all duration-300 hover:scale-105 group"
                >
                  {/* Görsel */}
                  <div className="relative overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <PlaceholderImage
                        src={member.image.startsWith('http') ? member.image : member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-100"
                        width={250}
                        height={256}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>

                  {/* Bilgiler */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-[#a02638] font-semibold">
                      {t(`roles.${member.role.toLowerCase().replace(/\s+/g, '_')}`, { defaultValue: member.role })}
                    </p>
                    <p className="text-[#cccccc] text-sm">
                      {t(`departments.${member.department.toLowerCase().replace(/\s+/g, '_').replace(/&/g, 'and')}`, { defaultValue: member.department })}
                    </p>
                    <div className="flex justify-center gap-3 mt-3">
                      <a
                        href={member.social.linkedin}
                        className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#a02638] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#a02638] transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;