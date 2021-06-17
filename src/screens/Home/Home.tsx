import React from "react";
import { Container } from "./styles";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { singOut } from "../../apollo";
import { Button } from "../../components/base";
import { seeFeed } from "../../__generated__/seeFeed";
import Photo from "../../components/feed/Photo";
import PageTitle from "../../components/shared/PageTitle";
import {
  COMMENT_FRAGMENT,
  PHOTO_FRAGMENT,
  USER_FRAGMENT,
} from "../../fragments";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
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
  ${COMMENT_FRAGMENT}
  ${PHOTO_FRAGMENT}
`;

const Home: React.FC = () => {
  const { data } = useQuery<seeFeed>(FEED_QUERY);
  return (
    <Container>
      <PageTitle title={"Home"} />
      {data?.seeFeed?.map((photo) => (
        <Photo photo={photo} key={photo.id} />
      ))}
      <Button onClick={() => singOut()}>Log out</Button>
    </Container>
  );
};

export default Home;
