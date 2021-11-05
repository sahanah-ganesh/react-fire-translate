import { Link } from "react-router-dom";
import { Box, Image, Button } from "rebass/styled-components";
// import Menu from "./Menu";
import Logo from "../../assets/Logo.svg";
import Logout from "../../assets/Logout.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { signout } from "../../core/api";
import DownArrow from "../../assets/DownArrow.svg";
import { DropDown } from "../button/DropDown";

const NavButtonBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const NavButtonRight = styled(Link)`
  color: black;
  background-color: transparent;
  text-decoration: none;
  padding: 1rem;
  margin-left: 3rem;
  border-radius: 5px;
  &:hover {
    border: 2px solid black;
    text-decoration: underline;
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
    border: 2px solid black;
    text-decoration: underline;
  }
  display: flex;
  flex-direction: row;
`;

const StyledLogout = styled(Button)`
  outline: none;
  background-color: transparent;
  &:hover {
    border: 2px solid black;
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
        borderBottom: "2px solid black",
        padding: "1rem",
        backgroundColor: "white",
      }}
    >
      <NavButtonBox>
        <Link to="/">
          <Image height="50px" width="50px" src={Logo} />
        </Link>
        <NavButtonRight to="/">{t("links.languages")}</NavButtonRight>
        <NavButtonRight to="/">{t("links.keys")}</NavButtonRight>
        {/* <Menu /> */}
      </NavButtonBox>
      <NavButtonBox>
        <DropDown
          title={t("links.platform")}
          options={["Web", "iOs", "Android"]}
        />
        <StyledLogout onClick={signout}>
          <Image height="30px" width="30px" src={Logout} />
        </StyledLogout>
      </NavButtonBox>
    </Box>
  );
};

export default NavBar;
