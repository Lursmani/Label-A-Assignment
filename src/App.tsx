import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/index";
import {
  ContentContainer,
  OuterContainerStyled,
} from "./components/outerContainer/styled/outerContainer.styled";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { defautTheme } from "./defaultTheme";
import { useDispatch, useSelector } from "react-redux";
import { loadAlbums, loadPagination } from "./Redux/albums";
import { setLoading } from "./Redux/loading";
import ExpandedAlbum from "./pages/ExpandedAlbum/ExpandedAlbum";

function App() {
  const data = useSelector((state: any) => state.albums);
  const dispatch = useDispatch();

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
    <ThemeProvider theme={defautTheme}>
      <OuterContainerStyled>
        <BrowserRouter>
          {" "}
          <Sidebar />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/album/:albumTitle" element={<ExpandedAlbum />} />
            </Routes>
          </ContentContainer>{" "}
        </BrowserRouter>
      </OuterContainerStyled>
    </ThemeProvider>
  );
}

export default App;
