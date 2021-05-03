import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

const MainPage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { t } = useTranslation('common');
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {t('header.title')}
    </div>
  );
};

export default MainPage;
