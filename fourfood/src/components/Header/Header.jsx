import React from "react";
import { Container } from "./styled";
import back from '../../images/return.svg'
import { goBack } from "../../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const headerTitle = () => {
    if (location.pathname === '/cadastro') return ''
    if (location.pathname === '/home') return 'FutureEats'
    if (location.pathname === '/carrinho') return 'Meu carrinho'
    if (location.pathname === '/perfil') return 'Meu perfil'
    if (location.pathname === '/editar-perfil') return 'Editar'
    if (location.pathname === '/editar-endereco') return 'Endereço'
    return 'Restaurante'
  }

  return (
    <Container>
      <div>
        {location.pathname !== '/home' ? (
          <picture onClick={() => goBack(navigate)}>
            <img src={back} alt="Voltar"/>
          </picture>
        ) : null}
        <h3>{headerTitle()}</h3>
      </div>
    </Container>
  )
}

export default Header