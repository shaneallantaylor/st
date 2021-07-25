import Head from 'next/head';
import Router from 'next/router';
import Layout from '../components/Layout';

function routeChangeComplete() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

Router.events.on('routeChangeComplete', () => routeChangeComplete());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Shane Taylor</title>
        <meta property="og:title" content="Hey there, I'm Shane" />
        <meta
          property="og:description"
          content="General goof trying to be the best I can be."
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;

  return { pageProps };
};

export default MyApp;
