import styled, { css } from "styled-components";
import { Mail } from "@styled-icons/entypo";
import { LinkedinSquare, Github } from "@styled-icons/boxicons-logos";

const breakpoint = 800;

export const Background = styled.div`
  background: #dce35b;
  background: -webkit-linear-gradient(to bottom, #dce35b, #45b649);
  background: linear-gradient(to bottom, #dce35b, #45b649);
  height: 90vh;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
`;

export const Header = styled.h1`
  font-family: NotoSansBold, sans-serif;
  font-size: 30px;
  padding-left: 50px;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const MainImage = styled.div`
  width: 350px;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 15vh;
`;

export const FooterContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;

const iconStyle = css`
  color: white;
  height: 40px;
`;

export const MailIcon = styled(Mail)`
  ${iconStyle}
  margin-right: 50px;
  @media (min-width: ${breakpoint}px) {
    margin-right: 100px;
  }
`;

export const LinkedIn = styled(LinkedinSquare)`
  ${iconStyle}
  margin-right: 50px;
  @media (min-width: ${breakpoint}px) {
    margin-right: 100px;
  }
`;

export const GitHub = styled(Github)`
  ${iconStyle}
`;
