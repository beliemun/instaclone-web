import styled from "styled-components";
import { BaseCenterBox } from "../../components/base/Base";

export const TopBox = styled(BaseCenterBox)`
  padding: 20px 40px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.windowColor};
  & > div:first-child {
    margin-bottom: 20px;
  }
  & > form:first-child {
    margin: 5px 0;
  }
  form {
    input {
      margin-top: 5px;
    }
  }
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.borderColorDark};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: center;
`;
