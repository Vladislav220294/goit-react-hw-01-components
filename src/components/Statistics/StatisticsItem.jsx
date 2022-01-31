import PropTipes from 'prop-types';

const StatisticsItem = ({ id, label, percentage }) => {
    const color = getRandomHexColor();
    return ( <li key={id} class="item" style={{backgroundColor : color}}>
          <span class="label">{label }</span>
          <span class="percentage">{percentage }%</span>
    </li> );
}
 StatisticsItem.PropTipes = {
   
    id: PropTipes.string.isRequired,
    label: PropTipes.string.isRequired,
    percentage: PropTipes.string.isRequired,
 }
export default StatisticsItem;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}