import { FriendListUl } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <FriendListUl className="friend-list">{
    friends.map(friend => (
    <FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} className="item">
    </FriendListItem>)
  )
  }
  </FriendListUl>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};