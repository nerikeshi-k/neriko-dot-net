import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import Heading from 'components/Heading';

export default () => (
  <Wrapper>
    <Heading>musics</Heading>
    <Section>
      <PlayerWrapper>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          allow="autoplay"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/466302672&color=%23cbd2d3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </PlayerWrapper>
    </Section>
    <Section>
      <PlayerWrapper>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          allow="autoplay"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/365302955&color=%23cbd2d3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </PlayerWrapper>
    </Section>
    <Section>
      <PlayerWrapper>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          allow="autoplay"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/365298602&color=%23cbd2d3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </PlayerWrapper>
    </Section>
    <Section>
      <PlayerWrapper>
        <iframe
          width="312"
          height="176"
          src="https://ext.nicovideo.jp/thumb/sm17213446"
          scrolling="no"
          style={{ border: 'solid 1px #ccc' }}
          frameBorder="no"
        >
          <a href="https://www.nicovideo.jp/watch/sm17213446">【初音ミク】雪解けの朝へ【オリジナルPV】</a>
        </iframe>
      </PlayerWrapper>
    </Section>
    <Section>その他はリンクから辿ってください</Section>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const PlayerWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
`;
