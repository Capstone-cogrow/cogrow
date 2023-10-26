import { Container, PageButton } from "./style";

type PageClickEvent = (index: number) => void;

interface PaginationProps {
  count: number;
  onPageClick: PageClickEvent;
}

const Pagination = ({ count, onPageClick }: PaginationProps) => {
  return (
    <Container>
      {Array.from(Array(count).keys()).map((index) => (
        <PageButton key={index} onClick={() => onPageClick(index)}>
          {index + 1}
        </PageButton>
      ))}
    </Container>
  );
};

export default Pagination;
