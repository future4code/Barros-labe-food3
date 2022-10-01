import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Button, TextField } from "@mui/material";
import { SignUpButtonContainer } from "../LoginPage/styledLogin";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import GlobalStateContext from "../../global/GlobalStateContext";
import { SignUpFormContainer, InputsContainer } from "./styledSignUp";
import useProtectedPage from "../../hooks/useProtectedPage";

const Adress = () => {
  useProtectedPage()
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const { states, setters, services } = useContext(GlobalStateContext);
  const { loginButtonText } = states;
  const { setLoginButtonText } = setters;
  const { signUp } = services;

  const handleSubmission = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate, setLoginButtonText);

    axios
      .put(`${BASE_URL}/address`, form, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert(`${res.data}Prontinho! Endereço cadastrado com sucesso`);

      })
      .catch((err) =>  {
        alert(`${err.response}Cadastre o seu endereço`);
      });
  };
  return (
      <SignUpFormContainer>
            <form onSubmit={handleSubmission}>

        <p>Meu Endereço</p>
        <TextField
          value={form.street}
          name="street"
          onChange={onChange}
          label="Logadouro"
          variant="outlined"
          className="Input_locus"
          required
        />
        <TextField
          value={form.number}
          name="number"
          onChange={onChange}
          label="Número"
          variant="outlined"
          className="Input_locus"
          pattern="[.\s\w]{2,}"
          required
        />

        <TextField
          value={form.complement}
          name="complement"
          onChange={onChange}
          label="Complemento"
          variant="outlined"
          className="Input_locus "
          required
        />

        <TextField
          value={form.neighbourhood}
          name="neighbourhood"
          onChange={onChange}
          label="Bairro"
          variant="outlined"
          className="Input_locus"
          required
        />
        <TextField
          value={form.city}
          name="city"
          onChange={onChange}
          label="Cidade"
          variant="outlined"
          className="Input_locus"
          required
        />
        <TextField
          value={form.state}
          name="state"
          onChange={onChange}
          label="Estado"
          variant="outlined"
          className="Input_locus"
          required
        />

        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Salvar
        </Button>
        </form>
      </SignUpFormContainer>
    
  );
};
export default Adress;
