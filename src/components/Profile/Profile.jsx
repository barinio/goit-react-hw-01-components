import PropTypes from 'prop-types';
import {
  Avatar,
  Container,
  Label,
  List,
  ListItem,
  Quantity,
  Section,
  Text,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Section className="profile">
      <Container className="description">
        <Avatar src={avatar} alt={tag} />
        <Text className="name">{username}</Text>
        <Text className="tag">@{tag}</Text>
        <Text className="location">{location}</Text>
      </Container>
      <List className="stats">
        <ListItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </ListItem>
      </List>
    </Section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
