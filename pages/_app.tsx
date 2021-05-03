/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
