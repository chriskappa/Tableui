import { TableCell } from '@/components/ui/table';
import { TableItemProps } from '@/types';

function TableItem({ children }: TableItemProps) {
    return <TableCell className="px-4 py-2 border">{children}</TableCell>
}

export default TableItem;