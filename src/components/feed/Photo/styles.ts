import styled from "styled-components";
import { BoldText } from "../../base";

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

export const Name = styled(BoldText)`
  margin-left: 10px;
`;

export const PhotoFile = styled.div`
  img {
    width: 100%;
    height: 615px;
    object-fit: cover;
  }
`;

export const Footer = styled.div`
  padding: 10px;
`;

export const PhtoActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Likes = styled(BoldText)`
  display: block;
  margin-top: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Caption = styled.div`
  margin-top: 10px;
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

export const Comments = styled.div`
  margin-top: 10px;
`;

export const CommentCount = styled.span`
  display: block;
  font-size: 12px;
  color: ${(props) => props.theme.borderColorDark};
  margin-top: 10px;
`;
