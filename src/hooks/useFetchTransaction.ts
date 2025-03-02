import { fetchTransactions } from "@/services/transactionService";
import { TransactionResponse } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

function useFetchTransaction(page: number = 1): UseQueryResult<TransactionResponse, Error> {
    return useQuery<TransactionResponse, Error>({
        queryKey: ["transactions", page],
        queryFn: () => fetchTransactions(page),
        staleTime: 1000 * 60 * 2,
        retry: false,
    });
}

export default useFetchTransaction;
