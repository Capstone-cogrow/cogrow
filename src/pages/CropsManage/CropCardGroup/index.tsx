import { useMediaQuery } from "react-responsive";
import Grid from "../../../components/Grid";
import Pagination from "../../../components/Pagination";
import { PlusMinusIcon } from "../../../components/PlusMinuxIconProps";
import CropCard from "../CropCard";

import axios from 'axios';

import {
  AddCropButton,
  Container,
  GridContainer,
  IconContainer,
  PaginationContainer,
} from "./style";
import { useEffect, useState } from "react";

const SERVER_URL = 'http://localhost:5000/crop';

const AddCropCardButton = () => {
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

  const [cropList, setCropList] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setCropList(response.data);

    //fetch('http://localhost:3000/api/todo')
    //  .then((response) => response.json())
    //  .then((data) => setTodoList(data));
  };

  useEffect(() => {fetchData()}, []);

  return (
    <Container>
      <GridContainer>
        <Grid columns={columns} gap={32}>
          <AddCropCardButton />
          {cropList.map((data, index) => (
            <CropCard
              key={data.id}
              thumbnail={data.img_url}
              title={data.name}
              subtitle={data.type}
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
