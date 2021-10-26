import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "rebass/styled-components";
import { useTranslation } from "react-i18next";

const Links = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    color: #259fcd;
  }
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    color: #259fcd;
  }
`;

const LinkBox = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2em",
      }}
    >
      <Box mb={3}>
        <ExternalLink target="_blank" href={t("links.googleLink")}>
          {t("links.google")}
        </ExternalLink>
      </Box>
      <Box mb={3}>
        <Links to="/">{t("links.google")}</Links>
      </Box>
    </Box>
  );
};

export default LinkBox;
