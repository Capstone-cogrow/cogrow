import { useMediaQuery } from "react-responsive";
import {
  Section,
  FormSection,
  ButtonSection,
  ImgForm,
  ImageContainer,
  Image,
  InputImage,
  TextForm,
  Fieldset,
  Title,
  Input,
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

const AddCropsForm = ({
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
        <FormSection>
        <ImgForm>
        <ImageContainer>
          <Image src={imageSrc} />
        </ImageContainer>
        <InputImage 
            accept="image/*" 
            multiple type="file"
            onChange={e => onUpload(e)}
        />  
        </ImgForm>
         <TextForm>
            <Fieldset>
              <Title>이름</Title> <Input type="text" name="name" /> 
              <Title>종류</Title> <Input type="text" name="type"/>
              <Title>시작 날짜</Title> <Input type="text" name="date"/>
              <Title>키우는 장소</Title> <Input type="text" name="location"/>
              <Title>현재 상태</Title> <Input type="text" name="state"/>
            </Fieldset>           
        </TextForm>
        </FormSection>
        <ButtonSection>
        <Registor type="submit">등록하기</Registor>
        </ButtonSection>        
      </Section>
      
    </>
  );
};

export default AddCropsForm;
