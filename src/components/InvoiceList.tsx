import React from 'react';
import InvoiceItem from './InvoiceItem';
import { InvoiceListProps } from '../types/types.ts';

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices, onItemClick }) => {
    return (
        <div className="space-y-4">
            {invoices.map((invoice) => (
                <InvoiceItem
                    key={invoice.id}
                    invoice={invoice}
                    onClick={() => onItemClick(invoice)}
                />
            ))}
        </div>
    );
};

export default InvoiceList;