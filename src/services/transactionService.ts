import { api } from "@/api/api";
import { DEFAULT_TRANSACTION_PAGE } from "@/constants/constants";

export const fetchTransactions = async (page: number = DEFAULT_TRANSACTION_PAGE) => {
    const result = await api.get("/transactions", { params: { page } });
    return result.data;
};
