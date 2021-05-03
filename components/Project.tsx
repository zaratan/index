import React from 'react';
import { LinkIcon } from '@heroicons/react/solid';
import { useTranslation } from 'next-i18next';
import { ProjectType } from '../types/ProjectType';
import GithubIcon from './GithubIcon';
import TechBadge from './TechBadge';

const Project = ({ project }: { project: ProjectType }) => {
  const { t } = useTranslation('common');
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col p-8">
        <h2 className="mt-6 text-gray-900 font-medium text-lg">
          {project.title}
        </h2>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">{t('project.description')}</dt>
          <dd className="text-gray-500 text-sm">{project.description}</dd>
        </dl>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">{t('project.techs')}</dt>
          <dd className="space-x-1">
            {(project.techs || []).map((tech) => (
              <TechBadge>{tech}</TechBadge>
            ))}
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <a
              href={`${project.url}`}
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <LinkIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
              <span className="ml-3">{t('project.url')}</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <a
              href={`${project.repo}`}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <GithubIcon
                className="w-6 h-6 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">{t('project.repo')}</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
