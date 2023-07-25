import PropTypes from 'prop-types';
import { FriendListItemStyle, IsOnline } from './FriendListItem.styled';


export const FriendListItem = ({ friends }) => (
      friends?.map(friend => (
        <FriendListItemStyle key={friend.id} className="item">
          <IsOnline className="status" status={friend.isOnline}></IsOnline>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </FriendListItemStyle>
      ))
  );

  FriendListItem.propTypes = {
    items: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline:PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  }