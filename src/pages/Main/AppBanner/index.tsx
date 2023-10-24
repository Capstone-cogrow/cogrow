import { useState } from "react";
import Banner, { ImageFloat } from "../../../components/Banner";
import AppBannerImage from "../../../assets/images/phone.png";

type User = {
  name: string;
};

const AppBanner = () => {
  const [user, setUser] = useState<User>();
  return (
    <>
      <Banner
        image={AppBannerImage}
        imageFloat={ImageFloat.Left}
        imageWidth={250}
        title1="농작물 관리, 질병 진단, 나에 맞는 농작물 추천까지 모든 것을 한 곳에서!"
        title2=""
        summary=""
        explain=""
      />
      <Banner
        image={AppBannerImage}
        imageFloat={ImageFloat.Right}
        imageWidth={250}
        title1=""
        title2=""
        summary="농작물 사진을 코그로우에 업로드 해보세요. 사진 하나로 질병, 치료법을
        확인하고 맛있는 레시피까지 쉽게 찾을 수 있어요."
        explain=""
      />
    </>
  );
};

export default AppBanner;
