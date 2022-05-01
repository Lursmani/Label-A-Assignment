import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const PaginationOuterContainerStyled = styled.div`
  display: grid;
  justify-items: center;
  @media (max-width: 768px) {
    width: 100vw;
  }
  background: ${(props) => props.theme.colors.secondary};
  transition: 0.5s ease-in-out;
`;

export const PaginationContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PaginationLeftArrowStyled = styled(AiOutlineLeft)`
  color: ${(props) => props.theme.colors.textPrimary};
  align-self: center;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 20%;
  font-size: 2rem;
  cursor: pointer;
  padding: 3px;
`;

export const PaginationRightArrowStyled = styled(AiOutlineRight)`
  color: ${(props) => props.theme.colors.textPrimary};
  align-self: center;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 20%;
  font-size: 2rem;
  cursor: pointer;
  padding: 3px;
`;

export const PaginationCounterStyled = styled.h3`
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: arial;
`;
