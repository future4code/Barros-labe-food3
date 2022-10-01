import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { InputsContainer, SignUpFormContainer } from "./styledSignUp";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import logo from "../../assets/logo-future-eats-invert.png"
import { LogoImage } from "../LoginPage/styledLogin";


const SignUpForm = () => {
  const navigate = useNavigate();

  const [form, onChangeInput, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { states, setters, services } = useContext(GlobalStateContext);
  const { loginButtonText } = states;
  const { setLoginButtonText } = setters;
  const { signUp } = services;

  const onSubmitForm = (e) => {
    e.preventDefault();
    signUp(form, clear, navigate, setLoginButtonText);
  };
  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
      <LogoImage src={logo} />
      <p>Cadastro</p>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChangeInput}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
            autoFocus
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChangeInput}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            type={"text"}
            name={"cpf"}
            value={form.cpf}
            onChange={onChangeInput}
            label={"CPF:"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChangeInput}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Cadastrar-se
          </Button>
        </InputsContainer>
      </SignUpFormContainer>
    </form>
  );
};
export default SignUpForm;
