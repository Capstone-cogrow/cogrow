import { useState } from "react";
import { Header } from "../../components/Header";
import MainTitle from "../../components/MainTitle";
import Footer from "../../components/Footer";
import CropsContentBanner from "./ContentBanner";

type User = {
  name: string;
};

const Crops = () => {
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
      title="농작물 관리"
      />

      <CropsContentBanner/>
      <Footer/>
    </>
  );
};

export default Crops;
