import PropTipes from 'prop-types';
import s from './StatisticsItem.module.css'

const StatisticsItem = ({ id, label, percentage }) => {
  const color = getRandomHexColor();
  return (
    <li key={id} className={s.item} style={{ backgroundColor: color }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};
StatisticsItem.PropTipes = {
  id: PropTipes.string.isRequired,
  label: PropTipes.string.isRequired,
  percentage: PropTipes.string.isRequired,
};
export default StatisticsItem;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
