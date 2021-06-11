import { useReactiveVar } from "@apollo/client";
import { faEye as lightIcon } from "@fortawesome/free-solid-svg-icons";
import { faEye as darkIcon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { disableDarkMode, enableDarkMode, isDarkModeVar } from "../../apollo";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DarkModeButton = styled.button`
  padding: 10px;
  cursor: pointer;
`;

const AuthLayout: React.FC = ({ children }) => {
  const darkMode = useReactiveVar(isDarkModeVar);
  return (
    <Container>
      <Wapper>{children}</Wapper>
      <Footer>
        <DarkModeButton>
          <FontAwesomeIcon
            onClick={darkMode ? disableDarkMode : enableDarkMode}
            icon={darkMode ? lightIcon : darkIcon}
          />
        </DarkModeButton>
      </Footer>
    </Container>
  );
};

export default AuthLayout;
