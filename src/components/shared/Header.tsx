import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCompass, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../../apollo";
import { routes } from "../../routes";
import useUser from "../../hooks/useUser";
import Avatar from "./Avatar";
import { Button } from "../base";
import { Icon } from "../base/Base";

const Container = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.windowColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColorLight};
  z-index: 10;
`;

const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Header: React.FC = ({ children }) => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useUser();
  return (
    <Container>
      <Wrapper>
        <Column>
          <Icon to={routes.home}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Icon>
        </Column>
        <Column>
          {isLoggedIn ? (
            <>
              <Icon to={routes.home}>
                <FontAwesomeIcon icon={faHome} size="lg" />
              </Icon>
              <Icon to="#">
                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              </Icon>
              <Icon to="#">
                <FontAwesomeIcon icon={faCompass} size="lg" />
              </Icon>
              <Icon to={`/users/${data?.me?.userName}`}>
                <Avatar url={data?.me?.avatar} size={24} />
              </Icon>
            </>
          ) : (
            <Link to={routes.home}>
              <Button>Log In</Button>
            </Link>
          )}
        </Column>
      </Wrapper>
    </Container>
  );
};

export default Header;
