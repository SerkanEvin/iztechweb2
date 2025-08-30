import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PlaceholderImage } from './PlaceholderImage';

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

const Team = () => {
  const { t } = useTranslation();
  
  const teamCategories = {
    "Team Captain": t('team.captain'),
    "Electronics & Software": t('team.electronics_software_team'),
    "Vehicle Dynamics": t('team.vehicle_dynamics_team'),
    "Chassis & Ergonomics": t('team.chassis_ergonomics_team'),
    "Powertrain": t('team.powertrain_team'),
    "Aerodynamics": t('team.aerodynamics_team'),
    "Organization": t('team.organization_team'),
    "Business Development": t('team.business_development_team'),
  };

  const categorizeTeamMembers = (members: TeamMember[]) => {
    const categorized: Record<string, TeamMember[]> = {};
    
    members.forEach((member) => {
      const categoryKey = Object.keys(teamCategories).find(key => 
        member.role.includes(key)
      );
      const category = categoryKey ? teamCategories[categoryKey as keyof typeof teamCategories] : "Others";
      
      if (!categorized[category]) {
        categorized[category] = [];
      }
      categorized[category].push(member);
    });

    // Sort each category
    Object.values(categorized).forEach(team => {
      team.sort((a, b) => {
        if (a.role === t("Team Captain")) return -1;
        if (b.role === t("Team Captain")) return 1;
        return a.name.localeCompare(b.name);
      });
    });

    return categorized;
  };

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
      name: "Emre Canbaz",
      role: t("Vehicle Dynamics"),
      department: t("Mechanical Engineering"),
      image: "/EMRE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/emre-canbaz-30b087335",
        email: "canbazemre24@gmail.com",
        github: "#"
      }
    },
    {
      name: "Onur Şen",
      role: t("Powertrain"),
      department: t("Mechanical Engineering"),
      image: "/ONUR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/onur-%C5%9Fen-b87b50239",
        email: "onursen4405@gmail.com",
        github: "#"
      }
    },
    {
      name: "Efe Yıldırım",
      role: t('Aerodynamics'),
      department: t('Mechanical Engineering'),
      image: "/EFE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/efeyldrm/",
        email: "efeyildirim04@gmail.com",
        github: "#"
      }
    },
    {
      name: "Ödül Yarkın Baran",
      role: t('Organization'),
      department: t('Photonics Department'),
      image: "/YARKIN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/odulyarkinbaran/",
        email: "yarknbaran35@gmail.com",
        github: "#"
      }
    },
    {
      name: "Ahmet Duha Aydın",
      role: t('Chassis & Ergonomics'),
      department: t('Mechanical Engineering'),
      image: "/DUHA.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ahmet-duha-aydin-b81b98244",
        email: "ahmetduha45@gmail.com",
        github: "#"
      }
    },
    {
      name: "Altay Alp",
      role: t('Electronics & Software'),
      department: t('Electronics & Communication Engineering'),
      image: "/ALTAYALP.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/altay-alp-4225bb251",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Arda Onuk",
      role: t('Electronics & Software'),
      department: t('Mathematics Department'),
      image: "/ARDAONUK.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-onuk-8247b5352/",
        email: "ardaonuk9995@gmail.com",
        github: "#"
      }
    },
    {
      name: "Berkant Süren",
      role: t('Chassis & Ergonomics'),
      department: t('Materials Engineering'),
      image: "/BERKANT.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/berkant-suren",
        email: "berkantsuren1@gmail.com",
        github: "#"
      }
    },
    {
      name: "Arda Keskin",
      role: t('Vehicle Dynamics'),
      department: t('Energy Systems Engineering'),
      image: "/ARDAKESKIN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-keskin-ba7b36230",
        email: "ardakeskin855@gmail.com",
        github: "#"
      }
    },
    {
      name: "Arda Akpolat",
      role: t('Vehicle Dynamics'),
      department: t('Mechanical Engineering'),
      image: "/ARDAAKPOLAT.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-akpolat-444a51315",
        email: "ardaakpolat95@gmail.com",
        github: "#"
      }
    },
    {
      name: "Senanur Günay",
      role: t('Electronics & Software'),
      department: t('Computer Engineering'),
      image: "/SENANUR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/senanur-g%C3%BCnay-94172431b",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Beren Alptekin",
      role: t('Organization'),
      department: t('Mechanical Engineering'),
      image: "/insan.png",
      social: {
        linkedin: "https://www.linkedin.com/in/beren-alptekin-71b6a5343",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Tarık Alperen Öcal",
      role: t('Powertrain'),
      department: t('Mechanical Engineering'),
      image: "/TARIKALPERENOCAL.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/tar%C4%B1k-alperen-%C3%B6cal-32b8722b7",
        email: "tarikalperenocal@gmail.com",
        github: "#"
      }
    },
    {
      name: "Yağız Yalçın",
      role: t('Powertrain'),
      department: t('Energy Systems Engineering'),
      image: "/YAGIZ.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/yagizyalcin00",
        email: "yagiz10yalcin@gmail.com",
        github: "#"
      }
    },
    {
      name: "Batuhan Elmaoğlu",
      role: t('Aerodynamics'),
      department: t('Mechanical Engineering'),
      image: "/BATU.webp",
      social: {
        linkedin: "http://www.linkedin.com/in/batuhan-elmaoğlu-338185296",
        email: "batuhanelmaoglu@gmail.com",
        github: "#"
      }
    },
    {
      name: "Eren Uruş",
      role: t('Aerodynamics'),
      department: t('Mechanical Engineering'),
      image: "/ERENURUS.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/erenurus",
        email: "uruseren07@gmail.com",
        github: "#"
      }
    },
    {
      name: "Eren Karasakal",
      role: t('Chassis & Ergonomics'),
      department: t('Mechanical Engineering'),
      image: "/ERENKARASAKAL.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/eren-karasakal-406769342",
        email: "erenkarasakal280@gmail.com",
        github: "#"
      }
    },
    {
      name: "Tuğçe Özcan",
      role: t('Chassis & Ergonomics'),
      department: t('Materials Engineering'),
      image: "/TUGCE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/tu%C4%9F%C3%A7e-%C3%B6zcan-19738133b",
        email: "tugceozcn0409@gmail.com",
        github: "#"
      }
    },
    {
      name: "Nevzat Ediz Burçoğlu",
      role: t('Powertrain'),
      department: t('Mechanical Engineering'),
      image: "/EDIZ.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/nevzatedizburcoglu",
        email: "n.edizburcoglu@hotmail.com",
        github: "#"
      }
    },
    {
      name: "Kerem Katrancı",
      role: t('Powertrain'),
      department: t('Mechanical Engineering'),
      image: "/KEREM.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/kerem-katranc%C4%B1-33294a247",
        email: "keremkatranci77@gmail.com",
        github: "#"
      }
    },
    {
      name: "Emir Yaşa",
      role: t('Vehicle Dynamics'),
      department: t('Mechanical Engineering'),
      image: "/EMIR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/emir-ya%C5%9Fa-344460343",
        email: "emhyr.emir@gmail.com",
        github: "#"
      }
    },
    {
      name: "Tuna Kurban",
      role: t('Vehicle Dynamics'),
      department: t('Mechanical Engineering'),
      image: "/TUNAKURBAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/tuna-kurban-147606286",
        email: "tunakurban35@gmail.com",
        github: "#"
      }
    },
    {
      name: "Hakan Şendaldal",
      role: t('Vehicle Dynamics'),
      department: t('Mechanical Engineering'),
      image: "/HAKAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/hakan-%C5%9Fendaldal-9b9688251",
        email: "hakan_sendaldal@hotmail.com",
        github: "#"
      }
    },
    {
      name: "Khayal Musayev",
      role: t('Chassis & Ergonomics'),
      department: t('Mechanical Engineering'),
      image: "/KHAYAL.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/khayal-musayev-98b769343",
        email: "rmsonaxe@mail.ru",
        github: "#"
      }
    },
    {
      name: "Sinan Efe Bayrak",
      role: t('Aerodynamics'),
      department: t('Mechanical Engineering'),
      image: "/SINANEFE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/sinan-efe-bayrak-578419331",
        email: "s.efebayrak@yahoo.com.tr",
        github: "#"
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
    }
  ];

  const categorizedMembers = categorizeTeamMembers(teamMembers);
  const categories = Object.entries(categorizedMembers);

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
          {categories.map(([category, members]) => (
            <div key={category} className="space-y-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white border-b border-[#333] pb-2">
                {category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {members.map((member) => (
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
                        <PlaceholderImage 
                          src="/insan.png" 
                          alt="Team member placeholder"
                          className="w-full h-full" 
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