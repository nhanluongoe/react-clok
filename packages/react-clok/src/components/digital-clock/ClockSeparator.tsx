import styled from "@emotion/styled";
import { CSSProperties } from "react";

const DEFAULT_CONFIG = {
  size: 12,
  gap: 20,
  color: "black",
};

export interface ClockSeparatorProps {
  size?: number;
  gap?: number;
  color?: CSSProperties["color"];
}

const StyledClockSeparator = styled.div<ClockSeparatorProps>`
  display: flex;
  gap: ${({ gap = DEFAULT_CONFIG.gap }) => gap}px;
  flex-direction: column;
  align-items: center;
`;

const ClockSeparatorDot = styled.div<ClockSeparatorProps>`
  width: ${({ size = DEFAULT_CONFIG.size }) => size}px;
  height: ${({ size = DEFAULT_CONFIG.size }) => size}px;
  border-radius: 50%;
  background-color: ${({ color = DEFAULT_CONFIG.color }) => color};
`;

export default function ClockSeparator(props: ClockSeparatorProps) {
  return (
    <StyledClockSeparator>
      <ClockSeparatorDot />
      <ClockSeparatorDot />
    </StyledClockSeparator>
  );
}
