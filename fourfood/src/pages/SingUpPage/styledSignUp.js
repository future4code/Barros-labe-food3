import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  @media screen and (max-width: 375px) {
      margin: 10vh;
  }
`;

export const InputsContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  text-align: center;
`;

export const LoginFormContainer = styled.div`

  max-width: 450px;
  align-items: center;
`;
export const SignUpFormContainer = styled.div`
  max-width: 450px;
  margin-bottom: 20px;
`;

export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
`;

export const LogoImage = styled.img`
  width: 70vw;
  max-width: 350px;
`;
