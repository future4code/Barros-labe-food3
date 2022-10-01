import React from "react";
import styled from "styled-components";

export const TextClickP = styled.p`
  color: grey;
  font-size: 1rem;
  cursor: pointer;
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100vw;
  margin-top: 10vh; */
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 40px;
  margin: 10% 0 auto;
  object-fit: contain;
`
