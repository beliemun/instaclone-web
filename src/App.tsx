import { useReactiveVar } from "@apollo/client";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { isdarkModeVar, isLoggedInVar } from "./shared/apollo";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/globalStyle";
import NotFound from "./screens/404";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isdarkMode = useReactiveVar(isdarkModeVar);
  return (
    <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          {!isLoggedIn ? (
            <Route path="/sign-up">
              <SignUp />
            </Route>
          ) : null}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
