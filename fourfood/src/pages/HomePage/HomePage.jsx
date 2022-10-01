import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";
import { MainDiv, StyledBody, Title, StyledSpan } from "./styled";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <StyledBody onClick={() => goToLoginPage(navigate)}>
      <MainDiv >
        <Title>Future
          <br/>
          <StyledSpan>Eats</StyledSpan>
        </Title>
        <br />
        {/* <Btns onClick={() => goToLoginPage(navigate)}>Ir para login</Btns> */}
      </MainDiv>
    </StyledBody>
  );
};
export default HomePage;
