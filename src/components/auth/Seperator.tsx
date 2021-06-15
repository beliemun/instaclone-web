import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "../base";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

const Text = styled.span`
  color: ${(props) => props.theme.borderColorDark};
  font-weight: 600;
  margin: 10px;
`;

const Seperator: React.FC = () => (
  <Container>
    <HorizontalLine />
    <Text>OR</Text>
    <HorizontalLine />
  </Container>
);

export default Seperator;
