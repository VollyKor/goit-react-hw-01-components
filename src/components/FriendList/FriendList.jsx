import s from './FriendList.module.css';

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
