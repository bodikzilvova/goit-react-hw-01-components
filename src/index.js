import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendListItem } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import './index.css';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json'
import PropTypes from 'prop-types';
import friends from './components/FriendList/friends.json'
import transacrions from './components/TransactionHistory/transactions.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendListItem friends = {friends} />
    <TransactionHistory items = {transacrions} />
  </React.StrictMode>
);


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}