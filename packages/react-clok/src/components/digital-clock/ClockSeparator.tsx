import styled from "@emotion/styled";
import { CSSProperties } from "react";

const DEFAULT_CONFIG = {
  size: 10,
  gap: 10,
  color: "#313638",
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
  const { size, gap, color } = props;
  return (
    <StyledClockSeparator gap={gap}>
      <ClockSeparatorDot
        data-testid="clock-separator-dot"
        size={size}
        color={color}
      />
      <ClockSeparatorDot
        data-testid="clock-separator-dot"
        size={size}
        color={color}
      />
    </StyledClockSeparator>
  );
}
