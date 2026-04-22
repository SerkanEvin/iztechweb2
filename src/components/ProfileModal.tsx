import { X, Mail, Linkedin, Instagram, FileText, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '../types/team';
import { useEffect, useRef, useState, useCallback } from 'react';

interface ProfileModalProps {
  member: TeamMember;
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ member, isOpen, onClose }: ProfileModalProps) => {
  console.log('ProfileModal render - isOpen:', isOpen, 'member:', member?.name);
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  // Handle scroll events
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      setShowScrollTop(scrollTop > 100);
      setShowScrollBottom(scrollTop < scrollHeight - clientHeight - 100);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Handle click outside to close
  const handleClickOutside = useCallback((e: React.MouseEvent) => {
    // Only close if clicking directly on the overlay (not on modal content)
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  // Handle close button click
  const handleCloseClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up to the overlay
    onClose();
  }, [onClose]);

  // Handle Escape key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log('Escape key pressed, closing modal');
        onClose();
      }
    };

    // Add event listeners
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    // Reset scroll position when opening
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const defaultProfile = {
    bio: "No bio available",
    works: [member.image],
    documents: [],
    files: [], // Add default empty array
    teamPhoto: undefined
  };

  const profile = member.profile || defaultProfile;

  // Add this style to hide scrollbar but keep functionality

  // Don't render anything if not open
  if (!isOpen) {
    console.log('ProfileModal not rendering - isOpen is false');
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-hidden"
      onClick={handleClickOutside}
      style={{ backdropFilter: 'blur(5px)' }}
    >
      <style>{
        `
          .profile-scroll-container::-webkit-scrollbar {
            display: none;
          }
          .scroll-button {
            position: fixed;
            right: 2rem;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(42, 42, 42, 0.8);
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 30;
          }
          .scroll-button:hover {
            background-color: #a02638;
            transform: scale(1.1);
          }
        `
      }</style>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-button"
          style={{ bottom: '5rem' }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Scroll to Bottom Button */}
      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          className="scroll-button"
          style={{ bottom: '1.5rem' }}
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="h-screen w-full bg-[#1a1a1a] overflow-y-auto profile-scroll-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        style={{
          scrollbarWidth: 'none',  // Firefox
          msOverflowStyle: 'none',  // IE and Edge
          WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
          scrollBehavior: 'smooth',
        }}
        onScroll={(e) => {
          e.stopPropagation();
          handleScroll();
        }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#1a1a1a] border-b border-[#2a2a2a] p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white">{member.name}</h2>
          <button
            onClick={handleCloseClick}
            className="p-3 hover:bg-[#2a2a2a] rounded-lg transition-colors fixed right-6 top-6 z-20"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-8 max-w-6xl pb-32">
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
              {profile.bio && (
                <div className="mb-8 max-w-3xl">
                  <h4 className="text-xl font-semibold text-white mb-3">{t('profile.about')}</h4>
                  <p className="text-[#cccccc] leading-relaxed text-lg">{profile.bio}</p>
                </div>
              )}

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
          {((profile.works || []).length > 0 || (profile.files || []).some((f: any) => f.type.startsWith('image/'))) && (
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-white mb-6">{t('profile.works')}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Hardcoded works */}
                {(profile.works || []).map((work: string, index: number) => (
                  <div key={`hardcoded-work-${index}`} className="relative group">
                    <img
                      src={work}
                      alt={`${t('profile.work')} ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl border-2 border-[#2a2a2a] transition-transform hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Uploaded images from DB */}
                {(profile.files || [])
                  .filter((f: any) => f.type.startsWith('image/'))
                  .map((file: any, index: number) => (
                  <div key={`uploaded-work-${index}`} className="relative group">
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-full h-64 object-cover rounded-xl border-2 border-[#2a2a2a] transition-transform hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documents */}
          {((profile.documents || []).length > 0 || (profile.files || []).some((f: any) => !f.type.startsWith('image/'))) && (
            <div>
              <h4 className="text-2xl font-semibold text-white mb-6">{t('profile.documents')}</h4>
              <div className="space-y-3">
                {/* Hardcoded documents */}
                {(profile.documents || []).map((doc: string, index: number) => {
                  const filename = doc.split('/').pop() || `Document ${index + 1}`;
                  const displayName = filename.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
                  return (
                    <a
                      key={`hardcoded-doc-${index}`}
                      href={doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border-2 border-[#2a2a2a] rounded-xl hover:bg-[#2a2a2a] transition-colors hover:border-[#a02638]"
                    >
                      <FileText className="w-6 h-6 text-[#a02638] flex-shrink-0" />
                      <div className="flex-grow">
                        <span className="text-[#cccccc] text-lg block">{displayName}</span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 ml-auto flex-shrink-0" />
                    </a>
                  );
                })}
                {/* Uploaded documents from DB */}
                {(profile.files || [])
                  .filter((f: any) => !f.type.startsWith('image/'))
                  .map((file: any, index: number) => (
                    <a
                      key={`uploaded-doc-${index}`}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border-2 border-[#2a2a2a] rounded-xl hover:bg-[#2a2a2a] transition-colors hover:border-[#a02638]"
                    >
                      <FileText className="w-6 h-6 text-[#a02638] flex-shrink-0" />
                      <div className="flex-grow">
                        <span className="text-[#cccccc] text-lg block">{file.name}</span>
                        <span className="text-gray-500 text-sm">{(file.size / 1024).toFixed(1)} KB</span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 ml-auto flex-shrink-0" />
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
