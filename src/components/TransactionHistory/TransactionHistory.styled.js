import styled from '@emotion/styled';

export const Table = styled.table`
  border: 3px solid black;
  margin-left: 5px;
  margin-top: 10px;
  background-color: grey;
  width: 300px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: white;
  font-size: 20px;
  height: 40px;
`;

export const TableBody = styled.tbody`
  font-size: 15px;
  text-align: center;
`;

export const Item = styled.tr`
  border-bottom: 2px solid black;
  height: 40px;
  color: white;
`;
