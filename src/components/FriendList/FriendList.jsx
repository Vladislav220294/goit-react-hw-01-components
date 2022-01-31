import PropTipes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};
FriendList.PropTipes = {
  friends: PropTipes.arrayOf(PropTipes.object).isRequired,
  id: PropTipes.string.isRequired,
};
export default FriendList;
