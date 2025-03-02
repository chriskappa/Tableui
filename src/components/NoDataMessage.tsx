import { NoDataMessageProps } from "@/types";

function NoDataMessage({ message }: NoDataMessageProps) {
    return <h1 className="text-red-500 font-bold text-2xl text-center">{message}</h1>
}

export default NoDataMessage;