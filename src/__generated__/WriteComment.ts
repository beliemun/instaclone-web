/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WriteComment
// ====================================================

export interface WriteComment_user {
  __typename: "User";
  userName: string;
  avatar: string | null;
}

export interface WriteComment {
  __typename: "Comment";
  id: number;
  text: string;
  isMine: boolean;
  createdAt: string;
  user: WriteComment_user;
}
