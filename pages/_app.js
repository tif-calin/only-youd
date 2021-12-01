import Layout from '../components/layout';
import '../styles/globals.scss';
import '../styles/common/style.scss';
import { AppProvider } from '../state/useApp';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (page => <Layout>{page}</Layout>);

  return (
    <AppProvider>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
};

export default MyApp;
