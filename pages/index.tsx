import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import fs from 'fs';
import path from 'path';
import sortBy from 'lodash/sortBy';
import MainPage from '../components/MainPage';
import { ProjectsType } from '../types/ProjectType';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const postsDirectory = path.join(
    process.cwd(),
    'data',
    locale === 'fr' ? 'fr' : ''
  );
  const filePath = path.join(postsDirectory, 'projects.json');
  const unsortedProjects: Array<{
    title: string;
    description: string;
    url?: string;
    repo?: string;
  }> = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const projects = sortBy(
    unsortedProjects,
    // Trie par ordre décroissant de date
    (project) => project.title
  );
  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default function Home({ projects }: { projects: ProjectsType }) {
  return <MainPage projects={projects} />;
}
