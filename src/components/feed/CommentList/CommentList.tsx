import React from "react";
import { seeFeed_seeFeed_comments } from "../../../__generated__/seeFeed";
import { Container, CommentContainer, Form } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import useUser from "../../../hooks/useUser";
import CommentItem from "../CommentItem";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

interface IProps {
  photoId: number;
  comments: (seeFeed_seeFeed_comments | null)[] | null;
}

interface IForm {
  comment: string;
}

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($photoId: Int!, $text: String!) {
    createComment(photoId: $photoId, text: $text) {
      ok
      error
      id
    }
  }
`;

const CommentList: React.FC<IProps> = ({ photoId, comments }) => {
  const { data: userData } = useUser();
  const creaetCommentUpdate = (cache: any, result: any) => {
    const {
      data: {
        createComment: { ok, id },
      },
    } = result;
    if (ok && userData?.me) {
      const { comment } = getValues();
      setValue("comment", "");
      const newComment = {
        createAt: Date.now(),
        id,
        isMine: true,
        text: comment,
        user: {
          ...userData.me,
        },
      };
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          comments(prev: any) {
            return [...prev, newComment];
          },
          // 주석해도 카운트가 왜 올라기지?
          // commentCount(prev: any) {
          //   return prev + 1;
          // },
        },
      });
    }
  };

  const [createCommentMutation, { loading }] = useMutation(
    CREATE_COMMENT_MUTATION,
    { update: creaetCommentUpdate }
  );

  const { register, handleSubmit, setValue, getValues } = useForm<IForm>();
  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    const { comment } = data;
    if (loading) {
      return;
    }
    createCommentMutation({
      variables: {
        photoId,
        text: comment,
      },
    });
  };

  return (
    <Container>
      <CommentContainer>
        {comments?.map((comment) => (
          <CommentItem comment={comment} key={comment?.id} />
        ))}
      </CommentContainer>
      <Form onSubmit={handleSubmit(onSubmitValid)}>
        <input
          type="text"
          placeholder="write a comment"
          {...register("comment", {
            required: true,
          })}
        />
      </Form>
    </Container>
  );
};

export default CommentList;
