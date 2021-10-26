import { Link } from "react-router-dom";
import { Box, Image } from "rebass/styled-components";
// import Menu from "./Menu";
import Logo from "../../assets/Logo.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const NavButtonBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const NavButtonRight = styled(Link)`
  color: white;
  background-color: transparent;
  text-decoration: none;
  padding: 1rem;
  margin-left: 3rem;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

const NavButtonLeft = styled(Link)`
  color: black;
  background-color: white;
  text-decoration: none;
  padding: 1rem 2rem 1rem 2rem;
  margin-right: 2rem;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

const NavBar = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255, 255, 255, 0.17)",
        padding: "1rem",
      }}
    >
      <NavButtonBox>
        <Link to="/">
          <Image height="50px" width="50px" src={Logo} />
        </Link>
        <NavButtonRight to="/">{t("links.orders")}</NavButtonRight>
        {/* <Menu /> */}
      </NavButtonBox>
      <NavButtonBox>
        <NavButtonLeft to="/">{t("links.test")}</NavButtonLeft>
        <Link to="/">
          <Image height="50px" width="50px" src={Logo} />
        </Link>
      </NavButtonBox>
    </Box>
  );
};

export default NavBar;
