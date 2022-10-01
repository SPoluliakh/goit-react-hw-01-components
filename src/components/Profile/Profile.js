import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Image,
  Text,
  InnerWrap,
  List,
  ListItem,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap>
      <InnerWrap>
        <Image src={avatar} alt={username} />
        <Text firstLastName>{username}</Text>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </InnerWrap>

      <List>
        <ListItem>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </ListItem>
        <ListItem>
          <span>Views </span>
          <span>{stats.views}</span>
        </ListItem>
        <ListItem>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </ListItem>
      </List>
    </ProfileWrap>
  );
};
export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
