import TableHeaders from "./TableHeaders";
import TableRows from "./TableRows";
import NoDataMessage from "../NoDataMessage";
import { NO_DATA_MESSAGE } from "@/constants/constants";
import { capitalize, formatDate } from "@/lib/utils";
import { Table, TableHeader, TableRow, TableBody } from "@/components/ui/table";
import { TransactionTableProps } from "@/types";
import { memo } from "react";


function TransactionTable({ transactions, tableHeaders, noDataMessage = NO_DATA_MESSAGE }: TransactionTableProps) {

    const transactionsTableIsEmpty = !transactions.length;

    const formattedTransactions = transactions.map(({ date, category, ...rest }) => ({
        ...rest,
        date: formatDate(date),
        category: capitalize(category),
    }))

    if (transactionsTableIsEmpty) return <NoDataMessage message={noDataMessage} />

    return (
        <Table className="w-full text-sm text-left border-collapse border-2">
            <TableHeader className="bg-gray-100 border-2">
                <TableRow>
                    <TableHeaders tableHeaders={tableHeaders} />
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRows transactions={formattedTransactions} />
            </TableBody>
        </Table>
    )
}

export default memo(TransactionTable, (prevProps, nextProps) => {
    const transactionsPropsAreSame = JSON.stringify(prevProps.transactions) === JSON.stringify(nextProps.transactions);
    const tableHeadersPropsAreSame = JSON.stringify(prevProps.tableHeaders) === JSON.stringify(nextProps.tableHeaders);
    return transactionsPropsAreSame && tableHeadersPropsAreSame;
});