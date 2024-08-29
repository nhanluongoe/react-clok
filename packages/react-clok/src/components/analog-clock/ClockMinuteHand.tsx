import styled from "@emotion/styled";
import ClockHand, { ClockHandProps } from "./ClockHand";

const DEFAULT_CONFIG = {
  color: "#313638",
  width: "8px",
  length: "40%",
};

const StyledClockMinuteHand = styled(ClockHand)<ClockHandProps>`
  transform: ${({ deg }) => `rotate(${deg - 90}deg) translateY(-50%)`};
  background-color: ${({ color = DEFAULT_CONFIG.color }) => color};
  height: ${({ width = DEFAULT_CONFIG.width }) => width};
  width: ${({ length = DEFAULT_CONFIG.length }) => length};
`;

export default function ClockMinuteHand(props: ClockHandProps) {
  return <StyledClockMinuteHand {...props} />;
}
