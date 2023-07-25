import { FriendList, List, IsOnline } from './FriendList.styled';

export const FriendListItem = ({ friends }) => (
  <FriendList className="friend-list">
    {friends.map(friend => (
      <List key={friend.id} className="item">
        <IsOnline className="status" status={friend.isOnline}></IsOnline>
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
      </List>
    ))}
  </FriendList>
);
