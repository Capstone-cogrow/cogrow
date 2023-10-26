import { Children, ReactNode } from "react";
import { Container } from "./style";

interface GridProps {
  children: ReactNode;
  gap?: number;
  verticalGap?: number;
  horizontalGap?: number;
  columns?: number;
}

const Grid = ({
  children,
  gap,
  verticalGap,
  horizontalGap,
  columns,
}: GridProps) => {
  const childrenCount = Children.count(children);
  let verticalGapValue = verticalGap ?? 0;
  let horizontalGapValue = horizontalGap ?? 0;
  if (gap) {
    verticalGapValue = gap;
    horizontalGapValue = gap;
  }
  return (
    <Container
      verticalGap={verticalGapValue}
      horizontalGap={horizontalGapValue}
      columns={columns ?? childrenCount}
    >
      {children}
    </Container>
  );
};

export default Grid;
