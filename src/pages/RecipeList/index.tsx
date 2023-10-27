import { useState } from "react";
import { Header } from "../../components/Header";
import MainTitle from "../../components/MainTitle";
import Footer from "../../components/Footer";
import SearchContent from "./SearchContent";

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

      <MainTitle
      title="감자"
      />

      <SearchContent/>
      
      <Footer/>
    </>
  );
};

export default RecipeList;
