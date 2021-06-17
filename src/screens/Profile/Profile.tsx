import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { PHOTO_FRAGMENT } from "../../fragments";

const SEE_PROFILE_QUERY = gql`
  query seeProfile($userName: String!) {
    seeProfile(userName: $userName) {
      id
      firstName
      lastName
      userName
      bio
      avatar
      photos {
        ...PhotoFragment
      }
      totalFollowings
      totalFollowers
      isMe
      isFollowing
    }
  }
  ${PHOTO_FRAGMENT}
`;

interface IProps {
  userName: string;
}

const Profile: React.FC = () => {
  const { userName } = useParams<IProps>();
  const { data } = useQuery(SEE_PROFILE_QUERY, {
    variables: {
      userName,
    },
  });
  console.log(data);
  return <>Profile</>;
};

export default Profile;
