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
      <Description centering>
        <Paragraph>ねりけしです。Webのエンジニアです。</Paragraph>
        <Paragraph>
          <a href="https://twitter.com/i/events/1226912137999613962">漫画を描い</a>たり、
          <a href="https://twitter.com/i/events/1226735657483038720">音楽を作っ</a>
          たり、Webサービスを作ったりしています。
        </Paragraph>
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
    <Links>
      <SectionHeading>links</SectionHeading>
      <ExLinkList>
        <ExLinkItem>
          <a href="https://twitter.com/nerikeshi_k">twitter</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://github.com/nerikeshi-k">github</a>
        </ExLinkItem>
        <ExLinkItem>
          <a href="https://www.pixiv.net/fanbox/creator/10618193">pixiv fanbox</a>
        </ExLinkItem>
      </ExLinkList>
    </Links>
    <Contacts>
      <SectionHeading>contact</SectionHeading>
      <ExLinkList>
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
  color: #fff;
  font-size: 0.9rem;
`;

const Links = styled(Section)``;

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
