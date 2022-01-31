import PropTipes from 'prop-types';
import TransactionItem from '../Transaction/TransactionItem';

const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
