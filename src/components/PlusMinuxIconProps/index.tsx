import { useMediaQuery } from "react-responsive";
import {
    ScaledLine,
} from "./style";

interface PlusMinuxIconProps {
    toMinus: boolean;
    width?: number;
    height?: number;
    thickness?: number;
  }

export const PlusMinusIcon = ({
  toMinus,
  width,
  height,
  thickness,
}: PlusMinuxIconProps) => {
  return (
    <svg width={width ?? "16px"} height={height ?? "16px"} viewBox="0 0 64 64">
      <g
        strokeWidth={thickness ?? "8"}
        stroke="#40B36E"
        fill="none"
      >
        <ScaledLine x1="32" y1="0" x2="32" y2="64" isScaleDown={toMinus} />
        <line x1="0" y1="32" x2="64" y2="32" />
      </g>
    </svg>
  );
};