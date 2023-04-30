import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} key={id}>
      <span
        className={
          isOnline
            ? `${css.status} ${css.online}`
            : `${css.status} ${css.offline}`
        }
      >
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};