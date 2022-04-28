import { NavItemStyled } from "./Sidebar.styled";

const NavItem = ({ children }: {  children: any }) => {
  return (
    <NavItemStyled>
      {children} 
    </NavItemStyled>
  );
};

export default NavItem;
