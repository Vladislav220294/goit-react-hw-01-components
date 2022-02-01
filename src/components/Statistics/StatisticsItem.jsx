import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

const StatisticsItem = ({ label, percentage }) => {
  const color = getRandomHexColor();
  return (
    <li className={s.item} style={{ backgroundColor: color }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticsItem;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
