import styled from "styled-components";

export const CommentContainer = styled.div`
  padding: 10px;
`;

export const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-top: 1px solid ${(props) => props.theme.borderColorLight};
  padding: 15px;
  transition: all 0.5s ease-in-out;
  &:focus-within {
    border: 1px solid ${(props) => props.theme.accent};
    border-radius: 0 0 5px 5px;
  }
  input {
    width: 100%;
    &::placeholder {
      color: ${(props) => props.theme.borderColorDark};
    }
  }
`;
