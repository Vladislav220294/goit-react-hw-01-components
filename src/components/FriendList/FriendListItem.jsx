import PropTypes from 'prop-types';
import s from './FriendlListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={
          isOnline === true
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'red' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;