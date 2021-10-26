import styled from "styled-components";
import { Image, Text } from "rebass/styled-components";

const ExternalLink = styled.a<{ login: boolean }>`
  display: flex;
  color: black;
  text-decoration: none;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 17px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    border: 1px black solid;
    border-radius: 34px;
  }
`;

const StyledText = styled(Text)`
  font-size: 15px;
`;

interface NavIconTextProps {
  image: string;
  text: string;
  link: string;
  login?: boolean;
  exit?: boolean;
}

const NavIconText = ({
  image,
  text,
  link,
  login = false,
}: NavIconTextProps) => {
  return (
    <ExternalLink login={login} target={login ? "" : "_blank"} href={link}>
      <Image src={image} pr={3} />
      <StyledText>{text}</StyledText>
    </ExternalLink>
  );
};

export default NavIconText;
