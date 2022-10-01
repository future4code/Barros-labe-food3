import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { InputsContainer } from "./styledLogin";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
//import { login } from "../../services/requests.js";

const LoginForm = () => {
  const [form, onChangeInput, clear] = useForm({ email: "", password: "" });

  const { states, setters, services } = useContext(GlobalStateContext);
  const { loginButtonText } = states;
  const { setLoginButtonText } = setters;
  const { login } = services;
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clear, navigate, setLoginButtonText);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
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
          LOGIN
        </Button>
        <br />
      </form>
    </InputsContainer>
  );
};
export default LoginForm;
