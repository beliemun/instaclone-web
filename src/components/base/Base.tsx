import { Link as ReactRouteLink } from "react-router-dom";
import styled from "styled-components";

export const BaseBox = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColorLight};
  border-radius: 5px;
`;

export const BaseCenterBox = styled(BaseBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.borderColorLight};
`;

export const Link = styled(ReactRouteLink)`
  color: #0597f6;
  font-weight: 600;
  margin: 5px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.hover};
  }
`;

export const Icon = styled(ReactRouteLink)`
  color: ${(props) => props.theme.color};
  &:not(:first-child) {
    margin-left: 15px;
  }
`;

export const Button = styled.button`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.buttonTextColor};
  background-color: ${(props) => props.theme.accent};
  border-radius: 3px;
  padding: 6px 10px;
  cursor: pointer;
`;

export const BoldText = styled.span`
  font-weight: 900;
`;
