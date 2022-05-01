import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  album?: any;
  expanded?: boolean;
};

type IconProps = {
  $expanded?: boolean;
}

export const AlbumBoxStyled = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 100px 32px ${(props) => props.expanded ? "100px" : "0px"};
  flex: 1 0 300px;
  height: ${(props) => (props.expanded ? "430px" : "330px")};
  background-color: ${(props) => props.theme.colors.secondary};
  margin: 5px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
`;

export const AlbumPictureStyled = styled.img`
  width: 100%;
  height: 100%;
`;

export const AlbumTitleStyled = styled.h4`
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: arial;
  justify-self: center;
  padding: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-top: 1px solid ${(props) => props.theme.colors.textPrimary};
  border-bottom: 1px solid ${(props) => props.theme.colors.textPrimary};
  height: 30px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ArrowDownIcon = styled(MdKeyboardArrowDown)<IconProps>`
  transform: ${(props) => (props.$expanded ? "rotate(180deg)" : "rotate(0deg)")};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const AlbumExpandText = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 500;
  margin: 0;
  padding: 5px 0;
  font-family: arial;   
  `;

export const AlbumExpandDiv = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
`;

export const AlbumExpandedTrackListDiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100px;
  height: ${(props) => (props.expanded ? "max-content" : "0px")};
`;

export const AlbumExpandedTrackListItem = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 500;
  margin: 0;
  padding: 5px;
  font-family: arial;
`;
