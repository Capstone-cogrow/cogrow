import { useEffect,useState } from "react";
import { useMediaQuery } from "react-responsive";
import Grid from "../../../components/Grid";
import Pagination from "../../../components/Pagination";
import CropCard from "../RecipeCard";

import axios from 'axios';
import {
  AddCropButton,
  Container,
  GridContainer,
  IconContainer,
  PaginationContainer,
} from "./style";

const SERVER_URL = 'http://localhost:3000/api/recipe';

type RecipeCardData = {
  id: number;
  thumbnail: string;
  title: string;
  subtitle: string;
};

interface RecipeCardGroupProps {
  values: RecipeCardData[];
}

const RecipeCardGroup = ({ values }: RecipeCardGroupProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isAuthenticated = true;
  const hasOnlyOneItem = isAuthenticated
    ? values.length < 1
    : values.length < 4;
  const columns = isMobile || hasOnlyOneItem ? 4 : 4;

  const [recipeList, setRecipeList] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setRecipeList(response.data);

    //fetch('http://localhost:3000/api/todo')
    //  .then((response) => response.json())
    //  .then((data) => setTodoList(data));
  };

  useEffect(() => {fetchData()}, []);


  return (
    <>
    <Container>
      <GridContainer>
        <Grid columns={columns} gap={32}>
          {recipeList?.map((data, index) => (
            <a href={data.link}>
            <CropCard
              key={data.id}
              thumbnail={data.img_url}
              title={data.title}
              subtitle={data.sub_title}
              onClick={() => console.log("clicked " + index)}
            /></a>
          ))}
        </Grid>
      </GridContainer>
      {/* // TODO: 모바일 화면에선 pagination 없애고 무한 스크롤? */}
      <PaginationContainer>
        <Pagination count={1} onPageClick={(index) => console.log(index)} />
      </PaginationContainer>
    </Container>
    </>
  );
};
export default RecipeCardGroup;
