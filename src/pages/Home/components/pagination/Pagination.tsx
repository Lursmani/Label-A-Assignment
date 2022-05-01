import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PaginationContainerStyled,
  PaginationCounterStyled,
  PaginationLeftArrowStyled,
  PaginationOuterContainerStyled,
  PaginationRightArrowStyled,
} from "./Pagination.styled";
import { changePage } from "../../../../Redux/albums";

const Pagination: React.FC = () => {
  const data = useSelector((state: any) => state.albums);
  const dispatch = useDispatch();

  return (
    <PaginationOuterContainerStyled>
      <PaginationContainerStyled>
        <PaginationLeftArrowStyled
          onClick={() => {
            if (data.currPage > 1) {
              dispatch(changePage(parseInt(data.currPage) - 1));
            }
          }}
        />
        <PaginationCounterStyled>
          {`${data.currPage}/${data.totalPages}`}
        </PaginationCounterStyled>
        <PaginationRightArrowStyled
          onClick={() => {
            if (parseInt(data.currPage) < parseInt(data.totalPages)) {
              dispatch(changePage(parseInt(data.currPage) + 1));
            }
          }}
        />
      </PaginationContainerStyled>
    </PaginationOuterContainerStyled>
  );
};

export default Pagination;
