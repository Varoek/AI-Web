
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface SkillGroup {
  name: string;
  icon: string;
  description: string;
  items: string[];
  useCases?: string[];
}
