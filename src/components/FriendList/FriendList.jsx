import PropTypes from 'prop-types';
import { Card, List, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Card key={id}>
            <Status
              className={`status ${isOnline ? 'online' : 'offline'}`}
            ></Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </Card>
        );
      })}
    </List>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
