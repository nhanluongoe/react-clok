import { useEffect, useState } from "react";
import styled from "@emotion/styled";

type HMS = {
  hour: number;
  minute: number;
  second: number;
};

const FULL_CIRCLE = 360;
const FULL_HOUR = 12;
const FULL_MINUTE = 60;
const FULL_SECOND = 60;
const DEGREE_PER_SECOND = FULL_CIRCLE / FULL_SECOND;
const DEGREE_PER_MINUTE = FULL_CIRCLE / FULL_MINUTE;
const DEGREE_PER_HOUR = FULL_CIRCLE / FULL_HOUR;

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
  const [time, setTime] = useState<HMS>({ hour: 0, minute: 0, second: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondDeg = time.second * DEGREE_PER_SECOND;
  const minuteDeg =
    time.minute * DEGREE_PER_MINUTE +
    (time.second / FULL_SECOND) * DEGREE_PER_MINUTE;
  const hourDeg =
    time.hour * DEGREE_PER_HOUR + (time.minute / FULL_MINUTE) * DEGREE_PER_HOUR;

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
