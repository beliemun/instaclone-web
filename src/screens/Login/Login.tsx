import React from "react";
import {
  Container,
  Wapper,
  TopBox,
  BottomBox,
  SighUpLink,
  Seperator,
  SeperatorText,
  FBLoginButton,
  FBLoginText,
} from "./style";
import { HorizontalLine, Form, Input, Button } from "../../components/Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Login: React.FC = () => (
  <Container>
    <Wapper>
      <TopBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </div>
        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Login" />
        </Form>
        <Seperator>
          <HorizontalLine />
          <SeperatorText>OR</SeperatorText>
          <HorizontalLine />
        </Seperator>
        <FBLoginButton>
          <FontAwesomeIcon icon={faFacebookSquare} size={"lg"} />
          <FBLoginText>Log in with Facebook</FBLoginText>
        </FBLoginButton>
      </TopBox>
      <BottomBox>
        <span>Don`t have an account?</span>
        <SighUpLink to="/sign-up">Sign up</SighUpLink>
      </BottomBox>
    </Wapper>
  </Container>
);

export default Login;
