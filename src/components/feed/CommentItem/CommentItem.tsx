import React from "react";
import { Container, Text } from "./styles";
import { seeFeed_seeFeed_comments } from "../../../__generated__/seeFeed";
import { BoldText } from "../../base";

interface IProps {
  comment: seeFeed_seeFeed_comments | null;
}

const CommentItem: React.FC<IProps> = ({ comment }) => {
  return (
    <Container key={comment?.id}>
      <BoldText>{comment?.user.userName}</BoldText>
      <Text>{comment?.text}</Text>
    </Container>
  );
};

export default CommentItem;
