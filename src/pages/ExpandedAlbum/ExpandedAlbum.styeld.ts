import styled from "styled-components";

export const AlbumContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: min-content auto;
  padding: 1em;
`;

export const AlbumTitleContainerStyled = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  grid-column: 2/3;
  grid-row: 1/2;
`;

export const AlbumTitleStyled = styled.h3`
  font-family: arial;
  color: ${(props) => props.theme.colors.textPrimary};
  padding-left: 1em;
  margin-top: 0;
`;

export const AlbumPictureStyled = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

export const AlbumTracksContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/3;
    grid-row: 2/3;
    background: ${(props) => props.theme.colors.primary};
`

export const AlbumTrackDivStyled = styled.div`  
    background: ${(props) => props.theme.colors.secondary};
    margin: 0.2em 0;
    padding: 0 1em;

    > p {
        font-family: arial;
        color: ${(props) => props.theme.colors.textPrimary};
        font-weight: 600;
    }
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`