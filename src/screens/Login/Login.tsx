import React, { isValidElement } from "react";
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
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

interface IForm {
  userName: string;
  password: string;
  error: string;
}

const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm<IForm>({ mode: "onChange" });
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      const {
        login: { ok, error, token },
      } = data;
      if (!ok) {
        setError("error", { message: error });
      }
    },
  });
  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    if (loading) {
      return;
    }
    const { userName, password } = getValues();
    login({
      variables: { userName, password },
    });
  };
  // To do: Fix Errors!!!
  console.log(isValid, loading);
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
            hasError={Boolean(errors?.userName?.message)}
            {...register("userName", {
              required: true,
              minLength: {
                value: 4,
                message: "• Username should be longer than 4 chars.",
              },
              // pattern: {
              //   value: /^[a-zA-Z]+$/,
              //   message: "• Username must contain only the alphabet.",
              // },
            })}
          />
          <ErrorContainer message={errors?.userName?.message} />
          <Input
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
            {...register("password", {
              required: true,
              minLength: {
                value: 4,
                message: "• Password should be longer than 4 chars.",
              },
            })}
          />
          <ErrorContainer message={errors?.password?.message} />
          <Submit
            type="submit"
            value={loading ? "Loading..." : "Log In"}
            disabled={!isValid || loading}
          />
          <ErrorContainer message={errors?.error?.message} />
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
