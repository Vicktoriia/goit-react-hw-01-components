import user from '../Json/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from '../Json/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../Json/friends.json';
import transactions from '../Json/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import './App.css';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
