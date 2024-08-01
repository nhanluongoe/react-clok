import styled from "@emotion/styled";
import useTime from "../core/use-time";
import ClockHourHand from "./ClockHourHand";
import ClockMinuteHand from "./ClockMinuteHand";
import ClockSecondHand from "./ClockSecondHand";
import ClockMark, { ClockMarkProps } from "./ClockMark";
import { ClockHandProps } from "./ClockHand";
import ClockFrame, { ClockFrameProps } from "./ClockFrame";
import ClockCenter, { ClockCenterProps } from "./ClockCenter";

interface ClockProps {
  frame?: ClockFrameProps;
  hourHand?: Exclude<ClockHandProps, "deg">;
  minuteHand?: Exclude<ClockHandProps, "deg">;
  secondHand?: Exclude<ClockHandProps, "deg">;
  center?: ClockCenterProps;
  mark?: ClockMarkProps;
}

const ClockWrapper = styled.div``;

export default function Clock(props: ClockProps) {
  const { hourDeg, minuteDeg, secondDeg, iso } = useTime();
  const { frame, hourHand, minuteHand, secondHand, center, mark } = props;
  return (
    <ClockWrapper>
      <time dateTime={iso}>
        <ClockFrame {...frame}>
          <ClockHourHand deg={hourDeg} {...hourHand} />
          <ClockMinuteHand deg={minuteDeg} {...minuteHand} />
          <ClockSecondHand deg={secondDeg} {...secondHand} />
          <ClockMark {...mark} />
          <ClockCenter {...center} />
        </ClockFrame>
      </time>
    </ClockWrapper>
  );
}
