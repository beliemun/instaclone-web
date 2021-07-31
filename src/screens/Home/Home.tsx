import React from "react";
import { Container } from "./styles";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { seeFeed } from "../../__generated__/seeFeed";
import Photo from "../../components/feed/Photo";
import PageTitle from "../../components/shared/PageTitle";
import {
  COMMENT_FRAGMENT,
  PHOTO_FRAGMENT,
  USER_FRAGMENT,
} from "../../fragments";

const FEED_QUERY = gql`
  query seeFeed($offset: Int!) {
    seeFeed(offset: $offset) {
      ...PhotoFragment
      user {
        ...UserFragment
      }
      comments {
        ...CommentFragment
      }
    }
  }
  ${USER_FRAGMENT}
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

const Home: React.FC = () => {
  const { data } = useQuery<seeFeed>(FEED_QUERY, {
    variables: {
      offset: 0,
    },
  });

  return (
    <Container>
      <PageTitle title={"Home"} />
      {data?.seeFeed?.map((photo) => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </Container>
  );
};

export default Home;
