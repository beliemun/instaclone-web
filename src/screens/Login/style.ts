import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseCenterBoxStyle } from "../../styles/baseStyle";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wapper = styled.div`
  max-width: 450px;
  width: 100%;
`;

export const TopBox = styled(BaseCenterBoxStyle)`
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

export const BottomBox = styled(BaseCenterBoxStyle)`
  flex-direction: row;
  padding: 20px 0px;
  text-align: center;
`;

export const SighUpLink = styled(Link)`
  color: #0597f6;
  font-weight: bold;
  margin: 5px;
  text-decoration: none;
`;

export const Seperator = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SeperatorText = styled.span`
  color: ${(props) => props.theme.borderColorDark};
  margin: 10px;
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
