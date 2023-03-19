import PropTypes, { number } from "prop-types";
import { FriendItem, FriendAvatar, UserName } from "./FriendListItem.styled";

export function FriendListItem({ friend }) {
	return (
			<FriendItem>
			<span className="status"></span>
			<FriendAvatar src={friend.avatar} alt="User avatar" width="48" />
			<UserName >{ friend.name }</UserName>
		</FriendItem>	
			)
}
	
FriendListItem.propTypes = {
	friend: PropTypes.arrayOf({
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired,
	})
}