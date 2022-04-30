import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { toggleSidebar } from "../../Redux/darkTheme";
import {
  HomeIconStyled,
  NavbarContainerStyled,
  SidebarContainerStyled,
  SidebarToggleStyled,
  MenuIconStyled,
  SearchIconStyled,
  NavItemLi,
  SidebarTitleStyled
} from "./Sidebar.styled";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

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
    </SidebarContainerStyled>
  );
};

export default Sidebar;
