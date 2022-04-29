import {
  AlbumBoxStyled,
  AlbumPictureStyled,
  AlbumTitleStyled,
} from "./AlbumBox.styled";

const AlbumBox = ({ album }: { album: any }) => {
  return (
    <AlbumBoxStyled album={album}>
      <AlbumPictureStyled src={album.image[1]["#text"]} />{" "}
      <AlbumTitleStyled>{album.name}</AlbumTitleStyled>
    </AlbumBoxStyled>
  );
};

export default AlbumBox;
