import React from "react";
import styled from "styled-components";
import { BaseCenterBox } from "../base";

const Container = styled(BaseCenterBox)`
  flex-direction: row;
  padding: 20px 0px;
  text-align: center;
  background-color: ${(props) => props.theme.windowColor};
  span {
    margin-right: 5px;
  }
`;

const BottomBox: React.FC = ({ children }) => <Container>{children}</Container>;

export default BottomBox;
