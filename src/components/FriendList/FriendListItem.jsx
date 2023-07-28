import { FriendListItemStyle, IsOnline } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ isOnline, avatar, name }) => (
  <FriendListItemStyle className="item">
    <IsOnline className="status" status={isOnline}></IsOnline>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </FriendListItemStyle>
);

FriendListItem.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
