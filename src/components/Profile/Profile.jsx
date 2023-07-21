import {
  ProfileStyle,
  Image,
  UserName,
  Tag,
  Location,
  Stats,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileStyle>
    <div className="description">
      <Image alt="User avatar" className="avatar" src={avatar} />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </div>
    <Stats>
      <li>
        <span className="label">Followers: </span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views: </span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes: </span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </Stats>
  </ProfileStyle>
);
