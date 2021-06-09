import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  AuthLayout,
  BottomBox,
  Form,
  Input,
  Seperator,
  Submit,
} from "../../components/auth";
import { Link } from "../../components/shared/Base";
import PageTitle from "../../components/shared/PageTitle";
import { routes } from "../../routes";
import { Header, TopBox } from "./styles";

const SignUp: React.FC = () => (
  <AuthLayout>
    <PageTitle title="Sign Up" />
    <TopBox>
      <div>
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </div>
      <Header>Sign up to see photos and videos from your friends.</Header>
      <Form>
        <Submit type="submit" value="Log in with Facebook" />
      </Form>
      <Seperator />
      <Form>
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Fullname" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Submit type="submit" value="Sign up" />
      </Form>
    </TopBox>
    <BottomBox>
      <span>Have an account?</span>
      <Link to={routes.signIn}>Log in</Link>
    </BottomBox>
  </AuthLayout>
);

export default SignUp;
