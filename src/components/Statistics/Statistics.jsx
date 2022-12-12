import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = props => {
  const { title, data } = props;
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statlist}>
        {data.map(({ id, label, percentage }) => (
          <li
            className={style.item}
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
