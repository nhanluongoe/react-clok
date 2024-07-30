import styled from "@emotion/styled";
import useTime from "../core/use-time";

const ClockWrapper = styled.div``;

const ClockFrame = styled.div`
  border-radius: 9999px;
  border: 1px solid #000;
  width: 800px;
  height: 800px;
  position: relative;
`;

const ClockHand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
`;

interface ClockHourHandProps {
  hourDeg: number;
}

interface ClockMinuteHandProps {
  minuteDeg: number;
}

interface ClockSecondHandProps {
  secondDeg: number;
}

const ClockHourHand = styled(ClockHand)<ClockHourHandProps>`
  transform: ${(props) => {
    return `rotate(${props.hourDeg - 90}deg)`;
  }};
  background-color: red;
  height: 10px;
  width: 25%;
`;

const ClockMinuteHand = styled(ClockHand)<ClockMinuteHandProps>`
  transform: ${(props) => {
    return `rotate(${props.minuteDeg - 90}deg)`;
  }};
  background-color: blue;
  height: 5px;
  width: 35%;
`;

const ClockSecondHand = styled(ClockHand)<ClockSecondHandProps>`
  transform: ${(props) => {
    return `rotate(${props.secondDeg - 90}deg)`;
  }};
  background-color: green;
  width: 45%;
  height: 2px;
`;

export default function Clock() {
  const { hourDeg, minuteDeg, secondDeg } = useTime();
  return (
    <ClockWrapper>
      <ClockFrame>
        <ClockHourHand hourDeg={hourDeg} />
        <ClockMinuteHand minuteDeg={minuteDeg} />
        <ClockSecondHand secondDeg={secondDeg} />
      </ClockFrame>
    </ClockWrapper>
  );
}
