import React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import Div100vh from "react-div-100vh";
import { StaticImage } from "gatsby-plugin-image";

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
// import Jan from "../images/jan";

const Home: React.FC<PageProps> = () => (
  <main>
    <MetaData />
    <GlobalStyles />
    <Div100vh>
      <Background>
        <HeaderContainer>
          <Header>JAN SÜLTEMEYER</Header>
        </HeaderContainer>
        <ImageContainer>
          <StaticImage
            src="../images/jan.png"
            alt="Photo of Jan"
            style={{ width: "350px" }}
          />
        </ImageContainer>
        <TextContainer>
          <p>
            👨‍💻 full stack developer. <br /> ☁️ cloud engineer. <br /> 🪡
            aspiring tailor.
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
        <a
          href="https://github.com/sltmyr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </FooterContainer>
    </Div100vh>
  </main>
);

const MetaData: React.FC = () => (
  <Helmet
    htmlAttributes={{ lang: "en" }}
    title={"Jan Sültemeyer"}
    meta={[
      {
        name: `description`,
        content: "my personal homepage",
      },
      {
        property: `og:title`,
        content: "Jan Sültemeyer",
      },
      {
        property: `og:description`,
        content: "my personal homepage",
      },
      {
        property: `og:type`,
        content: `website`,
      },
    ]}
  />
);

export default Home;
