import styled from "@emotion/styled";
import { DEGREE_PER_HOUR } from "../core/constants";

const StyledClockHourMark = styled.div<{ deg: number }>`
  position: absolute;
  background: pink;
  width: 5px;
  height: 5%;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform: ${(props) => `rotate(${props.deg - 90}deg) translate(-50%, 850%)`};
`;

const MARKS = Array.from({ length: 12 }).fill("mark");

export default function ClockHourMark() {
  return (
    <>
      {MARKS.map((_, index) => {
        const deg = index * DEGREE_PER_HOUR;
        return <StyledClockHourMark key={index} deg={deg} />;
      })}
    </>
  );
}
