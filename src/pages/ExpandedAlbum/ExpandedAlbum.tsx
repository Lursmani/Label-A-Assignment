import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  AlbumContainerStyled,
  AlbumPictureStyled,
  AlbumTitleContainerStyled,
  AlbumTitleStyled,
  AlbumTrackDivStyled,
  AlbumTracksContainerStyled,
} from "./ExpandedAlbum.styeld";

const ExpandedAlbum: React.FC = () => {
  const params = useParams();
  const [albumData, setAlbumData] = useState<any>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ADDRESS}`, {
        params: {
          method: "album.getInfo",
          artist: "Wu-Tang Clan",
          album: `${params.albumTitle}`,
          api_key: process.env.REACT_APP_API_KEY,
          format: "json",
        },
      })
      .then((res) => {
        setAlbumData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AlbumContainerStyled>
      {albumData && (
        <AlbumPictureStyled src={albumData.album?.image[3]["#text"]} />
      )}

      <AlbumTitleContainerStyled>
        <AlbumTitleStyled>{`${params.albumTitle}`}</AlbumTitleStyled>
        {albumData &&
          albumData.album.wiki ? 
            <AlbumTitleStyled>
              Published on {`${albumData.album.wiki.published}`}
            </AlbumTitleStyled> :
             <AlbumTitleStyled>
             Published on: Unknown
           </AlbumTitleStyled>
          }
      </AlbumTitleContainerStyled>
      <AlbumTracksContainerStyled>
        {albumData &&
          albumData.album.tracks ?
          albumData.album.tracks.track.map((track: any) => {
            return (
              <AlbumTrackDivStyled>
                <p>{track.name}</p>
              </AlbumTrackDivStyled>
            );
          })
          : <AlbumTrackDivStyled><p>Loading... or the tracks don't exist.</p></AlbumTrackDivStyled>
          }
      </AlbumTracksContainerStyled>
    </AlbumContainerStyled>
  );
};

export default ExpandedAlbum;
