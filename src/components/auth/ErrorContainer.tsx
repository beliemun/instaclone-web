import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: ${(props) => props.theme.error};
  text-align: center;
  div {
    margin-top: 5px;
    &:first-child {
      margin-top: 20px;
    }
  }
`;

const ErrorContainer: React.FC = ({ children }) => (
  <Container>{children}</Container>
);

export default ErrorContainer;
