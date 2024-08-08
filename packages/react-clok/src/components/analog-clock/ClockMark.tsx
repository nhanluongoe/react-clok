import styled from "@emotion/styled";
import { DEGREE_PER_HOUR, DEGREE_PER_SECOND } from "../../core/constants";
import { CSSProperties, Fragment } from "react";
import { convertToRadians } from "../../core/utils";

interface BaseMarkProps {
  show?: boolean;
  length?: CSSProperties["height"];
  width?: CSSProperties["width"];
  color?: CSSProperties["color"];
}

interface NumberProps {
  show?: boolean;
  color?: CSSProperties["color"];
  fontSize?: CSSProperties["fontSize"];
  fontFamily?: CSSProperties["fontFamily"];
  fontWeight?: CSSProperties["fontWeight"];
}

export interface ClockMarkProps {
  number?: NumberProps;
  primaryMark?: BaseMarkProps;
  secondaryMark?: BaseMarkProps;
  locale?: string;
}

const DEFAULT_CONFIG = {
  number: {
    show: true,
    color: "black",
    fontSize: "2.5rem",
    fontFamily: "Roboto",
    fontWeight: "bold",
    locale: "en-US",
  },
  primaryMark: {
    showNumber: true,
    show: true,
    length: "6%",
    width: "12px",
    color: "black",
  },
  secondaryMark: {
    showNumber: false,
    show: true,
    length: "3%",
    width: "4px",
    color: "black",
  },
};

const StyledClockMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  border-radius: 16px;
`;

const StyledClockPrimaryMark = styled(StyledClockMark)<
  ClockMarkProps["primaryMark"] & { deg: number }
>`
  background: ${({ color = DEFAULT_CONFIG.primaryMark.color }) => color};
  width: ${({ width = DEFAULT_CONFIG.primaryMark.width }) => width};
  height: ${({ length = DEFAULT_CONFIG.primaryMark.length }) => length};
  transform: ${(props) => `rotate(${props.deg - 90}deg) translate(-50%, 690%)`};
`;

const StyledClockSecondaryMark = styled(StyledClockMark)<
  ClockMarkProps["secondaryMark"] & { deg: number }
>`
  background: ${({ color = DEFAULT_CONFIG.secondaryMark.color }) => color};
  width: ${({ width = DEFAULT_CONFIG.secondaryMark.width }) => width};
  height: ${({ length = DEFAULT_CONFIG.secondaryMark.length }) => length};
  transform: ${(props) =>
    `rotate(${props.deg - 90}deg) translate(-50%, 1470%)`};
`;

const StyledNumber = styled.span<ClockMarkProps["number"] & { deg: number }>`
  position: absolute;
  top: ${({ deg }) => `${50 - 37 * Math.cos(convertToRadians(deg))}%`};
  left: ${({ deg }) => `${50 + 37 * Math.sin(convertToRadians(deg))}%`};
  transform: translate(-50%, -50%);
  font-size: ${({ fontSize = DEFAULT_CONFIG.number.fontSize }) => fontSize};
  font-weight: ${({ fontWeight = DEFAULT_CONFIG.number.fontWeight }) =>
    fontWeight};
  font-family: ${({ fontFamily = DEFAULT_CONFIG.number.fontFamily }) =>
    fontFamily};
  color: ${({ color = DEFAULT_CONFIG.number.color }) => color};
`;

const MARKS = Array.from({ length: 60 }).fill("mark");

export default function ClockMark(props: ClockMarkProps) {
  const {
    number = DEFAULT_CONFIG.number,
    primaryMark = DEFAULT_CONFIG.primaryMark,
    secondaryMark = DEFAULT_CONFIG.secondaryMark,
    locale = DEFAULT_CONFIG.number.locale,
  } = props;

  return (
    <>
      {MARKS.map((_, index) => {
        const isPrimary = index % 5 === 0;
        if (isPrimary) {
          return (
            <Fragment key={index}>
              {number.show && (
                <StyledNumber {...number} deg={index * DEGREE_PER_SECOND}>
                  {(index / 5 === 0 ? 12 : index / 5).toLocaleString(locale)}
                </StyledNumber>
              )}
              <StyledClockPrimaryMark
                deg={index * DEGREE_PER_SECOND}
                {...primaryMark}
              />
            </Fragment>
          );
        }

        if (secondaryMark.show) {
          return (
            <StyledClockSecondaryMark
              key={index}
              deg={index * DEGREE_PER_SECOND}
              {...secondaryMark}
            />
          );
        }

        return null;
      })}
    </>
  );
}
