import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";

export interface ClockFrameProps {
  children?: ReactNode;
  color?: CSSProperties["color"];
  frameWidth?: CSSProperties["borderWidth"];
  size?: CSSProperties["width"];
  boxShadow?: CSSProperties["boxShadow"];
}

const DEFAULT_CONFIG = {
  color: "black",
  frameWidth: "6px",
  size: "500px",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
};

const StyledClockFrame = styled.div<ClockFrameProps>`
  position: relative;
  border-radius: 9999px;
  border: ${({
    frameWidth = DEFAULT_CONFIG.frameWidth,
    color = DEFAULT_CONFIG.color,
  }) => `${frameWidth} solid ${color}`};
  width: ${({ size = DEFAULT_CONFIG.size }) => size};
  height: ${({ size = DEFAULT_CONFIG.size }) => size};
  box-shadow: ${({ boxShadow = DEFAULT_CONFIG.boxShadow }) => boxShadow}};
`;

export default function ClockFrame(props: ClockFrameProps) {
  const { children, ...rest } = props;

  return <StyledClockFrame {...rest}>{children}</StyledClockFrame>;
}
