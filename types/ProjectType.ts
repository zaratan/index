export type ProjectType = {
  title: string;
  description: string;
  url?: string;
  repo?: string;
  techs?: Array<string>;
};

export type ProjectsType = Array<ProjectType>;
