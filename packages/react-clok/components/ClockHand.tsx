import styled from "@emotion/styled";
const StyledClockHand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
`;

export default function ClockHand({ className }: { className?: string }) {
  return <StyledClockHand className={className} />;
}
