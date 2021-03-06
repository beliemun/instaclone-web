import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Author,
  Image,
  Footer,
  ActionIcons,
  Likes,
  Caption,
  CaptionText,
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
import { useMutation } from "@apollo/client";
import { seeFeed_seeFeed } from "../../../__generated__/seeFeed";
import { BoldText, Icon, BaseLink } from "../../base";
import Avatar from "../../shared/Avatar";
import gql from "graphql-tag";
import CommentList from "../CommentList";

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

interface IProps {
  photo: seeFeed_seeFeed;
}

const Photo: React.FC<IProps> = ({ photo }) => {
  const {
    id,
    user,
    file,
    caption,
    likeCount,
    comments,
    commentCount,
    // isMine,
    isLiked,
  } = photo;

  const [toogleLike] = useMutation(TOGGLE_LIKE_MUTATION, {
    variables: {
      id,
    },
    update: (cache: any, result: any) => {
      const {
        data: {
          toggleLike: { ok },
        },
      } = result;
      if (ok) {
        cache.modify({
          id: `Photo:${id}`,
          fields: {
            isLiked(prev: any) {
              return !prev;
            },
            likeCount(prev: any) {
              return isLiked ? prev - 1 : prev + 1;
            },
          },
        });
      }
    },
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
        // 해시태그가 정규표현식에 완전히 일치할 경우.
        // 예) #天気 #ビスを展開
        if (obj[0] === word) {
          return (
            <BaseLink key={index} to={`/hashtags/${word}`}>
              {`${word} `}
            </BaseLink>
          );
          // 정규표현식에 일치하지 않는 문자 포함 시
          // 예) #天気、 #スポーツ?? #ビスを展開。
        } else {
          const rest = word.replace(obj[0], "");
          return (
            <React.Fragment key={index}>
              <BaseLink to={`/hashtags/${obj[0]}`}>{obj[0]}</BaseLink>
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
        <Link to={`/users/${user.userName}`}>
          <Avatar url={user.avatar ?? ""} size={32} />
        </Link>
        <Link to={`/users/${user.userName}`}>
          <Author>{user.userName}</Author>
        </Link>
      </Header>
      <Image>
        <img src={file} alt={caption ?? "picture"} />
      </Image>
      <Footer>
        <ActionIcons>
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
        </ActionIcons>
        {likeCount !== 0 && (
          <Likes>
            {likeCount}
            {likeCount === 1 ? " like" : " likes"}
          </Likes>
        )}
        {caption && (
          <Caption>
            <Link to={`/users/${user.userName}`}>
              <BoldText>{user.userName}</BoldText>
            </Link>
            <CaptionText>{remakeCaption(caption)}</CaptionText>
          </Caption>
        )}
        {commentCount !== 0 && (
          <CommentCount>
            {commentCount}
            {commentCount === 1 ? " comment" : " comments"}
          </CommentCount>
        )}
        <CommentList photoId={id} comments={comments} />
      </Footer>
    </Container>
  );
};

export default Photo;
