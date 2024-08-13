import styled from "@emotion/styled";
import { DEGREE_PER_SECOND } from "../../core/constants";
import { CSSProperties, Fragment } from "react";
import { convertToRadians } from "../../core/utils";

interface BaseMarkProps {
  show?: boolean;
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
    show: true,
    width: "12px",
    color: "black",
  },
  secondaryMark: {
    show: true,
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
  transform: ${(props) => `rotate(${props.deg - 90}deg) translate(-50%, 690%)`};
  height: 6%;
`;

const StyledClockSecondaryMark = styled(StyledClockMark)<
  ClockMarkProps["secondaryMark"] & { deg: number }
>`
  background: ${({ color = DEFAULT_CONFIG.secondaryMark.color }) => color};
  width: ${({ width = DEFAULT_CONFIG.secondaryMark.width }) => width};
  transform: ${(props) =>
    `rotate(${props.deg - 90}deg) translate(-50%, 1470%)`};
  height: 3%;
`;

const StyledNumber = styled.span<ClockMarkProps["number"] & { deg: number }>`
  position: absolute;
  left: ${({ deg }) =>
    `${50 + 37 * Math.cos(convertToRadians(90 - deg))}%`}; // Not sure why using Math.sin causes hydration error
  top: ${({ deg }) => `${50 - 37 * Math.cos(convertToRadians(deg))}%`};
  font-size: ${({ fontSize = DEFAULT_CONFIG.number.fontSize }) => fontSize};
  font-weight: ${({ fontWeight = DEFAULT_CONFIG.number.fontWeight }) =>
    fontWeight};
  font-family: ${({ fontFamily = DEFAULT_CONFIG.number.fontFamily }) =>
    fontFamily};
  color: ${({ color = DEFAULT_CONFIG.number.color }) => color};
  transform: translate(-50%, -50%);
`;

const MARKS = Array.from({ length: 60 }, (_, index) => index);

export default function ClockMark(props: ClockMarkProps) {
  const {
    number = DEFAULT_CONFIG.number,
    primaryMark = DEFAULT_CONFIG.primaryMark,
    secondaryMark = DEFAULT_CONFIG.secondaryMark,
    locale = DEFAULT_CONFIG.number.locale,
  } = props;

  return MARKS.map((val) => {
    const isPrimary = val % 5 === 0;
    if (isPrimary) {
      return (
        <Fragment key={val}>
          {(number.show ?? DEFAULT_CONFIG.number.show) && (
            <StyledNumber {...number} deg={val * DEGREE_PER_SECOND}>
              {(val / 5 === 0 ? 12 : val / 5).toLocaleString(locale)}
            </StyledNumber>
          )}
          {(primaryMark.show ?? DEFAULT_CONFIG.primaryMark.show) && (
            <StyledClockPrimaryMark
              deg={val * DEGREE_PER_SECOND}
              className="clock-primary-mark"
              {...primaryMark}
            />
          )}
        </Fragment>
      );
    }

    if (secondaryMark.show) {
      return (
        <StyledClockSecondaryMark
          key={val}
          deg={val * DEGREE_PER_SECOND}
          className="clock-secondary-mark"
          {...secondaryMark}
        />
      );
    }

    return null;
  });
}
