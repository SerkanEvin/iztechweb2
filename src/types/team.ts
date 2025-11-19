export interface TeamMember {
  name: string;
  roleKey: string;
  role: string;
  department: string;
  image: string;
  social: {
    linkedin: string;
    email: string;
    github?: string;
    instagram?: string;
  };
  profile?: {
    bio: string;
    works: string[];
    documents?: string[];
    teamPhoto?: string;
  };
}
