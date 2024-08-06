import useTime from "../../core/use-time";
import Digit from "./ClockDigit";
import Separator from "./ClockSeparator";
import ClockFrame from "./ClockFrame";

export default function DigitalClock() {
  const { hour, minute, second, iso } = useTime();
  return (
    <time dateTime={iso}>
      <ClockFrame>
        <Digit number={Math.floor(hour / 10)} />
        <Digit number={hour % 10} />

        <Separator />

        <Digit number={Math.floor(minute / 10)} />
        <Digit number={minute % 10} />

        <Separator />

        <Digit number={Math.floor(second / 10)} />
        <Digit number={second % 10} />
      </ClockFrame>
    </time>
  );
}
