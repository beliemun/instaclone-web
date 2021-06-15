import React from "react";
import {
  Container,
  Header,
  Name,
  PhotoFile,
  Footer,
  PhtoActions,
  Likes,
  Button,
  Caption,
  CaptionText,
  Comments,
  CommentCount,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSoild } from "@fortawesome/free-solid-svg-icons";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { seeFeed_seeFeed } from "../../../__generated__/seeFeed";
import { BoldText, Icon, Link } from "../../base";
import Avatar from "../../shared/Avatar";
import Comment from "../Comment";

interface IProps {
  photo: seeFeed_seeFeed;
}

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

const Photo: React.FC<IProps> = ({ photo }) => {
  const {
    id,
    user,
    file,
    caption,
    likes,
    comments,
    commentCount,
    isMine,
    isLiked,
  } = photo;

  const updateToggleLike = (cache: any, result: any) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;
    if (ok) {
      cache.writeFragment({
        id: `Photo:${id}`,
        fragment: gql`
          fragment ISLIKED on Photo {
            isLiked
            likes
          }
        `,
        data: {
          isLiked: !isLiked,
          likes: isLiked ? likes - 1 : likes + 1,
        },
      });
    }
  };

  const [toogleLike, { loading }] = useMutation(TOGGLE_LIKE_MUTATION, {
    variables: {
      id,
    },
    update: updateToggleLike,
    // refetchQueries: [{ query: FEED_QUERY }],
    // apollo가 data를 fetch해서 바뀐 cache부분을 확인해서 update한다.
    // 하지만 실시간 처리 및 큰 쿼리인 경우 쿼리 전체를 타겟으로 하는 것은 좋지 않다.
  });

  const remakeCaption = (text: string) => {
    let origin = text.replaceAll("#", " #").replaceAll("  ", " ").trim();
    const rgx = /#[a-zA-Z가-힣\u0E00-\u0E7Fぁ-んァ-ヾ一-龯a-záéíóúüñç]+/;
    const result = origin.split(" ").map((word, index) => {
      if (rgx.test(word)) {
        const obj = word.match(rgx) ?? [];
        // 해시태그가 정규표현식에 완전히 일치할 경우
        if (obj[0] === word) {
          return (
            <Link key={index} to={`/hashtags/${word}`}>
              {`${word} `}
            </Link>
          );
          // 정규표현식에 일치하지 않는 문자 포함 시
        } else {
          const rest = word.replace(obj[0], "");
          return (
            <React.Fragment key={index}>
              <Link to={`/hashtags/${obj[0]}`}>{obj[0]}</Link>
              {`${rest} `}
            </React.Fragment>
          );
        }
      } else {
        return <React.Fragment key={index}>{`${word} `}</React.Fragment>;
      }
    });
    return result;
  };

  return (
    <Container>
      <Header>
        <Avatar url={user.avatar ?? ""} size={32} />
        <Name>{user.userName}</Name>
      </Header>
      <PhotoFile>
        <img src={file} alt={caption ?? "picture"} />
      </PhotoFile>
      <Footer>
        <PhtoActions>
          <div>
            <Button onClick={() => toogleLike()}>
              <FontAwesomeIcon
                style={{ color: isLiked ? "tomato" : "inherit" }}
                icon={isLiked ? faHeartSoild : faHeart}
                size={"lg"}
              />
            </Button>
            <Icon to="">
              <FontAwesomeIcon icon={faComment} size={"lg"} />
            </Icon>
            <Icon to="">
              <FontAwesomeIcon icon={faPaperPlane} size={"lg"} />
            </Icon>
          </div>
          <div>
            <Icon to="">
              <FontAwesomeIcon icon={faBookmark} size={"lg"} />
            </Icon>
          </div>
        </PhtoActions>
        {likes !== 0 && (
          <Likes>
            {likes}
            {likes === 1 ? " like" : " likes"}
          </Likes>
        )}
        {caption && (
          <Caption>
            <BoldText>{user.userName}</BoldText>
            <CaptionText>{remakeCaption(caption)}</CaptionText>
            {/* <CaptionText>{caption}</CaptionText> */}
          </Caption>
        )}
        {commentCount !== 0 && (
          <CommentCount>
            {commentCount}
            {commentCount === 1 ? " comment" : " comments"}
          </CommentCount>
        )}
        <Comments>
          {comments?.map((comment) => (
            <Comment comment={comment} key={comment?.id} />
          ))}
        </Comments>
      </Footer>
    </Container>
  );
};

export default Photo;