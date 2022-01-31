import PropTipes from 'prop-types';
import s from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
    return ( <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={s.avatar}
    />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.item}>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div> );
}
 
Profile.PropTipes = {
  username: PropTipes.string.isRequired,
  tag: PropTipes.string.isRequired,
  location: PropTipes.string.isRequired,
  avatar: PropTipes.string.isRequired,
  stats: PropTipes.object.isRequired
}

export default Profile;