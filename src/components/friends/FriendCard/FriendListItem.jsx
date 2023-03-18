import PropTypes, { number } from "prop-types";

export function FriendListItem({ friend }) {
	return (
			<li className="item">
			<span className="status"></span>
			<img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
			<p className="name">vkfvbkwbvkjbvs</p>
		</li>	
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