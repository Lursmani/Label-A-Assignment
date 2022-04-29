import { Link } from "react-router-dom";
import { NavItemLi, NavItemStyled, NavTextStyled } from "./Sidebar.styled";

const NavItem = ({
  text,
  url,
  children,
}: {
  text: string;
  url: string;
  children: any;
}) => {
  return (
    <NavItemLi>
      <Link to={url} style={{ textDecoration: "none" }}>
        <NavItemStyled>
          {children} <NavTextStyled>{text} </NavTextStyled>
        </NavItemStyled>
      </Link>
    </NavItemLi>
  );
};

export default NavItem;
