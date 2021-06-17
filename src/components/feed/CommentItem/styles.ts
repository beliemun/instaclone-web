import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.span`
  margin-left: 5px;
  line-height: 1.5;
`;

export const DeleteButton = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.borderColorDark};
  padding: 5px;
  cursor: pointer;
`;
