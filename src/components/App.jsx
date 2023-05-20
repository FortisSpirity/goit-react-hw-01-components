import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
    return (
        <div
            style={{
                height: '100vh',
                fontSize: 40,
                color: '#010101'
            }}
        >
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
};
