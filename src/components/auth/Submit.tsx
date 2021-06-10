import styled from "styled-components";

const Submit = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.theme.accent};
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0 !important;
  text-align: center;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? props.theme.accent : props.theme.hover};
  }
`;

export default Submit;
