import '../styles/globals.css';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps, session }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
