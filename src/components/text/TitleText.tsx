import { Text, Box } from "rebass";
import styled from "styled-components";

const StyledText = styled(Text)`
  color: black;
  font-size: 35px;
  font-weight: 500;
`;

interface TitleTextProps {
  title: string;
  paddingBottom?: number;
}
export const TitleText = ({ title, paddingBottom }: TitleTextProps) => {
  return (
    <Box pb={paddingBottom}>
      <StyledText>{title}</StyledText>
    </Box>
  );
};
