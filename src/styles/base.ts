import styled from "styled-components";

export const BaseBox = styled.div`
  background-color: white;
  border: 1px solid gainsboro;
  border-radius: 3px;
`;

export const BaseCenterBox = styled(BaseBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HorizontalLine = styled.div`
  flex: auto;
  width: 100%;
  height: 1px;
  background-color: #9a9a9a;
`;
