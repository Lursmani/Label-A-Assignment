import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";

type Props = {
  sidebarOpen?: boolean;
  size?: string;
  test?: boolean;
};

export const SidebarContainerStyled = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% auto;
  grid-row: 1/3;
  grid-column: 1/2;
  width: ${(props) => (props.sidebarOpen ? "25vw" : "8vw")};
  min-height: 100vh;
  height: 100%;
  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 1/2;
    width: 100vw;
    min-height: 10vh;
    grid-template-columns: 90% 10%;
    grid-template-rows: 10vh 15vh;
    height: ${(props) => (props.sidebarOpen ? "10vh" : "25vh")};
  }
  background: ${(props) => {
    return props.theme.colors.secondary;
  }};
`;

export const SidebarToggleStyled = styled.div`
  display: grid;
  grid-row: 1/2;
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
  background: black;
`;

export const NavbarContainerStyled = styled.div`
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
`;

export const NavItemStyled = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  text-decoration: none;
  color: white;
  font-size: 2rem;
  font-family: arial;
`;

export const HomeIconStyled = styled(AiFillHome).attrs((props: Props) => ({
  size: props.size,
}))`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${(props) => props.size};
`;
