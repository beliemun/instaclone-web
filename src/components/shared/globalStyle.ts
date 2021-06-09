import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  color: "#2c2c2c",
  buttonTextColor: "#ffffff",
  backgroundColor: "#fafafa",
  borderColorLight: "#dbdbdb",
  borderColorDark: "#a9a9a9",
  accent: "#0597f6",
  hover: "#5352ed",
  facebook: "#395184",
  error: "#e74c3c",
};

export const darkTheme: DefaultTheme = {
  color: "#2c2c2c",
  buttonTextColor: "#ffffff",
  backgroundColor: "#fafafa",
  borderColorLight: "#dbdbdb",
  borderColorDark: "#a9a9a9",
  accent: "#0597f6",
  hover: "#5352ed",
  facebook: "#395184",
  error: "#e74c3c",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
      background-color: ${(props) => props.theme.backgroundColor};
      font-size: 14px;
      color: ${(props) => props.theme.color}
  }
  input {
    all:unset;
    box-sizing:border-box;
  }
  button{
    all:unset;
    box-sizing:border-box;
  }
`;
