import { useMediaQuery } from "react-responsive";
import {
  MainTitleContainer,
  H1Title,
} from "./style";

export const ImageFloat = {
  Left: 0,
  Right: 1,
} as const;

interface MainTitleProps {  
  title: string;
}

const MainTitle = ({
  title,
}: MainTitleProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
        <MainTitleContainer>
            <H1Title>{title}</H1Title>
          </MainTitleContainer>
      </>
  );
};

export default MainTitle;
