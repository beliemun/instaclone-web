import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  margin-bottom: 30px;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  margin-bottom: 20px;
  button {
    font-size: 15px;
    background-color: ${(props) => props.theme.windowColor};
    border: 1px solid ${(props) => props.theme.borderColorLight};
    border-radius: 5px;
    margin-left: 10px;
    padding: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.buttonTextColor};
      background-color: ${(props) => props.theme.accent};
      border-color: transparent;
    }
  }
`;

export const ActivityInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const InfoText = styled.div`
  font-size: 16px;
  span {
    font-weight: 900;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const Introduce = styled.div`
  span {
    font-size: 16px;
    font-weight: 900;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;
  }
`;

export const Gallery = styled.div`
  max-width: 930px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  @media (max-width: 930px) {
    gap: 5px;
  }
`;

export const Photo = styled.div<{ bgUrl: string }>`
  width: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  //반응형 정사각형 만들기
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const Curtain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

export const PhotoDetail = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const DetailItem = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 900;
  svg {
    margin-right: 5px;
  }
  &:first-child {
    margin-right: 20px;
  }
`;
