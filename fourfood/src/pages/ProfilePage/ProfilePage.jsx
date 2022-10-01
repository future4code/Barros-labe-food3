import React, { useState, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { Name, Email, Span, Rectangle } from "./styled";
import CreateIcon from "@mui/icons-material/Create";
import { goToEditProfile, goToEditAddress } from "../../routes/coordinator";
import Container from "../../components/MainContainer/styled";

const ProfilePage = () => {
  useProtectedPage();

  const navigate = useNavigate();

  const [profileList, setProfileList] = useState([]);

  const data = {
    profileList,
    setProfileList,
  };

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getProfile(data);
  }, [profileList]);

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, headers)
      .then((res) => {
        setProfileList(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Rectangle>
        <div>
          <p>{profileList.name}</p>
          <p>{profileList.email}</p>
          <p>{profileList.cpf}</p>
        </div>
        <button>
          <CreateIcon onClick={() => goToEditProfile(navigate)}></CreateIcon>
        </button>
      </Rectangle>

      <Rectangle gray>
        <div>
          <span>Endereço cadastrado:</span>
          <p>{profileList.address}</p>
        </div>
        <button>
          <CreateIcon onClick={() => goToEditAddress(navigate)}></CreateIcon>
        </button>
      </Rectangle>

      <span>Histórico de Pedidos</span>
    </Container>
  );
};
export default ProfilePage;
