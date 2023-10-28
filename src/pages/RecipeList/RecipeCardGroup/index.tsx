import { useMediaQuery } from "react-responsive";
import Grid from "../../../components/Grid";
import Pagination from "../../../components/Pagination";
import { PlusMinusIcon } from "../../../components/PlusMinuxIconProps";
import CropCard from "../RecipeCard";
import {
  AddCropButton,
  Container,
  GridContainer,
  IconContainer,
  PaginationContainer,
} from "./style";


const AddRecipeCardButton = () => {
  return (
    <a href="/cropsRegistration">
      <AddCropButton>      
        <IconContainer>
          <PlusMinusIcon toMinus={false} width={12} height={12} thickness={10} />
        </IconContainer>      
      </AddCropButton>
    </a>
  );
};

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
  const columns = isMobile || hasOnlyOneItem ? 2 : 4;

  return (
    <Container>
      <GridContainer>
        <Grid columns={columns} gap={32}>
          {values.map((data, index) => (
            <CropCard
              key={data.id}
              thumbnail={data.thumbnail}
              title={data.title}
              subtitle={data.subtitle}
              onClick={() => console.log("clicked " + index)}
            />
          ))}
        </Grid>
      </GridContainer>
      {/* // TODO: 모바일 화면에선 pagination 없애고 무한 스크롤? */}
      <PaginationContainer>
        <Pagination count={1} onPageClick={(index) => console.log(index)} />
      </PaginationContainer>
    </Container>
  );
};
export default RecipeCardGroup;
