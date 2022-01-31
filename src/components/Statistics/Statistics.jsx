import PropTipes from 'prop-types';
import StatisticsItem from '../Statistics/StatisticsItem';
import s from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(el => (
          <StatisticsItem
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
Statistics.PropTipes = {
  title: PropTipes.string,
  stats: PropTipes.arrayOf(PropTipes.object).isRequired,
};
export default Statistics;
