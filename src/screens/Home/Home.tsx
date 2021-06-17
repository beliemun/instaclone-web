import React from "react";
import { Container } from "./styles";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { singOut } from "../../apollo";
import { Button } from "../../components/base";
import { seeFeed } from "../../__generated__/seeFeed";
import Photo from "../../components/feed/Photo";
import PageTitle from "../../components/shared/PageTitle";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        userName
        avatar
      }
      file
      caption
      likeCount
      comments {
        id
        user {
          userName
          avatar
        }
        photo {
          id
        }
        text
        isMine
        createdAt
      }
      commentCount
      createdAt
      isMine
      isLiked
    }
  }
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
