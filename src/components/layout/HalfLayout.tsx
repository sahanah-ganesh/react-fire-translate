import { Box, Image } from "rebass/styled-components";
import DarkBackground from "../../assets/DarkBackground.png";
import styled from "styled-components";

const FadedBackground = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const FadedLogo = styled(Image)`
  height: 100%;
  width: 100%;
`;

const FadedLayout = (): JSX.Element => {
  return (
    <FadedBackground>
      <FadedLogo src={DarkBackground} />
    </FadedBackground>
  );
};

export default FadedLayout;
