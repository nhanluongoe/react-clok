import styled from "@emotion/styled";
import { css } from "@emotion/react";

const DigitBase = styled.div`
  border: 1px solid transparent;
  width: 100px;
  height: 100px;
  margin: 0 16px;
  border-width: 8px;
`;

function topFragmentStyle(props: { num: number }) {
  const { num } = props;
  if (num === 0) {
    return css`
      border-top-color: black;
      border-right-color: black;
      border-left-color: black;
    `;
  }

  if (num === 1) {
    return css`
      border-right-color: black;
    `;
  }

  if (num === 2) {
    return css`
      border-top-color: black;
      border-right-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 3) {
    return css`
      border-top-color: black;
      border-right-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 4) {
    return css`
      border-right-color: black;
      border-left-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 5) {
    return css`
      border-top-color: black;
      border-left-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 6) {
    return css`
      border-top-color: black;
      border-left-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 7) {
    return css`
      border-top-color: black;
      border-right-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 8) {
    return css`
      border-top-color: black;
      border-right-color: black;
      border-left-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 9) {
    return css`
      border-top-color: black;
      border-right-color: black;
      border-left-color: black;
      border-bottom-color: black;
    `;
  }
}

function bottomFragmentStyle(props: { num: number }) {
  const { num } = props;

  if (num === 0) {
    return css`
      border-right-color: black;
      border-left-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 1) {
    return css`
      border-right-color: black;
    `;
  }

  if (num === 2) {
    return css`
      border-top-color: black;
      border-bottom-color: black;
      border-left-color: black;
    `;
  }

  if (num === 3) {
    return css`
      border-right-color: black;
      border-top-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 4) {
    return css`
      border-right-color: black;
      border-top-color: black;
    `;
  }

  if (num === 5) {
    return css`
      border-top-color: black;
      border-right-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 6) {
    return css`
      border-top-color: black;
      border-left-color: black;
      border-bottom-color: black;
      border-right-color: black;
    `;
  }

  if (num === 7) {
    return css`
      border-right-color: black;
      border-top-color: black;
    `;
  }

  if (num === 8) {
    return css`
      border-top-color: black;
      border-right-color: black;
      border-left-color: black;
      border-bottom-color: black;
    `;
  }

  if (num === 9) {
    return css`
      border-right-color: black;
      border-top-color: black;
      border-bottom-color: black;
    `;
  }
}

const DigitTop = styled(DigitBase)<{ num: number }>`
  border-bottom-width: 4px;
  ${topFragmentStyle};
`;

const DigitBottom = styled(DigitBase)<{ num: number }>`
  border-top-width: 4px;
  ${bottomFragmentStyle};
`;

export default function ClockDigit({ number }: { number: number }) {
  return (
    <div>
      <DigitTop num={number}></DigitTop>
      <DigitBottom num={number}></DigitBottom>
    </div>
  );
}
