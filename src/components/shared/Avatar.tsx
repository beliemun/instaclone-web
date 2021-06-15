import React from "react";
import styled from "styled-components";

interface IStyledProps {
  size: number;
}

interface IProps extends IStyledProps {
  url: string;
}

const Container = styled.div<IStyledProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.borderColorDark};
  overflow: hidden;

  img {
    max-width: 100%;
  }
`;

const Avatar: React.FC<IProps> = ({ url = "", size = 24 }) => {
  return (
    <Container size={size}>
      {url === "" ? null : <img src={url} alt="avatar" />}
    </Container>
  );
};

export default Avatar;
