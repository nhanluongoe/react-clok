import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";

export interface ClockFrameProps {
  children: ReactNode;
  color?: CSSProperties["color"];
  width?: CSSProperties["borderWidth"];
}

const DEFAULT_CONFIG = {
  color: "black",
  width: "6px",
};

const StyledClockFrame = styled.div<ClockFrameProps>`
  border-radius: 9999px;
  border: ${({ width = DEFAULT_CONFIG.width, color = DEFAULT_CONFIG.color }) =>
    `${width} solid ${color}`};
  width: 800px;
  height: 800px;
  position: relative;
`;

export default function ClockFrame(props: ClockFrameProps) {
  const { children, ...rest } = props;

  return <StyledClockFrame {...rest}>{children}</StyledClockFrame>;
}
