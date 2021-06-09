import styled from "styled-components";
import { BaseCenterBox } from "../../components/shared/Base";

export const TopBox = styled(BaseCenterBox)`
  padding: 20px 40px;
  margin-bottom: 10px;
  & > div:first-child {
    margin-bottom: 20px;
  }
  form {
    input {
      &:first-child {
        margin-bottom: 5px;
      }
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
  font-weight: bold;
  margin-left: 10px;
`;
