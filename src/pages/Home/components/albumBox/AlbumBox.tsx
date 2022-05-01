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
  const [error, setError] = useState<string>("");

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
          if (res.data.album.tracks) {
            setError("");
            setAlbumData(res.data.album);
          } else {
            setError("No tracks found");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <AlbumBoxStyled album={album} expanded={expanded}>
      <AlbumPictureStyled src={album.image[2]["#text"]} />{" "}
      <Link to={`/album/${album.name}`} style={{ textDecoration: "none" }}>
        <AlbumTitleStyled>{album.name}</AlbumTitleStyled>
      </Link>
      <IconContainer onClick={handleAlbumExpand}>
        <AlbumExpandText>Tracklist</AlbumExpandText>
        <ArrowDownIcon $expanded={expanded} />
      </IconContainer>
      {expanded && !error ? (
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
                Loading...
              </AlbumExpandedTrackListItem>
            )}
          </AlbumExpandedTrackListDiv>
        </AlbumExpandDiv>
      ) : (
        <AlbumExpandDiv>
          <AlbumExpandedTrackListDiv expanded={expanded}>
            <AlbumExpandedTrackListItem>
              No tracks found
            </AlbumExpandedTrackListItem>
          </AlbumExpandedTrackListDiv>
        </AlbumExpandDiv>
      )}
    </AlbumBoxStyled>
  );
};

export default AlbumBox;
