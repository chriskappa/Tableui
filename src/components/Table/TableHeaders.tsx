import { TableHeaderItem, TableHeadersProps } from '@/types';
import { TableHead } from '@/components/ui/table';

function TableHeaders({ tableHeaders }: TableHeadersProps) {
    return (
        <>
            {tableHeaders.map(({ id, label }: TableHeaderItem) =>
                <TableHead key={id} className="px-4 py-2 border text-black font-bold">
                    {label}
                </TableHead>)
            }
        </>
    )
}

export default TableHeaders