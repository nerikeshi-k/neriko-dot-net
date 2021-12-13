import Description, { Paragraph } from 'components/Description';
import Heading from 'components/Heading';
import { Link } from 'components/Link';
import Section from 'components/Section';
import SectionHeading from 'components/SectionHeading';
import React from 'react';
import styled from 'styled-components';
import { ICON_URL } from '../constants';

export default () => (
  <Wrapper>
    <Heading>neriko.net</Heading>
    <Section>
      <MyIconWrapper>
        <MyIcon src={ICON_URL} alt="著者近影" />
      </MyIconWrapper>
      <Description>
        <Paragraph>ねりけしです。</Paragraph>
        <Paragraph>
          絵や漫画を描くのが好きです。お題箱やぼかしったーなどを開発しています。本業はWebフロントエンドエンジニアで、TypeScriptを少し読むことができます。
        </Paragraph>
      </Description>
    </Section>
    <Section>
      <SectionHeading>links</SectionHeading>
      <List>
        <ListItem>
          <Link href="https://twitter.com/nerikeshi_k" newtab>
            twitter
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.pixiv.net/users/10618193" newtab>
            pixiv
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.pixiv.net/fanbox/creator/10618193" newtab>
            pixiv fanbox
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.pixiv.net/users/10618193/request" newtab>
            pixiv request
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/nerikeshi-k" newtab>
            github
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://soundcloud.com/nerikeshik" newtab>
            soundcloud
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.nicovideo.jp/user/1860167" newtab>
            niconico
          </Link>
        </ListItem>
      </List>
    </Section>
    <Section>
      <SectionHeading>dev</SectionHeading>
      <List>
        <ListItem>
          <Link href="https://odaibako.net" newtab>
            お題箱
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://odaibako.net/gacha" newtab>
            お題ガチャ
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://bokasitter.net/" newtab>
            ぼかしったー
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://monto.me/" newtab>
            monto
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://lgtmi.neriko.net/" newtab>
            LGTMi
          </Link>
        </ListItem>
      </List>
    </Section>
    <Section>
      <SectionHeading>contact</SectionHeading>
      <List>
        <ListItem colspan={2}>nerikeshik@gmail.com</ListItem>
      </List>
    </Section>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const MyIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #efefef;
  overflow: hidden;
`;

const MyIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  padding: 0 0 0 18px;
  list-style: none;

  @media (min-width: 680px) {
    padding: 0 0 0 28px;
  }
`;

const ListItem = styled.li<{ colspan?: 1 | 2 }>`
  width: ${({ colspan }) => (colspan === 2 ? '100%' : '50%')};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  font-size: 16px;

  &::before {
    content: '';
    display: block;
    background-color: #ccc;
    margin-right: 8px;
    width: 8px;
    height: 8px;
    flex-shrink: 0;
  }
`;
