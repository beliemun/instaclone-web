import React from "react";
import {
  Container,
  Wapper,
  TopBox,
  BottomBox,
  SighUpText,
  Seperator,
  SeperatorText,
  FaceBookLogin,
  FaceBookText,
} from "./style";
import { HorizontalLine } from "../../components/Base";
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
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
        <Seperator>
          <HorizontalLine />
          <SeperatorText>OR</SeperatorText>
          <HorizontalLine />
        </Seperator>
        <FaceBookLogin>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size={"lg"}
            color="#395184"
          />
          <FaceBookText>Log in with Facebook</FaceBookText>
        </FaceBookLogin>
      </TopBox>
      <BottomBox>
        <span>Don`t have an account?</span>
        <SighUpText to="#">Sign up</SighUpText>
      </BottomBox>
    </Wapper>
  </Container>
);

export default Login;
