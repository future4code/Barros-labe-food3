import styled from "styled-components";

export const Title = styled.h3`
  width: 68px;
  height: 19px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 93px;
`;

export const Rectangle = styled.div`
  margin: 16px 0;
  padding: 16px;
  background-color: ${props => props.gray ? '#eee' : null};
  display: flex;
  justify-content: space-between;

  p {
    margin: 10px 30px 10px 0px;
    font-size: 16px;
  }

  span {
    color: var(--black-25);
    font-weight: 500;
  }

  button {
    background-color: transparent;
    border: none
  }
`;

export const EditDados = styled.img`
  width: 24px;
  height: 24px;
  margin: 16px 16px 2px 320px;
  object-fit: contain;
`;
