import { useState } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import SearchContent from "./SearchContent";
import RecipeCardGroup from "./RecipeCardGroup";
import RecipeListData from "../../../recipe_list";

type User = {
  name: string;
};

const RecipeList = () => {
  const [user, setUser] = useState<User>();

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: "함윤진" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <SearchContent/>

      <RecipeCardGroup     
        values={[
          {
            id: 0,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170405163827-XO2ST.jpg",
            subtitle: "맛있게 터지는 이 맛",
            title: "옥수수참치전",            
          },
          {
            id: 1,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170406154811-RU0QT.jpg",
            subtitle: "이건 피자가 아니무니다!",
            title: "고구마무스 닭가슴살볶음",  
          },
          {
            id: 2,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170407174204-410NS.jpg",
            subtitle: "전자레인지에 3분!",
            title: "양파콘치즈",  
          },
          {
            id: 3,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170411141301-Z4GCV.jpg",
            subtitle: "고소하고 식감이 살아 있는",
            title: "옥수수밥",  
          },
          {
            id: 4,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170417151051-JVEWH.jpg",
            subtitle: "톡톡 씹는 재미",
            title: "옥수수김밥",  
          },
          {
            id: 5,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170417170214-3TRZP.jpg",
            subtitle: "나른한 오후에 한입",
            title: "오레오고구마 치즈케이크",  
          },
          {
            id: 6,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170417235846-QHMAD.jpg",
            subtitle: "집에서도 리필을 외치다",
            title: "김치콘치즈",  
          },
          {
            id: 7,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170418150745-A862B.jpg",
            subtitle: "옥수수 맛의 진국",
            title: "옥수수 수프",  
          },
          {
            id: 8,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170418151100-C4D56.jpg",
            subtitle: "한여름밤 냉보리차보다 구수한",
            title: "옥수수 수염차",  
          },
          {
            id: 9,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170418151333-E96PB.jpg",
            subtitle: "버터옥수수의 변신은 무죄",
            title: "마약옥수수",  
          },

          {
            id: 10,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20170419174628-5I20G.jpg",
            subtitle: "모양도 맛도 귀여운",
            title: "마카로니 버무리",  
          },
          {
            id: 11,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20191212162049-FMPCS.jpg",
            subtitle: "콩으로 튀김반찬하기",
            title: "강낭콩옥수수튀김",  
          },
          {
            id: 12,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20210218115305-PXO97.jpg",
            subtitle: "비주얼 만점",
            title: "트리플 콘치즈 떡볶이",  
          },
          {
            id: 13,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20210308173033-M31PU.jpg",
            subtitle: "천 겹의 잎사귀",
            title: "옥수수 커스터드 밀푀유",  
          },
          {
            id: 14,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20210713134450-ZWFQJ.jpg",
            subtitle: "오독오독 영양 가득한",
            title: "견과류샐러드",  
          },
          {
            id: 15,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20210810162623-KXWRT.jpg",
            subtitle: "여름의 끝자락에 맛보는",
            title: "채소 솥밥",  
          },
          {
            id: 16,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20210923155900-AL0JI.jpg",
            subtitle: "여유 있는 주말 오후엔",
            title: "귤찹쌀떡",  
          },
          {
            id: 17,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20210923170425-BIXZO.jpg",
            subtitle: "오순도순 굽는 재미",
            title: "꼬치 3종",  
          },
          {
            id: 18,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20210923173916-45CIV.jpg",
            subtitle: "구수한 어른의 맛",
            title: "단호박파이",  
          },
          {
            id: 19,
            thumbnail: "https://www.2bob.co.kr/" + "data/recipe/20211007145002-G9H7E.jpg",
            subtitle: "쭉~ 늘어나는 고소함",
            title: "콘치즈 만두",  
          },
        ]}
      />

      <Footer/>
    </>
  );
};

export default RecipeList;