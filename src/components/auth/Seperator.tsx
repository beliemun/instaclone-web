import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "../shared";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Text = styled.span`
  color: ${(props) => props.theme.borderColorDark};
  font-weight: bold;
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
