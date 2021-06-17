import React from "react";
import { seeFeed_seeFeed_comments } from "../../../__generated__/seeFeed";
import { CommentContainer, Form } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import useUser from "../../../hooks/useUser";
import CommentItem from "../CommentItem";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($photoId: Int!, $text: String!) {
    createComment(photoId: $photoId, text: $text) {
      ok
      error
      id
    }
  }
`;

interface IProps {
  photoId: number;
  comments: (seeFeed_seeFeed_comments | null)[] | null;
}

const CommentList: React.FC<IProps> = ({ photoId, comments }) => {
  const { data: userData } = useUser();
  const [createCommentMutation, { loading }] = useMutation(
    CREATE_COMMENT_MUTATION,
    {
      update: (cache, result) => {
        const {
          data: {
            createComment: { ok, id },
          },
        } = result;
        if (ok && userData?.me) {
          const { comment } = getValues();
          setValue("comment", "");
          const newComment = {
            __typename: "Comment",
            id,
            text: comment,
            isMine: true,
            createAt: Date.now(),
            user: {
              ...userData.me,
            },
          };
          const newCacheComment = cache.writeFragment({
            fragment: gql`
              fragment WriteComment on Comment {
                id
                text
                isMine
                createdAt
                user {
                  userName
                  avatar
                }
              }
            `,
            data: newComment,
          });
          cache.modify({
            id: `Photo:${photoId}`,
            fields: {
              comments(prev: any) {
                return [...prev, newCacheComment];
              },
            },
          });
        }
      },
    }
  );

  interface IForm {
    comment: string;
  }
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
    <>
      {comments?.length !== 0 && (
        <CommentContainer>
          {comments?.map((comment) => (
            <CommentItem comment={comment} key={comment?.id} />
          ))}
        </CommentContainer>
      )}
      <Form onSubmit={handleSubmit(onSubmitValid)}>
        <input
          type="text"
          placeholder="write a comment"
          {...register("comment", {
            required: true,
          })}
        />
      </Form>
    </>
  );
};

export default CommentList;
