import NavBar from "../../components/nav/NavBar";
import { Box } from "rebass/styled-components";

const Home = (): JSX.Element => {
  return (
    <Box height="100vh" style={{ position: "relative" }}>
      <NavBar />
    </Box>
  );
};

export default Home;
