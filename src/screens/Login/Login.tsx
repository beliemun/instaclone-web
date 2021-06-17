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
import { Link } from "../../components/base/Base";
import PageTitle from "../../components/shared/PageTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import AccentedText from "../../components/auth/AccentedText";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { singIn } from "../../apollo";
import { useHistory, useLocation } from "react-router-dom";

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
  const location = useLocation() as any;
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: {
      userName: location?.state?.userName || "",
      password: location?.state?.password || "",
    },
  });

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (res) => {
      const {
        login: { ok, error, token },
      } = res;
      if (!ok) {
        setError("error", { message: error });
      }
      if (token) {
        singIn(token);
        history.push(routes.home);
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

  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <TopBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </div>
        <AccentedText type={"info"} message={location?.state?.message} />
        <Form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            type="text"
            placeholder="Username"
            hasError={Boolean(errors?.userName?.message)}
            onKeyDown={() => clearErrors()}
            {...register("userName", {
              required: true,
              minLength: {
                value: 4,
                message: "• Username should be longer than 4 chars.",
              },
            })}
          />
          <AccentedText type={"error"} message={errors?.userName?.message} />
          <Input
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
            onKeyDown={() => clearErrors()}
            {...register("password", {
              required: true,
              minLength: {
                value: 4,
                message: "• Password should be longer than 4 chars.",
              },
            })}
          />
          <AccentedText type={"error"} message={errors?.password?.message} />
          <Submit
            type="submit"
            value={loading ? "Loading..." : "Log In"}
            disabled={!isValid || loading}
          />
          <AccentedText type={"error"} message={errors?.error?.message} />
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
