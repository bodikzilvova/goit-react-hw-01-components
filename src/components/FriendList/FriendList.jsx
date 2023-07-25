import { FriendListUl, FriendListItem, IsOnline } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <FriendListUl className="friend-list">
    {friends.map(friend => (
      <FriendListItem key={friend.id} className="item">
        <IsOnline className="status" status={friend.isOnline}></IsOnline>
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
      </FriendListItem>
    ))}
  </FriendListUl>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
}