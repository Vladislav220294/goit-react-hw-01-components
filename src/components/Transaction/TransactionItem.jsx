import PropTipes from 'prop-types';
import s from './TransactionItem.module.css';

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr className={s.list} key={id}>
      <td className={s.box}>{type}</td>
      <td className={s.box}>{amount}</td>
      <td className={s.box}>{currency}</td>
    </tr>
  );
};
TransactionItem.PropTipes = {
  id: PropTipes.string.isRequired,
  type: PropTipes.string.isRequired,
  amount: PropTipes.number.isRequired,
  currency: PropTipes.string.isRequired,
};
export default TransactionItem;
