import React from "react";
import { CommentContainer, Form } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import useUser from "../../../hooks/useUser";
import CommentItem from "../CommentItem";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { COMMENT_FRAGMENT } from "../../../fragments";
import { seeFeed_seeFeed_comments } from "../../../__generated__/seeFeed";

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
  const user = useUser();
  const [createCommentMutation, { loading }] = useMutation(
    CREATE_COMMENT_MUTATION,
    {
      update: (cache, result) => {
        const {
          data: {
            createComment: { ok, id },
          },
        } = result;
        if (ok && user.data?.me) {
          const text = getValues("comment");
          const newComment = {
            __typename: "Comment",
            id,
            text,
            isMine: true,
            createAt: Date.now(),
            user: { ...user.data.me },
          };
          const newCache = cache.writeFragment({
            id: `Comment:${id}`,
            fragment: COMMENT_FRAGMENT,
            fragmentName: "CommentFragment",
            data: newComment,
          });
          cache.modify({
            id: `Photo:${photoId}`,
            fields: {
              comments: () => newCache,
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
    const { comment: text } = data;
    if (loading) {
      return;
    }
    createCommentMutation({ variables: { photoId, text } });
    setValue("comment", "");
  };

  return (
    <>
      {comments?.length !== 0 && (
        <CommentContainer>
          {comments?.map((comment) => (
            <CommentItem
              comments={comment}
              photoId={photoId}
              key={comment?.id}
            />
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
