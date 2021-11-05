import NavBar from "../../components/nav/NavBar";
import { Box, Button } from "rebass/styled-components";
import { Colors } from "../../theme/globalStyle";
import { readTestData, writeTestData } from "../../core/api";

const Languages = (): JSX.Element => {
  return (
    <Box
      height="100vh"
      style={{ position: "relative", backgroundColor: Colors.sunYellow }}
    >
      <NavBar />
      <Button onClick={() => writeTestData("web/", "whyyy")} />
      <Button onClick={() => readTestData()} />
    </Box>
  );
};

export default Languages;
