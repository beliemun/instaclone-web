import styled from "styled-components";

const Submit = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.theme.accent};
  border-radius: 5px;
  margin: 20px 0;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export default Submit;
