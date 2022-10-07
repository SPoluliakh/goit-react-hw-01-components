import Profile from '../Profile';
import user from '../../../src/user.json';
import data from '../../../src/data.json';
import Statistics from '../Statistics';
import friends from '../../../src/friends.json';
import Friends from '../FriendList';
import TransactionHistory from '../TransactionHistory';
import transactions from '../../../src/transactions.json';

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
