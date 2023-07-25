import PropTypes from 'prop-types';
import { FriendListItem, IsOnline } from './FriendList.styled';


export const FriendListItem = ({ friends }) => (
      friends.map(friend => (
        <FriendListItem key={friend.id} className="item">
          <IsOnline className="status" status={friend.isOnline}></IsOnline>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </FriendListItem>
      ))
  );

  FriendListItem.propTypes = {
    items: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline:PropTypes.boolean.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  }