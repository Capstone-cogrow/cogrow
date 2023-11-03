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

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");

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
              <Title>이름</Title> <Input type="text" name="name" onChange={event => {setName(event.target.value);}} /> 
              <Title>종류</Title> <Input type="text" name="type" onChange={event => {setType(event.target.value);}} />
              <Title>시작 날짜</Title> <Input type="text" name="date" onChange={event => {setDate(event.target.value);}} />
              <Title>키우는 장소</Title> <Input type="text" name="location" onChange={event => {setLocation(event.target.value);}} />
              <Title>현재 상태</Title> <Input type="text" name="state" onChange={event => {setState(event.target.value);}} />
            </Fieldset>           
        </TextForm>
        </FormSection>
        <ButtonSection>
        <Registor type="submit" onClick={() => {
        const cropData = {
          cropName: name,
          cropType: type,
          cropDate: date,
          cropLocation: location,
          cropState: state,
        };
        fetch("http://localhost:5000/crop", { //auth 주소에서 받을 예정
          method: "POST", // method :통신방법
          headers: {      // headers: API 응답에 대한 정보를 담음
            "content-type": "application/json",
          },
          body: JSON.stringify(cropData), //userData라는 객체를 보냄
        })
        .then((res) => res.json())
        .then((json) => {
          if(json.isSuccess==="True"){
            alert('회원가입이 완료되었습니다!')
          }
          else{
            alert(json.isSuccess)
          }
        });
      }} >등록하기</Registor>
        </ButtonSection>        
      </Section>
      
    </>
  );
};

export default AddCropsForm;
