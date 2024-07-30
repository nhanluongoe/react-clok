import styled from "@emotion/styled";
import ClockHand from "./ClockHand";

interface ClockSecondHandProps {
  secondDeg: number;
}

const StyledClockSecondHand = styled(ClockHand)<ClockSecondHandProps>`
  transform: ${(props) => {
    return `rotate(${props.secondDeg - 90}deg) translateY(-50%)`;
  }};
  background-color: green;
  height: 10px;
  width: 25%;
`;

export default function ClockSecondHand(props: ClockSecondHandProps) {
  return <StyledClockSecondHand {...props} />;
}
