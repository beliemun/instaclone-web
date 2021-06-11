import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "token";
const DARK_MODE = "darkmode";

// Boolean안에 값이 있으면 True가 나오고, null이나 undefined가 나오면 false가 나온다.
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const singIn = (token: string) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const singOut = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(DARK_MODE);
  // isLoggedInVar(false);
  // 아래의 코드는 이전의 모든 state를 삭제.
  window.location.reload();
};

export const isDarkModeVar = makeVar(
  Boolean(localStorage.getItem(DARK_MODE) === "enabled")
);

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  isDarkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  isDarkModeVar(false);
};

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
