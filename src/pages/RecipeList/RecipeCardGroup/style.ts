import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 50px;
`;


// interface GridProps {
//   hasOnlyOneItem: boolean;
// }

// export const Grid = styled.div<GridProps>`
//   display: grid;
//   grid-template-columns: repeat(
//     ${(props) => (props.hasOnlyOneItem ? 1 : 2)},
//     1fr
//   );
//   gap: 32px;

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

export const AddCropButton = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px;
  max-width: 292px;
  border-radius: 30px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #F7FBF4;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #40B36E;
`;

export const PaginationContainer = styled.div`
  margin-bottom: 80px;
`;
