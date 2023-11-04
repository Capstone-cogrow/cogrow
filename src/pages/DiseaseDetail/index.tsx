import { useState } from "react";
import { Header } from "../../components/Header";
import MainTitle from "../../components/MainTitle";
import Footer from "../../components/Footer";
import DiseaseDetailContent from "./DiseaseDetailContent";

type User = {
  name: string;
};

const DiseaseDetail = () => {
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
      title="병해충 진단 결과"
      />

      <DiseaseDetailContent title={""} />

      <Footer/>
    </>
  );
};

export default DiseaseDetail;
