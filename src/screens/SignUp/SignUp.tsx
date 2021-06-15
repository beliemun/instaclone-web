import { useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  AuthLayout,
  BottomBox,
  Form,
  Input,
  Seperator,
  Submit,
} from "../../components/auth";
import AccentedText from "../../components/auth/AccentedText";
import { Link } from "../../components/base/Base";
import PageTitle from "../../components/shared/PageTitle";
import { routes } from "../../routes";
import { Header, TopBox } from "./styles";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  error: string;
}

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

const SignUp: React.FC = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm<IForm>({ mode: "onChange" });

  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted: (res) => {
      const { userName, password } = getValues();
      const {
        createAccount: { ok, error },
      } = res;
      if (!ok) {
        setError("error", { message: error });
      } else {
        history.push({
          pathname: routes.home,
          state: {
            message: "Account created. Please log in.",
            userName,
            password,
          },
        });
      }
    },
  });

  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    if (loading) {
      return;
    }
    const { firstName, lastName, userName, email, password } = getValues();
    createAccount({
      variables: {
        firstName,
        lastName,
        userName,
        email,
        password,
      },
    });
  };

  return (
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
        <Form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            type="text"
            placeholder="Fisrt Name"
            hasError={Boolean(errors?.firstName?.message)}
            onKeyDown={() => clearErrors()}
            {...register("firstName", {
              required: "First Name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "• First Name must contain only the alphabet.",
              },
            })}
          />
          <AccentedText type={"error"} message={errors?.firstName?.message} />
          <Input
            type="text"
            placeholder="Last Name"
            hasError={Boolean(errors?.lastName?.message)}
            onKeyDown={() => clearErrors()}
            {...register("lastName", {
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "• Last Name must contain only the alphabet.",
              },
            })}
          />
          <AccentedText type={"error"} message={errors?.lastName?.message} />
          <Input
            type="text"
            placeholder="Email"
            hasError={Boolean(errors?.email?.message)}
            onKeyDown={() => clearErrors()}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/,
                message: "• It must be in email format.",
              },
            })}
          />
          <AccentedText type={"error"} message={errors?.email?.message} />
          <Input
            type="text"
            placeholder="Username"
            hasError={Boolean(errors?.userName?.message)}
            onKeyDown={() => clearErrors()}
            {...register("userName", {
              required: "User name is required.",
              minLength: {
                value: 4,
                message: "• User name should be longer than 4 chars.",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message:
                  "• User name must contain only the alphabet and number.",
              },
            })}
          />
          <AccentedText type={"error"} message={errors?.userName?.message} />
          <Input
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
            {...register("password", { required: "Password is requried." })}
          />
          <Submit
            type="submit"
            value={loading ? "Loading..." : "Sign Up"}
            disabled={!isValid || loading}
          />
          <AccentedText type={"error"} message={errors?.error?.message} />
        </Form>
      </TopBox>
      <BottomBox>
        <span>Have an account?</span>
        <Link to={routes.signIn}>Log in</Link>
      </BottomBox>
    </AuthLayout>
  );
};

export default SignUp;
