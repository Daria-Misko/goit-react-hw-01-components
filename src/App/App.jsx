import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/friends/FriendList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import { Contaiter, Card } from './App.styled';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Contaiter>
      <Card>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Card>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Contaiter>
  );
};
