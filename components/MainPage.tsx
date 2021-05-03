import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import ProjectsList from './ProjectsList';
import { ProjectsType } from '../types/ProjectType';

const MainPage = ({ projects }: { projects: ProjectsType }) => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  return (
    <div className="min-h-screen h-full flex flex-col">
      <Head>
        <title>{t('header.title')}</title>
        <meta name="description" content={t('header.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-800 pb-32">
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between sm:items-center">
            <header>
              <h1 className="text-3xl font-bold text-white">
                {t('header.title')}
              </h1>
              <sub className="text-gray-100 italic">
                {t('header.description')}
              </sub>
            </header>
            <Link href="/" locale={locale === 'fr' ? 'en' : 'fr'}>
              <a className="text-white mt-2 sm:mt-0">
                {locale === 'fr' ? '🇬🇧' : '🇫🇷'}
              </a>
            </Link>
          </div>
        </header>
      </div>

      <main className="-mt-32 flex-grow">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <ProjectsList projects={projects} />
          </div>
        </div>
      </main>

      <footer className="italic text-center bg-gray-800 text-white">
        <span className="pb-3 pt-2 flex justify-center items-center">
          <span>
            {t('footer.made_with')}
            <span
              className="transition-colors hover:text-red-500 duration-5000 ease-in-out hover:duration-200 mx-1"
              style={{ cursor: 'grab' }}
            >
              ♥
            </span>
            {t('footer.by')}
          </span>
          <a
            className="pl-1 transition-colors text-blue-400 hover:text-blue-500"
            href="https://twitter.com/zaratan"
          >
            @zaratan
          </a>
          .
          <a
            className="pl-1 transition-colors text-blue-400 hover:text-blue-500"
            href="https://ko-fi.com/zaratan"
          >
            {t('footer.offer_tea')}
          </a>
          .
        </span>
      </footer>
    </div>
  );
};

export default MainPage;
