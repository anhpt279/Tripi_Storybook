import { type CitySelectValue } from '../../components/ui/data-entry/city-select';

// Implementation note
export interface BasicInfo {
  name: string;
  phone: string;
  city: CitySelectValue;
  gender: string;
  hometown: string;
  email: string;
  expectedSalary: string;
  isNameVerified: boolean;
  isPhoneVerified: boolean;
}

// Implementation note
export interface WorkExperience {
  id: string;
  organization: string;
  startDate: string;
  endDate: string;
  title: string;
  achievements: string[];
  city: CitySelectValue;
  department: string;
  type: string; // Full-time/Part-time/Contract
}

// Implementation note
export interface ProjectExperience {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

// Implementation note
export interface Education {
  id: string;
  school: string;
  faculty: string;
  degree: string;
  status: string;
  city: CitySelectValue;
  startDate: string;
  endDate: string;
  achievements: string[];
}

// Implementation note
export interface Award {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

// Implementation note
export interface Paper {
  id: string;
  title: string;
  journal: string;
  link: string;
  authorRank: number;
}

// Implementation note
export interface Repository {
  id: string;
  type: string;
  url: string;
}

// Implementation note
export interface Patent {
  id: string;
  name: string;
  number: string;
}

// Implementation note
export interface SocialMedia {
  id: string;
  platform: string;
  account: string;
  link: string;
}

// Implementation note
export interface InterestSkill {
  interests: string[];
  skills: string[];
}

// Implementation note
export interface WorkSkill {
  name: string;
  proficiency: string;
  softSkills: string[];
}

// Implementation note
export interface ResumeData {
  basicInfo: BasicInfo;
  workExperiences: WorkExperience[];
  projectExperiences: ProjectExperience[];
  educations: Education[];
  awards: Award[];
  papers: Paper[];
  repositories: Repository[];
  patents: Patent[];
  socialMedia: SocialMedia[];
  interestSkill: InterestSkill;
  selfEvaluation: string;
  workSkill: WorkSkill;
}

// Implementation note
export type ResumeListItem = 
  | WorkExperience 
  | ProjectExperience 
  | Education 
  | Award 
  | Paper 
  | Repository 
  | Patent 
  | SocialMedia;

// Implementation note
export type ResumeListKey = 
  | 'workExperiences' 
  | 'projectExperiences' 
  | 'educations' 
  | 'awards' 
  | 'papers' 
  | 'repositories' 
  | 'patents' 
  | 'socialMedia';

// Implementation note
export const initialResumeData: ResumeData = {
  basicInfo: {
    name: 'Alex Morgan',
    phone: '138****8888',
    city: {},
    gender: '',
    hometown: '',
    email: '',
    expectedSalary: '',
    isNameVerified: true,
    isPhoneVerified: true
  },
  workExperiences: [],
  projectExperiences: [],
  educations: [],
  awards: [],
  papers: [],
  repositories: [],
  patents: [],
  socialMedia: [],
  interestSkill: {
    interests: [],
    skills: []
  },
  selfEvaluation: '',
  workSkill: {
    name: '',
    proficiency: '',
    softSkills: []
  }
};

// Implementation note：Implementation note
export const createNewItem = {
  workExperience: (): WorkExperience => ({
    id: Date.now().toString(),
    organization: '',
    startDate: '',
    endDate: '',
    title: '',
    achievements: [],
    city: {},
    department: '',
    type: ''
  }),

  projectExperience: (): ProjectExperience => ({
    id: Date.now().toString(),
    organization: '',
    role: '',
    startDate: '',
    endDate: '',
    achievements: []
  }),

  education: (): Education => ({
    id: Date.now().toString(),
    school: '',
    faculty: '',
    degree: '',
    status: '',
    city: {},
    startDate: '',
    endDate: '',
    achievements: []
  }),

  award: (): Award => ({
    id: Date.now().toString(),
    name: '',
    issuer: '',
    date: ''
  }),

  paper: (): Paper => ({
    id: Date.now().toString(),
    title: '',
    journal: '',
    link: '',
    authorRank: 1
  }),

  repository: (): Repository => ({
    id: Date.now().toString(),
    type: '',
    url: ''
  }),

  patent: (): Patent => ({
    id: Date.now().toString(),
    name: '',
    number: ''
  }),

  socialMedia: (): SocialMedia => ({
    id: Date.now().toString(),
    platform: '',
    account: '',
    link: ''
  })
}; 