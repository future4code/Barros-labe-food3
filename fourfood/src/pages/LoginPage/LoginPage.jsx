import React from "react";
import LoginForm from "./LoginForm";
import { goToSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { ScreenContainer, SignUpButtonContainer } from "./styledLogin";
import { Button } from "@mui/material";
import logo from "../../assets/logo-future-eats-invert.png"
import { LogoImage } from "./styledLogin";

const LoginPage = () => {
  useUnprotectedPage();
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUpPage(navigate)}
          type={"submit"}
          fullWidth
        >
          Não possui cadastro? Clique aqui.
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
