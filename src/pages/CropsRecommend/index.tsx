import { useState } from "react";
import { Header } from "../../components/Header";
import MainTitle from "../../components/MainTitle";
import Footer from "../../components/Footer";

type User = {
  name: string;
};

const CropsRecommend = () => {
  const [user, setUser] = useState<User>();

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: "함윤진" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <MainTitle
      title="작물 추천"
      />

      <Footer/>
    </>
  );
};

export default CropsRecommend;
