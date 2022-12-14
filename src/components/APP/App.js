import Profile from '../Profile';
import user from '../../FakeApi/user.json';
import data from '../../FakeApi/data.json';
import Statistics from '../Statistics';
import friends from '../../FakeApi/friends.json';
import Friends from '../FriendList';
import TransactionHistory from '../TransactionHistory';
import transactions from '../../FakeApi/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
