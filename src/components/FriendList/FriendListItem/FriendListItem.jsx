
import css from './FriendListItem.module.css'
export const FriendListItem = ({ id,avatar,name,isOnline }) => {
  return (
    <li className={css.item} key={id}>
      <span className={css.status}>{isOnline}</span>
      <img
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};
