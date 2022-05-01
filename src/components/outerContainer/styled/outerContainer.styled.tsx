import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const OuterContainerStyled = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content auto;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-row: 1/2;
  grid-column: 2/3;
  min-height: 100vh;
  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 2/3;
    min-height: 90vh;
    max-width: 100vw;
  }
  background: ${(props) => props.theme.colors.primary};
`;
