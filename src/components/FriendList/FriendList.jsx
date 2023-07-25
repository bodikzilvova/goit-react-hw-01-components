import { FriendListUl } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <FriendListUl className="friend-list">
      <FriendListItem key={friends.id} className="item">
      </FriendListItem>
  </FriendListUl>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
}