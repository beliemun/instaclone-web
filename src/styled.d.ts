import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: string;
    buttonTextColor: string;
    backgroundColor: string;
    borderColorLight: string;
    borderColorDark: string;
    accent: string;
    hover: string;
    facebook: string;
  }
}
