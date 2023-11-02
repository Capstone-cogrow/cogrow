import { useState } from "react";
import Banner, { ImageFloat } from "../../../components/Banner";
import ContentBannerImage1 from "../../../assets/images/mypage1.png";
import ContentBannerImage2 from "../../../assets/images/mypage2.png";
import {
    HeadContainer,
    HeadTitle,
  } from "./style";

type User = {
  name: string;
};

const ContentBanner = () => {
  const [user, setUser] = useState<User>();
  return (
    <>
      <HeadContainer>
        <HeadTitle>
            농작물, 한 번에 관리하기 어렵지 않았나요?
        </HeadTitle>
        <HeadTitle>
            모든 농작물을 편리하게 관리해보세요.
        </HeadTitle>
      </HeadContainer>
      <Banner
        image="https://github.com/YounJ00/YounJ00.github.io/assets/91127380/a07792f7-c3c5-428b-8f6d-19e56e9070ad"
        imageFloat={ImageFloat.Right}
        imageWidth={330}
        summary="질병 바로 진단"
        title1="검색하지 않아도"         
        title2="질병을 바로 알 수 있어요" 
        explain="질병 상태를 추적하고 증상의 원인을 빠르게 파악하여 필요한 조치를 취할 수 있습니다."      
      />
      <Banner
        image="https://github.com/YounJ00/YounJ00.github.io/assets/91127380/2f5f5cd0-190b-4004-8a83-f3456a01a5c5"
        imageFloat={ImageFloat.Left}
        imageWidth={330}
        summary="나만의 농작물 관리"
        title1="여러 개의 농작물도"  
        title2="간편하게 관리할 수 있어요"
        explain="다양한 종류의 농작물을 효과적으로 관리하고 감독할 수 있는 기능을 갖추고 있습니다."
      />
      <Banner
        image="https://github.com/YounJ00/YounJ00.github.io/assets/91127380/d96912fa-0a94-4138-ac3d-28390fb23e82"
        imageFloat={ImageFloat.Right}
        imageWidth={330}
        summary="오늘 무슨 요리하지?"
        title1="농작물과 관련한"  
        title2="레시피를 찾아볼 수 있어요"
        explain="다양한 요리 및 조리 레시피를 쉽게 검색해볼 수 있는 기능을 제공하고 있습니다."
      />
    </>
  );
};

export default ContentBanner;
