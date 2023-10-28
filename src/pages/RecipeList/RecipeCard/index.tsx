import {
  Container,
  Thumbnail,
  Title,
  SubTitle,
} from "./style";

type ClickEvent = () => void;

interface CropCardProps {
  thumbnail: string;
  title: string;
  subtitle: string;
  onClick: ClickEvent;
}

const RecipeCard = ({
  thumbnail,
  title,
  subtitle,
  onClick,
}: CropCardProps) => {
  return (
    <Container onClick={onClick}>
      <Thumbnail src={thumbnail} />
      <SubTitle>{subtitle}</SubTitle>
      <Title>{title}</Title>      
    </Container>
  );
};
export default RecipeCard;
