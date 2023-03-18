import { Profile } from "./profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./friends/FriendList";
import user from '../json data/user.json'
import data from '../json data/data.json'
import friends from '../json data/friends.json'
import './App.css'

export const App = () => {
	return (
	  <div className="contaiter">
	  <div className="card-wrapper">
		  <Profile
			username={user.username}
			tag={user.tag}
			location={user.location}
			avatar={user.avatar}
			stats={user.stats}/>
			</div>
			<div className="statistics-wrapper">
				<Statistics title="Upload stats" stats={data} />
			</div>
			<div className="friends-wrapper">
				<FriendList friends={friends} />
			</div>
		</div>
  );
};