import styled from "styled-components";
import { Text, Button } from "rebass/styled-components";
import { Colors } from "../../theme/globalStyle";

const ButtonBox = styled(Button)`
  padding: 1.5rem;
  border-radius: 4px;
  background-color: ${Colors.emerald};
  outline: none;
  width: 100%;
  &:hover {
    border: black solid;
  }
`;

const ButtonTitle = styled(Text)`
  color: white;
  font-size: 20px;
`;

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  type?: string;
}

export const ActionButton = ({ title, onClick, type }: ButtonProps) => (
  <ButtonBox type={type} onClick={onClick}>
    <ButtonTitle>{title}</ButtonTitle>
  </ButtonBox>
);
