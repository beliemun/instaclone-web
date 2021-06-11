import React from "react";
import { singOut } from "../../apollo";
import { Container } from "./styles";

const Home: React.FC = () => (
  <Container>
    Home<button onClick={() => singOut()}>Log out</button>
  </Container>
);

export default Home;
