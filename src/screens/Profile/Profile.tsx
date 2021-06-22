import React from "react";
import { useParams } from "react-router-dom";
import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";
import { PHOTO_FRAGMENT } from "../../fragments";
import {
  Container,
  Wrapper,
  Header,
  Avatar,
  Details,
  UserName,
  ActivityInfo,
  InfoText,
  Introduce,
  Gallery,
  Photo,
  Curtain,
  PhotoDetail,
  DetailItem,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { seeProfile_seeProfile } from "../../__generated__/seeProfile";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../../components/shared/PageTitle";
import useUser from "../../hooks/useUser";

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
      totalFollowing
      totalFollowers
      totalPhotos
      isMe
      isFollowing
    }
  }
  ${PHOTO_FRAGMENT}
`;

const FOLLOW_USER_MUTATION = gql`
  mutation followUser($userName: String!) {
    followUser(userName: $userName) {
      ok
    }
  }
`;
const UNFOLLOW_USER_MUTATION = gql`
  mutation unfollowUser($userName: String!) {
    unfollowUser(userName: $userName) {
      ok
    }
  }
`;

interface IProps {
  userName: string;
}

const Profile: React.FC = () => {
  const { cache } = useApolloClient();
  const { userName } = useParams<IProps>();
  const { data, loading } = useQuery(SEE_PROFILE_QUERY, {
    variables: { userName },
  });
  const user = data?.seeProfile as seeProfile_seeProfile;
  const { data: loggedInUser } = useUser();

  const [followUser] = useMutation(FOLLOW_USER_MUTATION, {
    variables: {
      userName,
    },
    onCompleted: (data) => {
      const {
        followUser: { ok },
      } = data;
      if (!ok) {
        return;
      }
      cache.modify({
        id: `User:${userName}`,
        fields: {
          isFollowing(prev) {
            return true;
          },
          totalFollowers(prev) {
            return prev + 1;
          },
        },
      });
      cache.modify({
        id: `User:${loggedInUser?.me?.userName}`,
        fields: {
          totalFollowing(prev) {
            return prev + 1;
          },
        },
      });
    },
  });
  const [unfollowUser] = useMutation(UNFOLLOW_USER_MUTATION, {
    variables: {
      userName,
    },
    onCompleted: (data) => {
      const {
        unfollowUser: { ok },
      } = data;
      if (!ok) {
        return;
      }
      cache.modify({
        id: `User:${userName}`,
        fields: {
          isFollowing(prev) {
            return false;
          },
          totalFollowers(prev) {
            return prev - 1;
          },
        },
      });
      cache.modify({
        id: `User:${loggedInUser?.me?.userName}`,
        fields: {
          totalFollowing(prev) {
            return prev - 1;
          },
        },
      });
    },
  });

  const renderButton = () => {
    if (user?.isMe) {
      return <button>Edit Porofile</button>;
    } else {
      if (user?.isFollowing) {
        return <button onClick={() => unfollowUser()}>Unfollow</button>;
      } else {
        return <button onClick={() => followUser()}>Follow</button>;
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <PageTitle
          title={loading ? "Loading.." : `${user?.userName}'s Profile`}
        />
        <Header>
          <Avatar>
            <img src={user?.avatar ?? ""} alt="user avatar" />
          </Avatar>
          <Details>
            <UserName>
              {userName}
              {renderButton()}
            </UserName>
            <ActivityInfo>
              <InfoText>
                <span>{user?.totalPhotos}</span> Posts
              </InfoText>
              <InfoText>
                <span>{user?.totalFollowers}</span> followers
              </InfoText>
              <InfoText>
                <span>{user?.totalFollowing}</span> following
              </InfoText>
            </ActivityInfo>
            <Introduce>
              <span>{`${user?.lastName} ${user?.firstName}`}</span>
              <p>{user?.bio}</p>
            </Introduce>
          </Details>
        </Header>
      </Wrapper>
      <Gallery>
        {user?.photos?.map((photo) => (
          <Photo key={photo?.id} bgUrl={photo?.file ?? ""}>
            <Curtain>
              <PhotoDetail>
                <DetailItem>
                  <FontAwesomeIcon icon={faHeart} />
                  {photo?.likeCount}
                </DetailItem>
                <DetailItem>
                  <FontAwesomeIcon icon={faComment} />
                  {photo?.commentCount}
                </DetailItem>
              </PhotoDetail>
            </Curtain>
          </Photo>
        ))}
      </Gallery>
    </Container>
  );
};

export default Profile;
