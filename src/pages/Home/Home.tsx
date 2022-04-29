import { useEffect } from "react";
import { AlbumsContainerStyled, HomeContainerStyled } from "./Home.styled";
import AlbumBox from "./components/albumBox/AlbumBox";
import { useSelector } from "react-redux";
import React from "react";
import Pagination from "./components/pagination/Pagination";

const Home: React.FC = () => {
  const albums = useSelector((state: any) => state.albums.albums.album);
  const loading = useSelector((state: any) => state.loading);
  const [albumsList, setAlbumsList] = React.useState([]);

  useEffect(() => {
    if (!loading) {
      setAlbumsList(albums);
    }
  }, [albums]);

  useEffect(() => {
    console.log(albums);
  }, [albums]);

  return (
    <HomeContainerStyled>
      <AlbumsContainerStyled>
        {albumsList &&
          albumsList.map((album: any) => (
            <AlbumBox album={album} key={album.id}></AlbumBox>
          ))}
      </AlbumsContainerStyled>
      <Pagination />
    </HomeContainerStyled>
  );
};

export default Home;
