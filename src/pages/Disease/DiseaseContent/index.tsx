import { useMediaQuery } from "react-responsive";
import {
  Section,
  TopSection,
  BottomSection,
  LeftContainer,
  HeadTitle,
  ImageContainer,
  ButtonContainer,
  Add,
  Delete,
  RightContainer,
  ImgTip,
  Registor,
} from "./style";

export const ImageFloat = {
  Left: 0,
  Right: 1,
} as const;

interface MainTitleProps {  
  title: string;
}

const DiseaseContent = ({
  title,
}: MainTitleProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <Section>
        <TopSection>
        <LeftContainer>
        <HeadTitle>나의 작물 진단</HeadTitle>
        <ImageContainer>upload image        
        </ImageContainer>
        <ButtonContainer>
        <Add type="submit">등록</Add>
        <Delete type="submit">삭제</Delete>
        </ButtonContainer>
        </LeftContainer>

         <RightContainer>    
         <HeadTitle>사진 Tip</HeadTitle>   
         <ImgTip/>   
        </RightContainer>
        </TopSection>
        
        <BottomSection>
        <Registor type="submit">진단하기</Registor>
        </BottomSection>        
      </Section>
      
    </>
  );
};

export default DiseaseContent;
