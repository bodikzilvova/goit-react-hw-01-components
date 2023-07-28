
import { FriendListItemStyle, IsOnline } from './FriendListItem.styled';


export const FriendListItem = ({ isOnline, avatar, name }) => (
        <FriendListItemStyle className="item">
          <IsOnline className="status" status={isOnline}></IsOnline>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </FriendListItemStyle>
      );

 