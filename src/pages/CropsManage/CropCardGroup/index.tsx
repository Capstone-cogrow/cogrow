import { useMediaQuery } from "react-responsive";
import Grid from "../../../components/Grid";
import Pagination from "../../../components/Pagination";
import { PlusMinusIcon } from "../../../components/PlusMinuxIconProps";
import CropCard from "../CropCard";
import {
  AddCropButton,
  Container,
  GridContainer,
  IconContainer,
  PaginationContainer,
} from "./style";


const AddCropCardButton = () => {
  return (
    <AddCropButton>
      <IconContainer>
        <PlusMinusIcon toMinus={false} width={12} height={12} thickness={10} />
      </IconContainer>
    </AddCropButton>
  );
};

type CropCardData = {
  id: number;
  thumbnail: string;
  title: string;
  subtitle: string;
};

interface CropCardGroupProps {
  values: CropCardData[];
}

const CropCardGroup = ({ values }: CropCardGroupProps) => {
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
          <AddCropCardButton />
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
export default CropCardGroup;
