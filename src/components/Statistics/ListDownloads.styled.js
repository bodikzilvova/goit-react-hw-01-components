import styled from '@emotion/styled';

export const UlDownloads = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  height: 30px;
  padding: 10px;
`;

export const Item = styled.li`
  color: white;
  margin-left: 5px;
  &:first-of-type {
    margin-left: 0px;
  }
`;
