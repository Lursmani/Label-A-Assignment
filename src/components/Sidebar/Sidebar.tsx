import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavItem from "./NavItem";
import {
  HomeIconStyled,
  NavbarContainerStyled,
  SidebarContainerStyled,
  SidebarToggleStyled,
  MenuIconStyled,
  SearchIconStyled,
  SidebarTitleStyled,
  DarkThemeToggleStyled,
  ThemeToggleContainerStyled,
  LightThemeToggleStyled,
} from "./Sidebar.styled";
import { ToggleDarkTheme } from "../../Redux/darkTheme";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const darkThemeOn = useSelector((state: any) => state.darkTheme.darkTheme);

  return (
    <SidebarContainerStyled sidebarOpen={open}>
      <SidebarTitleStyled>Wu-Tang Clan</SidebarTitleStyled>
      <SidebarToggleStyled onClick={() => setOpen(!open)}>
        <MenuIconStyled />
      </SidebarToggleStyled>{" "}
      <NavbarContainerStyled>
        <ul>
          <NavItem url="/" text="Home">
            <HomeIconStyled fontSize="3rem" />
          </NavItem>
          <NavItem url="/search" text="Search">
            <SearchIconStyled fontSize="3rem" />
          </NavItem>
        </ul>
      </NavbarContainerStyled>
      <ThemeToggleContainerStyled>
        {darkThemeOn ? (
          <LightThemeToggleStyled onClick={() => dispatch(ToggleDarkTheme())} />
        ) : (
          <DarkThemeToggleStyled onClick={() => dispatch(ToggleDarkTheme())} />
        )}
      </ThemeToggleContainerStyled>
    </SidebarContainerStyled>
  );
};

export default Sidebar;
