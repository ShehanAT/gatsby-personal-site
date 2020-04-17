import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, Links } from './styles';
// import {  } from "../../theme/Footer/styles"
import social from '../../theme/Footer/social.json';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Greetings!</h1>
        <h4>I’m Shehan Atukorala, I am a web developer, web designer and most importantly, problem solver!</h4>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
          <a href="https://docs.google.com/document/d/1zbA6wURmnkbgY36lH1GYpTbzjal4Hlf3vBkZWfqDZV0/edit?usp=sharing" id="resumeViewBtn"  target="_blank">
            View My Resume
          </a>
          <Links>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </Details>
      <Thumbnail>
        {/* <img src={dev} alt="I’m John and I’m a JAMStack engineer!" /> */}
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
