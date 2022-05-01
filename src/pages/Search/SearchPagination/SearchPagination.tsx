import React, { useEffect } from "react";
import {
  PaginationContainerStyled,
  PaginationCounterStyled,
  PaginationLeftArrowStyled,
  PaginationOuterContainerStyled,
  PaginationRightArrowStyled,
} from "./SearchPagination.styled";

interface Props {
  totalPages: number;
  currPage: number;
  setPage: (page: number) => void;
}

const SearchPagination: React.FC<Props> = ({
  totalPages,
  currPage,
  setPage,
}) => {
  return (
    <PaginationOuterContainerStyled>
      <PaginationContainerStyled>
        <PaginationLeftArrowStyled
          onClick={() => {
            currPage > 0 && setPage(currPage - 1);
          }}
        />
        <PaginationCounterStyled>
          {`${currPage}/${totalPages}`}
        </PaginationCounterStyled>
        <PaginationRightArrowStyled
          onClick={() => {
            currPage < totalPages && setPage(currPage + 1);
          }}
        />
      </PaginationContainerStyled>
    </PaginationOuterContainerStyled>
  );
};

export default SearchPagination;
