export type TransactionItem = {
    amount: number,
    category: string,
    date: string,
    id: number,
    merchant: string
};

export type TableHeaderItem = { id: number, label: string };

export type TransactionTableProps = { transactions: TransactionItem[] | [], tableHeaders: TableHeaderItem[], noDataMessage?: string };

export type TableSkeletonProps = { length?: number };

export type TableRowsProps = { transactions?: TransactionItem[], noTableRowsMessage?: string };

export type CapitalizeArg = string;

export type ErrorMessageProps = { message?: string };

export type TransactionResponse = { totalTransactions: number, transactions: TransactionItem[] };

export type TableHeadersProps = { tableHeaders: TableHeaderItem[] };

export type TableItemProps = { children: React.ReactNode };

export type NoDataMessageProps = { message: string };

export type CenteredComponentProps = { children: React.ReactNode };
