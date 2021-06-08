import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseCenterBox } from "../../styles/base";

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

export const TopBox = styled(BaseCenterBox)`
  padding: 20px;
  margin-bottom: 10px;

  & > div:first-child {
    margin-bottom: 20px;
  }
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      width: 100%;
      background-color: #fafafa;
      border-radius: 3px;
      padding: 10px;
      /* box-sizing: border-box; */
      &:first-child {
        margin-bottom: 5px;
      }
      &::placeholder {
        color: darkgray;
      }
    }
    input[type="text"],
    input[type="password"] {
      border: 1px solid gainsboro;
    }
    input[type="submit"] {
      font-size: 14px;
      font-weight: bold;
      color: white;
      margin: 20px 0;
      padding: 15px;
      background-color: #0597f6;
      text-align: center;
      cursor: pointer;
    }
  }
`;

export const BottomBox = styled(BaseCenterBox)`
  flex-direction: row;
  padding: 20px 0px;
  text-align: center;
`;

export const SighUpText = styled(Link)`
  color: #0597f6;
  font-weight: bold;
  margin: 5px;
  text-decoration: none;
`;

export const Seperator = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const SeperatorText = styled.span`
  color: #9a9a9a;
  margin: 10px;
`;

export const FaceBookLogin = styled.button`
  margin: 10px;
  cursor: pointer;
`;

export const FaceBookText = styled.span`
  color: #395184;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;
