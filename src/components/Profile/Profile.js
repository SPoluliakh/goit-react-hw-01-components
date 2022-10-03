import PropTypes from 'prop-types';
import defaultFoto from '../../components/avatar.png';
import { Box } from '../Box';
import { Image, Text, InnerWrap, List, ListItem } from './Profile.styled';

const Profile = ({ username, tag, location, avatar = defaultFoto, stats }) => {
  return (
    <Box
      bg="profile"
      width="360px"
      pt={3}
      mt={5}
      ml="auto"
      mr="auto"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="normal"
      boxShadow="boxShadow"
    >
      <InnerWrap>
        <Image src={avatar ?? defaultFoto} alt={username} />
        <Text firstLastName>{username}</Text>
        <Text>@{tag}</Text>
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
    </Box>
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
