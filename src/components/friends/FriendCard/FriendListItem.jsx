import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendAvatar,
  UserName,
  Status,
} from './FriendListItem.styled';

export function FriendListItem({ friend: { isOnline, avatar, name } }) {
  return (
    <FriendItem>
      <Status isOnline={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
