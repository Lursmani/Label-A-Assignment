import {
  AlbumBoxStyled,
  AlbumPictureStyled,
  AlbumTitleStyled,
  AlbumExpandDiv,
  ArrowDownIcon,
  IconContainer,
  AlbumExpandedTrackListItem,
  AlbumExpandedTrackListDiv,
  AlbumExpandText,
} from "./AlbumBox.styled";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const AlbumBox = ({ album }: { album: any }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [albumData, setAlbumData] = useState<any>();

  const handleAlbumExpand = () => {
    setExpanded(!expanded);

    if (!albumData) {
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}`, {
          params: {
            method: "album.getInfo",
            artist: "Wu-Tang Clan",
            album: album.name,
            api_key: process.env.REACT_APP_API_KEY,
            format: "json",
          },
        })
        .then((res) => {
          setAlbumData(res.data.album);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <AlbumBoxStyled album={album} expanded={expanded}>
      <AlbumPictureStyled src={album.image[1]["#text"]} />{" "}
      <Link to={`/album/${album.name}`} style={{ textDecoration: "none" }}>
        <AlbumTitleStyled>{album.name}</AlbumTitleStyled>
      </Link>
      <IconContainer onClick={handleAlbumExpand}>
        <AlbumExpandText>Tracklist</AlbumExpandText>
        <ArrowDownIcon $expanded={expanded} />
      </IconContainer>
      {expanded && (
        <AlbumExpandDiv>
          <AlbumExpandedTrackListDiv expanded={expanded}>
            {albumData && albumData.tracks ? (
              albumData.tracks.track.map((track: any, index: number) => {
                return (
                  <AlbumExpandedTrackListItem key={index}>
                    {track.name}
                  </AlbumExpandedTrackListItem>
                );
              })
            ) : (
              <AlbumExpandedTrackListItem>
                Loading... or the tracks don't exist.
              </AlbumExpandedTrackListItem>
            )}
          </AlbumExpandedTrackListDiv>
        </AlbumExpandDiv>
      )}
    </AlbumBoxStyled>
  );
};

export default AlbumBox;
