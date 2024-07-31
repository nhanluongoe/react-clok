import styled from "@emotion/styled";
import { CSSProperties } from "react";
const StyledClockHand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  border-radius: 16px;
`;

export interface ClockHandProps {
  deg: number;
  length?: CSSProperties["height"];
  width?: CSSProperties["width"];
  color?: CSSProperties["color"];
}

export default function ClockHand({
  className,
}: { className?: string } & ClockHandProps) {
  return <StyledClockHand className={className} />;
}
