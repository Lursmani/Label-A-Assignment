import styled from "styled-components";

type Props = {
  album?: any;
};

export const HomeContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const AlbumsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AlbumBoxStyled = styled.div<Props>`
  display: grid;
  flex: 1 0 300px;
  min-height: 200px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin: 5px;
`;
