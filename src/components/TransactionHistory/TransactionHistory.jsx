import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ transactionList }) {
  return (
    <table className={s.table}>
      <thead className={s.th}>
        <tr className={s.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactionList.map(transaction => {
          const { id, type, amount, currency } = transaction;
          return (
            <tr key={id} className={s.tr}>
              <th>{type}</th>
              <th>{amount}</th>
              <th>{currency}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
