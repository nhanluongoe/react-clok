import styled from "@emotion/styled";
import ClockHand from "./ClockHand";

interface ClockHourHandProps {
  hourDeg: number;
}

const StyledClockHourHand = styled(ClockHand)<ClockHourHandProps>`
  transform: ${(props) => {
    console.log(props, "hehe");
    return `rotate(${props.hourDeg - 90}deg) translateY(-50%)`;
  }};
  background-color: red;
  height: 10px;
  width: 25%;
`;

export default function ClockHourHand(props: ClockHourHandProps) {
  return <StyledClockHourHand {...props} />;
}
