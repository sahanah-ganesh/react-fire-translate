import styled from "styled-components";
import { Box } from "rebass/styled-components";
import { useTranslation } from "react-i18next";
import { ActionButton } from "../button/ActionButton";
import { TitleText } from "../text/TitleText";
import { FormInput } from "./FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";

const StyledContainer = styled(Box)`
  width: 100%;
`;

export const SigninForm = (): JSX.Element => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("signin.emailError"))
        .required(t("signin.required")),
      password: Yup.string().required(t("signin.required")),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledContainer>
        <TitleText paddingBottom={5} title={t("signin.title")} />
        <FormInput
          type="email"
          text={t("signin.email")}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email ? true : false}
          errorMessage={formik.errors.email}
        />
        <FormInput
          type="password"
          text={t("signin.password")}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={
            formik.touched.password && formik.errors.password ? true : false
          }
          errorMessage={formik.errors.password}
        />
        <ActionButton
          type="submit"
          title={t("signin.signin")}
          onClick={formik.handleSubmit}
        />
      </StyledContainer>
    </form>
  );
};
