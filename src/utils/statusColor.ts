import {InvoiceStatus} from "../types/types.ts";

export const statusColor = {
    [InvoiceStatus.Paid]: 'bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200',
    [InvoiceStatus.Pending]: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-800 dark:text-yellow-200',
    [InvoiceStatus.Draft]: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-200',
};