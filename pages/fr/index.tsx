import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainPage from '../../components/MainPage';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
});

export default function Home() {
  return (
    <MainPage
      title="Zaratan's Projects"
      description="Un index comprehensible et consultable de mes différents projets."
    />
  );
}
