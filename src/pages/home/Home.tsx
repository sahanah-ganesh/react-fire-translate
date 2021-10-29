import NavBar from "../../components/nav/NavBar";
import { Box } from "rebass/styled-components";
import { Colors } from "../../theme/globalStyle";

const Home = (): JSX.Element => {
  return (
    <Box
      height="100vh"
      style={{ position: "relative", backgroundColor: Colors.skyBlue }}
    >
      <NavBar />
    </Box>
  );
};

export default Home;
