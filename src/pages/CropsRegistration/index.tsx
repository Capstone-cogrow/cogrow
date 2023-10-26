import { useState } from "react";
import { Header } from "../../components/Header";
import MainTitle from "../../components/MainTitle";
import Footer from "../../components/Footer";
import AddCropsForm from "./AddCropsForm";

type User = {
  name: string;
};

const CropsRegistration = () => {
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
      title="농작물 등록"
      />

      <AddCropsForm
        title="웅"
      />

      <Footer/>
    </>
  );
};

export default CropsRegistration;
