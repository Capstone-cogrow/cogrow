import { useMediaQuery } from "react-responsive";
import {
  BannerImage,
  BannerTextContainer,
  Container,
  Section,
  Summary,
  Title,
  Explain,
} from "./style";

export const ImageFloat = {
  Left: 0,
  Right: 1,
} as const;

interface BannerProps {
  image: string;
  imageFloat?: number;
  imageWidth?: number;
  imageHeight?: number;
  title1: string;
  title2: string;
  summary: string;
  explain: string;
}

const Banner = ({
  image,
  imageFloat,
  imageWidth,
  imageHeight,
  title1,
  title2,
  summary,
  explain,
}: BannerProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = !isMobile;
  let content = <></>;

  if (isDesktop) {
    if (imageFloat === ImageFloat.Left) {
      content = (
        <>
          <BannerImage src={image} width={imageWidth} height={imageHeight} />
          <BannerTextContainer>
            <Summary align="left">{summary}</Summary>
            <Title align="left">{title1}</Title>
            <Title align="left">{title2}</Title> 
            <Explain align="left">{explain}</Explain>               
          </BannerTextContainer>
        </>
      );
    } else if (imageFloat === ImageFloat.Right) {
      content = (
        <>
          <BannerTextContainer>
            <Summary align="left">{summary}</Summary>
            <Title align="left">{title1}</Title> 
            <Title align="left">{title2}</Title> 
            <Explain align="left">{explain}</Explain>               
          </BannerTextContainer>
          <BannerImage src={image} width={imageWidth} height={imageHeight} />
        </>
      );
    }
  } else if (isMobile) {
    content = (
      <>
        <BannerImage src={image} width={imageWidth} height={imageHeight} />
        <BannerTextContainer>
          <Summary align="center">{summary}</Summary>
          <Title align="center">{title1}</Title>
          <Title align="center">{title2}</Title>    
          <Explain align="center">{explain}</Explain>
        </BannerTextContainer>
      </>
    );
  }

  return (
    <Section isMobile={isMobile}>
      <Container isMobile={isMobile}>{content}</Container>
    </Section>
  );
};

export default Banner;
