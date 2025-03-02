import TableItem from '@/components/Table/TableItem';
import { TableRowsProps, TransactionItem } from '@/types';
import { TableRow } from '@/components/ui/table';
import { NO_TABLE_ROWS_MESSAGE } from '@/constants/constants';

function TableRows({ transactions, noTableRowsMessage = NO_TABLE_ROWS_MESSAGE }: TableRowsProps) {

    if (!transactions) return <h1>{noTableRowsMessage}</h1>

    return (
        <>
            {transactions.map(({ id, date, amount, merchant, category }: TransactionItem) => (
                <TableRow key={id} className="border">
                    <TableItem>{id}</TableItem>
                    <TableItem>{date}</TableItem>
                    <TableItem>£{amount}</TableItem>
                    <TableItem>{merchant}</TableItem>
                    <TableItem>{category}</TableItem>
                </TableRow>
            ))}
        </>
    )
}

export default TableRows;