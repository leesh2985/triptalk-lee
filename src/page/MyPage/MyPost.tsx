import styled from 'styled-components';
import formatDate from '../../utils/formatDate';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsFillSuitHeartFill } from 'react-icons/bs';

interface Post {
  id: number;
  thumbnail: string;
  title: string;
  createAt: number;
  likeCount: number;
  views: number;
  plannerId: number;
}

export default function MyPost({ postsData }: { postsData: Post }) {
  return (
    <BoxWrap>
      <Link to={`/page/${postsData.plannerId}`}>
        <Box>
          <ImgDiv>
            <TextImg src={postsData.thumbnail} alt="첫번째 이미지" />
          </ImgDiv>
          <Info>
            <TopContainer>
              <IconWithCount>
                <Heart />
                <Count>{postsData.likeCount}</Count>
              </IconWithCount>
              <IconWithCount>
                <LookUp />
                <Count>{postsData.views}</Count>
              </IconWithCount>
            </TopContainer>
            <TitleText>{postsData.title}</TitleText>
            <DateText>{formatDate(postsData.createAt)}</DateText>
          </Info>
        </Box>
      </Link>
    </BoxWrap>
  );
}

const BoxWrap = styled.div`
  margin-right: 64px;
  margin-bottom: 64px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  @media (max-width: 1000px) {
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 790px) {
    &:nth-child(1n) {
      margin-right: 64px;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 740px) {
    &:nth-child(1n) {
      margin-right: 34px;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  width: 275px;
  height: 350px;
`;

const TextImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 30px;
  border-radius: 15px;
`;

const Info = styled.div`
  color: #fff;
  position: absolute;
  border-radius: 15px;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.35s ease-in-out;

  ${Box}:hover & {
    opacity: 1;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const IconWithCount = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Count = styled.div`
  margin-left: 5px;
`;

const Heart = styled(BsFillSuitHeartFill)`
  width: 30px;
  height: 30px;
`;

const LookUp = styled(BsEyeFill)`
  width: 30px;
  height: 30px;
`;

const TitleText = styled.h2`
  margin-top: 10%;
  font-size: 30px;
`;

const DateText = styled.p`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;
