import { useMediaQuery } from "react-responsive";
import {
  Section,
  FormSection,
  ButtonSection,
  ImgForm,
  ImageContainer,
  ButtonContainer,
  Add,
  Delete,
  TextForm,
  Fieldset,
  Title,
  Input,
  Registor,
  Br,
} from "./style";

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
  return (
    <>
      <Section>
        <FormSection>
        <ImgForm>
        <ImageContainer>upload image        
        </ImageContainer>
        <ButtonContainer>
        <Add type="submit">추가</Add>
        <Delete type="submit">삭제</Delete>
        </ButtonContainer>
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
