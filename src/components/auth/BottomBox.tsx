import React from "react";
import styled from "styled-components";
import { BaseCenterBox } from "../shared";

const Container = styled(BaseCenterBox)`
  flex-direction: row;
  padding: 20px 0px;
  text-align: center;
`;

const BottomBox: React.FC = ({ children }) => <Container>{children}</Container>;

export default BottomBox;
