import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { client, isdarkModeVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyles,
  darkTheme,
  lightTheme,
} from "./components/shared/globalStyle";
import { Router } from "./routes";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const isdarkMode = useReactiveVar(isdarkModeVar);
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
};

export default App;
