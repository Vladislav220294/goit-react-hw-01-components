import PropTipes from 'prop-types';
import TransactionItem from '../Transaction/TransactionItem';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th className={s.column}>Type</th>
          <th className={s.column}>Amount</th>
          <th className={s.column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.PropTipes = {
  items: PropTipes.arrayOf(PropTipes.object).isRequired,
};

export default TransactionHistory;
