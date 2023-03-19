import { Profile } from "../components/profile/Profile";
import { Statistics } from "../components/Statistics/Statistics";
import { FriendList } from "../components/friends/FriendList";
import { TransactionHistory } from "../components/Transaction/TransactionHistory";
import {Contaiter, Card} from "./App.styled";

import user from '../json data/user.json'
import data from '../json data/data.json'
import friends from '../json data/friends.json'
import transactions from '../json data/transactions.json'

export const App = () => {
	return (
	  <Contaiter>
	  <Card>
		  <Profile
			username={user.username}
			tag={user.tag}
			location={user.location}
			avatar={user.avatar}
			stats={user.stats}/>
			</Card>
			<div className="statistics-wrapper">
				<Statistics title="Upload stats" stats={data} />
			</div>
			<div className="friends-wrapper">
				<FriendList friends={friends} />
			</div>
			<div className="transaction-wrapper">
				<TransactionHistory items={transactions}/>
			</div>
		</Contaiter>
  );
};