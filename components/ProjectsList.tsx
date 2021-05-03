import React from 'react';
import { ProjectsType } from '../types/ProjectType';
import Project from './Project';

const ProjectsList = ({ projects }: { projects: ProjectsType }) => (
  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {projects.map((project) => (
      <Project key={project.title} project={project} />
    ))}
  </ul>
);

export default ProjectsList;
