import React from "react";
import { Link } from "react-router-dom";
import { Container, Text, DeleteButton } from "./styles";
import { BoldText } from "../../base";
import { gql, useMutation } from "@apollo/client";
import { seeFeed_seeFeed_latestComments } from "../../../__generated__/seeFeed";

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
      error
    }
  }
`;

interface IProps {
  latestComments: seeFeed_seeFeed_latestComments | null;
  photoId: number;
}

const CommentItem: React.FC<IProps> = ({ latestComments, photoId }) => {
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      id: latestComments?.id,
    },
    update: (cache, result) => {
      const {
        data: {
          deleteComment: { ok },
        },
      } = result;
      if (ok) {
        cache.evict({
          id: `Comment:${latestComments?.id}`,
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
    <Container key={latestComments?.id}>
      <Link to={`/users/${latestComments?.user.userName}`}>
        <BoldText>{latestComments?.user.userName}</BoldText>
      </Link>
      <Text>{latestComments?.text}</Text>
      {latestComments?.isMine && (
        <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton>
      )}
    </Container>
  );
};

export default CommentItem;
