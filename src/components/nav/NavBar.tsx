import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Image, Button } from "rebass/styled-components";
// import Menu from "./Menu";
import Logo from "../../assets/Logo.svg";
import Logout from "../../assets/Logout.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { signout } from "../../core/api";
import { DropDown } from "../button/DropDown";
import { Paths } from "../../core/routes";
import { useStore } from "../../core/store";

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

const StyledLogout = styled(Button)`
  outline: none;
  background-color: transparent;
  &:hover {
    border: 2px solid black;
  }
`;

interface NavBarProps {
  landing?: boolean;
}

const NavBar = ({ landing }: NavBarProps): JSX.Element => {
  const { t } = useTranslation();
  const { state } = useStore();
  const [selectedOption, setSelectedOption] = useState("");
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
        <Link to={Paths.landing}>
          <Image height="50px" width="50px" src={Logo} />
        </Link>
        {!landing && (
          <>
            <NavButtonRight to={Paths.languages(selectedOption)}>
              {t("links.languages")}
            </NavButtonRight>
            <NavButtonRight to={Paths.keys(selectedOption)}>
              {t("links.keys")}
            </NavButtonRight>
          </>
        )}
        {/* <Menu /> */}
      </NavButtonBox>
      <NavButtonBox>
        {state.platforms.length !== 0 && (
          <DropDown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            title={t("links.platform")}
            options={state.platforms}
          />
        )}
        <StyledLogout onClick={signout}>
          <Image height="30px" width="30px" src={Logout} />
        </StyledLogout>
      </NavButtonBox>
    </Box>
  );
};

export default NavBar;
