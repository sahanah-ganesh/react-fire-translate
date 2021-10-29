import styled from "styled-components";
import { Text, Button, Image } from "rebass/styled-components";
import { Colors } from "../../theme/globalStyle";
import G from "../../assets/G.svg";
import { LoaderSpinner } from "../loading/LoaderSpinner";

const ButtonBox = styled(Button)<{ google: boolean }>`
  padding: 1.5rem;
  border-radius: 4px;
  background-color: ${({ google }) =>
    google ? Colors.googleBlue : Colors.emerald};
  outline: none;
  width: 100%;
  &:hover {
    border: black solid;
  }
  display: ${({ google }) => (google ? "flex" : "")};
  flex-direction: ${({ google }) => (google ? "row" : "")};
  justify-content: ${({ google }) => (google ? "center" : "")};
  align-items: ${({ google }) => (google ? "center" : "")};
  margin-top: ${({ google }) => (google ? "2rem" : "")};
`;

const ButtonTitle = styled(Text)`
  color: white;
  font-size: 20px;
`;

const StyledImage = styled(Image)`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 5px;
`;

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  type?: string;
  google?: boolean;
  loading?: boolean;
}

export const ActionButton = ({
  title,
  onClick,
  type,
  google = false,
  loading = false,
}: ButtonProps) => (
  <ButtonBox google={google} type={type} onClick={onClick}>
    {!loading && google ? <StyledImage src={G} /> : null}
    {loading ? (
      <LoaderSpinner
        spinColor={Colors.deepPurple}
        spinHeight="1rem"
        spinWidth="1rem"
      />
    ) : (
      <ButtonTitle>{title}</ButtonTitle>
    )}
  </ButtonBox>
);
