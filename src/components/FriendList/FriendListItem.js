import PropTypes from 'prop-types';

import {
  FreandListItem,
  Status,
  FriendsFoto,
  FriendsName,
} from './FriendListItem.styled';

const FriendListItems = ({ avatar, name, isOnline }) => {
  return (
    <FreandListItem>
      <Status>{isOnline}</Status>
      <FriendsFoto src={avatar} alt={name} width="58" />
      <FriendsName>{name}</FriendsName>
    </FreandListItem>
  );
};

FriendListItems.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItems;
