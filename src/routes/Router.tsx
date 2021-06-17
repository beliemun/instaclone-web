import { HashRouter, Route, Switch } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../apollo";
import routes from "./routes";
import HeaderLayout from "../components/shared/HeaderLayout";
import NotFound from "../screens/404/404";
import Home from "../screens/Home/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Profile from "../screens/Profile";

const Router = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <HashRouter>
      <Switch>
        <Route path={routes.home} exact>
          {isLoggedIn ? (
            <HeaderLayout>
              <Home />
            </HeaderLayout>
          ) : (
            <Login />
          )}
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
        <Route path={`/users/:userName`}>
          <Profile />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
