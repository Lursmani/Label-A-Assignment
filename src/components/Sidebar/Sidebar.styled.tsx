import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

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
    grid-template-rows: 10vh auto;
    height: ${(props) => (props.sidebarOpen ? "30vh" : "10vh")};
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
  padding: 0.5rem 0;
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
  font-family: Bamboo;
  margin: 0;
  justify-self: start;
  padding-left: 2px;
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
  cursor: pointer;
`;

export const SearchIconStyled = styled(AiOutlineSearch)`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${(props) => props.size};
  align-self: center;
`;

export const SidebarTitleStyled = styled.h2`
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: Bamboo;
  font-size: 1.8rem;
  align-self: center;
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
  padding-left: 2px;
`;
export const ThemeToggleContainerStyled = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  @media (max-width: 768px) {
    position: static;
    display: grid;
    justify-items: center;
    align-items: start;

    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

export const DarkThemeToggleStyled = styled(BsFillMoonFill)`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 2em;
`;

export const LightThemeToggleStyled = styled(BsFillSunFill)`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 2em;
`;
