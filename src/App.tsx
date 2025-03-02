
import useFetchTransaction from "@/hooks/useFetchTransaction";
import TransactionTable from "@/components/Table/TransactionTable";
import ErrorMessage from "@/components/ErrorMessage";
import TableSkeleton from "@/components/Skeletons/TableSkeleton";
import { TABLE_CONFIG } from "@/configs/TableConfig";
import { DEFAULT_SKELETON_LENGTH, DEFAULT_TRANSACTION_PAGE } from "@/constants/constants";

function App() {
  const { data, isLoading, error } = useFetchTransaction(DEFAULT_TRANSACTION_PAGE);

  if (error) return (
    <div className='h-screen flex justify-center container items-center mx-auto'>
      <ErrorMessage message={error.message} />
    </div>
  )

  if (isLoading) return <TableSkeleton length={DEFAULT_SKELETON_LENGTH} />

  return (
    <div className="px-10">
      <h1 className="text-center text-2xl m-4 font-bold">Expenses</h1>
      <TransactionTable transactions={data?.transactions ?? []} tableHeaders={TABLE_CONFIG.headers} />
    </div>
  )
}

export default App;
