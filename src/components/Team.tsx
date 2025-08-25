import React from 'react';
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

const teamCategories = {
  "Team Captain": "Team Captain",
  "Electronics & Software": "Electronics & Software Team",
  "Vehicle Dynamics": "Vehicle Dynamics Team",
  "Chassis & Ergonomics": "Chassis & Ergonomics Team",
  "Powertrain": "Powertrain Team",
  "Aerodynamics": "Aerodynamics Team",
  "Organization": "Organization Team",
  "Business Development": "Business Development",
};

interface CategorizedTeamMembers {
  [category: string]: TeamMember[];
}

const Team = () => {
  const { t } = useTranslation();

  const getImagePath = (filename: string) => {
    const cleanName = filename.replace(/^\//, '').replace(/\.png$/i, '').toUpperCase();
    return `/${cleanName}.png`;
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Hüseyin Poyraz Kocamış",
      role: t("Team Captain"),
      department: t("Civil Engineering"),
      image: getImagePath("/poyraz.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/poyrazkocamis",
        email: "poyraz@iztechracing.com"
      }
    },
    // Add other team members here...
  ];

  const categorizeTeamMembers = (members: TeamMember[]): CategorizedTeamMembers => {
    const categorized: CategorizedTeamMembers = {};

    members.forEach((member) => {
      const categoryKey = Object.keys(teamCategories).find((key) =>
        member.role.includes(key)
      );
      const category = teamCategories[categoryKey as keyof typeof teamCategories] || "Others";
      if (!categorized[category]) {
        categorized[category] = [];
      }
      categorized[category].push(member);
    });

    return categorized;
  };

  const groupedMembers = categorizeTeamMembers(teamMembers);
  const categories = Object.entries(groupedMembers);

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
          {categories.map(([category, members]) => (
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
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/insan.png'; // Fallback image
                          }}
                        />
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

  };

  // Get team members
  const teamMembers: TeamMember[] = [
    {
      name: "Hüseyin Poyraz Kocamış",
      role: t("Team Captain"),
      department: t("Civil Engineering"),
      image: getImagePath("/POYRAZ.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/poyrazkocamis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
      }
    },
    {
      name: "Serkan Doğan Evin",
      role: t("Electronics & Software Team Leader"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/SERKAN.png"),
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
      image: getImagePath("/EMRE.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/emre-canbaz-30b087335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Onur Şen",
      role: t("Powertrain Team Leader"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/ONUR.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/onur-%C5%9Fen-b87b50239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Efe Yıldırım",
      role: t("Aerodynamics Team Leader"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/EFE.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/efeyldrm/",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Ödül Yarkın Baran",
      role: t("Organization Team Leader"),
      department: t("Photonics Department"),
      image: getImagePath("/ODULYARKINBARAN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/odulyarkinbaran/",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Ahmet Duha Aydın",
      role: t("Chassis & Ergonomics Team Leader"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/DUHA.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/ahmet-duha-aydin-b81b98244",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Altay Alp",
      role: t("Electronics & Software Team Member"),
      department: t("Electronics & Communication Engineering"),
      image: getImagePath("/ALTAYALP.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/altay-alp-4225bb251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Arda Onuk",
      role: t("Electronics & Software Team Member"),
      department: t("Mathematics Department"),
      image: getImagePath("/ARDAONUK.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/arda-onuk-8247b5352/",
        email: "ardaonuk9995@gmail.com",
        github: "#"
      }
    },
    {
      name: "Berkant Süren",
      role: t("Chassis & Ergonomics Team Member"),
      department: t("Materials  Engineering"),
      image: getImagePath("/BERKANT.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/berkant-suren?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Arda Keskin",
      role: t("Vehicle Dynamics Team Member"),
      department: t("Energy Systems  Engineering"),
      image: getImagePath("/ARDAKESKIN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/arda-keskin-ba7b36230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Arda Akpolat",
      role: t("Vehicle Dynamics Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/ARDAAKPOLAT.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/arda-akpolat-444a51315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Senanur Günay",
      role: t("Electronics & Software Team Member"),
      department: t("Computer Engineering"),
      image: getImagePath("/SENANUR.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/senanur-g%C3%BCnay-94172431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Beren Alptekin",
      role: t("Organization Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/insan.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/beren-alptekin-71b6a5343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Tarık Alperen Öcal",
      role: t("Powertrain Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/TARIKALPERENOCAL.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/tar%C4%B1k-alperen-%C3%B6cal-32b8722b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Yağız Yalçın",
      role: t("Powertrain Team Member"),
      department: t("Energy Systems Engineering"),
      image: getImagePath("/YAGIZYALCIN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/yagizyalcin00?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "alex@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Batuhan Elmaoğlu",
      role: t("Aerodynamics Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/BATU.png"),
      social: {
        linkedin: "http://www.linkedin.com/in/batuhan-elmaoğlu-338185296",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Eren Uruş",
      role: t("Aerodynamics Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/ERENURUS.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/erenurus",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Eren Karasakal",
      role: t("Chassis & Ergonomics Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/ERENKARASAKAL.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/eren-karasakal-406769342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Tuğçe Özcan",
      role: t("Chassis & Ergonomics Team Member"),
      department: t("Materials Engineering"),
      image: getImagePath("/TUGCE.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/tu%C4%9F%C3%A7e-%C3%B6zcan-19738133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Nevzat Ediz Burçoğlu",
      role: t("Powertrain Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/EDIZ.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/nevzatedizburcoglu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Kerem Katrancı",
      role: t("Powertrain Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/KEREM.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/kerem-katranc%C4%B1-33294a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Emir Yaşa",
      role: t("Vehicle Dynamics Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/EMIRYASA.png"),
      social: {
        linkedin: " https://www.linkedin.com/in/emir-ya%C5%9Fa-344460343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app,",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Tuna Kurban",
      role: "Vehicle Dynamics Team Member",
      department: t("Mechanical Engineering"),
      image: getImagePath("/TUNAKURBAN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/tuna-kurban-147606286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Hakan Şendaldal",
      role: t("Vehicle Dynamics Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/HAKAN.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/hakan-%C5%9Fendaldal-9b9688251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Khayal Musayev",
      role: t("Chassis & Ergonomics Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/KHAYAL.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/khayal-musayev-98b769343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Sinan Efe Bayrak",
      role: t("Aerodynamics Team Member"),
      department: t("Mechanical Engineering"),
      image: getImagePath("/SiNANEFE.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/sinan-efe-bayrak-578419331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Kuzey Demirer",
      role: t("Business Development"),
      department: t("Industrial Design"),
      image: getImagePath("/KUZEY.png"),
      social: {
        linkedin: "https://tr.linkedin.com/in/kuzey-demirer-76577a260",
        email: "@iztechracing.com",
        github: "#"
      }
    }
  ];

  const categorizeTeamMembers = (members: TeamMember[]) => {
    interface CategoriesType {
      [key: string]: TeamMember[];
    }
    const categories: CategoriesType = {};
    members.forEach(member => {
      // Use the role as-is if it's already a key, otherwise use the first word
      const roleKey = member.role.includes('_') ?
          member.role :
          member.role.split(' ')[0].toLowerCase();

      const translatedRole = t(`roles.${roleKey}`, { defaultValue: member.role });
      if (!categories[translatedRole]) {
        categories[translatedRole] = [];
      }
      categories[translatedRole].push(member);
    });
    return categories;
  };

  // Preload images with error handling
  React.useEffect(() => {
    teamMembers.forEach(member => {
      const img = new Image();
      img.onload = () => console.log(`Loaded: ${member.image}`);
      img.onerror = () => console.error(`Failed to load: ${member.image}`);
      img.src = member.image;
    });
  }, [teamMembers]);

  const groupedMembers = categorizeTeamMembers(teamMembers);
  const categories = Object.entries(groupedMembers);

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
          {categories.map(([category, members]) => (
            <div key={category} className="w-full max-w-6xl mx-auto bg-[#1a1a1a]/70 border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {members.map((member, index) => (
                  <div key={index} className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-72">
                    <div className="relative h-64 w-full bg-[#1a1a1a] flex items-center justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onLoad={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.opacity = '1';
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src !== '/insan.png') {
                            target.src = '/insan.png';
                          }
                        }}
                        style={{
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out',
                          backgroundColor: '#1a1a1a',
                          objectFit: 'cover'
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-sm p-2 opacity-0 hover:opacity-100 transition-opacity">
                          {member.image}
                        </div>
                      </div>
                    </div>
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