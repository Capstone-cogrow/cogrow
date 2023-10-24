import { useMediaQuery } from "react-responsive";
import {
  BannerImage,
  BannerTextContainer,
  Container,
  Section,
  Summary,
  Title,
  ButtonContainer,
  Button1,
  Button2,
} from "./style";

export const ImageFloat = {
  Left: 0,
  Right: 1,
} as const;

interface MainBannerProps {
  image: string;
  imageFloat?: number;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  summary: string;
}

const MainBanner = ({
  image,
  imageFloat,
  imageWidth,
  imageHeight,
  title,
  summary,
}: MainBannerProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = !isMobile;
  let content = <></>;

  if (isDesktop) {
    if (imageFloat === ImageFloat.Left) {
      content = (
        <>
          <BannerImage src={image} width={imageWidth} height={imageHeight} />
          <BannerTextContainer>
            <Title align="left">{title}</Title>
            <Summary align="left">{summary}</Summary>
          </BannerTextContainer>
        </>
      );
    } else if (imageFloat === ImageFloat.Right) {
      content = (
        <>
          <BannerTextContainer>
            <Title align="left">{title}</Title>
            <Summary align="left">{summary}</Summary>
            <ButtonContainer>
              <Button1>코그로우 소개</Button1>
              <Button2>진단하러 가기</Button2>
            </ButtonContainer>
          </BannerTextContainer>
          <BannerImage src={image} width={imageWidth} height={imageHeight} />
        </>
      );
    }
  } else if (isMobile) {
    content = (
      <>
        <BannerTextContainer>
          <Title align="center">{title}</Title>
          <Summary align="center">{summary}</Summary>
          <ButtonContainer>
              <Button1>코그로우 소개</Button1>
              <Button2>진단하러 가기</Button2>
            </ButtonContainer>
        </BannerTextContainer>
        <BannerImage src={image} width={imageWidth} height={imageHeight} />
      </>
    );
  }

  return (
    <Section isMobile={isMobile}>
      <Container isMobile={isMobile}>{content}</Container>
    </Section>
  );
};

export default MainBanner;
