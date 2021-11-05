import NavBar from "../../components/nav/NavBar";
import { Box, Text, Image, Button } from "rebass/styled-components";
import { Colors } from "../../theme/globalStyle";
import styled from "styled-components";
import Web from "../../assets/Web.svg";
import Android from "../../assets/Android.svg";
import IOS from "../../assets/IOS.svg";

const StyledBox = styled(Box)`
  background-color: ${Colors.skyBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin: 3rem;
  border-radius: 5px;
`;

const StyledButtonBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledText = styled(Text)`
  font-size: 18px;
  text-align: left;
  color: black;
`;

const StyledLabel = styled(Text)`
  font-size: 16px;
  text-align: center;
  color: black;
  padding: 0.5rem 2rem 1rem 2rem;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ButtonBoxProps {
  title: string;
  icon: string;
}

const ButtonBox = ({ title, icon }: ButtonBoxProps): JSX.Element => {
  return (
    <StyledButton>
      <Image height="50px" src={icon} />
      <StyledLabel>{title}</StyledLabel>
    </StyledButton>
  );
};

const Landing = (): JSX.Element => {
  return (
    <Box
      height="100vh"
      style={{
        position: "relative",
        backgroundColor: Colors.coolPurple,
      }}
    >
      <NavBar landing={true} />
      <StyledBox>
        <StyledText>Select platform:</StyledText>
        <StyledButtonBox>
          <ButtonBox title="Web" icon={Web} />
          <ButtonBox title="Android" icon={Android} />
          <ButtonBox title="iOS" icon={IOS} />
        </StyledButtonBox>
      </StyledBox>
    </Box>
  );
};

export default Landing;
