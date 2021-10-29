import { Box, Image } from "rebass/styled-components";
import DarkBackground from "../../assets/DarkBackground.png";
import styled from "styled-components";

const StyledBackground = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const StyledLogo = styled(Image)`
  height: 100%;
  width: 100%;
`;

const DarkLayout = (): JSX.Element => {
  return (
    <StyledBackground>
      <StyledLogo src={DarkBackground} />
    </StyledBackground>
  );
};

export default DarkLayout;
