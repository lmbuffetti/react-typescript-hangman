import React from 'react';
import App from 'next/app';
import Head from 'next/head';
const icon = require('../assets/img/favicon.ico');
import '../assets/styles/main.scss'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }
    render() {
        const { Component, pageProps } = this.props;

        return (
            <div>
                <Head>
                    <title>Hangman</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                    <link rel="icon" type="image/x-icon" href={icon} />
                </Head>
                <Component { ...pageProps } />
            </div>
        );
    }
}

export default MyApp;
