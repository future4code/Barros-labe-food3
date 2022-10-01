import React from "react";
import { ScreenContainer, LogoImage } from "./styledSignUp";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <ScreenContainer>
      {/* <LogoImage src={logo} /> */}

      <SignUpForm />
    </ScreenContainer>
  );
};
export default SignUpPage;
