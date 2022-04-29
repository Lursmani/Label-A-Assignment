import styled from "styled-components";

type Props = {
  album: any;
};

export const AlbumBoxStyled = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70% 30%;
  flex: 1 0 200px;
  min-height: 200px;
  max-height: 400px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin: 5px;
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
`;
