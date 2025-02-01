import React from 'react';
import { InvoiceDetailProps } from '../types/types.ts';
import { statusColor } from "../utils/statusColor.ts";

const InvoiceDetail: React.FC<InvoiceDetailProps> = ({ invoice, onEdit, onDelete, onMarkAsPaid, onBack }) => {

    return (
        <div>
            {/* Action Section */}
            <div className="flex justify-between items-center mb-8">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                >
                    ←
                </button>

                {/* Edit, Delete, and Mark as Paid Buttons */}
                <div className="flex space-x-4">
                    <button
                        onClick={onEdit}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                    <button
                        onClick={onMarkAsPaid}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Mark as Paid
                    </button>
                </div>
            </div>

            {/* Invoice Details */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="mb-6 flex gap-6">
                    <h2 className="text-2xl font-bold dark:text-white">Invoice #{invoice.id}</h2>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor[invoice.status]}`}>
                        ● {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                </div>

                <div className="mb-6 flex flex-row justify-between flex-wrap text-gray-600 dark:text-gray-300">
                    <div className="flex flex-col">
                        <span>Due Date</span>
                        <strong>{invoice.dueDate}</strong>
                    </div>
                    <div className="flex flex-col">
                        <span>Send to</span>
                        <strong>{invoice.clientEmail}</strong>
                    </div>
                    <div className="flex flex-col">
                        <span>From</span>
                        <strong>
                            {invoice.fromStreet}<br />
                            {invoice.fromPostalCode}&nbsp;
                            {invoice.fromCity}<br />
                            {invoice.fromCountry}
                        </strong>
                    </div>
                    <div className="flex flex-col">
                        <span>Bill to</span>
                        <strong>{invoice.clientName}</strong>
                        <strong>
                            {invoice.clientStreet}<br />
                            {invoice.clientPostalCode}&nbsp;
                            {invoice.clientCity}<br />
                            {invoice.clientCountry}
                        </strong>
                    </div>
                </div>

                <div className="flex p-8 w-full rounded-lg bg-gray-300 text-gray-500 text-2xl dark:bg-gray-900 justify-between">
                    <span>Total amount</span>
                    <strong>{invoice.amount} €</strong>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetail;