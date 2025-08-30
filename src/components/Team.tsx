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
    {
      name: "Hüseyin Poyraz Kocamış",
      role: t("Team Captain"),
      department: t("Civil Engineering"),
      image: "/POYRAZ.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/poyrazkocamis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com"
      }
    },
    {
      name: "Serkan Doğan Evin",
      role: t("Electronics & Software Team Leader"),
      department: t("Mechanical Engineering"),
      image: "/SERKAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/serkan-doğan-evin-7569a61b8/",
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
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Onur Şen",
      role: t("Powertrain Team Leader"),
      department: t("Mechanical Engineering"),
      image: "/ONUR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/onur-şen-b87b50239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Efe Yıldırım",
      role: t("Aerodynamics Team Leader"),
      department: t("Mechanical Engineering"),
      image: "/EFEYİLDİRİR.webp",
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
      image: "/ÖdülYarkınBaran.webp",
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
      image: "/DUHA.webp",
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
      image: "/ALTAYALP.webp",
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
      image: "/ARDAONUK.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-onuk-8247b5352/",
        email: "ardaonuk9995@gmail.com",
        github: "#"
      }
    },
    {
      name: "Berkant Süren",
      role: t("Chassis & Ergonomics Team Member"),
      department: t("Materials Engineering"),
      image: "/BERKANT.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/berkant-suren?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Arda Keskin",
      role: t("Vehicle Dynamics Team Member"),
      department: t("Energy Systems Engineering"),
      image: "/ARDAKESKİN.webp",
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
      image: "/ARDAAKPOLAT.webp",
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
      image: "/SENANUR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/senanur-günay-94172431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Beren Alptekin",
      role: t("Organization Team Member"),
      department: t("Mechanical Engineering"),
      image: "/insan.webp",
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
      image: "/TARIKALPERENOCAL.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/tarikalperenocal",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Yağız Yalçın",
      role: t("Powertrain Team Member"),
      department: t("Energy Systems Engineering"),
      image: "/YAĞIZYALÇIN.webp",
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
      image: "/BATU.webp",
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
      image: "/ERENURUŞ.webp",
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
      image: "/ERENKARASAKAL.webp",
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
      image: "/TUĞÇE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/tuğçe-özcan-19738133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Nevzat Ediz Burçoğlu",
      role: t("Powertrain Team Member"),
      department: t("Mechanical Engineering"),
      image: "/EDİZ.webp",
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
      image: "/KEREM.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/kerem-katrancı-33294a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Emir Yaşa",
      role: t("Vehicle Dynamics Team Member"),
      department: t("Mechanical Engineering"),
      image: "/EMİRYAŞA.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/emir-yaşa-344460343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Tuna Kurban",
      role: t("Vehicle Dynamics Team Member"),
      department: t("Mechanical Engineering"),
      image: "/TUNAKURBAN.webp",
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
      image: "/HAKAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/hakan-şendaldal-9b9688251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Khayal Musayev",
      role: t("Chassis & Ergonomics Team Member"),
      department: t("Mechanical Engineering"),
      image: "/HAYAL.webp",
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
      image: "/SİNANEFE.webp",
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
      image: "/Kuzey.webp",
      social: {
        linkedin: "https://tr.linkedin.com/in/kuzey-demirer-76577a260",
        email: "@iztechracing.com",
        github: "#"
      }
    }
    {
      name: "Serkan Doğan Evin",
      role: "Electronics & Software Team Leader",
      department: "Mechanical Engineering",
      image: "/SERKAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/serkan-doğan-evin",
        email: "serkan@iztechracing.com"
      }
    },
    {
      name: "Emre Canbaz",
      role: "Vehicle Dynamics Team Leader",
      department: "Mechanical Engineering",
      image: "/EMRE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/emre-canbaz",
        email: "canbazemre24@gmail.com"
      }
    },
    {
      name: "Onur Şen",
      role: "Powertrain Team Leader",
      department: "Mechanical Engineering",
      image: "/ONUR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/onur-şen",
        email: "onursen4405@gmail.com"
      }
    },
    {
      name: "Efe Yıldırım",
      role: "Aerodynamics Team Leader",
      department: "Mechanical Engineering",
      image: "/EFE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/efeyldrm",
        email: "efeyildirim04@gmail.com"
      }
    },
    {
      name: "Ödül Yarkın Baran",
      role: "Organization Team Leader",
      department: "Photonics Engineering",
      image: "/YARKIN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/odulyarkinbaran",
        email: "yarknbaran35@gmail.com"
      }
    },
    {
      name: "Ahmet Duha Aydın",
      role: "Chassis & Ergonomics Team Leader",
      department: "Mechanical Engineering",
      image: "/DUHA.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ahmet-duha-aydin",
        email: "ahmetduha45@gmail.com"
      }
    },
    {
      name: "Altay Alp",
      role: "Electronics & Software Team Member",
      department: "Electronics & Communication Engineering",
      image: "/ALTAYALP.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/altay-alp",
        email: "altay@iztechracing.com"
      }
    },
    {
      name: "Arda Onuk",
      role: "Electronics & Software Team Member",
      department: "Mathematics",
      image: "/ARDAONUK.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-onuk",
        email: "ardaonuk9995@gmail.com"
      }
    },
    {
      name: "Berkant Süren",
      role: "Chassis & Ergonomics Team Member",
      department: "Materials Engineering",
      image: "/BERKANT.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/berkant-suren",
        email: "berkantsuren1@gmail.com"
      }
    },
    {
      name: "Arda Keskin",
      role: "Vehicle Dynamics Team Member",
      department: "Energy Systems Engineering",
      image: "/ARDAKESKIN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-keskin",
        email: "ardakeskin855@gmail.com"
      }
    },
    {
      name: "Arda Akpolat",
      role: "Vehicle Dynamics Team Member",
      department: "Mechanical Engineering",
      image: "/ARDAAKPOLAT.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-akpolat",
        email: "ardaakpolat95@gmail.com"
      }
    },
    {
      name: "Senanur Günay",
      role: "Electronics & Software Team Member",
      department: "Computer Engineering",
      image: "/SENANUR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/senanur-günay",
        email: "senanur@iztechracing.com"
      }
    },
    {
      name: "Beren Alptekin",
      role: "Organization Team Member",
      department: "Mechanical Engineering",
      image: "/insan.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/beren-alptekin",
        email: "beren@iztechracing.com"
      }
    },
    {
      name: "Tarık Alperen Öcal",
      role: "Powertrain Team Member",
      department: "Mechanical Engineering",
      image: "/TARIK.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/tarikalperenocal",
        email: "tarik@iztechracing.com"
      }
    },
    {
      name: "Kuzey Demirer",
      role: "Business Development",
      department: "Industrial Design",
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/kuzey-demirer",
        email: "kuzey@iztechracing.com"
      }
    }
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