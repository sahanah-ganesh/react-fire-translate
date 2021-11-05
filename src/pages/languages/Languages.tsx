import NavBar from "../../components/nav/NavBar";
import { Box } from "rebass/styled-components";
import { Colors } from "../../theme/globalStyle";

const Languages = (): JSX.Element => {
  return (
    <Box
      height="100vh"
      style={{ position: "relative", backgroundColor: Colors.sunYellow }}
    >
      <NavBar />
    </Box>
  );
};

export default Languages;
