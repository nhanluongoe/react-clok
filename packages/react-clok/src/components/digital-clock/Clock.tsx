import useTime from "../../core/use-time";
import Digit, { ClockDigitProps } from "./ClockDigit";
import Separator from "./ClockSeparator";
import ClockFrame from "./ClockFrame";
import { CSSProperties } from "react";

interface DigitalClockProps {
  hourSegment?: Exclude<ClockDigitProps, "number" | "show">;
  minuteSegment?: Exclude<ClockDigitProps, "number" | "show">;
  secondSegment?: Exclude<ClockDigitProps, "number">;
}

export default function DigitalClock(props: DigitalClockProps) {
  const { hourSegment, minuteSegment, secondSegment } = props;

  const { hour, minute, second, iso } = useTime();

  function renderSecondSegment() {
    if (secondSegment?.show === false) return null;

    return (
      <>
        <Separator />

        <Digit number={Math.floor(second / 10)} {...secondSegment} />
        <Digit number={second % 10} {...secondSegment} />
      </>
    );
  }

  return (
    <time dateTime={iso}>
      <ClockFrame>
        <Digit number={Math.floor(hour / 10)} {...hourSegment} />
        <Digit number={hour % 10} {...hourSegment} />

        <Separator />

        <Digit number={Math.floor(minute / 10)} {...minuteSegment} />
        <Digit number={minute % 10} {...minuteSegment} />

        {renderSecondSegment()}
      </ClockFrame>
    </time>
  );
}
