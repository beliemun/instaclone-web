import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  color: "#2c2c2c",
  backgroundColor: "whitesmoke",
};

export const darkTheme: DefaultTheme = {
  color: "whitesmoke",
  backgroundColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
  }
  body {
      background-color: ${(props) => props.theme.backgroundColor}
  }

  /* 이하는 폼 리셋 설정 */
  input, label, select, button, textarea {
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;

  /* Browsers have different default form fonts */
  font-size: 13px;
  font-family: Arial;
  }

  /* Remove the stupid outer glow in Webkit */
  input:focus {
    outline: 0;
  }

  /* These elements are usually rendered a certain way by the browser */
  button,
  input[type="reset"],
  input[type="button"],
  input[type="submit"],
  input[type="checkbox"],
  input[type="radio"],
  select {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  /* Button Controls
  -----------------------------------------------*/
  input[type="checkbox"],
  input[type="radio"] {
    width: 13px;
    height: 13px;
  }

  /* Search Input
  -----------------------------------------------*/

  /* Make webkit render the search input like a normal text field */
  input[type="search"] {
    -webkit-appearance: textfield;
  }

  /* Turn off the recent search for webkit. It adds about 15px padding on the left */
  ::-webkit-search-decoration {
    display: none;
  }

  /* Buttons
  -----------------------------------------------*/
  button,
  input[type="reset"],
  input[type="button"],
  input[type="submit"] {
    /* Fix IE7 display bug */
    overflow: visible;
    width: auto;
  }

  /* IE8 and FF freak out if this rule is within another selector */
  ::-webkit-file-upload-button {
    padding: 0;
    border: 0;
    background: none;
  }

  /* Textarea
  -----------------------------------------------*/
  textarea {
    /* Move the label to the top */
    vertical-align: top;

    /* Turn off scroll bars in IE unless needed */
    overflow: auto;
  }

  select[multiple] {
    /* Move the label to the top */
    vertical-align: top;
  }

`;
