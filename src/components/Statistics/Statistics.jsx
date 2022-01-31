import PropTipes from 'prop-types';
import StatisticsItem from '../Statistics/StatisticsItem'

const Statistics = ({ title, stats }) => {
  
    return ( <section class="statistics">
      {title && <h2 class="title">{title }</h2>}  

  <ul class="stat-list" >
        {stats.map(el => <StatisticsItem key={el.id} label={el.label} percentage={el.percentage }/> )}
    
    
  </ul>
</section> );
}
Statistics.PropTipes = {
    title: PropTipes.string,
    stats: PropTipes.arrayOf(PropTipes.object).isRequired,
   
 }
export default Statistics;

