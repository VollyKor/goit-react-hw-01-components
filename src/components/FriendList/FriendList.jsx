import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friendList }) {
  return (
    <ul className={s.list}>
      {friendList.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li key={id} className={s.item}>
            <div className={`status ${isOnline ? s.green : s.red}`}></div>
            <img
              className={s.img}
              src={avatar}
              alt={'avatar of ' + name}
              width="48"
            />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
