import PropTipes from 'prop-types';

const TransactionItem = ({id, type, amount, currency}) => {
    return ( <tr key={id} >
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr> );
}
 TransactionItem.PropTipes = {
     id: PropTipes.string.isRequired,
     type: PropTipes.string.isRequired,
     amount: PropTipes.number.isRequired,
     currency: PropTipes.string.isRequired,
    }
export default TransactionItem;