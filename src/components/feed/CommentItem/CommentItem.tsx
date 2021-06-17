import React from "react";
import { Container, Text, DeleteButton } from "./styles";
import { seeFeed_seeFeed_comments } from "../../../__generated__/seeFeed";
import { BoldText } from "../../base";
import { gql, useMutation } from "@apollo/client";

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
      error
    }
  }
`;

interface IProps {
  comment: seeFeed_seeFeed_comments | null;
}

const CommentItem: React.FC<IProps> = ({ comment }) => {
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      id: comment?.id,
    },
    update: (cache, result) => {
      const {
        data: {
          deleteComment: { ok },
        },
      } = result;
      if (ok) {
        cache.evict({
          id: `Comment:${comment?.id}`,
        });
        cache.modify({
          id: `Photo:${comment?.photo.id}`,
          fields: {
            commentCount(prev) {
              return prev - 1;
            },
          },
        });
      }
    },
  });
  const onDeleteClick = () => {
    deleteCommentMutation();
  };
  return (
    <Container key={comment?.id}>
      <BoldText>{comment?.user.userName}</BoldText>
      <Text>{comment?.text}</Text>
      {comment?.isMine && (
        <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton>
      )}
    </Container>
  );
};

export default CommentItem;
