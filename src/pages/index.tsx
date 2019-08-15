import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import Heading from 'components/Heading';
import SectionHeading from 'components/SectionHeading';
import Section from 'components/Section';
import Description, { Paragraph } from 'components/Description';

export default () => (
  <Wrapper>
    <Heading>neriko.net</Heading>
    <Profile>
      <MyIconWrapper>
        <MyIcon src="/icon.jpg" />
      </MyIconWrapper>
      <Name>ねりけし</Name>
      <Description>
        <Paragraph>銀座周辺にあった会社のフロントエンドエンジニアです。</Paragraph>
        <Paragraph>漫画を描いたり、音楽を作ったり、Webサービスを作ったりするのが趣味です。</Paragraph>
      </Description>
    </Profile>
    <Works>
      <SectionHeading>works</SectionHeading>
      <WorkLinkList>
        <WorkLinkItem>
          <Link to="/dev">
            <Icon src="/icon-code.svg" />
            <WorkLinkLabel>開発</WorkLinkLabel>
          </Link>
        </WorkLinkItem>
        <WorkLinkItem>
          <Link to="/pics">
            <Icon src="/icon-color_lens.svg" />
            <WorkLinkLabel>絵</WorkLinkLabel>
          </Link>
        </WorkLinkItem>
        <WorkLinkItem>
          <Link to="/musics">
            <Icon src="/icon-music_note.svg" />
            <WorkLinkLabel>音</WorkLinkLabel>
          </Link>
        </WorkLinkItem>
      </WorkLinkList>
    </Works>
    <Contacts>
      <SectionHeading>contact</SectionHeading>
      <ExLinkList>
        <ExLinkItem>
          <a href="https://twitter.com/nerikeshi_k">twitter</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://github.com/nerikeshi-k">github</a>
        </ExLinkItem>
        <ExLinkItem>nerikeshik@gmail.com</ExLinkItem>
      </ExLinkList>
    </Contacts>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Profile = styled(Section)``;

const MyIconWrapper = styled.div`
  margin: auto;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
`;

const MyIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Name = styled.div`
  margin: auto;
  text-align: center;
  margin-bottom: 8px;
`;

const Works = styled(Section)``;

const WorkLinkList = styled.ul`
  list-style: none;
  margin: 20px auto;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const WorkLinkItem = styled.li`
  text-align: center;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const WorkLinkLabel = styled.div`
  color: #333;
  font-size: 0.9rem;
`;

const Contacts = styled(Section)``;

const ExLinkList = styled.ul`
  margin: 20px auto;
  padding: 0;
  list-style: none;
`;

const ExLinkItem = styled.li`
  text-align: center;
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;
