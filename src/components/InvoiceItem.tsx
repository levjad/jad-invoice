import React from 'react';
import { InvoiceItemProps } from '../types/types.ts';
import {statusColor} from "../utils/statusColor.ts";

const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice, onClick }) => {

    return (
        <div
            onClick={onClick}
            className="grid grid-cols-5 gap-4 items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
            {/* Invoice Number */}
            <div className="font-semibold text-gray-800 dark:text-white">
                #{invoice.id}
            </div>

            {/* Due Date */}
            <div className="text-gray-600 dark:text-gray-300">
                {invoice.dueDate}
            </div>

            {/* Client Name */}
            <div className="text-gray-600 dark:text-gray-300">
                {invoice.clientName}
            </div>

            {/* Amount */}
            <div className="font-semibold text-gray-800 dark:text-white">
                {invoice.amount} €
            </div>

            {/* Status and Arrow */}
            <div className="flex items-center justify-end space-x-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor[invoice.status]}`}>
                  ● {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
                <span className="text-gray-400 dark:text-gray-300">→</span>
            </div>
        </div>
    );
};

export default InvoiceItem;