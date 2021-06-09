import styled from "styled-components";
import { BaseCenterBox } from "../../components/shared/Base";

export const TopBox = styled(BaseCenterBox)`
  padding: 20px 40px;
  margin-bottom: 10px;
  & > div:first-child {
    margin-bottom: 20px;
  }
  & > form:first-child {
    margin: 5px 0;
  }
  form {
    input {
      margin-bottom: 5px;
      &:first-child {
        margin-top: 10px;
      }
    }
  }
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.borderColorDark};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: center;
  margin-bottom: 5px;
`;
