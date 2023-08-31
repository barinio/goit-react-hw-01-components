import PropTypes from 'prop-types';
import { Capiton, Item, Table, TypeColumn } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <Capiton>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Capiton>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Item key={id}>
              <TypeColumn>{type}</TypeColumn>
              <td>{amount}</td>
              <td>{currency}</td>
            </Item>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
