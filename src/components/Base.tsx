import styled from "styled-components";

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.borderColorLight};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 13px;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColorLight};
  border-radius: 5px;
  padding: 10px;
  transition: border-color 0.3s ease-in-out;
  &::placeholder {
    color: darkgray;
  }
  &:focus {
    border-color: ${(props) => props.theme.borderColorDark};
  }
`;

export const Button = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.theme.accent};
  border-radius: 5px;
  margin: 20px 0;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;
