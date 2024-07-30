import styled from "@emotion/styled";
import useTime from "../core/use-time";
import ClockHourHand from "./ClockHourHand";
import ClockMinuteHand from "./ClockMinuteHand";
import ClockSecondHand from "./ClockSecondHand";

const ClockWrapper = styled.div``;

const ClockFrame = styled.div`
  border-radius: 9999px;
  border: 1px solid #000;
  width: 800px;
  height: 800px;
  position: relative;
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
