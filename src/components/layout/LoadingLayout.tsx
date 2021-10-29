import { LoaderSpinner } from "../loading/LoaderSpinner";
import { TitleText } from "../text/TitleText";
import { Box } from "rebass";
import { useTranslation } from "react-i18next";

export const LoadingLayout = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box>
      <TitleText title={t("status.loading")} />
      <LoaderSpinner />;
    </Box>
  );
};
