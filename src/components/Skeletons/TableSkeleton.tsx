
import { Skeleton } from "@/components/ui/skeleton";
import { TableSkeletonProps } from "@/types";

const TableSkeleton = ({ length = 5 }: TableSkeletonProps) => {
    return (
        <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
            {/* Headers */}
            <div className="bg-gray-100 p-3 flex justify-between">
                <Skeleton className="h-6 w-1/6" />
                <Skeleton className="h-6 w-1/6 " />
                <Skeleton className="h-6 w-1/6 ml-4" />
                <Skeleton className="h-6 w-1/6 ml-4" />
                <Skeleton className="h-6 w-1/6 ml-4" />
            </div>

            {/* Rows */}
            <div className="space-y-2 p-3">
                {Array.from({ length }).map((_, index) => (
                    <div key={index} className="flex items-center justify-between  space-y-2">
                        <Skeleton className="h-4 w-1/6" />
                        <Skeleton className="h-4 w-1/6" />
                        <Skeleton className="h-4 w-1/6" />
                        <Skeleton className="h-4 w-1/6" />
                        <Skeleton className="h-4 w-1/6" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableSkeleton;
