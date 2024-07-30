import styled from "@emotion/styled";
import ClockHand from "./ClockHand";

interface ClockMinuteHandProps {
  minuteDeg: number;
}

const StyledClockMinuteHand = styled(ClockHand)<ClockMinuteHandProps>`
  transform: ${(props) => {
    return `rotate(${props.minuteDeg - 90}deg) translateY(-50%)`;
  }};
  background-color: blue;
  height: 10px;
  width: 25%;
`;

export default function ClockMinuteHand(props: ClockMinuteHandProps) {
  return <StyledClockMinuteHand {...props} />;
}
