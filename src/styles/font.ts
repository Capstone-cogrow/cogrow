import { css } from "styled-components";

const getFontWeight = (weight: string) => {
  switch (weight) {
    case "ExtraBold":
      return 800;
    case "Bold":
      return 700;
    case "SemiBold":
      return 600;
    case "Medium":
      return 500;
    case "Regular":
      return 400;
    case "Light":
      return 300;
    case "ExtraLight":
      return 200;
    case "Thin":
      return 100;
    default:
      return 400;
  }
};

interface FontWeight {
  weight: string;
}

export const FONT = ({ weight }: FontWeight) => css`
  font-family: "NanumSquareNeoVariable";
  font-weight: ${getFontWeight(weight)};
`;

export const FONT_STYLE = {
  EB: FONT({ weight: "ExtraBold" }),
  B: FONT({ weight: "Bold" }),
  SB: FONT({ weight: "SemiBold" }),
  M: FONT({ weight: "Medium" }),
  R: FONT({ weight: "Regular" }),
  L: FONT({ weight: "Light" }),
  EL: FONT({ weight: "ExtraLight" }),
  T: FONT({ weight: "Thin" }),
};
