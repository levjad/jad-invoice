import React from 'react';
import { HeaderProps, InvoiceStatus } from '../types/types.ts';

const Header: React.FC<HeaderProps> = ({ invoiceCount, onFilterChange, onAddInvoice }) => {
    return (
        <div className="mb-8 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold dark:text-white">Invoices</h1>
                <p className="text-gray-600 dark:text-gray-400">{invoiceCount} total invoices</p>
            </div>
            <div className="flex items-center space-x-4">
                <select
                    onChange={(e) => onFilterChange(e.target.value as 'all' | InvoiceStatus)}
                    className="p-2 rounded dark:bg-gray-800 dark:text-white"
                >
                    <option value="all">All</option>
                    <option value={InvoiceStatus.Draft}>Draft</option>
                    <option value={InvoiceStatus.Pending}>Pending</option>
                    <option value={InvoiceStatus.Paid}>Paid</option>
                </select>
                <button
                    onClick={onAddInvoice}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Invoice
                </button>
            </div>
        </div>
    );
};

export default Header;