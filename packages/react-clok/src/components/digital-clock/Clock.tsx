import useTime from "../../core/use-time";
import Digit, { ClockDigitProps } from "./ClockDigit";
import Separator, { ClockSeparatorProps } from "./ClockSeparator";
import ClockFrame from "./ClockFrame";
import { HTMLAttributes } from "react";

interface DigitalClockProps {
  frame?: Omit<HTMLAttributes<HTMLDivElement>, "display" | "align-items">;
  hourSegment?: Omit<ClockDigitProps, "number" | "show">;
  minuteSegment?: Omit<ClockDigitProps, "number" | "show">;
  secondSegment?: Omit<ClockDigitProps, "number"> & { show: boolean };
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

        <Digit
          data-testid="clock-second-digit"
          number={Math.floor(second / 10)}
          {...secondSegment}
        />
        <Digit
          data-testid="clock-second-digit"
          number={second % 10}
          {...secondSegment}
        />
      </>
    );
  }

  return (
    <time dateTime={iso}>
      <ClockFrame {...frame}>
        <Digit
          data-testid="clock-hour-digit"
          number={Math.floor(hour / 10)}
          {...hourSegment}
        />
        <Digit
          data-testid="clock-hour-digit"
          number={hour % 10}
          {...hourSegment}
        />

        <Separator {...separator} />

        <Digit
          data-testid="clock-minute-digit"
          number={Math.floor(minute / 10)}
          {...minuteSegment}
        />
        <Digit
          data-testid="clock-minute-digit"
          number={minute % 10}
          {...minuteSegment}
        />

        {renderSecondSegment()}
      </ClockFrame>
    </time>
  );
}
