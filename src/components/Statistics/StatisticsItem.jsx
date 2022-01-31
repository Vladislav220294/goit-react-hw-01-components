import PropTipes from 'prop-types';

const StatisticsItem = ({id, label, percentage}) => {
    return ( <li key={id} class="item">
          <span class="label">{label }</span>
          <span class="percentage">{percentage }</span>
    </li> );
}
 StatisticsItem.PropTipes = {
   
    id: PropTipes.string.isRequired,
    label: PropTipes.string.isRequired,
    percentage: PropTipes.string.isRequired,
 }
export default StatisticsItem;