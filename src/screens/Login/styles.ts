import styled from "styled-components";
import { BaseCenterBox } from "../../components/base/Base";

export const TopBox = styled(BaseCenterBox)`
  padding: 20px 40px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.windowColor};
  & > div:first-child {
    margin-bottom: 20px;
  }
  form {
    input {
      margin-top: 5px;
    }
  }
`;

export const FBLoginButton = styled.button`
  color: ${(props) => props.theme.facebook};
  padding: 10px;
  cursor: pointer;
`;

export const FBLoginText = styled.span`
  color: ${(props) => props.theme.facebook};
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
`;
