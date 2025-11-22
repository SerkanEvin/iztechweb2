import { X, Mail, Linkedin, Instagram, FileText, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '../types/team';

interface ProfileModalProps {
  member: TeamMember;
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ member, isOpen, onClose }: ProfileModalProps) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const defaultProfile = {
    bio: "olmuşmusasl",
    works: [member.image],
    documents: [],
    teamPhoto: undefined
  };

  const profile = member.profile || defaultProfile;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-hidden">
      <div className="min-h-screen w-full bg-[#1a1a1a] overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#1a1a1a] border-b border-[#2a2a2a] p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white">{member.name}</h2>
          <button
            onClick={onClose}
            className="p-3 hover:bg-[#2a2a2a] rounded-lg transition-colors fixed right-6 top-6"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-8 max-w-6xl scrollbar-hide">
          {/* Profile Header */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-shrink-0 space-y-6">
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-xl object-cover border-2 border-[#2a2a2a] transition-transform group-hover:scale-105"
                />
              </div>
              {profile.teamPhoto && (
                <div className="relative group">
                  <img
                    src={profile.teamPhoto}
                    alt={`${member.name} - Team`}
                    className="w-48 h-48 md:w-56 md:h-56 rounded-xl object-cover border-2 border-[#2a2a2a] transition-transform group-hover:scale-105"
                  />
                </div>
              )}
            </div>
            
            <div className="flex-grow">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-white mb-1">{member.role}</h3>
                <p className="text-[#a02638] text-lg">{member.department}</p>
              </div>
              
              {/* Bio */}
              <div className="mb-8 max-w-3xl">
                <h4 className="text-xl font-semibold text-white mb-3">{t('profile.about')}</h4>
                <p className="text-[#cccccc] leading-relaxed text-lg">{profile.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`mailto:${member.social.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#a02638] text-white rounded-lg hover:bg-[#c03048] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t('profile.email')}
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#a02638] transition-colors border border-[#3a3a3a]"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#a02638] transition-colors border border-[#3a3a3a]"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Works Gallery */}
          {profile.works.length > 0 && (
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-white mb-6">{t('profile.works')}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {profile.works.map((work: string, index: number) => (
                  <div key={index} className="relative group">
                    <img
                      src={work}
                      alt={`${t('profile.work')} ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl border-2 border-[#2a2a2a] transition-transform hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {t('profile.viewImage')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documents */}
          {profile.documents && profile.documents.length > 0 && (
            <div>
              <h4 className="font-semibold text-white mb-4">{t('profile.documents')}</h4>
              <div className="space-y-3">
                {profile.documents.map((doc: string, index: number) => (
                  <a
                    key={index}
                    href={doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 border-2 border-[#2a2a2a] rounded-xl hover:bg-[#2a2a2a] transition-colors hover:border-[#a02638]"
                  >
                    <FileText className="w-6 h-6 text-[#a02638] flex-shrink-0" />
                    <span className="text-[#cccccc] text-lg">{t('profile.document')} {index + 1}</span>
                    <Download className="w-5 h-5 text-gray-400 ml-auto flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
