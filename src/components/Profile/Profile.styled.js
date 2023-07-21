import styled from '@emotion/styled';

export const ProfileStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  width: 300px;
  height: 300px;
  margin-left: 5px;
  margin-top: 10px;
  background-color: ghostwhite;
`;

export const Image = styled.img`
  max-height: 400px;
  width: 150px;
`;

export const UserName = styled.p`
  text-align: center;
  font-weight: 700;
`;

export const Tag = styled.p`
  text-align: center;
  font-weight: 400;
  color: grey;
`;

export const Location = styled.p`
  text-align: center;
  font-weight: 500;
  color: green;
`;

export const Stats = styled.ul`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;
