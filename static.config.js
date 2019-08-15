import axios from 'axios';
import path from 'path';
import React from 'react';

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rajdhani&display=swap" rel="stylesheet" />
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
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
};
