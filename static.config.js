import axios from 'axios';
import path from 'path';
import React from 'react';

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="ja">
      <Head>
        <title>neriko.net</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Rajdhani&display=swap&text=neriko.net" rel="stylesheet" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://neriko.net/" />
        <meta property="og:title" content="ねりけしについて" />
        <meta property="og:description" content="制作物一覧、自己紹介、連絡先などです" />
        <meta property="og:image" content="https://neriko.net/ogp.20200813.jpg" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  siteRoot: 'https://neriko.net/',
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages')
      }
    ],
    'react-static-plugin-styled-components',
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
};
