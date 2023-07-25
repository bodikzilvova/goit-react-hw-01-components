import styled from '@emotion/styled';


export const FriendListItemStyle = styled.li`
  background-color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IsOnline = styled.span`
  width: 5px;
  height: 5px;
  background-color: ${friends => (friends.status ? 'green' : 'red')};
  border-radius: 50%;
  margin-right: 15px;
`;