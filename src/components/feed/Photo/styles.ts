import styled from "styled-components";
import { BoldText } from "../../base";

export const Button = styled.button`
  cursor: pointer;
`;

export const Container = styled.div`
  max-width: 615px;
  background-color: ${(props) => props.theme.windowColor};
  border: 1px solid ${(props) => props.theme.borderColorLight};
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Author = styled(BoldText)`
  margin-left: 10px;
`;

export const Image = styled.div`
  img {
    width: 100%;
    height: 615px;
    object-fit: cover;
  }
`;

export const Footer = styled.div``;

export const ActionIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0;
`;

export const LikeCountContainer = styled.div`
  padding: 10px 10px 0;
`;

export const Likes = styled(BoldText)`
  display: block;
`;

export const CaptionContainer = styled.div`
  padding: 10px 10px 0;
`;

export const Caption = styled.div`
  line-height: 1.5;
  mark {
    color: ${(props) => props.theme.accent};
    background-color: inherit;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CaptionText = styled.span`
  margin-left: 5px;
`;

export const CommentCountContainer = styled.div`
  padding: 10px 10px 0;
`;

export const CommentCount = styled.span`
  display: block;
  font-size: 12px;
  color: ${(props) => props.theme.borderColorDark};
`;
