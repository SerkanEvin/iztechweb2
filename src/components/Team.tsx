import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

interface TeamCategory {
  name: string;
  members: TeamMember[];
}

const Team = () => {
  const { t } = useTranslation();

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Hüseyin Poyraz Kocamış",
      role: t("Team Captain"),
      department: t("Civil Engineering"),
      image: "/POYRAZ.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/poyrazkocamis",
        email: "huseyinkocamis@std.iyte.edu.tr"
      }
    },
    {
      name: "Serkan Doğan Evin",
      role: t("Electronics & Software"),
      department: t("Mechanical Engineering"),
      image: "/SERKAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/serkan-doğan-evin-7569a61b8/",
        email: "@iztechracing.com",
        instagram: "#"
      }
    },
    {
      name: "Kuzey Demirer",
      role: t('Business Development'),
      department: t('Industrial Design'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://tr.linkedin.com/in/kuzey-demirer-76577a260",
        email: "@iztechracing.com",
        github: "#"
      }
    }
  ];

  // Categorize team members
  const teamCategories: TeamCategory[] = [
    {
      name: t('team.captain'),
      members: teamMembers.filter((member) => member.role === t("Team Captain"))
    },
    {
      name: t('team.electronics_software_team'),
      members: teamMembers.filter((member) => member.role === t("Electronics & Software"))
    },
    {
      name: t('team.vehicle_dynamics_team'),
      members: teamMembers.filter((member) => member.role === t("Vehicle Dynamics"))
    },
    {
      name: t('team.chassis_ergonomics_team'),
      members: teamMembers.filter((member) => member.role === t("Chassis & Ergonomics"))
    },
    {
      name: t('team.powertrain_team'),
      members: teamMembers.filter((member) => member.role === t("Powertrain"))
    },
    {
      name: t('team.aerodynamics_team'),
      members: teamMembers.filter((member) => member.role === t("Aerodynamics"))
    },
    {
      name: t('team.organization_team'),
      members: teamMembers.filter((member) => member.role === t("Organization"))
    },
    {
      name: t('team.business_development_team'),
      members: teamMembers.filter((member) => member.role === t("Business Development"))
    }
  ].filter((category) => category.members.length > 0);

  return (
    <section id="team" className="py-20 bg-[#0f0f0f] relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('team.title')}
          </h2>
          <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
            {t('team.description')}
          </p>
        </div>

        {/* Team Categories */}
        <div className="space-y-20">
          {teamCategories.map((category) => (
            <div key={category.name} className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.members.map((member) => (
                  <div 
                    key={member.name}
                    className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-64 overflow-hidden">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder-user.jpg";
                          }}
                        />
                      ) : (
                        <img
                          src="/insan.png"
                          alt="Team member placeholder"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                      <p className="text-[#a0a0a0] text-sm mb-3">{member.role}</p>
                      <p className="text-[#888] text-sm mb-4">{member.department}</p>
                      
                      <div className="flex space-x-3">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#0077b5] transition-colors duration-200"
                          >
                            <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={`mailto:${member.social.email}`}
                            className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#a02638] transition-colors duration-200"
                          >
                            <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
                          </a>
                        )}
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