import { useState } from "react";
import { Header } from "../../components/Header";
import MainTitle from "../../components/MainTitle";
import Footer from "../../components/Footer";
import CropsDetailContent from "./CropsDetailContent";

type User = {
  name: string;
};

const CropsDetail = () => {
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
      title="내 작물 관리"
      />

      <CropsDetailContent title={""} />

      <Footer/>
    </>
  );
};

export default CropsDetail;
