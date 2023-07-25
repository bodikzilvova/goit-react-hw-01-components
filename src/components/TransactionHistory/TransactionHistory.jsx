import { Table, TableHead, TableBody, Item } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table className="transaction-history">
    <TableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHead>
    <TableBody>
      {items.map(item => (
        <Item key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </Item>
      ))}
    </TableBody>
  </Table>
);
