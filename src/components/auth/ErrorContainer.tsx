import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: ${(props) => props.theme.error};
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  margin: 5px 0;
`;

interface IProps {
  message: string | undefined;
}

const ErrorContainer: React.FC<IProps> = ({ message }) =>
  message ? <Container>{message}</Container> : null;

export default ErrorContainer;
