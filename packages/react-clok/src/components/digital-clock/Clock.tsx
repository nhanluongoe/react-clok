import useTime from "../../core/use-time";
import Digit, { ClockDigitProps } from "./ClockDigit";
import Separator, { ClockSeparatorProps } from "./ClockSeparator";
import ClockFrame from "./ClockFrame";
import { HTMLAttributes } from "react";

interface DigitalClockProps {
  frame?: Omit<HTMLAttributes<HTMLDivElement>, "display" | "align-items">;
  hourSegment?: Omit<ClockDigitProps, "number" | "show">;
  minuteSegment?: Omit<ClockDigitProps, "number" | "show">;
  secondSegment?: Omit<ClockDigitProps, "number">;
  separator?: ClockSeparatorProps;
}

export default function DigitalClock(props: DigitalClockProps) {
  const { hourSegment, minuteSegment, secondSegment, separator, frame } = props;

  const { hour, minute, second, iso } = useTime();

  function renderSecondSegment() {
    if (secondSegment?.show === false) return null;

    return (
      <>
        <Separator {...separator} />

        <Digit number={Math.floor(second / 10)} {...secondSegment} />
        <Digit number={second % 10} {...secondSegment} />
      </>
    );
  }

  return (
    <time dateTime={iso}>
      <ClockFrame {...frame}>
        <Digit number={Math.floor(hour / 10)} {...hourSegment} />
        <Digit number={hour % 10} {...hourSegment} />

        <Separator {...separator} />

        <Digit number={Math.floor(minute / 10)} {...minuteSegment} />
        <Digit number={minute % 10} {...minuteSegment} />

        {renderSecondSegment()}
      </ClockFrame>
    </time>
  );
}
