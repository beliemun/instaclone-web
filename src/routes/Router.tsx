import { HashRouter, Route, Switch } from "react-router-dom";
import NotFound from "../screens/404/404";
import Home from "../screens/Home/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import routes from "./routes";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../apollo";

const Router = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <HashRouter>
      <Switch>
        <Route path={routes.home} exact>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        {!isLoggedIn ? (
          <>
            <Route path={routes.signUp}>
              <SignUp />
            </Route>
            <Route path={routes.signIn}>
              <Login />
            </Route>
          </>
        ) : null}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
