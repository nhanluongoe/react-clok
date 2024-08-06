import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CSSProperties } from "react";

const DEFAULT_CONFIG = {
  width: 16,
  color: "black",
  size: 100,
  gap: 16,
  show: true,
};

const DigitBase = styled.div<ClockDigitProps>`
  border: solid transparent;
  width: ${({ size = DEFAULT_CONFIG.size }) => size}px;
  height: ${({ size = DEFAULT_CONFIG.size }) => size}px;
  margin: 0 ${({ gap = DEFAULT_CONFIG.gap }) => gap}px;
  border-width: ${({ width = DEFAULT_CONFIG.width }) => width}px;
`;

const DigitTop = styled(DigitBase)<ClockDigitProps>`
  border-bottom-width: ${({ width = DEFAULT_CONFIG.width }) => width / 2}px;
  ${topFragmentStyle};
`;

const DigitBottom = styled(DigitBase)<ClockDigitProps>`
  border-top-width: ${({ width = DEFAULT_CONFIG.width }) => width / 2}px;
  ${bottomFragmentStyle};
`;

export interface ClockDigitProps {
  number: number;
  width?: number;
  color?: CSSProperties["color"];
  show?: boolean;
  size?: number;
  gap?: number;
}

export default function ClockDigit(props: ClockDigitProps) {
  return (
    <div>
      <DigitTop {...props}></DigitTop>
      <DigitBottom {...props}></DigitBottom>
    </div>
  );
}

function topFragmentStyle(props: {
  number: number;
  color?: CSSProperties["color"];
}) {
  const { number, color = DEFAULT_CONFIG.color } = props;
  if (number === 0) {
    return css`
      border-top-color: ${color};
      border-right-color: ${color};
      border-left-color: ${color};
    `;
  }

  if (number === 1) {
    return css`
      border-right-color: ${color};
    `;
  }

  if (number === 2) {
    return css`
      border-top-color: ${color};
      border-right-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 3) {
    return css`
      border-top-color: ${color};
      border-right-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 4) {
    return css`
      border-right-color: ${color};
      border-left-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 5) {
    return css`
      border-top-color: ${color};
      border-left-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 6) {
    return css`
      border-top-color: ${color};
      border-left-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 7) {
    return css`
      border-top-color: ${color};
      border-right-color: ${color};
    `;
  }

  if (number === 8) {
    return css`
      border-top-color: ${color};
      border-right-color: ${color};
      border-left-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 9) {
    return css`
      border-top-color: ${color};
      border-right-color: ${color};
      border-left-color: ${color};
      border-bottom-color: ${color};
    `;
  }
}

function bottomFragmentStyle(props: {
  number: number;
  color?: CSSProperties["color"];
}) {
  const { number, color = DEFAULT_CONFIG.color } = props;

  if (number === 0) {
    return css`
      border-right-color: ${color};
      border-left-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 1) {
    return css`
      border-right-color: ${color};
    `;
  }

  if (number === 2) {
    return css`
      border-top-color: ${color};
      border-bottom-color: ${color};
      border-left-color: ${color};
    `;
  }

  if (number === 3) {
    return css`
      border-right-color: ${color};
      border-top-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 4) {
    return css`
      border-right-color: ${color};
      border-top-color: ${color};
    `;
  }

  if (number === 5) {
    return css`
      border-top-color: ${color};
      border-right-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 6) {
    return css`
      border-top-color: ${color};
      border-left-color: ${color};
      border-bottom-color: ${color};
      border-right-color: ${color};
    `;
  }

  if (number === 7) {
    return css`
      border-right-color: ${color};
    `;
  }

  if (number === 8) {
    return css`
      border-top-color: ${color};
      border-right-color: ${color};
      border-left-color: ${color};
      border-bottom-color: ${color};
    `;
  }

  if (number === 9) {
    return css`
      border-right-color: ${color};
      border-top-color: ${color};
      border-bottom-color: ${color};
    `;
  }
}
