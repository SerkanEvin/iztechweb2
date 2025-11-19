import { Linkedin, Mail, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { PlaceholderImage } from './PlaceholderImage';
import ProfileModal from './ProfileModal';
import { TeamMember } from '../types/team';

const Team2025 = () => {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const openProfileModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  // yapılcaklar: fotolar gelince ayarla
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
        bio: "olmuşmusasl",
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
        bio: "olmuşmusasl",
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
        email: "emrecanbaz@std.iyte.edu.tr",
        instagram: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/EMRE.webp"],
        documents: []
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
        email: "onursen@std.iyte.edu.tr",
        instagram: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/ONUR.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/YARKIN.webp"],
        documents: []
      }
    },
    {
      name: "Zeynep Konuk",
      roleKey: "organization_team_member",
      role: t('roles.organization_team_member'),
      department: t('departments.materials_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/zeynep-konuk-638b09337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "zkonuk@std.iyte.edu.tr",
        instagram: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Elif Kanat",
      roleKey: "organization_team_member",
      role: t('roles.organization_team_member'),
      department: t('departments.architecture'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/elif-kanat-b1aa83398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Rumeysa Eda Çolak",
      roleKey: "organization_team_member",
      role: t('roles.organization_team_member'),
      department: t('departments.crp'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/r-eda-%C3%A7olak-186321346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Aysu Uyanık",
      roleKey: "organization_team_member",
      role: t('roles.organization_team_member'),
      department: t('departments.food_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/aysu-uyan%C4%B1k-1154b5307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/DUHA.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/ALTAYALP.webp"],
        documents: []
      }
    },
    {
      name: "Şevval Duru Zeybek",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.electronics_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/%C5%9Fevval-duru-zeybek-19395a379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Serhat Bakır",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.electronics_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/serhat-bak%C4%B1r-313547247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Selim Gürbüz",
      roleKey: "organization_team_member",
      role: t('roles.organization_team_member'),
      department: t('departments.electronics_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/selim-g%C3%BCrb%C3%BCz-818220300/",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Rıfat Gürer Solak",
      roleKey: "organization_team_member",
      role: t('roles.organization_team_member'),
      department: t('departments.computer_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/rifat-gürer-solak-246b35398?utm_source=share_via&utm_content=profile&utm_medium=member_android ",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "İpek Turan",
      roleKey: "organization_team_member",
      role: t('roles.organization_team_member'),
      department: t('departments.electronics_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ipek-turan-586686384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Nehir Gürzsoy",
      roleKey: "organization_team_member",
      role: t('roles.organization_team_member'),
      department: t('departments.env_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/nehir-undefined-11960a264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Arda Aksoy",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.electronics_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-aksoy-245186230",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Deniz Efe Naroğlu",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.electronics_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/denizefenaroglu",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Bengisu Erten ",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.electronics_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/bengisu-erten-5827272b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/ARDAONUK.webp"],
        documents: []
      }
    },
    {
      name: "Berkant Süren",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.materials_engineering'),
      image: "/BERKANT.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/berkay-din%C3%A7-8b3586226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "berkaydinc@std.iyte.edu.tr",
        instagram: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/BERKAY.webp"],
        documents: []
      }
    },
    {
      name: "Uğur Abdullah İnce",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.materials_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/berkant-ekiz-7a4b4a227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "berkantekiz@std.iyte.edu.tr",
        instagram: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/BERKANT.webp"],
        documents: []
      }
    },
    {
      name: "Sena Özer",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.materials_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/alp-arslan-7a4b4a227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "alparslan@std.iyte.edu.tr",
        instagram: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/ALP.webp"],
        documents: []
      }
    },
    {
      name: "Güneş Işıldakoğlu ",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.materials_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/berke-ak%C3%A7in-7a4b4a227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "berkeakcin@std.iyte.edu.tr",
        instagram: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/BERKE.webp"],
        documents: []
      }
    },
    {
      name: "Avşin Kaya",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.materials_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=avşin-kaya-6719a8398",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Taha Berke Büyüktaş",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.civil_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/taha-berke-b%C3%BCy%C3%BCkta%C5%9F-56b525241/",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Senanur Günay",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.computer_engineering'),
      image: "/SENANUR.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/senanur-g%C3%BCnay-94172431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Enis Günenç",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.computer_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/enis-g%C3%BCnen%C3%A7",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Sarper Kahvecioğlu",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.computer_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/sarper-kahvecio%C4%9Flu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Betül Pelin Başaran",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.computer_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/bet%C3%BCl-pelin-ba%C5%9Faran-6912a9389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app\n",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Hasan Can",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.energy_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/hasan-can-17210b399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Asilkan Erken",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.energy_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/asilkan-erken-042451348?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Ali Kaan Kocabıyıkoğlu",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.civil_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ali-kaan-kocabiyiko%C4%9Flu-a1b5bb316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Arda Yalçın",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.energy_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/arda-yal%C3%A7%C4%B1n-a1a083336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Muhammet Cafer",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.energy_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/muhammet-cafer-05417a25b?utm_source=share_via&utm_content=profile&utm_medium=member_android ",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Burak Ş. Dönmez",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.energy_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/burak-%C5%9Fuay%C4%B1p-d%C3%B6nmez-998730235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Mustafa Kağan Pehlivan",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.physics'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ka%C4%9Fan-p-a05695384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Ozan Yılmaz",
      roleKey: "electronics_software_team_member",
      role: t('roles.electronics_software_team_member'),
      department: t('departments.physics'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ozan-yılmaz-663931348?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Ecem Savaş",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ecem-sava%C5%9F-682647395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Melih Çağan Çetiner ",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Eren Uruş",
      roleKey: "aerodynamics_team_leader",
      role: t('roles.aerodynamics_team_leader'),
      department: t('departments.mechanical_engineering'),
      image: "/ERENURUS.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/erenurus",
        email: "uruseren07@gmail.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/ERENURUS.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Mustafa Güngör ",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: " https://www.linkedin.com/in/mustafa-g%C3%BCng%C3%B6r-865b79398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KEREM.webp"],
        documents: []
      }
    },
    {
      name: "Ege Cem Karasu",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "www.linkedin.com/in/ege-cem-karasu-4b28a4286",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Muhammed Emin Günümdoğdu",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/muhammed-emin-g%C3%BCn%C3%BCmdo%C4%9Fdu-5754b4384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Berkcan Kaya ",
      roleKey: "powertrain_team_member",
      role: t('roles.powertrain_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "linkedin.com/in/berkcan-kaya",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Mert Vadar",
      roleKey: "vehicle_dynamics_team_member",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/mert-vardar-134464396 ",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Rüzgar Doruk Sökmen",
      roleKey: "vehicle_dynamics_team_member",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/r%C3%BCzgar-doruk-s%C3%B6kmen-3857222bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Yağız Göktürk",
      roleKey: "vehicle_dynamics_team_member",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.energy_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ya%C4%9F%C4%B1z-g%C3%B6kt%C3%BCrk-618910398/",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Kayrahan Kara",
      roleKey: "vehicle_dynamics_team_member",
      role: t('roles.vehicle_dynamics_team_member'),
      department: t('departments.materials_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/kayrahankara",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Anıl Hasan Paşaoğlu",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/an%C4%B1l-hasan-pa%C5%9Fao%C4%9Flu-273255353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Caner Kamar",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/caner-kamar-aa40172b3",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Yusuf Koymatoğlu",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "www.linkedin.com/in/yusuf-koymatoğlu-282128233",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Ahmet Arda Keşaplı",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/ardakesapli",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "İpek Naz Dursun",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.physics'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/i%CC%87pekkdursun?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Mahmut Ali Gül",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.materials_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/mahmut-ali-g%C3%BCl-3b7b24284/",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Aybars Gülerer",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.env_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/aybars-g%C3%BClerer-326843315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Hüseyin Eser Tur",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/eser-tur-987b63391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Melih Çağan Çetiner",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/melih-çağan-çetiner-26b771395",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Furkan Aktaş",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_team_member'),
      department: t('departments.mechanical_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/furkan-aktaş-386913229?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        email: "",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Efe Yıldırım",
      roleKey: "aerodynamics_team_member",
      role: t('roles.aerodynamics_advisor'),
      department: t('departments.mechanical_engineering'),
      image: "/EFE.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/efeyildrm/",
        email: "efeyildirim04@gmail.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/EFE.webp"],
        documents: []
      }
    },
    {
      name: "Betül Uysal",
      roleKey: "business_development_team_member",
      role: t('roles.business_development_team_member'),
      department: t('departments.industrial_design'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/bet%C3%BCl-uysal-148398396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Ada Toker",
      roleKey: "business_development_team_member",
      role: t('roles.business_development_team_member'),
      department: t('departments.mbg'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/adatoker?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },

    {
      name: "Mustafa Mert Demirbağ",
      roleKey: "business_development_team_member",
      role: t('roles.business_development_team_member'),
      department: t('departments.env_engineering'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/mustafa-mert-demirbağ-08933a224?trk=contact-info ",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
      }
    },
    {
      name: "Kadri Meriç Irmak",
      roleKey: "chassis_ergonomics_team_member",
      role: t('roles.chassis_ergonomics_team_member'),
      department: t('departments.industrial_design'),
      image: "/KUZEY.webp",
      social: {
        linkedin: "https://www.linkedin.com/in/kadri-meri%C3%A7-irmak-b624a92a0/ ",
        email: "@iztechracing.com",
        github: "#"
      },
      profile: {
        bio: "olmuşmusasl",
        works: ["/KUZEY.webp"],
        documents: []
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
            <p className="text-white mt-4 text-lg">{t('team.loading') || 'Loading team...'}</p>
          </div>
        </section>
      ) : (
        <section id="team" className="py-20 bg-[#0f0f0f] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('team.title')} 2025-2026
            </h2>
            <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
              {t('team.description')}
            </p>
          </div>

          {categories.length === 0 ? (
            <div className="text-center text-[#cccccc]">{t('vehicles.features.comingSoon')}</div>
          ) : (
            <div className="flex flex-col gap-5">
              {categories.map(([category, members]) => (
                  <div key={category}>
                    <h3 className="text-2xl font-semibold text-white mb-3 text-center">
                      {category}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                      {members.map((member, index) => (
                          <div
                              key={index}
                              className="w-[250px] sm:w-[220px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:bg-[#1a1a1a]/90 transition-all duration-300 hover:scale-105 group"
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
                                <div className="absolute inset-0 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                              {member.profile && (
                                <button
                                  onClick={() => openProfileModal(member)}
                                  className="mt-2 flex items-center gap-2 px-3 py-1 bg-[#a02638] text-white text-sm rounded-lg hover:bg-[#c03048] transition-colors duration-200"
                                >
                                  <User className="w-4 h-4" />
                                  Profile
                                </button>
                              )}
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          )}
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

export default Team2025;
