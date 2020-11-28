import './App.css';
import user from './data/user.json';
import statsData from './data/Statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import SocialProfile from './components/SocialProfile/SocialProfile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
function App() {
  return (
    <>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload Stats" data={statsData} />
      <FriendList friendList={friends} />
      <TransactionHistory transactionList={transactions} />
    </>
  );
}
export default App;
