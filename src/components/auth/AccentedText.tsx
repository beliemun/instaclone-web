import React from "react";
import styled from "styled-components";

interface IStlyedProps {
  type: "error" | "info";
}

interface IProps extends IStlyedProps {
  message: string | undefined;
}

const Container = styled.div<IStlyedProps>`
  color: ${(props) =>
    props.type === "error" ? props.theme.error : props.theme.accent};
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  margin: 5px 0;
`;
const ErrorContainer: React.FC<IProps> = ({ message, type }) =>
  message ? <Container type={type}>{message}</Container> : null;

export default ErrorContainer;
