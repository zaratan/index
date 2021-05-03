import React from 'react';
import Head from 'next/head';

const MainPage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    PAGE INDEX
  </div>
);

export default MainPage;
