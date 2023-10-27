import { useState } from "react";
import { Header } from "../../components/Header";
import MainTitle from "../../components/MainTitle";
import Footer from "../../components/Footer";
import DiseaseContent from "./DiseaseContent";

type User = {
  name: string;
};

const Disease = () => {
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
      title="병해충 진단"
      />

      <DiseaseContent title={""}/>

      <Footer/>
    </>
  );
};

export default Disease;
