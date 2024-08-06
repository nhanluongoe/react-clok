import useTime from "../../core/use-time";
import ClockCenter, { ClockCenterProps } from "./ClockCenter";
import ClockFrame, { ClockFrameProps } from "./ClockFrame";
import { ClockHandProps } from "./ClockHand";
import ClockHourHand from "./ClockHourHand";
import ClockMark, { ClockMarkProps } from "./ClockMark";
import ClockMinuteHand from "./ClockMinuteHand";
import ClockSecondHand from "./ClockSecondHand";

interface ClockProps {
  frame?: ClockFrameProps;
  hourHand?: Omit<ClockHandProps, "deg">;
  minuteHand?: Omit<ClockHandProps, "deg">;
  secondHand?: Omit<ClockHandProps, "deg">;
  center?: ClockCenterProps;
  mark?: ClockMarkProps;
}

export default function Clock(props: ClockProps) {
  const { hourDeg, minuteDeg, secondDeg, iso } = useTime();
  const { frame, hourHand, minuteHand, secondHand, center, mark } = props;
  return (
    <time dateTime={iso}>
      <ClockFrame {...frame}>
        <ClockHourHand deg={hourDeg} {...hourHand} />
        <ClockMinuteHand deg={minuteDeg} {...minuteHand} />
        <ClockSecondHand deg={secondDeg} {...secondHand} />
        <ClockMark {...mark} />
        <ClockCenter {...center} />
      </ClockFrame>
    </time>
  );
}
