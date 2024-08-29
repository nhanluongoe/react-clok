import styled from "@emotion/styled";
import { CSSProperties } from "react";

export interface ClockCenterProps {
  color?: CSSProperties["color"];
  size?: CSSProperties["width"];
}

const DEFAULT_CONFIG = {
  color: "#313638",
  size: "5%",
};

const StyledClockCenter = styled.div<ClockCenterProps>`
  position: absolute;
  width: ${({ size = DEFAULT_CONFIG.size }) => size};
  height: ${({ size = DEFAULT_CONFIG.size }) => size};
  background-color: ${({ color = DEFAULT_CONFIG.color }) => color};
  border-radius: 9999px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function ClockCenter(props: ClockCenterProps) {
  return <StyledClockCenter {...props} />;
}
