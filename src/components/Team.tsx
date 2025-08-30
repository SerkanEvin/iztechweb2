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


const TeamCategories = () => {
  const { t } = useTranslation();
  
  return {
    "Team Captain": t('team.captain'),
    "Electronics & Software": t('team.electronics_software_team'),
    "Vehicle Dynamics": t('team.vehicle_dynamics_team'),
    "Chassis & Ergonomics": t('team.chassis_ergonomics_team'),
    "Powertrain": t('team.powertrain_team'),
    "Aerodynamics": t('team.aerodynamics_team'),
    "Organization": t('team.organization_team'),
    "Business Development": t('team.business_development_team'),
  };
};

interface CategorizedTeamMembers {
  [category: string]: TeamMember[];
}

const Team = () => {
  const { t } = useTranslation();
  // Remove image preloading state since we're using direct paths

  const teamMembers: TeamMember[] = [
    {
      name: "Hüseyin Poyraz Kocamış",
      role: t("Team Captain"),
      department: t("Civil Engineering"),
      image: "/POYRAZ.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/poyrazkocamis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "huseyinkocamis@std.iyte.edu.tr",
      }
    },
    {
      name: "Serkan Doğan Evin",
      role: t("Electronics & Software Team Leader"),
      department: t("Mechanical Engineering"),
      image: "/SERKAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/serkan-do%C4%9Fan-evin-7569a61b8/",
        email: "@iztechracing.com",
        instagram: "#"
      }
    },
    {
      name: "Emre Canbaz",
      role: t("Vehicle Dynamics Team Leader"),
      department: t("Mechanical Engineering"),
      image: "/EMRE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/emre-canbaz-30b087335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "canbazemre24@gmail.com",
        github: "#"
      }
    },
    {
      name: "Onur Şen",
      role: t("Powertrain Team Leader"),
      department: t("Mechanical Engineering"),
      image: "/ONUR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/onur-%C5%9Fen-b87b50239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "onursen4405@gmail.com ",
        github: "#"
      }
    },
    {
      name: "Efe Yıldırım",
      role: t('roles.aerodynamics_team_leader'),
      department: t('departments.mechanical_engineering'),
      image: "/EFE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/efeyldrm/",
        email: "efeyildirim04@gmail.com",
        github: "#"
      }
    },
    {
      name: "Ödül Yarkın Baran",
      role: t('roles.organization_team_leader'),
      department: t('departments.photonics_department'),
      image: "/YARKIN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/odulyarkinbaran/",
        email: "yarknbaran35@gmail.com",
        github: "#"
      }
    },
    {
      name: "Ahmet Duha Aydın",
      role: t('roles.chassis_ergonomics_team_leader'),
      department: t('departments.mechanical_engineering'),
      image: "/DUHA.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ahmet-duha-aydin-b81b98244",
        email: "ahmetduha45@gmail.com",
        github: "#"
      }
    },
    {
      name: "Altay Alp",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.electronics_&_communication_engineering'),
      image: "/ALTAYALP.webp",
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
      image: "/ARDAONUK.webp",
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
      image: "/BERKANT.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/berkant-suren?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "berkantsuren1@gmail.com",
        github: "#"
      }
    },
    {
      name: "Arda Keskin",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.energy_systems_engineering'),
      image: "/ARDAKESKIN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-keskin-ba7b36230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "ardakeskin855@gmail.com",
        github: "#"
      }
    },
    {
      name: "Arda Akpolat",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/ARDAAKPOLAT.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-akpolat-444a51315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: " ardaakpolat95@gmail.com",
        github: "#"
      }
    },
    {
      name: "Senanur Günay",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.computer_engineering'),
      image: "/SENANUR.webp",
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
      image: "/insan.webp",
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
      image: "/TARIKALPERENOCAL.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/tar%C4%B1k-alperen-%C3%B6cal-32b8722b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "tarikalperenocal@gmail.com",
        github: "#"
      }
    },
    {
      name: "Yağız Yalçın",
      role: t('roles.powertrain_team_member'),
      department: t('departments.energy_systems_engineering'),
      image: "/YAGIZ.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/yagizyalcin00?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "yagiz10yalcin@gmail.com",
        github: "#"
      }
    },
    {
      name: "Batuhan Elmaoğlu",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/BATU.webp",
      social: {
        linkedin: "http://www.linkedin.com/in/batuhan-elmaoğlu-338185296",
        email: "batuhanelmaoglu@gmail.com",
        github: "#"
      }
    },
    {
      name: "Eren Uruş",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/ERENURUS.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/erenurus",
        email: "uruseren07@gmail.com",
        github: "#"
      }
    },
    {
      name: "Eren Karasakal",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/ERENKARASAKAL.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/eren-karasakal-406769342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "erenkarasakal280@gmail.com",
        github: "#"
      }
    },
    {
      name: "Tuğçe Özcan",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.materials_engineering'),
      image: "/TUĞÇE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/tu%C4%9F%C3%A7e-%C3%B6zcan-19738133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "tugceozcn0409@gmail.com",
        github: "#"
      }
    },
    {
      name: "Nevzat Ediz Burçoğlu",
      role: t('roles.powertrain_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/Ediz.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/nevzatedizburcoglu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "n.edizburcoglu@hotmail.com",
        github: "#"
      }
    },
    {
      name: "Kerem Katrancı",
      role: t('roles.powertrain_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KEREM.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/kerem-katranc%C4%B1-33294a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "keremkatranci77@gmail.com",
        github: "#"
      }
    },
    {
      name: "Emir Yaşa",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/Emir.webp",
      social: {
        linkedin: " https://www.linkedin.com/in/emir-ya%C5%9Fa-344460343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app,",
        email: "emhyr.emir@gmail.com",
        github: "#"
      }
    },
    {
      name: "Tuna Kurban",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/TUNAKURBAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/tuna-kurban-147606286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "tunakurban35@gmail.com",
        github: "#"
      }
    },
    {
      name: "Hakan Şendaldal",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/HAKAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/hakan-%C5%9Fendaldal-9b9688251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "hakan_sendaldal@hotmail.com",
        github: "#"
      }
    },
    {
      name: "Khayal Musayev",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KHAYAL.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/khayal-musayev-98b769343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "rmsonaxe@mail.ru",
        github: "#"
      }
    },
    {
      name: "Sinan Efe Bayrak",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/SİNANEFE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/sinan-efe-bayrak-578419331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "s.efebayrak@yahoo.com.tr",
        github: "#"
      }
    },
    {
      name: "Kuzey Demirer",
      role: t('roles.business_team_member'),
      department: t('departments.industrial_design'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://tr.linkedin.com/in/kuzey-demirer-76577a260",
        email: "@iztechracing.com",
        github: "#"
      }
    }
  ];

  const categorizeTeamMembers = (members: TeamMember[]): CategorizedTeamMembers => {
    const categories: CategorizedTeamMembers = {};
    const teamCategories = TeamCategories();

    // First, find all team leaders and create their categories
    members.forEach(member => {
      if (member.role.includes('Team Leader')) {
        const teamName = member.role.replace(' Team Leader', '').trim();
        const categoryKey = Object.keys(teamCategories).find(key => 
          teamName.includes(key)
        );
        
        if (categoryKey) {
          const category = teamCategories[categoryKey as keyof typeof teamCategories];
          if (!categories[category]) {
            categories[category] = [];
          }
          // Add team leader as first member of their team
          categories[category].push(member);
        }
      }
    });

    // Then, add other team members to their respective categories
    members.forEach(member => {
      if (!member.role.includes('Team Leader') && member.role !== 'Team Captain') {
        // Try to find a matching category based on role or department
        const teamMatch = Object.keys(teamCategories).find(key => 
          member.department.includes(key) || 
          member.role.includes(key) ||
          (member.role.includes('Team Member') && 
           member.role.toLowerCase().includes(key.toLowerCase().replace(/\s+/g, '')))
        );
        
        if (teamMatch) {
          const category = teamCategories[teamMatch as keyof typeof teamCategories];
          if (category) {
            if (!categories[category]) {
              categories[category] = [];
            }
            categories[category].push(member);
          } else if (!categories['Others']) {
            categories['Others'] = [member];
          } else {
            categories['Others'].push(member);
          }
        } else if (member.role === 'Team Captain') {
          const captainCategory = teamCategories['Team Captain'];
          if (!categories[captainCategory]) {
            categories[captainCategory] = [];
          }
          categories[captainCategory].push(member);
        } else if (!Object.values(teamCategories).some(cat => 
          categories[cat]?.includes(member))) {
          if (!categories['Others']) {
            categories['Others'] = [];
          }
          categories['Others'].push(member);
        }
      }
    });

    // Add team captain if not already added
    const captain = members.find(m => m.role === 'Team Captain');
    if (captain) {
      const captainCategory = teamCategories['Team Captain'];
      if (!categories[captainCategory]) {
        categories[captainCategory] = [];
      }
      if (!categories[captainCategory].some(m => m.name === captain.name)) {
        categories[captainCategory].unshift(captain);
      }
    }

    return categories;
  };

  const groupedMembers = categorizeTeamMembers(teamMembers);
  const categories = Object.entries(groupedMembers);

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
          <div className="flex flex-col gap-16">
            {categories.map(([category, members]) => (
                <div
                    key={category}
                    className="w-full max-w-6xl mx-auto bg-[#1a1a1a]/70 border border-[#2a2a2a] rounded-xl p-6"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                    {category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-6">
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
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
        </div>
      </section>
  );
};

export default Team;