// pages/_app.js
import '../styles/globals.css'; // Import global CSS
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Raleway:wght@400&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
