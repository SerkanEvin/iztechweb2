import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PlaceholderImage } from './PlaceholderImage';
import ProfileModal from './ProfileModal';
import type { TeamMember } from '../types/team';

const Team2024 = () => {
  const { t } = useTranslation();
  const { memberName } = useParams<{ memberName?: string }>();
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Find member by slug when URL changes
  useEffect(() => {
    if (!memberName) {
      setSelectedMember(null);
      setIsModalOpen(false);
      return;
    }

    const member = teamMembers.find(m =>
        createSlug(m.name) === memberName
    );

    if (member) {
      setSelectedMember(member);
      setIsModalOpen(true);
    } else {
      // If member not found, redirect to team page
      navigate('/team/2024-2025', { replace: true });
    }
  }, [memberName]);

  const createSlug = (name: string): string => {
    return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
  };

  const openProfileModal = useCallback((member: TeamMember) => {
    try {
      const slug = createSlug(member.name);
      console.log('Opening profile for:', member.name, '->', slug);

      // Update the URL to include the member's slug
      navigate(`/team/2024-2025/${slug}`, {
        replace: false
      });

      // The modal will be opened by the effect that watches memberName
    } catch (error) {
      console.error('Error opening profile:', error);
      // Fallback to just setting the state if navigation fails
      setSelectedMember(member);
      setIsModalOpen(true);
    }
  }, [navigate]);

  const closeProfileModal = useCallback(() => {
    console.log('Closing profile modal');
    // Navigate back to the team page
    navigate('/team/2024-2025', { replace: true });
    // The effect will handle updating the modal state
  }, [navigate]);

  const teamMembers: TeamMember[] = [
    {
      name: "Hüseyin Poyraz Kocamış",
      roleKey: "team_captain",
      role: t("roles.team_captain"),
      department: t('departments.mechanical_engineering'),
      image: "/POYRAZ.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/poyrazkocamis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "huseyinkocamis@std.iyte.edu.tr",
      },
      profile: {
        bio: "olmuşmusal",
        works: ["/POYRAZ.webp"],
        documents: []
      }
    },
    {
      name: "Serkan Doğan Evin",
      roleKey: "electronics_software_team_leader",
      role: t('roles.electronics_software_team_leader'),
      department: t('departments.mechanical_engineering'),
      image: "/SERKAN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/serkan-do%C4%9Fan-evin-7569a61b8/",
        email: "@iztechracing.com",
        instagram: "#"
      },
      profile: {
        bio: "olmuşmusal",
        works: ["/SERKAN.webp"],
        documents: []
      }
    },
    {
      name: "Emre Canbaz",
      roleKey: "vehicle_dynamics_team_leader",
      role: t("roles.vehicle_dynamics_team_leader"),
      department: t('departments.mechanical_engineering'),
      image: "/EMRE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/emre-canbaz-30b087335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "canbazemre24@gmail.com",
        github: "#"
      }
    },
    {
      name: "Onur Şen",
      roleKey: "powertrain_team_leader",
      role: t("roles.powertrain_team_leader"),
      department: t('departments.mechanical_engineering'),
      image: "/ONUR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/onur-%C5%9Fen-b87b50239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "onursen4405@gmail.com ",
        github: "#"
      }
    },
    {
      name: "Efe Yıldırım",
      roleKey: "aerodynamics_team_leader",
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
      roleKey: "organization_team_leader",
      role: t('roles.organization_team_leader'),
      department: t('departments.photonics'),
      image: "/YARKIN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/odulyarkinbaran/",
        email: "yarknbaran35@gmail.com",
        github: "#"
      }
    },
    {
      name: "Ahmet Duha Aydın",
      roleKey: "chassis_ergonomics_team_leader",
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
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.electronics_engineering'),
      image: "/ALTAYALP.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/altay-alp-4225bb251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      }
    },
    {
      name: "Arda Onuk",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.mathematics'),
      image: "/ARDAONUK.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-onuk-8247b5352/",
        email: "ardaonuk9995@gmail.com",
        github: "#"
      }
    },
    {
      name: "Berkant Süren",
      roleKey: "chassis_ergonomics_team_member",
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
      roleKey: "vehicle_dynamics_team_member",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.energy_engineering'),
      image: "/ARDAKESKIN.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-keskin-ba7b36230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "ardakeskin855@gmail.com",
        github: "#"
      }
    },
    {
      name: "Arda Akpolat",
      roleKey: "vehicle_dynamics_team_member",
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
      roleKey: "organization_team_member",
      role: t('roles.organization_team_member'),
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
      roleKey: "organization_team_member",
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
      roleKey: "powertrain_team_member",
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
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.energy_engineering'),
      image: "/YAGIZ.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/yagizyalcin00?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "yagiz10yalcin@gmail.com",
        github: "#"
      }
    },
    {
      name: "Batuhan Elmaoğlu",
      roleKey: "aerodynamics_team_member",
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
      roleKey: "aerodynamics_team_member",
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
      roleKey: "chassis_ergonomics_team_member",
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
      roleKey: "chassis_ergonomics_team_member",
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
      roleKey: "powertrain_team_member",
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
      roleKey: "powertrain_team_member",
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
      roleKey: "vehicle_dynamics_team_member",
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
      roleKey: "vehicle_dynamics_team_member",
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
      roleKey: "vehicle_dynamics_team_member",
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
      roleKey: "chassis_ergonomics_team_member",
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
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/SiNANEFE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/sinan-efe-bayrak-578419331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "s.efebayrak@yahoo.com.tr",
        github: "#"
      }
    },
    {
      name: "Kuzey Demirer",
      roleKey: "business_development_team_leader",
      role: t('roles.business_development_team_leader'),
      department: t('departments.industrial_design'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://tr.linkedin.com/in/kuzey-demirer-76577a260",
        email: "@iztechracing.com",
        github: "#"
      }
    }

  ];

  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = teamMembers.map(p => p.image);
      const imagePromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Still show content even if some images fail
      }
    };

    preloadImages();
  }, []);

  const TEAM_CATEGORY_MAP: Record<string, string> = {
    team_captain: t('roles.team_captain'),
    electronics_software_team: t('roles.electronics_software_team'),
    vehicle_dynamics_team: t('roles.vehicle_dynamics_team'),
    chassis_ergonomics_team: t('roles.chassis_ergonomics_team'),
    powertrain_team: t('roles.powertrain_team'),
    aerodynamics_team: t('roles.aerodynamics_team'),
    organization_team: t('roles.organization_team'),
    business_development_team: t('roles.business_development_team'),
  };

  const categorizeTeamMembers = (members: TeamMember[]) => {
    const categories: Record<string, TeamMember[]> = {};

    members.forEach(member => {
      const baseKey = member.roleKey
          .replace(/_team_leader$/i, '_team')
          .replace(/_team_member$/i, '_team');

      const translatedRole = TEAM_CATEGORY_MAP[baseKey] || baseKey;

      if (!categories[translatedRole]) {
        categories[translatedRole] = [];
      }
      categories[translatedRole].push(member);
    });

    return categories;
  };

  const groupedMembers = categorizeTeamMembers(teamMembers);
  const categories = Object.entries(groupedMembers);

  return (
      <>
        {!imagesLoaded ? (
            <section id="team" className="py-20 bg-[#0f0f0f] relative min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#a02638]"></div>
              </div>
            </section>
        ) : (
            <section id="team" className="py-20 bg-[#0f0f0f] relative">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {t('team.title')} 2024-2025
                  </h2>
                  <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
                    {t('team.description')}
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {categories.map(([category, members]) => (
                      <div key={category}>
                        <h3 className="text-2xl font-semibold text-white mb-3 text-center">
                          {category}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                          {members.map((member, index) => (
                              <button
                                  key={index}
                                  onClick={() => openProfileModal(member)}
                                  className="w-[250px] sm:w-[220px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:bg-[#1a1a1a]/90 hover:border-[#a02638]/50 transition-all duration-300 hover:scale-105 group text-left cursor-pointer shadow-lg hover:shadow-xl"
                              >
                                <div className="relative overflow-hidden">
                                  <div className="relative group overflow-hidden rounded-t-xl">
                                    <PlaceholderImage
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
                                        width={250}
                                        height={256}
                                    />
                                  </div>
                                </div>

                                <div className="p-4 text-center">
                                  <h3 className="text-lg font-bold text-white">
                                    {member.name}
                                  </h3>
                                  <p className="text-[#a02638] font-semibold">
                                    {member.role}
                                  </p>
                                  <p className="text-[#cccccc] text-sm">
                                    {member.department}
                                  </p>
                                  <p className="text-xs text-[#a02638]/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Click to view profile →
                                  </p>
                                </div>
                              </button>
                          ))}
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </section>
        )}

        {selectedMember && isModalOpen && (
            <ProfileModal
                member={selectedMember}
                isOpen={isModalOpen}
                onClose={closeProfileModal}
            />
        )}
      </>
  );
};

export default Team2024;
