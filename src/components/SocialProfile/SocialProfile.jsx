import s from './SocialProfile.module.css';
import PropTypes from 'prop-types';

export default function SocialProfile({
  name,
  tag,
  avatar,
  followers,
  views,
  likes,
  location,
}) {
  return (
    <div className={s.card}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.img} />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

SocialProfile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
  location: PropTypes.string,
};
