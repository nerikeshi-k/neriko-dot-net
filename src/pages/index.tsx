import Description, { Paragraph } from 'components/Description';
import Heading from 'components/Heading';
import Section from 'components/Section';
import SectionHeading from 'components/SectionHeading';
import React from 'react';
import styled from 'styled-components';

export default () => (
  <Wrapper>
    <Heading>neriko.net</Heading>
    <Section>
      <MyIconWrapper>
        <MyIcon src="/icon.20200813.jpg" />
      </MyIconWrapper>
      <Description>
        <Paragraph>こんにちは。ねりけしといいます。</Paragraph>
        <Paragraph>
          <a href="https://odaibako.net">お題箱</a>、<a href="https://bokasitter.net">ぼかしったー</a>
          といったWebサービスを個人で開発運営しています。
          <br />
          TypeScriptとReactが好きです。Pythonも好きです。
        </Paragraph>
        <Paragraph>
          絵や漫画を描くのも好きで、コミティアに「けしのみ」というサークルでよく出ています。作曲もたまにします。
        </Paragraph>
      </Description>
    </Section>
    <Section>
      <SectionHeading>リンク、制作物</SectionHeading>
      <ExLinkList>
        <ExLinkItem>
          <a href="https://twitter.com/nerikeshi_k">Twitter</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://twitter.com/i/events/1226912137999613962">Twitterのマンガ</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://twitter.com/i/events/1226735657483038720">Twitterの音楽</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://www.pixiv.net/users/10618193">pixiv</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://github.com/nerikeshi-k">GitHub</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://soundcloud.com/nerikeshik">soundcloud</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://www.nicovideo.jp/user/1860167">ニコニコ動画</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://www.pixiv.net/fanbox/creator/10618193">pixiv FANBOX（活動支援）</a>
        </ExLinkItem>
      </ExLinkList>
    </Section>
    <Section>
      <SectionHeading>れんらくさき</SectionHeading>
      <ExLinkList>
        <ExLinkItem>
          お仕事やご相談は下記アドレスにお願いします。
          <br />
          nerikeshik@gmail.com
        </ExLinkItem>
      </ExLinkList>
    </Section>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const MyIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
`;

const MyIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ExLinkList = styled.ul`
  margin: 20px auto;
  padding: 0 0 0 28px;
  list-style: normal;
`;

const ExLinkItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;
