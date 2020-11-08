import React from "react";
import { PageProps } from "gatsby";

import "../styles/fonts.css";
import { GlobalStyles } from "../styles/global_styles";
import {
  Header,
  ImageContainer,
  MainImage,
  TextContainer,
  FooterContainer,
  MailIcon,
  LinkedIn,
  GitHub,
  HeaderContainer,
  Background,
} from "../styles/index.styles";
import Jan from "../images/jan";

const Home: React.FC<PageProps> = () => (
  <main>
    <GlobalStyles />
    <Background>
      <HeaderContainer>
        <Header>JAN SÜLTEMEYER</Header>
      </HeaderContainer>
      <ImageContainer>
        <MainImage>
          <Jan />
        </MainImage>
      </ImageContainer>
      <TextContainer>
        <p>
          full stack developer. <br /> cloud engineer. <br /> pizza lover.
        </p>
      </TextContainer>
    </Background>
    <FooterContainer>
      <a href="mailto:jan@sultemeyer.com">
        <MailIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/jan-s%C3%BCltemeyer-483576149"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </a>
      <a href="https://github.com/sltmyr" target="_blank" rel="noopener noreferrer">
        <GitHub />
      </a>
    </FooterContainer>
  </main>
);

export default Home;
