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

const CropCard = ({
  thumbnail,
  title,
  subtitle,
  onClick,
}: CropCardProps) => {
  return (
    <Container onClick={onClick}>
      <Thumbnail src={thumbnail} />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};
export default CropCard;
