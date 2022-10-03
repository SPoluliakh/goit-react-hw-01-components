import PropTypes from 'prop-types';
import FriendListItems from './FriendListItem';
import { FriendList } from './FriendList.styled';

const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItems
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendList>
  );
};

Friends.prototype = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Friends;
