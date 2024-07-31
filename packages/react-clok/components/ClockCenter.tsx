import styled from "@emotion/styled";
import { CSSProperties } from "react";

export interface ClockCenterProps {
  color?: CSSProperties["color"];
  radius?: CSSProperties["width"];
}

const DEFAULT_CONFIG = {
  color: "black",
  radius: "5%",
};

const StyledClockCenter = styled.div<ClockCenterProps>`
  position: absolute;
  width: ${({ radius = DEFAULT_CONFIG.radius }) => radius};
  height: ${({ radius = DEFAULT_CONFIG.radius }) => radius};
  background-color: #000;
  border-radius: 9999px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function ClockCenter(props: ClockCenterProps) {
  return <StyledClockCenter {...props} />;
}
