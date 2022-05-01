import {
  SearchContainerStyled,
  SearchInputButtonStyled,
  SearchInputContainerStyeld,
  SearchInputStyled,
  SearchResultsContainerStyled,
  SearchResultsItemStyled,
} from "./Search.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchPagination from "./SearchPagination/SearchPagination";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const setCurrPage = (page: number) => {
    setPage(page);
  };

  const handleSearch = () => {
    if (query.length > 0) {
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}`, {
          params: {
            method: "track.search",
            track: `${query}`,
            api_key: process.env.REACT_APP_API_KEY,
            artist: "Wu-Tang Clan",
            format: "json",
            page: page,
            limit: 20,
          },
        })
        .then((res) => {
          if (res.data.results.trackmatches.track.length === 0) {
            setResults([{ name: "No results found" }]);
          } else {
            setResults(res.data.results.trackmatches.track);
            console.log(res.data.results);
            setTotalPages(
              Math.ceil(res.data.results["opensearch:totalResults"] / 20)
            );
          }
        })
        .catch((err) => console.log(err));
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <SearchContainerStyled>
      <SearchInputContainerStyeld>
        <SearchInputStyled
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          name="query"
          placeholder="Find a WTC song"
        />
        <SearchInputButtonStyled onClick={handleSearch}>
          Search
        </SearchInputButtonStyled>
      </SearchInputContainerStyeld>
      <SearchResultsContainerStyled>
        <ul>
          {results.length > 0 &&
            results.map((result: any, index: number) => {
              return (
                <li key={index}>
                  <SearchResultsItemStyled>
                    <img src={result.image[2]["#text"]} alt="Album Cover" />
                    <p> {result.name} </p>
                  </SearchResultsItemStyled>
                </li>
              );
            })}
        </ul>
      </SearchResultsContainerStyled>
      <SearchPagination
        currPage={page}
        setPage={setCurrPage}
        totalPages={totalPages}
      ></SearchPagination>
    </SearchContainerStyled>
  );
};

export default Search;
