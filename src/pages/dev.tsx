import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading';
import Section from 'components/Section';
import Description, { Paragraph } from 'components/Description';
import SectionHeading from 'components/SectionHeading';

export default () => (
  <Wrapper>
    <Heading>development</Heading>
    <Section>
      <ServiceName>お題箱</ServiceName>
      <ScreenShot src="/odaibako.png" />
      <Description>
        <Paragraph>
          <a href="https://odaibako.net">odaibako.net</a>
        </Paragraph>
        <Paragraph>匿名リクエストボックス開設サービスです。</Paragraph>
        <Paragraph>現在90万人超のユーザーに使っていただいております。</Paragraph>
      </Description>
    </Section>
    <Section>
      <ServiceName>モザイクツイーター</ServiceName>
      <ScreenShot src="/mosaic.png" />
      <Description>
        <Paragraph>
          <a href="https://mosaic.neriko.net">mosaic.neriko.net</a>
        </Paragraph>
        <Paragraph>Twitterにモザイクやぼかしつきで画像を投稿できるサービスです。</Paragraph>
      </Description>
    </Section>
    <Section>
      <ServiceName>chaii</ServiceName>
      <ScreenShot src="/chaii.png" />
      <Description>
        <Paragraph>
          <a href="https://chaii.app">chaii.app</a>
        </Paragraph>
        <Paragraph>時限付きのボイスチャットルームを簡単に作れるサービスです。</Paragraph>
        <Paragraph>ユーザー登録の必要がなく、ブラウザだけで動作するため、誰でもすぐに使えます。まだβ版です。</Paragraph>
      </Description>
    </Section>
    <Section>
      <ServiceName>LGTMi</ServiceName>
      <ScreenShot src="/lgtmi.png" />
      <Description>
        <Paragraph>
          <a href="https://lgtmi.neriko.net">lgtmi.neriko.net</a>
        </Paragraph>
        <Paragraph>LGTM画像を生成するジェネレータです。Twitterなどの画像URLを貼り付けるだけで生成できます。</Paragraph>
      </Description>
    </Section>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const ServiceName = styled(SectionHeading)`
  font-family: 'Noto Sans JP', -apple-system, meiryo, sans-serif;
  letter-spacing: unset;
  font-size: 1.2rem;

  &::before {
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    background-color: #333;
    vertical-align: middle;
    margin-right: 8px;
  }

  &::after {
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    background-color: #333;
    vertical-align: middle;
    margin-left: 8px;
  }
`;

const ScreenShot = styled.img`
  display: block;
  max-width: 400px;
  width: 100%;
  margin: 0 auto 8px;
`;
