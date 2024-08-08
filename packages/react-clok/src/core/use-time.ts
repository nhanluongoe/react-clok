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
  iso: string;
};

export default function useTime() {
  const [time, setTime] = useState<HMS>({
    hour: 0,
    minute: 0,
    second: 0,
    iso: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
        iso: now.toISOString(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { hour, minute, second } = time;

  const secondDeg = time.second * DEGREE_PER_SECOND;
  const minuteDeg =
    time.minute * DEGREE_PER_MINUTE +
    (time.second / FULL_SECOND) * DEGREE_PER_MINUTE;
  const hourDeg =
    time.hour * DEGREE_PER_HOUR + (time.minute / FULL_MINUTE) * DEGREE_PER_HOUR;

  return { hour, minute, second, secondDeg, minuteDeg, hourDeg, iso: time.iso };
}
