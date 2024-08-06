import styled from "@emotion/styled";

const StyledClockSeparator = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const ClockSeparatorDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
`;

export default function ClockSeparator() {
  return (
    <StyledClockSeparator>
      <ClockSeparatorDot />
      <ClockSeparatorDot />
    </StyledClockSeparator>
  );
}
