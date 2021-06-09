import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const AuthLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Wapper>{children}</Wapper>
    </Container>
  );
};

export default AuthLayout;
