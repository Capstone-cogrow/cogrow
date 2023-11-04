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
    <a href="/cropsDetail">
    <Container onClick={onClick}>
      <Thumbnail src={thumbnail} />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
    </a>
  );
};
export default CropCard;
