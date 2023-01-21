import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#232323" />
                {/* <link rel='manifest' href='/manifest.json' /> */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="./apple-touch-icon.png" />

                <meta property="og:image" content="" />
                <meta property="og:type" content="website" />

                <meta property="og:description" content="" />
                <meta name="description" content="" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
