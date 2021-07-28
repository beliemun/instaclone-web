/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeFeed
// ====================================================

export interface seeFeed_seeFeed_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
  isFollowing: boolean;
  isMe: boolean;
}

export interface seeFeed_seeFeed_latestComments_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
  isFollowing: boolean;
  isMe: boolean;
}

export interface seeFeed_seeFeed_latestComments {
  __typename: "Comment";
  id: number;
  user: seeFeed_seeFeed_latestComments_user;
  text: string;
  isMine: boolean;
  createdAt: string;
}

export interface seeFeed_seeFeed {
  __typename: "Photo";
  id: number;
  file: string;
  caption: string | null;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  createdAt: string;
  isMine: boolean;
  user: seeFeed_seeFeed_user;
  latestComments: seeFeed_seeFeed_latestComments[] | null;
}

export interface seeFeed {
  seeFeed: seeFeed_seeFeed[] | null;
}
