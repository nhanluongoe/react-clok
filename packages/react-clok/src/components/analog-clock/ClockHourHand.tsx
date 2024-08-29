import styled from "@emotion/styled";
import ClockHand, { ClockHandProps } from "./ClockHand";

const DEFAULT_CONFIG = {
  color: "#313638",
  width: "10px",
  length: "30%",
};

const StyledClockHourHand = styled(ClockHand)<ClockHandProps>`
  transform: ${({ deg }) => `rotate(${deg - 90}deg) translateY(-50%)`};
  background-color: ${({ color = DEFAULT_CONFIG.color }) => color};
  height: ${({ width = DEFAULT_CONFIG.width }) => width};
  width: ${({ length = DEFAULT_CONFIG.length }) => length};
`;

export default function ClockHourHand(props: ClockHandProps) {
  return <StyledClockHourHand {...props} />;
}
