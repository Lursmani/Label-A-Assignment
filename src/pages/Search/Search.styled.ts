import styled from "styled-components";

export const SearchContainerStyled = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  grid-template-rows: auto auto 10vh;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const SearchInputContainerStyeld = styled.div`
  display: grid;
  grid-template-columns: 85% 2rem auto;
  box-sizing: border-box;
  justify-self: center;
  padding: 1em;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 14fr 1fr 5fr;
    padding: 1em;
    width: 100vw;
  }
`;

export const SearchInputButtonStyled = styled.button`
  padding-left: 0.5em;
  grid-column: 3/4;
  max-width: 150px;
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 1.3em;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  :active {
    background: ${(props) => props.theme.colors.primary};
  }
  cursor: pointer;
`;

export const SearchInputStyled = styled.input`
  grid-row: 1/2;
  font-size: 1.5em;
  padding: 0.5em;
  width: 100%;
  @media (max-width: 768px) {
    grid-column: 1/3;
    width: 85%;
  }
`;

export const SearchResultsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 2/3;

  > ul {
    list-style: none;
    margin: 0;
  }
  > ul > li {
    padding: 0 1em;
  }
  min-height: 77vh;
  @media (max-width: 768px) {
    min-height: 67vh;
    width: 100vw;
  }
`;

export const SearchResultsItemStyled = styled.div`
  display: grid;
  grid-template-columns: 4em auto;
  height: 4em;
  font-family: arial;
  background: ${(props) => props.theme.colors.secondary};
  padding: 0.5em;
  margin: 0.5em 0;
  font-family: arial;
  > img {
    width: 100%;
  }
  > p {
    padding-left: 1em;
    color: ${(props) => props.theme.colors.textPrimary};
  }
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;
