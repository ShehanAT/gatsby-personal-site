import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import profilePic from 'assets/illustrations/profilePic.jpeg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={profilePic} alt="I’m Shehan and I’m a Web Developer!" />
      </Thumbnail>
      <Details>
        <h1>Hi!</h1>
        <p>
          I'm Shehan Atukorala and welcome to my website. I am a web developer, web designer and most importantly, problem solver. I believe in two foundational pillars as a good problem solver: good soft skills and tons of in-the-trenches experience. I have worked with many different clients and I'm sure I can provide value to you too. Checkout my work and feel free to contact me
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
