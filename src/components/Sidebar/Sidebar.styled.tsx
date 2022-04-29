import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

type Props = {
  sidebarOpen?: boolean;
  size?: string;
  test?: boolean;
};

export const SidebarContainerStyled = styled.div<Props>`
  display: grid;
  grid-template-columns: 8vw 17vw;
  grid-template-rows: 8vw auto;
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
    grid-template-columns: 80% 20%;
    grid-template-rows: 10vh 15vh;
    height: ${(props) => (props.sidebarOpen ? "10vh" : "20vh")};
  }
  background: ${(props) => {
    return props.theme.colors.secondary;
  }};
  transition: 0.5s ease-in-out;
`;

export const SidebarToggleStyled = styled.div`
  display: grid;
  grid-row: 1/2;
  grid-column: 1/2;
  justify-items: center;
  @media (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
  background: none;
`;

export const NavbarContainerStyled = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  display: flex;
  width: 25vw;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavItemLi = styled.li`
  list-style: none;
`;

export const NavItemStyled = styled.div`
  display: grid;
  grid-template-columns: 8vw 17vw;
  text-decoration: none;
  font-size: 2rem;
  justify-items: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 30% 70%;
  }
`;

export const NavTextStyled = styled.h3`
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: arial;
  margin: 0;
  justify-self: start;
`;

export const HomeIconStyled = styled(AiFillHome).attrs((props: Props) => ({
  size: props.size,
}))`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${(props) => props.size};
`;
export const MenuIconStyled = styled(AiOutlineMenu)`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 3em;
  align-self: center;
`;
