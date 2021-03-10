import type { AppProps, NextWebVitalsMetric } from 'next/app';

import '@styles/globals.css';
import LoadFonts from '@styles/LoadFonts';
import { useEffect } from 'react';

export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
  // eslint-disable-next-line no-console
  console.log(metric);
};

// https://github.com/pmndrs/react-spring/issues/818#issuecomment-536675722

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    LoadFonts();
  }, []);

  return <Component {...pageProps} />;
};
export default MyApp;
