import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  margin: 20px;
  font-size: 20px;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
`;

export const LinkWrapper = styled.div`
  margin-left: auto;
`;

export const LogoWrapper = styled.div`
  font-size: 20px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
