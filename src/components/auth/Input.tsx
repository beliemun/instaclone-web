import styled from "styled-components";

const Input = styled.input`
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

export default Input;
