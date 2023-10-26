import styled from "styled-components";

interface ScaledLineProps {
  isScaleDown: boolean;
}

export const ScaledLine = styled.line<ScaledLineProps>`
  transform-origin: 50% 50%;
  transform: ${(props) => (props.isScaleDown ? "scaleY(0)" : "scaleY(1)")};
  transition: transform 0.5s ease;
`;

