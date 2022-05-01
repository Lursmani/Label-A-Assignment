import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  ContentContainer,
  OuterContainerStyled,
} from "./components/outerContainer/styled/outerContainer.styled";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultTheme";
import { darkTheme } from "./darkTheme";
import { useDispatch, useSelector } from "react-redux";
import { loadAlbums, loadPagination } from "./Redux/albums";
import { setLoading } from "./Redux/loading";
import ExpandedAlbum from "./pages/ExpandedAlbum/ExpandedAlbum";
import Search from "./pages/Search/Search";

function App() {
  const data = useSelector((state: any) => state.albums);
  const dispatch = useDispatch();

  const darkThemeOn = useSelector((state: any) => state.darkTheme.darkTheme);

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get(`${process.env.REACT_APP_API_ADDRESS}`, {
        params: {
          method: "artist.getTopAlbums",
          artist: "Wu-Tang Clan",
          api_key: process.env.REACT_APP_API_KEY,
          format: "json",
          limit: 20,
          page: data.currPage,
        },
      })
      .then((res) => {
        dispatch(loadAlbums(res.data.topalbums));
        dispatch(loadPagination(res.data.topalbums["@attr"]));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
      });
  }, [data.currPage]);
  return (
    <ThemeProvider theme={darkThemeOn ? darkTheme : defaultTheme}>
      <OuterContainerStyled>
        <BrowserRouter>
          {" "}
          <Sidebar />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/album/:albumTitle" element={<ExpandedAlbum />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </ContentContainer>{" "}
        </BrowserRouter>
      </OuterContainerStyled>
    </ThemeProvider>
  );
}

export default App;
