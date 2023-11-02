import styled from "styled-components";

interface GridProps {
  verticalGap: number;
  horizontalGap: number;
  columns: number;
}

export const Container = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.verticalGap}px ${(props) => props.horizontalGap}px;

  & > a {
    text-decoration: none;
    align-self: center;
    //line-height: 1em;
    color: black;
  }
`;
