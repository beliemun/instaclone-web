import React from "react";
import { Link } from "react-router-dom";
import { Container, Text, DeleteButton } from "./styles";
import { BoldText } from "../../base";
import { gql, useMutation } from "@apollo/client";
import { seeFeed_seeFeed_comments } from "../../../__generated__/seeFeed";

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
      error
    }
  }
`;

interface IProps {
  comments: seeFeed_seeFeed_comments | null;
  photoId: number;
}

const CommentItem: React.FC<IProps> = ({ comments, photoId }) => {
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      id: comments?.id,
    },
    update: (cache, result) => {
      const {
        data: {
          deleteComment: { ok },
        },
      } = result;
      if (ok) {
        cache.evict({
          id: `Comment:${comments?.id}`,
        });
        cache.modify({
          id: `Photo:${photoId}`,
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
    <Container key={comments?.id}>
      <Link to={`/users/${comments?.user.userName}`}>
        <BoldText>{comments?.user.userName}</BoldText>
      </Link>
      <Text>{comments?.text}</Text>
      {comments?.isMine && (
        <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton>
      )}
    </Container>
  );
};

export default CommentItem;
