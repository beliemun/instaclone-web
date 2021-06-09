import React from "react";
import { TopBox, FBLoginButton, FBLoginText } from "./styles";
import {
  AuthLayout,
  Form,
  Input,
  Submit,
  Seperator,
  BottomBox,
} from "../../components/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { routes } from "../../routes";
import { Link } from "../../components/shared/Base";
import PageTitle from "../../components/shared/PageTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorContainer from "../../components/auth/ErrorContainer";

type Inputs = {
  username: string;
  password2: string;
  password22: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitValid: SubmitHandler<Inputs> = (data) => {
    console.log(data, "valid");
  };
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <TopBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </div>
        <Form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            type="text"
            placeholder="Username"
            {...register("username", {
              required: true,
              minLength: 6,
            })}
          />
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
          />
          <ErrorContainer>
            <div>{errors.username && "• User name is too short!"}</div>
            <div>{errors.password && "• Password is too short!"}</div>
          </ErrorContainer>
          <Submit type="submit" value="Login" />
        </Form>
        <Seperator />
        <FBLoginButton>
          <FontAwesomeIcon icon={faFacebookSquare} size={"lg"} />
          <FBLoginText>Log in with Facebook</FBLoginText>
        </FBLoginButton>
      </TopBox>
      <BottomBox>
        <span>Don`t have an account?</span>
        <Link to={routes.signUp}>Sign up</Link>
      </BottomBox>
    </AuthLayout>
  );
};

export default Login;
