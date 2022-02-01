import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.list}>
      <td className={s.box}>{type}</td>
      <td className={s.box}>{amount}</td>
      <td className={s.box}>{currency}</td>
    </tr>
  );
};
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionItem;
