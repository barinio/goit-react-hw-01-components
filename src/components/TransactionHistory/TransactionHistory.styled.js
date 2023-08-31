import { styled } from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin: 100px auto;
  box-shadow: 0 0 10px rgb(0, 100, 255);
`;

export const Capiton = styled.thead`
  background-color: rgb(0, 150, 255);
  color: white;
  width: 100%;
  th {
    padding: 15px;
  }
`;

export const Item = styled.tr`
  text-align: center;
  transition-duration: 300ms;
  transition-timing-function: linear;
  td {
    border: 1px solid rgb(0, 150, 211, 0.5);
  }
  &:nth-child(even) {
    background-color: rgb(211, 211, 211, 0.2);
  }
  &:hover {
    background-color: rgb(0, 150, 255, 0.3);
  }
`;
export const TypeColumn = styled.td`
  width: 250px;
  padding: 7px 0;
`;
