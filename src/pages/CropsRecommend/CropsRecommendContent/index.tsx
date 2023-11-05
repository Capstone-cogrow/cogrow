import {
  Section,
  LeftContainer,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  RightContainer,
  Title,
  CardContainer,
  Question,
  AnswerButton,
  WrapContainer,
  UL,
  LI,
  Button,
} from "./style";

export const ImageFloat = {
  Left: 0,
  Right: 1,
} as const;

interface MainTitleProps {  
  title: string;
}

const CropsRecommendContent = ({
  title,
}: MainTitleProps) => {


  return (
    <>
      <Section>
      <WrapContainer>
        <LeftContainer>
          <Image1></Image1>
        </LeftContainer>
        <RightContainer>
          <Title>평소 자신의 라이프 스타일에 적합한 답변을 골라주세요!</Title>
          <CardContainer>
            <Question>1. 당신의 생활 스타일은 어떤가요?</Question>
            <AnswerButton>바쁜 도시 생활</AnswerButton>
            <AnswerButton>조용한 시골 생활</AnswerButton>
          </CardContainer>
        </RightContainer>
      </WrapContainer>
      <WrapContainer>
        <LeftContainer>
          <Image2></Image2>
        </LeftContainer>
        <RightContainer>
          <Title>평소 자신의 라이프 스타일에 적합한 답변을 골라주세요!</Title>
          <CardContainer>
            <Question>2. 작물을 키우는 목표가 있나요?</Question>
            <UL>
              <LI><AnswerButton>식재</AnswerButton></LI>
              <LI><AnswerButton>취미</AnswerButton></LI>
            </UL>
            <UL>
              <LI><AnswerButton>장식</AnswerButton></LI>
              <LI><AnswerButton>연구</AnswerButton></LI>
            </UL>       
          </CardContainer>
        </RightContainer>
      </WrapContainer>
      <WrapContainer>
        <LeftContainer>
          <Image3></Image3>
        </LeftContainer>
        <RightContainer>
          <Title>평소 자신의 라이프 스타일에 적합한 답변을 골라주세요!</Title>
          <CardContainer>
            <Question>3. 작물을 얼마나 자주 관리할 수 있나요?</Question>
            <UL>
              <LI><AnswerButton>매일</AnswerButton></LI>
              <LI><AnswerButton>주간</AnswerButton></LI>
            </UL>
            <UL>
              <LI><AnswerButton>월간</AnswerButton></LI>
              <LI><AnswerButton>불규칙</AnswerButton></LI>
            </UL> 
          </CardContainer>
        </RightContainer>
      </WrapContainer>
      <WrapContainer>
        <LeftContainer>
          <Image4></Image4>
        </LeftContainer>
        <RightContainer>
          <Title>평소 자신의 라이프 스타일에 적합한 답변을 골라주세요!</Title>
          <CardContainer>
            <Question>4. 어떤 종류의 작물에 관심이 있나요?</Question>
            <UL>
              <LI><AnswerButton>채소</AnswerButton></LI>
              <LI><AnswerButton>과일</AnswerButton></LI>
            </UL>
            <UL>
              <LI><AnswerButton>꽃</AnswerButton></LI>
              <LI><AnswerButton>허브</AnswerButton></LI>
            </UL> 
          </CardContainer>
        </RightContainer>
      </WrapContainer>
      <WrapContainer>
        <LeftContainer>
          <Image5></Image5>
        </LeftContainer>
        <RightContainer>
          <Title>평소 자신의 라이프 스타일에 적합한 답변을 골라주세요!</Title>
          <CardContainer>
            <Question>5. 작물 재배 경험이 있나요?</Question>
            <AnswerButton>전혀 없음</AnswerButton>
            <AnswerButton>조금 있음</AnswerButton>
            <AnswerButton>많이 있음</AnswerButton>
          </CardContainer>
        </RightContainer>
      </WrapContainer>
      <a href="/cropsRecommendResult"><Button>결과보기</Button></a>
      </Section>
      
    </>
  );
};

export default CropsRecommendContent;
