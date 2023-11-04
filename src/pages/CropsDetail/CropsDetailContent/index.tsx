import { useMediaQuery } from "react-responsive";
import {
  Section,
  WrapContainer,
  LeftContainer,
  RightContainer,
  CropImage,
  CropTitleButton,
  UL,
  LITitle,
  LISubTitle,
} from "./style";
import { useEffect, useState } from "react";
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/crop';

export const ImageFloat = {
  Left: 0,
  Right: 1,
} as const;

interface MainTitleProps {  
  title: string;
}

const CropsDetailContent = ({
  title,
}: MainTitleProps) => {


  const [cropDetail, setCropDetail] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setCropDetail(response.data);

    //fetch('http://localhost:3000/api/todo')
    //  .then((response) => response.json())
    //  .then((data) => setTodoList(data));
  };

  useEffect(() => {fetchData()}, []);

  return (
    <>
      <Section>
        {cropDetail.map((data, index) => (
        <WrapContainer>
        <LeftContainer>
          <CropImage src={data.img_url}></CropImage>
          <CropTitleButton>{data.name}</CropTitleButton>
        </LeftContainer>
        
        <RightContainer>
          <UL>
            <LITitle>종류</LITitle>
            <LISubTitle>{data.type}</LISubTitle>
          </UL>
          <UL>
            <LITitle>키운 날짜</LITitle>
            <LISubTitle>{data.date}</LISubTitle>
          </UL>
          <UL>
            <LITitle>키우는 장소</LITitle>
            <LISubTitle>{data.location}</LISubTitle>
          </UL>
          <UL>
            <LITitle>현재 상태</LITitle>
            <LISubTitle>{data.state}</LISubTitle>
          </UL>
        </RightContainer>        
        </WrapContainer>
        ))}
      </Section>
      
    </>
  );
};

export default CropsDetailContent;
