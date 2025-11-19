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
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl scrollbar-hide">
        {/* Header */}
        <div className="sticky top-0 bg-[#1a1a1a] border-b border-[#2a2a2a] p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{member.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-xl object-cover border-2 border-[#2a2a2a]"
              />
              {profile.teamPhoto && (
                <img
                  src={profile.teamPhoto || member.image}
                  alt={`${member.name} - Team`}
                  className="w-32 h-32 rounded-xl object-cover mt-4 border-2 border-[#2a2a2a]"
                />
              )}
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">{member.role}</h3>
              <p className="text-[#a02638] mb-4">{member.department}</p>
              
              {/* Bio */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">{t('profile.about')}</h4>
                <p className="text-[#cccccc] leading-relaxed">{profile.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
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
            <div className="mb-8">
              <h4 className="font-semibold text-white mb-4">{t('profile.works')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {profile.works.map((work: string, index: number) => (
                  <div key={index} className="relative group">
                    <img
                      src={work}
                      alt={`${t('profile.work')} ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg border border-[#2a2a2a]"
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
                    className="flex items-center gap-3 p-3 border border-[#2a2a2a] rounded-lg hover:bg-[#2a2a2a] transition-colors"
                  >
                    <FileText className="w-5 h-5 text-[#a02638]" />
                    <span className="text-[#cccccc]">{t('profile.document')} {index + 1}</span>
                    <Download className="w-4 h-4 text-gray-400 ml-auto" />
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
