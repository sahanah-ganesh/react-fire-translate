import { Box, Text } from "rebass/styled-components";
import styled from "styled-components";
import { Colors } from "../../theme/globalStyle";

const StyledError = styled(Text)`
  color: red;
  font-size: 16px;
  padding-top: 0.5rem;
`;

const InputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

const StyledInput = styled.input`
  background-color: ${Colors.lightGrey};
  border-radius: 9px;
  border-color: transparent;
  padding: 1.5rem;
  color: black;
  &:hover {
    border: black solid;
  }
`;

const StyledLabel = styled.label`
  color: black;
  font-size: 20px;
  font-weight: 600;
  align-self: left;
  padding-bottom: 1rem;
`;

interface SigninFormProps {
  type: string;
  value: string;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  error: boolean;
  errorMessage?: string;
}

export const FormInput = ({
  type,
  value,
  text,
  onChange,
  error = false,
  errorMessage,
}: SigninFormProps) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor={type}>{text}</StyledLabel>
      <StyledInput
        id={type}
        type={type}
        name={type}
        value={value}
        onChange={onChange}
      />
      {error && <StyledError>{errorMessage}</StyledError>}
    </InputContainer>
  );
};
