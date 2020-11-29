import s from './Statistics.module.css';
import PropTypes from 'prop-types';
const randomColor = () =>
  (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

export default function Statistics({ data, title = '' }) {
  return (
    <section className={s.statistics}>
      {title.length > 0 && <h2 className="title">{title}</h2>}

      <ul className={s.list}>
        {data.map(e => (
          <li
            key={e.id}
            className={s.item}
            style={{ backgroundColor: '#' + randomColor() }}
          >
            <span className="label">{e.label}</span>
            <span className="percentage">{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
  title: PropTypes.string,
};
