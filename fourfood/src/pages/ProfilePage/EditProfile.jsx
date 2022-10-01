import { TextField } from "@mui/material";
import React from "react";
import useForm from "../../hooks/useForm";
import { Button } from "@mui/material";
import { SignUpButtonContainer } from "../LoginPage/styledLogin";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import Container from "../../components/MainContainer/styled";

const EditProfile = () => {
  useProtectedPage()
  const [form, onChange] = useForm({ name: "", email: "", cpf: "" });

  const handleSubmission = (event) => {
    event.preventDefault();
    axios
      .put(`${BASE_URL}/profile`, form, {
        headers: {
          auth: localStorage.getItem ("token")
        },
      })
      .then((res) => {
        alert(`${res.data}Prontinho! Seus dados foram editados com sucesso`);
        
      })
      .catch((err) => {
        alert(`${err.response}Edite o seu perfil`);
      });
  };
  


  return (
    <Container>
      <form onSubmit={handleSubmission}>
        <TextField
          name="name"
          value={form.name}
          onChange={onChange}
          variant="outlined"
          label="Nome"
          required
        />
        <TextField
          name="email"
          value={form.email}
          onChange={onChange}
          variant="outlined"
          label="E-mail"
          required
        />
        <TextField
          name="cpf"
          value={form.cpf}
          onChange={onChange}
          variant="outlined"
          label="CPF"
          placeholder="Somente números"
          pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
          required
        />
        <SignUpButtonContainer>
          <Button 
          type={"submit"} 
          fullWidth
          variant={"contained"}
          color={"primary"}>
            SALVAR
          </Button>
        </SignUpButtonContainer>
      </form>
    </Container>
  );
};

export default EditProfile;
