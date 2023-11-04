import { useMediaQuery } from "react-responsive";
import {
  Section,
  DiseaseTitle,
  DiseaseSubTitle,
  LeftContainer,
  RightContainer,
  ImageContainer,
  Image,
  DiseaseResultText,
  Span,
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

const DiseaseDetailContent = ({
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
        <LeftContainer>
          <DiseaseResultText>진단 결과는 <Span>"감자 반점병"</Span> 입니다.</DiseaseResultText>
        <ImageContainer>          
          <Image/>
        </ImageContainer>        
        </LeftContainer>
        <RightContainer>
        <DiseaseTitle>증상 설명</DiseaseTitle>
        <DiseaseSubTitle>주로 잎에 흑갈색 반점이 생기고 점차 확대됩니다.
        발병 후기에는 병반 주위는 녹색, 병반이 생기지 않은 부위는 노란색으로 변하고, 병든 잎은 쉽게 낙엽이 됩니다.
        5월 하순에서 6월 상순에 병징이 나타나기 시작해 8월 이후 급증하며 9~10월까지 계속됩니다.
        </DiseaseSubTitle>
        
        <DiseaseTitle>발병 조건</DiseaseTitle>
        <DiseaseSubTitle>병든 잎에서 월동해 다음 해 1차 전염원이 되고, 공기 전염으로 포자가 확산됩니다. 포자는 5월에서 10월 사이에 비산되며, 8월에 가장 많습니다.
        여름철에 비가 많고 기온이 낮은 해에 발생이 많습니다
        배수가 불량하고, 밀식하며, 약제 살포량이 부족한 과원에서 주로 발병합니다.
        </DiseaseSubTitle>
        
        <DiseaseTitle>방제 방법</DiseaseTitle>
        <DiseaseSubTitle>배수 관리를 철저히 하며 전정을 통해 수관 내 통풍과 통광을 원활히 합니다,
        작물의 생육에 알맞게 고르게 시비합니다.
        병에 걸린 낙엽을 모아 태우거나 땅 속 깊이 묻어 월동 전염원을 제거합니다.
        한 번 발병하면 막기 어려우므로 예방적으로 방제하고, 초기 병반이 보이는 즉시 약제를 살포합니다.
        </DiseaseSubTitle>
        </RightContainer>
      </Section>
      
    </>
  );
};

export default DiseaseDetailContent;
