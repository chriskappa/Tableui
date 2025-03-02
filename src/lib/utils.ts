import { CapitalizeArg } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (unFormatedDate: string) => {
  const date = new Date(unFormatedDate);
  const formattedDate = `${date.getUTCHours().toString().padStart(2, "0")}:` +
    `${date.getUTCMinutes().toString().padStart(2, "0")} - ` +
    `${date.getUTCDate().toString().padStart(2, "0")}/` +
    `${(date.getUTCMonth() + 1).toString().padStart(2, "0")}/` +
    `${date.getUTCFullYear()}`;

  return formattedDate;
}

export const capitalize = (str: CapitalizeArg) => str.charAt(0).toUpperCase() + str.slice(1);
