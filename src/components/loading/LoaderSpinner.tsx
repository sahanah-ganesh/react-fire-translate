import styled from "styled-components";
import { Colors } from "../../theme/globalStyle";

const StyledSpinner = styled.svg<{
  spinColor: string | undefined;
  spinHeight: string | undefined;
  spinWidth: string | undefined;
}>`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: ${({ spinWidth }) => (spinWidth ? spinWidth : "100px")};
  height: ${({ spinHeight }) => (spinHeight ? spinHeight : "100px")};

  & .path {
    stroke: ${({ spinColor }) => (spinColor ? spinColor : Colors.freshTeal)};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

interface SpinProps {
  spinColor?: string | undefined;
  spinHeight?: string | undefined;
  spinWidth?: string | undefined;
}
export const LoaderSpinner = ({
  spinColor,
  spinHeight,
  spinWidth,
}: SpinProps) => (
  <StyledSpinner
    spinColor={spinColor}
    spinHeight={spinHeight}
    spinWidth={spinWidth}
    viewBox="0 0 50 50"
  >
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);
