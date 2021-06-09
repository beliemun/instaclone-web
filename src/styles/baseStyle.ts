import styled from "styled-components";

export const BaseBoxStyle = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColorLight};
  border-radius: 5px;
`;

export const BaseCenterBoxStyle = styled(BaseBoxStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
