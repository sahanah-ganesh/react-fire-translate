import { Box } from "rebass/styled-components";
import { SigninForm } from "../../components/form/SigninForm";
import DarkLayout from "../../components/layout/DarkLayout";
import styled from "styled-components";

const StyledBox = styled(Box)`
  width: 50%;
  background-color: white;
  padding-right: 2rem;
  padding-left: 2rem;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Signin = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="row">
      <Box width="50%">
        <DarkLayout />
      </Box>
      <StyledBox>
        <SigninForm />
      </StyledBox>
    </Box>
  );
};

export default Signin;
