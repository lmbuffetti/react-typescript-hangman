import React from 'react';
import Head from 'next/head';
const icon = require('../assets/img/favicon.ico');
import '../assets/styles/main.scss'

interface StatelessPage<P = {}> {
  getInitialProps?: (ctx: any) => Promise<P>
}

const App: StatelessPage = ({ Component, ...props }) => {

    return (
      <div>
          <Head>
              <title>Hangman</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />

              <link rel="icon" type="image/x-icon" href={icon} />
          </Head>
          <Component { ...props } />
      </div>
    );
}

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
}

export default App;
