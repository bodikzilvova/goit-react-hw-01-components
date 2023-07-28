import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import './index.css';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json'
import friends from './components/FriendList/friends.json'
import transacrions from './components/TransactionHistory/transactions.json'


const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={containerStyles}>
       <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends = {friends} />
    <TransactionHistory items = {transacrions} />
    </div>
  </React.StrictMode>
);
