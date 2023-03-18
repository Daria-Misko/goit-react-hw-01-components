import { Profile } from "./profile/Profile";
import user from '../user.json'
import './App.css'

export const App = () => {
	return (
	  <section className="contaiter">
	  <div className="card-wrapper">
		  <Profile
			username={user.username}
			tag={user.tag}
			location={user.location}
			avatar={user.avatar}
			stats={user.stats}/>
	 </div>
	 </section>
  );
};