import { useState, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: #303246;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Links = styled(Link)`
  padding: 1rem 2rem;
  font-size: 2rem;
  color: white;
  text-decoration: none;
  text-align: center;
  :hover {
    text-decoration: underline;
    border: 1px white solid;
    border-radius: 34px;
  }
`;

const ExternalLink = styled.a`
  padding: 1rem 2rem;
  font-size: 2rem;
  color: white;
  text-decoration: none;
  text-align: center;
  :hover {
    text-decoration: underline;
    border: 1px white solid;
    border-radius: 34px;
  }
`;

const Menu = (): JSX.Element => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div style={{ padding: "1rem" }} ref={node}>
      <StyledMenu open={open}>
        <Links to="/signin">{t("links.signin")}</Links>
        <ExternalLink target="_blank" href="https://www.google.com/">
          {t("links.google")}
        </ExternalLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
