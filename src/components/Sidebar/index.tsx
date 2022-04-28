import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { toggleSidebar } from "../../Redux/sidebar";
import {
  HomeIconStyled,
  NavbarContainerStyled,
  SidebarContainerStyled,
  SidebarToggleStyled,
} from "./Sidebar.styled";

const Sidebar: React.FC = () => {
  const sidebarOpen = useSelector((state: any) => state.sidebarOpen);
  const dispatch = useDispatch();
  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <SidebarContainerStyled sidebarOpen={sidebarOpen}>
      <NavbarContainerStyled>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavItem>
            <HomeIconStyled fontSize="2rem" /> Home
          </NavItem>
        </Link>
      </NavbarContainerStyled>
      <SidebarToggleStyled onClick={handleSidebarToggle}>
        <HomeIconStyled />
      </SidebarToggleStyled>
    </SidebarContainerStyled>
  );
};

export default Sidebar;
