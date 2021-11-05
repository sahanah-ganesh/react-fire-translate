import { Box } from "rebass/styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useViewport } from "../../hooks/useViewport";
import LinkBox from "./LinkBox";
import { Paths } from "../../core/routes";

const Links = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  font-size: 17px;
  &:hover {
    color: #259fcd;
  }
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 1rem;
  font-size: 17px;
  &:hover {
    color: #259fcd;
  }
`;

export const FooterNav = (): JSX.Element => {
  const { t } = useTranslation();
  const { width } = useViewport();
  const breakpoint = 900;
  return (
    <Box
      style={{
        padding: "2em",
        display: "flex",
        flexDirection: width > breakpoint ? "row" : "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      backgroundColor="#303246"
    >
      {width > breakpoint ? (
        <Box>
          <Links to={Paths.landing}>{t("links.home")}</Links>
          <ExternalLink target="_blank" href={t("links.googleLink")}>
            {t("links.google")}
          </ExternalLink>
          <Links to={Paths.signin}>{t("links.signin")}</Links>
        </Box>
      ) : (
        <LinkBox />
      )}
    </Box>
  );
};
