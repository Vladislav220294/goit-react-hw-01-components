import PropTipes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline}) => {
    return ( <li >
  <span class="status" style={isOnline === true ? {backgroundColor:  "green"  } : {backgroundColor:  "red"  } } ></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{ name}</p>
</li> );
}
 FriendListItem.PropTipes = {
     avatar: PropTipes.string.isRequired,
     name: PropTipes.string.isRequired,
     isOnline: PropTipes.bool.isRequired,
     
    }
export default FriendListItem;