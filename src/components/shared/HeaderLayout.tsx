import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
  width: 100%;
  max-width: 930px;
  padding-top: 80px;
  margin: 0 auto;
`;

const HeaderLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
);

export default HeaderLayout;
