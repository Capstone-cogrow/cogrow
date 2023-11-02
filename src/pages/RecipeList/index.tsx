import { useEffect,useState } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import SearchContent from "./SearchContent";
import RecipeCardGroup from "./RecipeCardGroup";

import axios from 'axios';
const SERVER_URL = 'http://localhost:3000/api/recipe';

type User = {
  name: string;
};

const RecipeList = () => {
  const [user, setUser] = useState<User>();
  const [todoList, setTodoList] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);

    //fetch('http://localhost:3000/api/todo')
    //  .then((response) => response.json())
    //  .then((data) => setTodoList(data));
  };

  useEffect(() => {fetchData()}, []);

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
        values={[]}
      />

      <Footer/>
    </>
  );
};

export default RecipeList;