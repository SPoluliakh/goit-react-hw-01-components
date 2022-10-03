import Profile from '../Profile/Profile';
import user from '../../../src/user.json';
import data from '../../../src/data.json';
import Statistics from '../Statistics/Statistics';
import friends from '../../../src/friends.json';
import Friends from '../FriendList/FriendList';

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
    </>
  );
}

export default App;
