import { useEffect, useState } from "react";
import {
  DEGREE_PER_HOUR,
  DEGREE_PER_MINUTE,
  DEGREE_PER_SECOND,
  FULL_MINUTE,
  FULL_SECOND,
} from "./constants";

type HMS = {
  hour: number;
  minute: number;
  second: number;
};

export default function useTime() {
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

  return { time, secondDeg, minuteDeg, hourDeg };
}
