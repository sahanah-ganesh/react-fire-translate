import { useState } from "react";
import styled from "styled-components";
import { Box, Text } from "rebass/styled-components";
import { useTranslation } from "react-i18next";
import { ActionButton } from "../button/ActionButton";
import { TitleText } from "../text/TitleText";
import { FormInput } from "./FormInput";
import { useFormik } from "formik";
import { signInWithGooglePopup, signInWithCredentials } from "../../core/api";
import * as Yup from "yup";

const StyledContainer = styled(Box)`
  width: 100%;
`;

const StyledText = styled(Text)`
  color: red;
  padding: 0rem 1rem 1rem 1rem;
  font-size: 20px;
  font-weight: 600;
`;

export const SigninForm = (): JSX.Element => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      setLoading(true);
      signInWithCredentials(values.email, values.password)
        .then(() => {
          setLoading(false);
          return null;
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    },
  });

  const handleClickGoogle = () => {
    setLoading(true);
    signInWithGooglePopup()
      .then(() => {
        setLoading(false);
        return null;
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledContainer>
        <TitleText paddingBottom={5} title={t("signin.title")} />
        {error && <StyledText>{error}</StyledText>}
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
          loading={loading}
        />
        <ActionButton
          google={true}
          type="submit"
          title={t("signin.signinGoogle")}
          onClick={handleClickGoogle}
          loading={loading}
        />
      </StyledContainer>
    </form>
  );
};
