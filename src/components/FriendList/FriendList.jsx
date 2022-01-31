import PropTipes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem'

const FriendList = ({friends}) => {
    return (<ul class="friend-list"> {friends.map(el => <FriendListItem key={el.id }avatar={el.avatar} name={ el.name} isOnline={ el.isOnline} />)}
  
</ul> );
}
 FriendList.PropTipes = {
     friends: PropTipes.arrayOf(PropTipes.object).isRequired,
     id: PropTipes.string.isRequired,
    }
export default FriendList;