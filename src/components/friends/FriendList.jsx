import { FriendListItem } from "./FriendCard/FriendListItem";
import PropTypes, { number } from "prop-types";

export function FriendList({ friends }) {
	return (
		<ul>
			{friends.map(friend => (
				<FriendListItem key={friend.id} friend={friend}/>
			))}
		</ul>
	)
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}