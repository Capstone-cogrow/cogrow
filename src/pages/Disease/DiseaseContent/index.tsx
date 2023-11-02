import { useMediaQuery } from "react-responsive";
import {
  Section,
  TopSection,
  BottomSection,
  LeftContainer,
  HeadTitle,
  ImageContainer,
  Image,
  Input,
  ButtonContainer,
  Add,
  Delete,
  RightContainer,
  ImgTip,
  Registor,
} from "./style";
import { useState } from "react";

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

  const [imageSrc, setImageSrc]: any = useState(null);

  const onUpload = (e: any) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise<void>((resolve) => { 
          reader.onload = () => {	
              setImageSrc(reader.result || null); // 파일의 컨텐츠
              resolve();
          };
      });
  }

  return (
    <>
      <Section>
        <TopSection>
        <LeftContainer>
        <HeadTitle>나의 작물 진단</HeadTitle>
        <ImageContainer>
          <Image src={imageSrc} />
        </ImageContainer>
        <Input 
            accept="image/*" 
            multiple type="file"
            onChange={e => onUpload(e)}
        />        
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
